import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import MoatTag from "@/components/content/MoatTag";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Comply — Legal, Compliance & Financial Services | ANZ Vertical AI",
};

export default function ComplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="03"
        title="Comply — Legal, Compliance & Financial Services"
        subtitle="Legal, Compliance & Financial Services"
        description="Where regulation is the moat. These companies operate at the intersection of AI and industries where compliance, trust, and regulatory approval define the competitive landscape."
        verticals={["legal", "fintech"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        Legal and financial services share a common characteristic that makes them fertile ground for vertical AI: regulatory complexity. Every document, transaction, and client interaction in these industries is governed by rules — ASIC regulations, APRA standards, AML/CTF requirements, privacy laws, professional conduct obligations — that create both enormous friction and enormous opportunity for AI.
      </p>

      <p className="mb-5">
        The friction is real. Australian businesses face an estimated $94 billion annually in regulatory compliance costs. Financial advisers spend 40%+ of their time on compliance documentation rather than client relationships. Lawyers bill by the hour for tasks that are largely pattern-matching: reviewing contracts, building chronologies, checking regulatory changes.
      </p>

      <p className="mb-5">
        The opportunity is equally real: AI that navigates regulatory complexity creates structural lock-in that&apos;s nearly impossible to replicate. If a customer&apos;s compliance workflow depends on your AI understanding their specific regulatory obligations, switching providers means re-validating every process against every applicable rule. That&apos;s not a convenience cost — it&apos;s an existential risk.
      </p>

      <p className="mb-5">
        Fintech AI adds another dimension. Airwallex ($12 billion valuation, Square Peg portfolio) demonstrates that when AI is embedded in financial infrastructure — fraud detection, payment routing, currency conversion — it creates network effects that compound with every transaction processed.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        GRC & Compliance Automation
      </h4>

      <p className="mb-5">
        <strong>6clicks</strong> (Melbourne, Series A, 100%+ growth) has emerged as a breakout in governance, risk, and compliance automation. Its platform uses AI to streamline regulatory compliance, policy management, and audit processes. The platform&apos;s value isn&apos;t just automation; it&apos;s the embedded regulatory knowledge that makes switching costly. Once an organisation has configured 6clicks for their specific compliance obligations, moving to a competitor means re-mapping every regulatory framework from scratch.
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <MoatTag type="regulatory" />
        <MoatTag type="workflow" />
      </div>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Legal AI
      </h4>

      <p className="mb-5">
        ANZ legal AI is still early but shows strong potential. <strong>Isaacus</strong> (Melbourne, A$700K pre-seed) is building foundational AI models specifically for legal technology. <strong>Mary Technology</strong> generates detailed chronologies from documents in minutes (90%+ time reduction, 99%+ accuracy). <strong>Haast</strong> ($6M raised) automates compliance across legal, marketing, and content workflows. <strong>Tendl</strong> offers AI-powered tender writing with a privacy-first approach.
      </p>

      <p className="mb-5">
        The legal vertical is particularly well-suited for the wedge strategy. AI enters through a specific pain point (chronology generation, tender writing, compliance checking), then expands into adjacent workflows as the customer&apos;s trust grows.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        AI-Enhanced Financial Services
      </h4>

      <p className="mb-5">
        <strong>Airwallex</strong> is the category anchor — a $12 billion company where AI powers fraud detection, payment routing optimisation, and currency conversion across a global payments infrastructure. Every transaction processed improves the AI&apos;s ability to detect fraud patterns and optimise routing, creating a data flywheel that compounds with scale. With 2,000+ staff and plans to add another 1,000 by end of 2026, Airwallex demonstrates what happens when AI is embedded in financial infrastructure rather than bolted on as a feature.
      </p>

      <p className="mb-5">
        <strong>Marloo</strong> (Seed) targets a massive whitespace: AI for financial advisers. With Australia&apos;s 15,000+ advisers spending 40%+ of their time on compliance documentation, Marloo addresses a market defined by regulatory lock-in. <strong>Honey Insurance</strong> bundles home insurance with IoT smart sensors, using continuous data to build proprietary risk models.
      </p>

      <SectionHeader>How AI is Reshaping Compliance & Finance</SectionHeader>

      <p className="mb-5">
        AI in regulated industries operates under a different value equation. The value isn&apos;t just speed or cost reduction — it&apos;s <strong>risk reduction</strong>. A compliance error in financial services can result in millions in fines, licence revocation, or criminal liability. An AI system that reduces compliance risk is worth multiples of one that merely reduces compliance cost.
      </p>

      <p className="mb-5">
        Airwallex&apos;s fraud detection AI processes billions of transactions, learning from every attempted fraud to improve pattern recognition. This is a textbook data flywheel: more transactions → better fraud models → fewer losses → more customer trust → more transactions.
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <p className="mb-5">
        The compliance market will only grow as regulation increases. The Australian Government&apos;s National AI Plan, the Australian AI Safety Institute, and the $17 million Responsible AI Adopt Program all signal that AI governance itself is becoming a regulated domain — creating a meta-opportunity for companies that help other companies comply with AI regulations.
      </p>

      <Callout>
        <p>
          In financial services, the intersection of AI and Australia&apos;s $3.5 trillion superannuation system represents a generational opportunity. As superannuation shifts from asset management to payments and transactions, demand for AI-powered infrastructure will explode. The companies building this infrastructure today will be the rails that carry recurring revenue for decades.
        </p>
      </Callout>

      <PillarNav currentSlug="comply" />
    </div>
  );
}
