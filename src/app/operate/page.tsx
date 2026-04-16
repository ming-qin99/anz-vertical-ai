import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import MoatTag from "@/components/content/MoatTag";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Operate — Workforce, CX & Operations | ANZ Vertical AI",
};

export default function OperatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="04"
        title="Operate — Workforce, CX & Operations"
        subtitle="Workforce, CX & Operations"
        description="The companies replacing human-seat SaaS with AI agents, transforming how businesses hire, serve customers, and run daily operations. This is where AI's impact on the wages bill is most direct and most measurable."
        verticals={["workforce", "cx", "logistics"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        One investor quoted in the State of Startup Funding report made a prediction that frames this entire pillar: &ldquo;I expect AI agents to replace SaaS human seats in the not too distant future, shifting the business model so companies pay for virtual employees alongside real employees. This will fundamentally reshape how work gets done and how software is priced and adopted.&rdquo;
      </p>

      <p className="mb-5">
        This is the vertical where AI&apos;s displacement of the wages bill is most direct. Traditional SaaS charged per seat — $50/month for each human using the software. AI agents charge per outcome — resolving a customer ticket, processing a document, screening a candidate. The shift from seat-based to outcome-based pricing expands total addressable markets by 10x.
      </p>

      <p className="mb-5">
        ANZ has produced several category-defining companies in this space. Employment Hero ($1.37B unicorn) demonstrates what happens when workforce SaaS achieves deep enough integration to become impossible to remove. SafetyCulture ($1.67B unicorn) shows how operational inspection data — 600 million+ per year — becomes an AI training set. Lorikeet ($35M Series A, backed by QED, Sequoia, a16z) is defining what &ldquo;agentic&rdquo; customer support looks like.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Workforce AI
      </h4>

      <p className="mb-5">
        <strong>Employment Hero</strong> ($1.37B unicorn) has built the most deeply embedded workforce platform in ANZ, covering HR, payroll, and benefits for SMBs. The moat isn&apos;t the AI — it&apos;s the switching cost. Migrating years of employee data, payroll history, tax filings, and compliance records away from Employment Hero is a project measured in months, not days.
      </p>

      <p className="mb-5">
        <strong>Reejig</strong> (Series A) offers the world&apos;s first independently audited Ethical Talent AI — used by Woolworths, KPMG, NSW Government, and MYOB. <strong>Sapia.ai</strong> and <strong>Vervoe</strong> both tackle hiring bias through AI-driven assessment, betting that the future of hiring is demonstrated capability, not credential-checking.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Agentic Customer AI
      </h4>

      <p className="mb-5">
        <strong>Lorikeet</strong> ($35M Series A led by QED, with Sequoia and a16z) represents the cutting edge of what AI agents can do in customer service. Unlike first-generation chatbots that deflected tickets, Lorikeet resolves them: authenticating customers, checking policies, and executing refunds autonomously. The key differentiator is SOP-constrained architecture — the AI follows approved workflows exactly as a human agent would, ensuring 100% compliance while maintaining conversational fluidity.
      </p>

      <p className="mb-5">
        <strong>Relevance AI</strong> (Series A, Sydney) takes the agent concept further, enabling businesses to build entire AI &ldquo;teams&rdquo; — manager agents that delegate to researcher and outreach agents, mimicking a human org chart.
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <MoatTag type="workflow" />
        <MoatTag type="regulatory" />
      </div>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Operations AI
      </h4>

      <p className="mb-5">
        <strong>SafetyCulture</strong> ($1.67B unicorn) may be the best example of a data flywheel in ANZ. Its mobile-first operations platform powers 600 million+ inspections per year across 28,000+ organisations. Every inspection generates structured data about workplace conditions, safety compliance, and operational patterns. AI analyses this data to predict risks before they materialise.
      </p>

      <p className="mb-5">
        <strong>Affinda</strong> processes documents using deep learning rather than templates. <strong>Tactiq</strong> automates meeting notes, reducing the &ldquo;meeting tax&rdquo; on corporate productivity. <strong>Source</strong> ($1.4M pre-seed, led by Square Peg, founded by 18-year-old Liam Fuller) replaces Excel-based procurement in retail.
      </p>

      <SectionHeader>How AI is Reshaping Operations</SectionHeader>

      <p className="mb-5">
        The shift from SaaS to AI agents is the most fundamental business model change since SaaS itself replaced on-premise software. Instead of charging $50/seat/month, companies can charge $5/resolution or $100/completed task. The TAM expands because you&apos;re no longer limited to the number of human software users — you&apos;re addressing the total cost of work.
      </p>

      <p className="mb-5">
        The danger is commoditisation. If building an AI agent becomes trivially easy, then the defensibility has to come from somewhere other than the AI itself. The strongest moats are workflow embedding (SafetyCulture&apos;s 600M inspections), data flywheel (Reejig&apos;s cross-organisation skills data), and regulatory compliance (Lorikeet&apos;s SOP-constrained architecture).
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <Callout>
        <p>
          The biggest whitespace: <strong>AI for trades and field services.</strong> Australia has 1.1 million+ tradespeople across construction, plumbing, electrical, and mechanical trades. These are high-value, low-digitisation verticals where AI can automate quoting, scheduling, compliance documentation, and safety inspections. Buildxact is early proof, but the broader trades market is wide open.
        </p>
      </Callout>

      <PillarNav currentSlug="operate" />
    </div>
  );
}
