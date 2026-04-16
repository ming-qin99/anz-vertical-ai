import { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";

export const metadata: Metadata = {
  title: "Investment Thesis & Whitespace | The State of ANZ Verticalised AI",
};

export default function ThesisPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          Investment Thesis & Whitespace
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          Applying Square Peg&apos;s stated thesis — that the addressable market
          is now the wages bill, that genuine customer love matters more than
          trial, and that business model innovation creates the most value — to
          ANZ vertical AI.
        </p>
      </header>

      {/* 4 investment filter cards */}
      <div className="mb-10 space-y-4">
        <div className="rounded-xl border border-[#378ADD44] bg-card p-6">
          <h3 className="mb-2 font-sans text-base font-semibold">
            1. Target the wages bill, not the software budget
          </h3>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            The most investable vertical AI companies don&apos;t replace
            $50/month SaaS tools — they replace or augment $100K–$500K/year
            human roles. Harrison.ai augments radiologists ($400K+). Heidi Health
            reclaims clinician documentation time worth $100K+/year per doctor.
            Lorikeet resolves tickets that would otherwise require $60K/year
            support agents.
          </p>
          <p className="font-sans text-sm font-medium text-accent">
            The filter: Is this company displacing software spend ($10-50K/year)
            or labor spend ($100K-500K/year)?
          </p>
        </div>

        <div className="rounded-xl border border-[#378ADD44] bg-card p-6">
          <h3 className="mb-2 font-sans text-base font-semibold">
            2. The &ldquo;wrapper vs. wedge&rdquo; test
          </h3>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            The biggest risk in vertical AI is building a thin wrapper on a
            foundation model. The <strong>wedge</strong> companies use AI as
            entry into a workflow, then expand into adjacent data and process
            layers that create compounding lock-in. Lyrebird Health starts as an
            AI scribe → integrates into EMR → captures clinical data → enables
            billing optimisation → becomes impossible to remove.
          </p>
          <p className="font-sans text-sm font-medium text-accent">
            The filter: Does the company get more valuable with each interaction,
            or is each interaction independent?
          </p>
        </div>

        <div className="rounded-xl border border-[#378ADD44] bg-card p-6">
          <h3 className="mb-2 font-sans text-base font-semibold">
            3. Regulated industries are the strongest ANZ play
          </h3>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            ANZ&apos;s structural advantage in vertical AI is counter-intuitive:
            it&apos;s the <em>regulation</em>. In healthcare (TGA, ACHS, AHPRA),
            financial services (APRA, ASIC), mining safety, and defence (sovereign
            capability requirements), regulatory complexity creates two moats
            simultaneously: an entry barrier for competitors and switching costs
            for customers.
          </p>
          <p className="font-sans text-sm font-medium text-accent">
            The filter: Would switching this product require a compliance review?
          </p>
        </div>

        <div className="rounded-xl border border-[#378ADD44] bg-card p-6">
          <h3 className="mb-2 font-sans text-base font-semibold">
            4. ANZ domain → global distribution
          </h3>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            The best ANZ vertical AI companies use local domain expertise as
            training ground, then scale globally. Harrison.ai trained on
            Australian clinical data, now operates in 15 countries. Heidi Health
            built for AU GPs, now processes millions of interactions globally.
            Neara started modelling Australian utility networks, now serves
            utilities across three continents.
          </p>
          <p className="font-sans text-sm font-medium text-accent">
            The filter: Is the domain problem ANZ-specific, or is ANZ the most
            extreme version of a global problem?
          </p>
        </div>
      </div>

      {/* Whitespace */}
      <SectionHeader>Whitespace Opportunities</SectionHeader>

      <Callout>
        <p className="mb-4">
          <strong>AI for trades and field services:</strong> Australia has 1.1M+
          tradespeople. Construction, plumbing, electrical — high-value,
          low-digitisation verticals where AI can automate quoting, scheduling,
          compliance, and safety documentation. Buildxact is early proof, but the
          market is wide open.
        </p>
        <p className="mb-4">
          <strong>Agricultural AI beyond monitoring:</strong> The post-harvest
          value chain (grading, logistics optimisation, market pricing) is
          largely unaddressed despite $70B+ in annual agricultural exports.
        </p>
        <p className="mb-4">
          <strong>Vertical AI for financial advice:</strong> Australia&apos;s
          $3.5T superannuation system and the growing advice gap (fewer advisers,
          more retirees) creates a massive opportunity for AI that delivers
          personalised guidance within ASIC&apos;s regulatory framework.
        </p>
        <p>
          <strong>Sovereign defence AI:</strong> AUKUS is accelerating defence
          tech investment and emphasis on sovereign capability. AI for defence
          logistics, intelligence analysis, and autonomous systems is a
          generational opportunity.
        </p>
      </Callout>

      {/* Author note */}
      <div className="mt-10 rounded-lg border border-border bg-highlight p-6">
        <p className="text-[0.9rem] leading-relaxed text-foreground-secondary">
          This analysis maps 55 companies across 6 verticals, grounded in the
          State of Australian Startup Funding 2025 report. The companies that
          will define the next era of ANZ technology aren&apos;t the ones with
          the best models. They&apos;re the ones with the best data flywheels,
          the deepest workflow integration, and the strongest regulatory moats.
        </p>
        <p className="mt-3 font-sans text-sm text-foreground-muted">
          Ming Liu &middot; April 2026
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <Link
          href="/map"
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Explore the interactive map &rarr;
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-highlight"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
