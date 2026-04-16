import { sectorColors, type VerticalKey } from "@/data/sectors";
import { companies } from "@/data/companies";
import CompanyPill from "./CompanyPill";

interface PillarHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  verticals: VerticalKey[];
}

export default function PillarHeader({
  number,
  title,
  subtitle,
  description,
  verticals,
}: PillarHeaderProps) {
  const color = sectorColors[verticals[0]];
  const pillarCompanies = companies.filter((c) =>
    verticals.includes(c.vertical)
  );

  return (
    <header className="mb-8 border-t-2 pt-6" style={{ borderColor: color }}>
      <div
        className="mb-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.15em]"
        style={{ color }}
      >
        Pillar {number}
      </div>
      <h1 className="font-sans text-3xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-1 font-sans text-lg text-foreground-secondary">
        {subtitle}
      </p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground-secondary border-b border-border pb-6">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {pillarCompanies.map((c) => (
          <CompanyPill
            key={c.id}
            name={c.name}
            highlight={c.isBreakout}
          />
        ))}
      </div>
    </header>
  );
}
