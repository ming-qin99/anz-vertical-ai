export type VerticalKey =
  | "health"
  | "resources"
  | "legal"
  | "fintech"
  | "workforce"
  | "cx"
  | "property"
  | "defence"
  | "creative"
  | "logistics";

export type MoatType = "data" | "regulatory" | "workflow" | "domain";

export const sectorLabels: Record<VerticalKey, string> = {
  health: "Healthcare AI",
  resources: "Resources & AgTech",
  legal: "Legal & Compliance",
  fintech: "Fintech AI",
  workforce: "Workforce & HR",
  cx: "Customer & CX",
  property: "Property & Construction",
  defence: "Defence & Sovereign",
  creative: "Creative & Design",
  logistics: "Logistics & Supply Chain",
};

export const sectorColors: Record<VerticalKey, string> = {
  health: "#1D9E75",
  resources: "#BA7517",
  legal: "#7F77DD",
  fintech: "#378ADD",
  workforce: "#D4537E",
  cx: "#D85A30",
  property: "#888780",
  defence: "#534AB7",
  creative: "#639922",
  logistics: "#854F0B",
};

export const moatLabels: Record<MoatType, string> = {
  data: "Data Flywheel",
  regulatory: "Regulatory",
  workflow: "Workflow",
  domain: "Domain Model",
};

export const moatColors: Record<MoatType, { bg: string; text: string; darkBg: string; darkText: string }> = {
  data: { bg: "#E6F1FB", text: "#0C447C", darkBg: "#042C53", darkText: "#B5D4F4" },
  regulatory: { bg: "#E1F5EE", text: "#085041", darkBg: "#04342C", darkText: "#9FE1CB" },
  workflow: { bg: "#EEEDFE", text: "#3C3489", darkBg: "#26215C", darkText: "#CECBF6" },
  domain: { bg: "#FAEEDA", text: "#633806", darkBg: "#412402", darkText: "#FAC775" },
};

export const pillarVerticals: Record<string, VerticalKey[]> = {
  diagnose: ["health"],
  extract: ["resources"],
  comply: ["legal", "fintech"],
  operate: ["workforce", "cx", "logistics"],
  defend: ["defence"],
  create: ["creative"],
};

export interface Pillar {
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  verticals: VerticalKey[];
}

export const pillars: Pillar[] = [
  {
    slug: "diagnose",
    number: "01",
    name: "Diagnose",
    subtitle: "Healthcare AI",
    description:
      "AI to detect disease earlier, reduce clinician burden, and shift healthcare from reactive sick-care to proactive care.",
    verticals: ["health"],
  },
  {
    slug: "extract",
    number: "02",
    name: "Extract",
    subtitle: "Resources, Energy & AgTech",
    description:
      "Replacing human observation with machine intelligence in mining, energy, and agriculture across harsh environments.",
    verticals: ["resources"],
  },
  {
    slug: "comply",
    number: "03",
    name: "Comply",
    subtitle: "Legal, Compliance & Financial Services",
    description:
      "Where regulation is the moat. AI at the intersection of compliance, trust, and regulatory approval.",
    verticals: ["legal", "fintech"],
  },
  {
    slug: "operate",
    number: "04",
    name: "Operate",
    subtitle: "Workforce, CX & Operations",
    description:
      "Replacing human-seat SaaS with AI agents, transforming hiring, customer service, and daily operations.",
    verticals: ["workforce", "cx", "logistics"],
  },
  {
    slug: "defend",
    number: "05",
    name: "Defend",
    subtitle: "Defence, Cyber & Sovereign Tech",
    description:
      "AUKUS and sovereign capability requirements creating a generational investment opportunity in national security AI.",
    verticals: ["defence"],
  },
  {
    slug: "create",
    number: "06",
    name: "Create",
    subtitle: "Creative Tools & Brand Infrastructure",
    description:
      "AI-powered platforms enabling creation, measurement, and distribution at scale, defended by network effects.",
    verticals: ["creative"],
  },
];
