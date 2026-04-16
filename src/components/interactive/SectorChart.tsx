"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { type Company } from "@/data/companies";
import { sectorLabels, sectorColors, type VerticalKey } from "@/data/sectors";

interface SectorChartProps {
  companies: Company[];
}

export default function SectorChart({ companies }: SectorChartProps) {
  const counts: Record<string, number> = {};
  companies.forEach((c) => {
    counts[c.vertical] = (counts[c.vertical] || 0) + 1;
  });

  const data = Object.keys(sectorLabels)
    .map((k) => ({
      key: k,
      name: sectorLabels[k as VerticalKey],
      count: counts[k] || 0,
      color: sectorColors[k as VerticalKey],
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-3 font-sans text-sm font-medium">
        Companies by vertical
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" margin={{ left: 100, right: 16 }}>
          <XAxis type="number" tick={{ fontSize: 11 }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11 }}
            width={100}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((d) => (
              <Cell key={d.key} fill={d.color + "99"} stroke={d.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
