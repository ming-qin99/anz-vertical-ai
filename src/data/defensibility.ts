export interface DefensibilityScore {
  vertical: string;
  data: number;
  regulatory: number;
  workflow: number;
  domain: number;
  color: string;
}

export const defensibilityScores: DefensibilityScore[] = [
  { vertical: "Healthcare AI", data: 5, regulatory: 5, workflow: 4, domain: 5, color: "#1D9E75" },
  { vertical: "Resources & AgTech", data: 4, regulatory: 3, workflow: 3, domain: 5, color: "#BA7517" },
  { vertical: "Legal & Compliance", data: 3, regulatory: 5, workflow: 4, domain: 4, color: "#7F77DD" },
  { vertical: "Defence & Sovereign", data: 3, regulatory: 5, workflow: 3, domain: 4, color: "#534AB7" },
  { vertical: "Fintech AI", data: 4, regulatory: 4, workflow: 4, domain: 3, color: "#378ADD" },
  { vertical: "Logistics & Supply Chain", data: 4, regulatory: 2, workflow: 5, domain: 3, color: "#854F0B" },
  { vertical: "Workforce & HR", data: 4, regulatory: 3, workflow: 4, domain: 3, color: "#D4537E" },
  { vertical: "Property & Construction", data: 3, regulatory: 3, workflow: 4, domain: 4, color: "#888780" },
  { vertical: "Customer & CX", data: 3, regulatory: 2, workflow: 4, domain: 3, color: "#D85A30" },
  { vertical: "Creative & Design", data: 3, regulatory: 1, workflow: 3, domain: 3, color: "#639922" },
];

export const moatArchetypes = [
  {
    name: "Proprietary Data Flywheel",
    color: "#378ADD",
    description:
      "The company generates or accesses unique datasets no competitor can replicate, and every new customer makes the AI better. This is the strongest moat — it compounds over time and is extremely hard to reverse-engineer.",
    examples:
      "Harrison.ai (JV with I-MED/Sonic), Heidi Health (millions of interactions weekly), SafetyCulture (600M+ inspections/year), Neara (utility network 3D digital twins across 15 countries)",
  },
  {
    name: "Regulatory & Compliance Lock-in",
    color: "#1D9E75",
    description:
      "Operating in regulated industries where AI products need certifications that take years to obtain. Competitors can't just build a better model — they need regulatory approval.",
    examples:
      "Harrison.ai (12 FDA clearances, 40-country approval), 6clicks (GRC automation), Q-CTRL (defence requirements), Eyeonic (medical-grade diagnostics)",
  },
  {
    name: "Workflow Embedding",
    color: "#7F77DD",
    description:
      "The AI embeds so deeply into mission-critical workflows that ripping it out is operationally devastating. Switching costs are measured in weeks of retraining and compliance risk.",
    examples:
      "Lyrebird Health (EMR integration), Lorikeet (Stripe/Shopify backend), Buildxact (builder estimating), Employment Hero (end-to-end HR/payroll)",
  },
  {
    name: "Domain-Specific Model Advantage",
    color: "#D85A30",
    description:
      "Rather than using generic LLMs, these companies train models on industry-specific data where general-purpose AI performs poorly. Domain knowledge is baked into model weights, not prompts.",
    examples:
      "Isaacus (legal foundation models), EARTH AI (geological ML), Annalise.ai/Harrison.ai (120+ findings), Fleet Space (satellite data)",
  },
];
