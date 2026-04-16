import Link from "next/link";
import { heroStats } from "@/data/stats";
import { pillars, sectorColors } from "@/data/sectors";
import { companies } from "@/data/companies";

function countCompanies(verticals: string[]) {
  return companies.filter((c) => verticals.includes(c.vertical)).length;
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <header className="mb-12">
        <h1 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
          Verticalised AI in Australia&nbsp;&&nbsp;New&nbsp;Zealand
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          Mapping how ANZ startups are building deep, purpose-built AI for
          specific industries — and what makes the best ones defensible.
        </p>
        <p className="mt-3 font-sans text-xs uppercase tracking-widest text-foreground-muted">
          Ming Liu &middot; April 2026 &middot; Prepared for Square Peg Capital
        </p>
      </header>

      {/* Personal quote */}
      <blockquote className="mb-12 border-l-3 border-border pl-6 text-foreground-secondary italic leading-relaxed">
        I&apos;ve spent the past several years at the intersection of
        go-to-market operations and emerging technology. This document is an
        attempt to synthesise those perspectives into something useful for an
        investor evaluating where vertical AI creates durable competitive
        advantage in Australia and New Zealand.
      </blockquote>

      {/* Stat cards */}
      <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="font-sans text-2xl font-semibold text-accent">
              {stat.value}
            </div>
            <div className="mt-1 font-sans text-[0.7rem] uppercase tracking-wide text-foreground-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Pillar cards */}
      <section className="mb-14">
        <h2 className="mb-6 font-sans text-xl font-semibold">
          Six pillars of ANZ vertical AI
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const count = countCompanies(pillar.verticals);
            const color = sectorColors[pillar.verticals[0]];
            return (
              <Link
                key={pillar.slug}
                href={`/${pillar.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground-muted"
              >
                <div
                  className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest"
                  style={{ color }}
                >
                  Pillar {pillar.number}
                </div>
                <h3 className="font-sans text-base font-semibold">
                  {pillar.name}
                </h3>
                <p className="text-sm text-foreground-secondary">
                  {pillar.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {pillar.description}
                </p>
                <div className="mt-3 font-sans text-xs text-foreground-muted">
                  {count} companies mapped
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/map"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Explore the interactive map &rarr;
        </Link>
        <Link
          href="/defensibility"
          className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-highlight"
        >
          Read the defensibility framework &rarr;
        </Link>
      </div>
    </div>
  );
}
