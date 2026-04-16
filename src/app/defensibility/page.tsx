import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import MoatTag from "@/components/content/MoatTag";
import { defensibilityScores, moatArchetypes } from "@/data/defensibility";

export const metadata: Metadata = {
  title: "The Defensibility Framework | The State of ANZ Verticalised AI",
};

const dimLabels: Record<string, string> = {
  data: "Data flywheel",
  regulatory: "Regulatory lock-in",
  workflow: "Workflow embed",
  domain: "Domain model",
};

const dimColors: Record<string, string> = {
  data: "#378ADD",
  regulatory: "#1D9E75",
  workflow: "#7F77DD",
  domain: "#D85A30",
};

const sorted = [...defensibilityScores].sort(
  (a, b) =>
    b.data + b.regulatory + b.workflow + b.domain -
    (a.data + a.regulatory + a.workflow + a.domain)
);

export default function DefensibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          The Defensibility Framework
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          Not all moats are created equal. We identified four distinct
          defensibility archetypes. The strongest companies layer multiple
          patterns.
        </p>
      </header>

      {/* Moat Archetype Cards */}
      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        {moatArchetypes.map((arch) => (
          <div
            key={arch.name}
            className="rounded-xl border border-border bg-card p-5"
            style={{ borderTopWidth: 3, borderTopColor: arch.color }}
          >
            <h3 className="mb-2 font-sans text-sm font-semibold">
              {arch.name}
            </h3>
            <p className="mb-3 text-[0.8rem] leading-relaxed text-foreground-secondary">
              {arch.description}
            </p>
            <p className="text-[0.72rem] text-foreground-muted">
              <strong>Best examples:</strong> {arch.examples}
            </p>
          </div>
        ))}
      </div>

      {/* Wrapper vs Wedge */}
      <SectionHeader>The &ldquo;Wrapper vs. Wedge&rdquo; Test</SectionHeader>

      <p className="mb-5">
        The biggest risk in vertical AI is building a thin wrapper on a
        foundation model that OpenAI or Anthropic can replicate by adding a
        system prompt. The State of Startup Funding report puts it bluntly:
        &ldquo;AI has lowered the bar to start a business and sped up
        development, so competition has intensified across the board. This shift
        makes early traction less meaningful.&rdquo;
      </p>

      <div className="my-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-2 font-sans text-xs font-semibold uppercase tracking-wide text-foreground-muted">
            Wrapper (fragile)
          </div>
          <p className="text-sm leading-relaxed text-foreground-secondary">
            AI chatbot that answers legal questions using GPT. No proprietary
            data, no workflow integration, easily replicated.
          </p>
        </div>
        <div className="rounded-lg border border-accent bg-accent-light p-4">
          <div className="mb-2 font-sans text-xs font-semibold uppercase tracking-wide text-accent">
            Wedge (durable)
          </div>
          <p className="text-sm leading-relaxed text-foreground-secondary">
            Lyrebird Health starts as an AI scribe → integrates into EMR →
            captures clinical data → enables billing optimisation → becomes
            impossible to remove. Each layer adds switching cost.
          </p>
        </div>
      </div>

      <p className="mb-5">
        The key test: does the company get more valuable with each interaction,
        or is each interaction independent? Compounding beats transaction. As the
        report notes: &ldquo;The companies that stand out will show a credible
        path to sustained differentiation and retention, not just a demo powered
        by the latest model.&rdquo;
      </p>

      {/* Defensibility Scoring */}
      <SectionHeader>Defensibility Scoring by Vertical</SectionHeader>

      <p className="mb-5 text-sm text-foreground-secondary">
        Scored 1–5 on each moat dimension. Verticals with the highest aggregate
        score are most attractive for long-term investment.
      </p>

      <div className="mb-8 space-y-3">
        {sorted.map((d) => {
          const total = d.data + d.regulatory + d.workflow + d.domain;
          return (
            <div
              key={d.vertical}
              className="rounded-lg border border-border p-4"
              style={{ borderLeftWidth: 3, borderLeftColor: d.color }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-sans text-sm font-medium">
                  {d.vertical}
                </span>
                <span className="font-sans text-xs text-foreground-muted">
                  {total}/20
                </span>
              </div>
              {(["data", "regulatory", "workflow", "domain"] as const).map(
                (dim) => {
                  const val = d[dim as keyof typeof d] as number;
                  const pct = (val / 5) * 100;
                  return (
                    <div
                      key={dim}
                      className="mb-1 flex items-center gap-2"
                    >
                      <span className="w-24 text-right font-sans text-[0.68rem] text-foreground-muted">
                        {dimLabels[dim]}
                      </span>
                      <div className="h-2 flex-1 rounded-full bg-highlight">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: dimColors[dim],
                            opacity: 0.7,
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </div>

      {/* Moat Layering Insight */}
      <Callout>
        <p>
          <strong>The Moat Layering Insight:</strong> The most valuable ANZ
          vertical AI companies aren&apos;t defended by a single moat — they
          layer multiple patterns. Harrison.ai combines proprietary data (JV with
          major hospital networks) + regulatory lock-in (12 FDA clearances) +
          domain-specific models (120+ clinical findings). This creates
          compounding defensibility that makes it nearly impossible for horizontal
          AI companies to compete.
        </p>
        <p className="mt-3">
          <strong>Key investor question:</strong> Does this company have a moat
          that gets <em>wider</em> over time, or one that erodes as foundation
          models improve? Proprietary data flywheels and regulatory lock-in get
          wider. Domain-specific model advantages can erode. Workflow embedding is
          durable but can be disrupted by platform shifts.
        </p>
      </Callout>

      <div className="mt-10 flex gap-3">
        <Link
          href="/diagnose"
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Start with Pillar 01: Diagnose &rarr;
        </Link>
      </div>
    </div>
  );
}
