import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Defend — Defence, Cyber & Sovereign Tech | ANZ Vertical AI",
};

export default function DefendPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="05"
        title="Defend — Defence, Cyber & Sovereign Tech"
        subtitle="Defence, Cyber & Sovereign Tech"
        description="AUKUS, sovereign capability requirements, and growing cyber threats are creating a generational investment opportunity in AI for national security. These companies operate in markets where the customer is the government and the moat is trust."
        verticals={["defence"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        Defence and sovereign technology represent a unique investment category: the customer is the government, the procurement cycles are long, and the contracts — once won — are extraordinarily sticky. AUKUS (the trilateral security partnership between Australia, the UK, and the US) has accelerated investment in sovereign AI capability, and the Australian Government&apos;s National AI Plan positions AI as a critical national capability.
      </p>

      <p className="mb-5">
        The State of Startup Funding report notes that Space/Aviation/Defence ranked as the 5th most exciting sector among investors at end of 2025, up from much lower rankings in previous years. Government policy tailwinds are real: deeper government engagement, growing enterprise demand for locally built solutions, and increasing emphasis on sovereign capability.
      </p>

      <p className="mb-5">
        The moat in defence AI is fundamentally different from commercial AI. It&apos;s built on security clearances, sovereign data residency requirements, government procurement relationships, and the trust that comes from years of operating in classified environments. A Silicon Valley startup cannot parachute into Australian defence.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Quantum & Advanced Computing
      </h4>

      <p className="mb-5">
        <strong>Q-CTRL</strong> (Sydney, Series B) provides error-suppression tools for quantum computers, addressing one of the field&apos;s fundamental challenges. With partnerships with global tech firms and expanding applications in defence and finance, Q-CTRL is positioning for 2026 milestones in quantum hardware integration. The AUKUS alignment creates sovereign advantage.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Counter-Threat AI
      </h4>

      <p className="mb-5">
        <strong>DroneShield</strong> (ASX-listed) uses AI to detect and neutralise drone threats to critical infrastructure and defence assets. <strong>Kasada</strong> ($30M raise, $300M+ valuation, led by EQT) uses adversarial AI to detect and prevent bot attacks — a continuous arms race where the AI learns from every attack, creating a compounding data advantage.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Space & Sovereign Launch
      </h4>

      <p className="mb-5">
        <strong>Gilmour Space Technologies</strong> (Queensland) is approaching its first orbital launch attempt with the Eris rocket in 2026. The strategic imperative of sovereign launch capability under AUKUS creates a defensibility layer that&apos;s entirely non-technical: the ability to launch Australian payloads from Australian soil.
      </p>

      <SectionHeader>How AI is Reshaping Defence</SectionHeader>

      <p className="mb-5">
        AI in defence operates under constraints that don&apos;t exist in commercial markets: data sovereignty requirements mean models must be trained and deployed on Australian infrastructure; security clearances limit who can build and maintain systems; and procurement cycles measure in years, not weeks. These constraints are the moat.
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <Callout>
        <p>
          Defence AI is a generational opportunity in ANZ, driven by AUKUS, growing geopolitical tensions, and the structural need for sovereign technology capability. The companies that establish government relationships and security clearances today will be positioned for decades of contracted revenue. The whitespace is vast: AI for defence logistics, intelligence analysis, autonomous systems, and cybersecurity are all nascent categories with enormous TAM.
        </p>
      </Callout>

      <PillarNav currentSlug="defend" />
    </div>
  );
}
