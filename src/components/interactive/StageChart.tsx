"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { type Company } from "@/data/companies";

interface StageChartProps {
  companies: Company[];
}

const stageBuckets: { label: string; match: (s: string) => boolean; color: string }[] = [
  { label: "Pre-seed / Seed", match: (s) => s === "Pre-seed" || s === "Seed", color: "#85B7EB" },
  { label: "Series A", match: (s) => s === "Series A", color: "#5DCAA5" },
  { label: "Series B", match: (s) => s === "Series B" || s === "Series D", color: "#7F77DD" },
  { label: "Series C+", match: (s) => s === "Series C" || s === "Series G", color: "#D85A30" },
  { label: "Late / Acquired", match: (s) => s === "Late" || s === "Acquired" || s === "ASX listed", color: "#FAC775" },
];

export default function StageChart({ companies }: StageChartProps) {
  const data = stageBuckets.map((b) => ({
    name: b.label,
    value: companies.filter((c) => b.match(c.stage)).length,
    color: b.color,
  })).filter((d) => d.value > 0);

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-3 font-sans text-sm font-medium">
        Funding stage distribution
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            strokeWidth={0}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
          <Legend
            iconType="square"
            iconSize={10}
            wrapperStyle={{ fontSize: 11 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
