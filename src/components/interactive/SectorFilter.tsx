"use client";

import { sectorLabels, type VerticalKey } from "@/data/sectors";
import { cn } from "@/lib/utils";

interface SectorFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

const options: { value: string; label: string }[] = [
  { value: "all", label: "All verticals" },
  ...Object.entries(sectorLabels).map(([k, v]) => ({ value: k, label: v })),
];

export default function SectorFilter({ selected, onChange }: SectorFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-full border px-3 py-1.5 font-sans text-[0.68rem] transition-colors",
            selected === opt.value
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card text-foreground-secondary hover:border-foreground-muted"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
