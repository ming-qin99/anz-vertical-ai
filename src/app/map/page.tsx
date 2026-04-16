import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Company Map | ANZ Vertical AI",
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          Interactive Company Map
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          Filter, search, and explore all 55 companies across 10 verticals.
        </p>
      </header>
      <div className="rounded-xl border border-border bg-highlight p-12 text-center">
        <p className="font-sans text-sm text-foreground-muted">
          Coming in Phase 3 — filterable company cards, search, and interactive
          charts.
        </p>
      </div>
    </div>
  );
}
