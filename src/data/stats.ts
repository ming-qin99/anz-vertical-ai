export interface Stat {
  value: string;
  label: string;
  note?: string;
}

export const heroStats: Stat[] = [
  { value: "$5.4B", label: "Total AU startup funding", note: "390 deals, 31% YoY increase" },
  { value: "61%", label: "AI share of all capital", note: "of $5.4B total AU startup capital" },
  { value: "$1.9B", label: "AI app layer funding", note: "198 deals at application layer" },
  { value: "390", label: "Total deals in 2025", note: "3rd largest funding year on record" },
];

export const stageDistribution = [
  { label: "Pre-seed / Seed", count: 14 },
  { label: "Series A", count: 13 },
  { label: "Series B", count: 11 },
  { label: "Series C+", count: 10 },
  { label: "Late / Acquired", count: 7 },
];
