import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Whitespace Opportunities | The State of ANZ Verticalised AI",
};

export default function ThesisPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          Whitespace Opportunities
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          Three categories where ANZ vertical AI is most underfunded relative
          to the opportunity — and where the next breakout companies will
          emerge.
        </p>
      </header>

      <div className="space-y-6">
        {/* 1. Sovereign Defence */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Opportunity 01
          </div>
          <h3 className="mb-3 font-sans text-lg font-semibold">
            Sovereign Defence & Dual-Use AI
          </h3>
          <p className="mb-1 font-sans text-sm font-medium text-foreground">
            The biggest underfunded category.
          </p>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            This is the fastest-moving, most capital-rich opportunity right
            now. The AU$500M government co-investment fund launching in 2026,
            combined with AUKUS Pillar II (which explicitly names AI as a
            priority), creates what Bird & Bird called &ldquo;strategic capital
            needed to scale these businesses from development through
            commercial deployment.&rdquo; Defence primes can&apos;t move fast
            enough — startups with security clearances and sovereign data
            residency will win generational contracts. Current ANZ players
            (Q-CTRL, DroneShield, Kasada, Breaker Industries, ADT,
            PentenAmio) are just scratching the surface.
          </p>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            <strong>Whitespace:</strong> contested logistics AI, autonomous
            swarm coordination, maritime domain awareness, AI for intelligence
            analysis. The Anthropic/OpenAI defence contract controversy also
            signals that &ldquo;safe but useful&rdquo; positioning is itself a
            moat — ANZ startups with proper governance frameworks could be
            preferred vendors when US labs face employee pushback.
          </p>
        </div>

        {/* 2. Trades & Construction */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Opportunity 02
          </div>
          <h3 className="mb-3 font-sans text-lg font-semibold">
            AI for Trades, Construction & Field Services
          </h3>
          <p className="mb-1 font-sans text-sm font-medium text-foreground">
            The most underserved large vertical.
          </p>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            The US example is instructive: Rebar raised $14M Series A for AI
            in commercial HVAC/electrical/plumbing, achieving 60-70% quote
            generation time reduction and doubling ARR in six weeks. Australia
            has 1.1M+ tradespeople across construction, plumbing, electrical,
            and mechanical — high-value, low-digitisation verticals where AI
            can automate quoting, scheduling, compliance documentation, and
            safety inspections. Buildxact is early proof, but compared to US
            traction there&apos;s enormous whitespace.
          </p>
          <p className="text-[0.9rem] leading-relaxed text-foreground-secondary">
            The defensibility here is workflow embedding + proprietary pricing
            data built over time.
          </p>
        </div>

        {/* 3. Physical AI / Robotics */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Opportunity 03
          </div>
          <h3 className="mb-3 font-sans text-lg font-semibold">
            Physical AI / Robotics for Resource Industries
          </h3>
          <p className="mb-1 font-sans text-sm font-medium text-foreground">
            Where ANZ has a structural advantage the US doesn&apos;t.
          </p>
          <p className="mb-3 text-[0.9rem] leading-relaxed text-foreground-secondary">
            This showed up repeatedly in the State of Funding report. As one
            investor put it: &ldquo;Australia has a small population, a vast
            landmass, and abundant minerals and critical resources, making it a
            useful microcosm for the Western world and a natural testbed for
            robotics, computer vision, and autonomous systems.&rdquo; Halter
            proved this works at unicorn scale.
          </p>
          <p className="text-[0.9rem] leading-relaxed text-foreground-secondary">
            The whitespace extends to mining automation beyond monitoring,
            post-harvest agricultural value chain (grading, logistics, market
            pricing) — a $70B+ annual export industry with minimal
            digitisation.
          </p>
        </div>
      </div>

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
          Ming Qin &middot; April 2026
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
