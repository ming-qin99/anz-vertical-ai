"use client";

import { useState } from "react";
import { type Company } from "@/data/companies";
import { sectorColors, sectorLabels, moatColors, moatLabels, type MoatType } from "@/data/sectors";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const [open, setOpen] = useState(false);
  const color = sectorColors[company.vertical];

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground-muted"
      style={open ? { borderColor: "var(--fg3)" } : undefined}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-sans text-sm font-medium"
          style={{ backgroundColor: color + "22", color }}
        >
          {company.name.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-sans text-sm font-medium">{company.name}</div>
          <div className="mt-0.5 text-[0.72rem] leading-snug text-foreground-secondary">
            {company.description}
          </div>

          {/* Pills */}
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="inline-block rounded-full px-2 py-0.5 text-[0.62rem] font-medium"
              style={{ backgroundColor: "#E6F1FB", color: "#0C447C" }}>
              {company.stage}
            </span>
            <span className="inline-block rounded-full px-2 py-0.5 text-[0.62rem] font-medium"
              style={{ backgroundColor: "#E1F5EE", color: "#085041" }}>
              {company.primaryMoat}
            </span>
            {company.isBreakout && (
              <span className="inline-block rounded-full px-2 py-0.5 text-[0.62rem] font-medium"
                style={{ backgroundColor: "#FCEBEB", color: "#791F1F" }}>
                Breakout
              </span>
            )}
          </div>

          {/* Expanded detail */}
          {open && (
            <div className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-foreground-secondary">
              <p>{company.detail}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {company.moatTypes.map((m) => {
                  const c = moatColors[m as MoatType];
                  return (
                    <span
                      key={m}
                      className="inline-block rounded-full px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      {moatLabels[m as MoatType]}
                    </span>
                  );
                })}
              </div>
              <div className="mt-2 text-[0.68rem] text-foreground-muted">
                AI: {company.aiApproach}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
