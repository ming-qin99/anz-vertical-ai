"use client";

import { useState, useMemo } from "react";
import { companies } from "@/data/companies";
import { sectorLabels, sectorColors, type VerticalKey } from "@/data/sectors";
import CompanyCard from "./CompanyCard";
import SectorFilter from "./SectorFilter";
import SectorChart from "./SectorChart";
import StageChart from "./StageChart";

export default function MapClient() {
  const [sector, setSector] = useState("all");
  const [stage, setStage] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      if (sector !== "all" && c.vertical !== sector) return false;
      if (stage !== "all" && c.stage !== stage) return false;
      if (
        search &&
        !c.name.toLowerCase().includes(search.toLowerCase()) &&
        !c.description.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [sector, stage, search]);

  // Group by vertical for display
  const grouped = useMemo(() => {
    const map = new Map<VerticalKey, typeof filtered>();
    filtered.forEach((c) => {
      const existing = map.get(c.vertical) || [];
      existing.push(c);
      map.set(c.vertical, existing);
    });
    return Array.from(map.entries());
  }, [filtered]);

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

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none"
        />
      </div>

      {/* Sector filter */}
      <div className="mb-3">
        <SectorFilter selected={sector} onChange={setSector} />
      </div>

      {/* Stage filter */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {stages.map((s) => (
          <button
            key={s}
            onClick={() => setStage(s)}
            className={`rounded-full border px-3 py-1.5 font-sans text-[0.68rem] transition-colors ${
              stage === s
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-foreground-secondary hover:border-foreground-muted"
            }`}
          >
            {s === "all" ? "All stages" : s}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-4 rounded-lg bg-highlight px-3 py-2 font-sans text-[0.68rem] text-foreground-secondary">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-sm" style={{ background: "#85B7EB" }} />
          Funding stage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-sm" style={{ background: "#5DCAA5" }} />
          Primary moat
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-sm" style={{ background: "#F09595" }} />
          Breakout
        </span>
        <span className="italic">Tap any card to expand details</span>
      </div>

      {/* Charts */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <SectorChart companies={filtered} />
        <StageChart companies={filtered} />
      </div>

      {/* Results count */}
      <div className="mb-4 font-sans text-xs text-foreground-muted">
        {filtered.length} of {companies.length} companies
      </div>

      {/* Company grid grouped by vertical */}
      <div className="space-y-6">
        {grouped.map(([vertical, cos]) => (
          <div key={vertical}>
            <div
              className="mb-3 border-b border-border pb-2 font-sans text-sm font-medium"
              style={{ color: sectorColors[vertical] }}
            >
              {sectorLabels[vertical]}
              <span className="ml-2 text-xs font-normal text-foreground-muted">
                {cos.length} companies
              </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {cos.map((c) => (
                <CompanyCard key={c.id} company={c} />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-lg border border-border p-8 text-center font-sans text-sm text-foreground-muted">
            No companies match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
