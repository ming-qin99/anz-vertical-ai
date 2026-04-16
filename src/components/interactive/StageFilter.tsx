"use client";

import { cn } from "@/lib/utils";

interface StageFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

const stages = [
  "all",
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series G",
  "Late",
  "Acquired",
  "ASX listed",
];

export default function StageFilter({ selected, onChange }: StageFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stages.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={cn(
            "rounded-full border px-3 py-1.5 font-sans text-[0.68rem] transition-colors",
            selected === s
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card text-foreground-secondary hover:border-foreground-muted"
          )}
        >
          {s === "all" ? "All stages" : s}
        </button>
      ))}
    </div>
  );
}
