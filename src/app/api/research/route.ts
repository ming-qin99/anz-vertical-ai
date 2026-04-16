export const runtime = "nodejs";

const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

interface SerperResult {
  title: string;
  link: string;
  snippet: string;
}

interface SerperResponse {
  organic?: SerperResult[];
  knowledgeGraph?: {
    title?: string;
    description?: string;
    attributes?: Record<string, string>;
  };
}

async function searchGoogle(query: string): Promise<SerperResponse> {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "X-API-KEY": SERPER_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ q: query, num: 8 }),
  });
  if (!res.ok) throw new Error(`Serper error: ${res.status}`);
  return res.json();
}

function formatResults(results: SerperResponse): string {
  const lines: string[] = [];
  if (results.knowledgeGraph) {
    const kg = results.knowledgeGraph;
    if (kg.title) lines.push(`Knowledge Graph: ${kg.title}`);
    if (kg.description) lines.push(kg.description);
    if (kg.attributes) {
      for (const [k, v] of Object.entries(kg.attributes)) {
        lines.push(`${k}: ${v}`);
      }
    }
    lines.push("");
  }
  if (results.organic) {
    for (const r of results.organic) {
      lines.push(`[${r.title}](${r.link})`);
      lines.push(r.snippet);
      lines.push("");
    }
  }
  return lines.join("\n");
}

async function callClaude(system: string, user: string, maxTokens = 4000): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API error (${res.status}): ${err}`);
  }

  const data = await res.json();
  return (
    data.content
      ?.filter((b: { type: string }) => b.type === "text")
      ?.map((b: { text: string }) => b.text)
      ?.join("") || ""
  );
}

export async function POST(request: Request) {
  if (!SERPER_API_KEY || !ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "API keys not configured. Add SERPER_API_KEY and ANTHROPIC_API_KEY to .env.local" },
      { status: 500 }
    );
  }

  const { startup } = await request.json();
  if (!startup || typeof startup !== "string" || startup.trim().length === 0) {
    return Response.json({ error: "Startup name is required" }, { status: 400 });
  }

  const name = startup.trim();

  // ── Phase 1: Initial broad search ──
  const coreQueries = [
    `"${name}" startup company overview what does it do`,
    `"${name}" founders CEO background team leadership`,
    `"${name}" startup product technology platform`,
    `"${name}" startup funding raised investors valuation`,
    `"${name}" startup traction revenue customers growth`,
    `"${name}" site:linkedin.com company`,
  ];

  let phase1Context: string;
  try {
    const coreResults = await Promise.all(coreQueries.map(searchGoogle));
    const sections = [
      "## Company Overview",
      formatResults(coreResults[0]),
      "## Founders & Team",
      formatResults(coreResults[1]),
      "## Product & Technology",
      formatResults(coreResults[2]),
      "## Funding & Investors",
      formatResults(coreResults[3]),
      "## Traction & Growth",
      formatResults(coreResults[4]),
      "## LinkedIn",
      formatResults(coreResults[5]),
    ];
    phase1Context = sections.join("\n\n");
  } catch (e) {
    return Response.json(
      { error: `Search failed: ${e instanceof Error ? e.message : "Unknown error"}` },
      { status: 500 }
    );
  }

  // ── Phase 2: LLM interprets raw data and generates follow-up queries ──
  let interpretation: string;
  let followUpQueries: string[];
  try {
    const interpretationRaw = await callClaude(
      `You are a VC research analyst. You interpret raw search results and extract structured facts. You also identify what information is missing and generate targeted search queries to fill the gaps.`,
      `I searched for the startup "${name}" and got these raw results:

${phase1Context}

Do two things:

1. Write a structured interpretation of what you've learned. Use this format:
COMPANY: [one-line description]
INDUSTRY: [specific industry/vertical]
PRODUCT: [what they build, in one sentence]
FOUNDERS: [names and backgrounds found]
STAGE: [funding stage]
GEOGRAPHY: [HQ and markets]
REGULATORY_RELEVANT: [yes/no — is this an industry where regulation, compliance, or government approval is a significant factor?]

2. Generate exactly 6 follow-up search queries to fill gaps. Return them as a JSON array on a single line after the label QUERIES:

The queries should cover:
- Founder prior companies/exits/track record (search each founder by name if known)
- Market size for the specific industry they're in (e.g. "AI medical scribe market size TAM" not generic "healthtech market")
- Competitors based on what the product actually does (e.g. "AI radiology diagnostic tools companies" not "${name} competitors")
- Recent news or developments in the last 12 months
- If REGULATORY_RELEVANT is yes: relevant regulatory landscape, approvals, compliance requirements for their specific industry
- If REGULATORY_RELEVANT is no: instead search for go-to-market or business model details

Keep each query under 12 words. Make them specific enough to return useful results.`,
      1500
    );

    interpretation = interpretationRaw;

    // Extract the QUERIES JSON line
    const queriesMatch = interpretationRaw.match(/QUERIES:\s*(\[.*\])/);
    if (queriesMatch) {
      followUpQueries = JSON.parse(queriesMatch[1]);
    } else {
      // Fallback queries
      followUpQueries = [
        `"${name}" founder previous startup exit track record`,
        `"${name}" market size TAM industry`,
        `"${name}" alternatives competitors vs`,
        `"${name}" news 2024 2025 announcement`,
        `"${name}" business model pricing customers`,
        `"${name}" regulatory compliance approval`,
      ];
    }
  } catch (e) {
    return Response.json(
      { error: `Analysis failed: ${e instanceof Error ? e.message : "Unknown error"}` },
      { status: 500 }
    );
  }

  // ── Phase 3: Targeted follow-up searches ──
  let phase2Context: string;
  try {
    const followUpResults = await Promise.all(
      followUpQueries.slice(0, 6).map(searchGoogle)
    );
    const sections = followUpResults.map(
      (r, i) => `## Follow-up: ${followUpQueries[i]}\n${formatResults(r)}`
    );
    phase2Context = sections.join("\n\n");
  } catch (e) {
    return Response.json(
      { error: `Follow-up search failed: ${e instanceof Error ? e.message : "Unknown error"}` },
      { status: 500 }
    );
  }

  // ── Phase 4: Final report with all enriched data ──
  try {
    const report = await callClaude(
      `You are a venture capital research analyst preparing a due diligence brief. You write in a direct, analytical style — no fluff, no hedging. You structure findings clearly and flag both strengths and risks.

When information is not available, say so explicitly rather than speculating. Cite sources by referencing URLs where possible.

Assess the startup through a VC lens: Is this fundable? What are the moats? What are the risks?

You are writing on behalf of Ming Qin, who has developed an opinionated defensibility framework for verticalised AI companies. The framework argues that in vertical AI, the moat is never the model — it's what surrounds the model. Generic AI wrappers will get commoditised. The companies that survive are the ones building defensibility through one or more of these layers:

- **Proprietary Data Flywheel**: The company generates or accesses unique datasets no competitor can replicate, and every new customer makes the AI better. This is the strongest moat — it compounds over time and is extremely hard to reverse-engineer.
- **Regulatory & Compliance Lock-in**: The company operates in regulated industries where certifications take years to obtain. Competitors can't just build a better model — they need regulatory approval first. This is a slow-burn moat but nearly impossible to shortcut.
- **Workflow Embedding**: The AI is embedded so deeply into mission-critical workflows that ripping it out would be operationally devastating. Switching costs are measured in weeks of retraining and compliance risk, not dollars.
- **Domain-Specific Model Advantage**: Rather than wrapping generic LLMs, the company trains models on industry-specific data where general-purpose AI performs poorly. The knowledge is baked into model weights, not prompts — this is the difference between a thin wrapper and a real product.

The strongest verticalised AI companies layer multiple moat types. A single moat can be eroded; stacked moats compound. Be direct and opinionated in the assessment — don't hedge.

Format in markdown with clear section headers.`,

      `Produce a comprehensive VC due diligence brief on "${name}".

You have three sources of information:

### LLM Interpretation of Initial Research
${interpretation}

### Initial Search Results
${phase1Context}

### Targeted Follow-up Search Results
${phase2Context}

Structure your report exactly as follows:

# ${name} — Due Diligence Brief

## Executive Summary
2-3 sentences. What does this company do, why does it matter, and is it investable?

## Team & Leadership
Founders and their backgrounds. Prior exits, relevant domain experience, track record. Key hires. Team strength assessment — is this the right team to win this market?

## Product & Technology
What they build, how it works, what's technically differentiated. Where are they on the build-vs-buy spectrum? What's proprietary?

## Market Opportunity
What specific market are they in? What is the estimated TAM/SAM? What are the growth drivers? Where do they sit in the value chain? Is this a winner-take-all or fragmented market?

## Traction & Growth
Revenue signals, customer count, growth rate, key partnerships. What stage of product-market fit are they at?

## Funding & Investors
All known rounds, amounts, lead investors, valuation. Notable investor signals (tier of investors, follow-on patterns).

## Competitive Landscape
Direct competitors (same product), indirect competitors (different approach to same problem), and adjacent players who could enter. For each, explain how ${name} differentiates. Use a brief comparison format.

## Defensibility in Verticalised AI
This is the opinionated part. The moat is never the model — it's what surrounds it. Rate this company on each dimension (Strong / Moderate / Weak / Not Applicable):
- **Proprietary Data Flywheel** — Are they generating unique data that compounds? Or could a competitor train on the same public datasets?
- **Regulatory & Compliance Lock-in** — Do they have approvals that take years to get? Or is there no regulatory barrier at all?
- **Workflow Embedding** — Is ripping this out operationally devastating? Or is it a nice-to-have tool that could be swapped in a week?
- **Domain-Specific Model Advantage** — Are they training specialised models, or wrapping GPT-4 with a prompt?

Be blunt. If this is a thin AI wrapper with no real moat, say so. If it's deeply defensible, explain exactly why. Which archetype fits best? Are they stacking moats or relying on a single one? How durable is this in 3-5 years?

## Regulatory & Geographic Context
Only include this section if regulation, compliance, or government approvals are relevant to this company's industry. If so, cover: what approvals they need, what they have, and how this affects competitive dynamics. If regulation is not a factor in their industry, skip this section entirely.

## Key Risks
Top 3-5 risks. Be specific — not generic risks that apply to all startups, but risks specific to this company, team, market, or technology.

## Sources
List the most useful URLs from the search results.`,
      5000
    );

    return new Response(report, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (e) {
    return Response.json(
      { error: `Report generation failed: ${e instanceof Error ? e.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
