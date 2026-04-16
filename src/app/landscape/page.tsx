import { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/content/StatGrid";
import Callout from "@/components/content/Callout";
import QuoteBlock from "@/components/content/QuoteBlock";
import SectionHeader from "@/components/content/SectionHeader";

export const metadata: Metadata = {
  title: "The ANZ Verticalised AI Landscape | The State of ANZ Verticalised AI",
};

const stats = [
  { value: "$5.4B", label: "Total AU startup funding 2025" },
  { value: "61%", label: "Of capital to AI-enabled companies" },
  { value: "$1.9B", label: "AI application layer, 198 deals" },
  { value: "390", label: "Total deals, 31% YoY increase" },
];

export default function LandscapePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          The ANZ Verticalised AI Landscape
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          The state of the market: how capital is flowing, where investors are
          focused, and why vertical AI is the defining opportunity in Australian
          tech.
        </p>
      </header>

      <StatGrid stats={stats} />

      <p className="mb-5">
        Australian startups announced $5.4 billion across 390 deals in 2025,
        marking a 31% increase year-on-year and the third-largest funding year on
        record. The market normalised after the 2021 peak and the 2022–2023
        correction, with investors describing the tone as &ldquo;optimistic but
        not exuberant, with confidence returning alongside continued
        discipline.&rdquo;
      </p>

      <p className="mb-5">
        What makes this cycle different is the nature of the AI that&apos;s
        getting funded. The State of Australian Startup Funding report breaks AI
        investment into three layers: the application layer ($1.9 billion across
        198 deals), the infrastructure layer ($871 million, heavily skewed by
        Firmus Technologies&apos; $830 million in AI data centre raises), and the
        model layer (smaller, high-profile raises). The report&apos;s conclusion
        is unambiguous: &ldquo;Australia can win in orchestration and
        applications, where we have a proven software playbook and AI expands
        what&apos;s possible.&rdquo;
      </p>

      <p className="mb-5">
        This is the thesis underlying the entire document. ANZ doesn&apos;t have
        the capital, compute, or talent density to compete at the foundation
        model layer. But at the application layer — where deep domain expertise,
        proprietary data, and regulatory knowledge matter more than raw model
        capability — ANZ founders have a genuine structural advantage.
      </p>

      <SectionHeader>The Investment Landscape</SectionHeader>

      <p className="mb-5">
        Blackbird Ventures reports that approximately 60% of their early-stage
        investments in 2025 were &ldquo;core AI,&rdquo; and that their AI
        companies are growing at roughly 2x the pace of their best SaaS and
        mobile-era companies. 59% of early-stage deals were competitive in 2025,
        up from 30% in 2024.
      </p>

      <p className="mb-5">
        The top 20 deals accounted for 58% of all capital deployed, highlighting
        power-law dynamics consistent with global venture markets. Median deal
        sizes rose across all stages: Pre-Seed $1.0M, Seed $2.5M, Series A
        $11.0M, Series B+ $30.0M. International investor involvement hit 66% of
        all deals.
      </p>

      <SectionHeader>Funding Stage Distribution</SectionHeader>

      <p className="mb-5">
        The pipeline is healthy and maturing. 21 of 55 mapped companies are
        Series B+, indicating ANZ vertical AI is producing companies that survive
        the &ldquo;Series A to scale&rdquo; gap. Median Series A rounds hit $11M
        in 2025, and Series B+ reached $30M, with 59% of early-stage deals now
        competitive (up from 30% in 2024). The most defensible verticals —
        healthcare, resources, legal — have the highest concentration of
        later-stage companies. Q4 2025 was the strongest quarter since 2021, with
        over $2.0B raised.
      </p>

      <div className="my-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-5">
        {[
          { label: "Pre-seed / Seed", count: 14 },
          { label: "Series A", count: 13 },
          { label: "Series B", count: 11 },
          { label: "Series C+", count: 10 },
          { label: "Late / Acquired", count: 7 },
        ].map((stage) => (
          <div
            key={stage.label}
            className="rounded-lg border border-border bg-card p-3"
          >
            <div className="font-sans text-xl font-semibold text-accent">
              {stage.count}
            </div>
            <div className="mt-1 font-sans text-[0.65rem] uppercase tracking-wide text-foreground-muted">
              {stage.label}
            </div>
          </div>
        ))}
      </div>

      <Callout>
        <p>
          <strong>The key investor shift:</strong> &ldquo;Our weightings toward
          the ability for a business to build a strong moat and resist churn, as
          well as potential margins at scale and with competition, have increased
          relative to our weightings for pure top-line revenue growth.&rdquo; —
          James Johnstone, Partner, Bailador. Defensibility is the new growth.
        </p>
      </Callout>

      <QuoteBlock>
        <p>
          &ldquo;I am not interested in pitches that bolt on &lsquo;.ai&rsquo;
          or use AI as a keyword throughout the pitch deck. What matters is how
          AI is integrated into workflows and employed across the business to
          create durable product and process advantages.&rdquo;
        </p>
      </QuoteBlock>

      <div className="mt-10 flex gap-3">
        <Link
          href="/defensibility"
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Read the defensibility framework &rarr;
        </Link>
        <Link
          href="/map"
          className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-highlight"
        >
          Explore company map &rarr;
        </Link>
      </div>
    </div>
  );
}
