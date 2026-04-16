import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import MoatTag from "@/components/content/MoatTag";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Diagnose — Healthcare AI | ANZ Vertical AI",
};

export default function DiagnosePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="01"
        title="Diagnose — Healthcare AI"
        subtitle="Healthcare AI"
        description="Understanding the companies building AI to detect disease earlier, reduce clinician burden, and shift healthcare from reactive sick-care to proactive, continuous care. This is the most funded, most regulated, and arguably most defensible vertical in ANZ AI."
        verticals={["health"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        Healthcare AI is the largest, deepest, and most defensible vertical in the ANZ landscape. It attracted $390 million in Health Analytics & AI funding alone in 2025, with additional billions flowing into adjacent biotech and medtech categories. The State of Australian Startup Funding report identified Health Analytics & AI as the top-funded health subsector.
      </p>

      <p className="mb-5">
        The structural drivers are obvious and accelerating. Australia has an aging population, a growing chronic disease burden, and a workforce crisis across clinical professions. Doctors spend more time on paperwork than patients — an estimated 2+ hours per day on clinical documentation alone. Radiologists face mounting scan volumes that exceed human capacity. Rural and remote communities struggle to access specialists at all.
      </p>

      <p className="mb-5">
        What makes healthcare AI different from healthcare SaaS is the nature of the value created. Traditional health software automated administrative tasks — scheduling, billing, records management. Healthcare AI is augmenting clinical capability itself: reading scans, generating diagnoses, triaging patients, and writing clinical notes at a quality level that approaches (and in some cases exceeds) human performance.
      </p>

      <p className="mb-5">
        The economic case is compelling. Harrison.ai doesn&apos;t sell a $50/month software subscription — it augments diagnostic capacity that would otherwise require hiring radiologists at $400K+ each. Heidi Health doesn&apos;t replace a note-taking app — it gives back 2+ hours per day per clinician, worth over $100K annually in reclaimed productive time. This is Square Peg&apos;s thesis in action: the addressable market is the wages bill, not the software budget.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Diagnostic AI
      </h4>

      <p className="mb-5">
        <strong>Harrison.ai</strong> is the category leader and one of the most important AI companies in Australia. Its radiology platform (Annalise.ai) automatically detects over 120 clinical findings on chest X-rays and brain CT scans. The company&apos;s unfair advantage lies in its Joint Venture model: rather than scraping public data, it partners with I-MED and Sonic Healthcare to train its AI on massive, proprietary clinical datasets. This has secured 12 FDA clearances, regulatory approval in 40 countries, and adoption by 3,500+ clinicians — including 50% of all Australian radiologists. Harrison.ai raised $112 million in Series C funding and has tripled contracted ARR for three consecutive years.
      </p>

      <p className="mb-5">
        <strong>4DMedical</strong> converts standard CT scans into 4D ventilation images using physics-informed AI, with FDA clearance and $100M raised for US expansion. <strong>Eyeonic</strong> turns standard computers into medical-grade glaucoma diagnostic devices. <strong>See-Mode</strong> provides real-time AI insights from ultrasound for stroke detection.
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <MoatTag type="data" />
        <MoatTag type="regulatory" />
        <MoatTag type="domain" />
      </div>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Clinical Documentation AI
      </h4>

      <p className="mb-5">
        The &ldquo;AI scribe wars&rdquo; are one of the most active battlegrounds in ANZ healthcare AI. <strong>Heidi Health</strong> has raised nearly $100 million (including a $98M Series B led by Point72) and is valued at $465–711 million. It processes millions of patient interactions weekly, generating structured clinical notes from ambient consultation recordings. Its key differentiator is extreme customisability — &ldquo;My Heidis&rdquo; allows each clinician to teach the AI their specific writing style and templates, creating per-clinician lock-in.
      </p>

      <p className="mb-5">
        <strong>Lyrebird Health</strong> ($12M raised) takes a different approach, focusing on native EMR integration with Best Practice and Gentu — the dominant GP software systems in Australia. This creates structural lock-in: the AI doesn&apos;t just exist in a separate app, it lives inside the workflow the clinician already uses every day. Lyrebird is now trialling with 70+ Gold Coast Health specialists and expanding into the UK via Alder Hey Children&apos;s NHS Foundation Trust.
      </p>

      <p className="mb-5">
        The scribe market illustrates the wrapper-vs-wedge dynamic perfectly. A wrapper scribe transcribes audio and generates notes. A wedge scribe integrates into the EMR, captures structured clinical data, enables billing optimisation, generates referral letters, and becomes embedded in every aspect of clinical workflow.
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <MoatTag type="workflow" />
        <MoatTag type="data" />
      </div>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Vertical Health Platforms
      </h4>

      <p className="mb-5">
        <strong>Eucalyptus</strong> demonstrated what&apos;s possible when AI meets vertical health integration. Before its $1.15 billion acquisition by Hims & Hers in February 2026, Eucalyptus had built a portfolio of digital health brands (Pilot, Juniper, Kin, Software) spanning men&apos;s health, weight management, dermatology, and reproductive health. Revenue doubled to $248 million with 130% YoY growth, and 60% of revenue came from international markets.
      </p>

      <p className="mb-5">
        <strong>Splose</strong> ($46M Series A, valued at $100M+) serves allied health professionals. Its all-in-one platform handles appointments, client onboarding, invoicing, and compliance for 20,000+ practitioners across AU/NZ/UK. With 100% YoY user growth, Splose shows that vertical AI doesn&apos;t have to be clinically sophisticated to be defensible.
      </p>

      <SectionHeader>How AI is Reshaping Healthcare</SectionHeader>

      <p className="mb-5">
        <strong>Diagnostic augmentation</strong> is where AI&apos;s impact is most dramatic and most defensible. Deep learning models are achieving radiologist-level accuracy in detecting fractures, strokes, and cancers. The defensibility here is extreme: the models are trained on proprietary clinical data, validated through regulatory processes, and adopted by clinicians who trust them with patient lives.
      </p>

      <p className="mb-5">
        <strong>Administrative automation</strong> is where AI creates the most immediate economic value. AI tools are saving physicians 2–3 hours each day by automating routine tasks. The value here maps directly to Square Peg&apos;s wages-bill thesis: every hour saved for a clinician is worth $100+ in reclaimed capacity.
      </p>

      <p className="mb-5">
        <strong>Care delivery transformation</strong> is where AI enables entirely new models of care. Eucalyptus proved that AI triage + telehealth + pharmacy integration can create a global health brand from Sydney. These aren&apos;t AI features bolted onto existing services; they&apos;re new architectures for delivering care that couldn&apos;t exist without AI.
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <p className="mb-5">
        <strong>The augmented clinician becomes standard.</strong> Just as the best chess players learned to partner with algorithms, the best doctors will learn to partner with AI. The companies that integrate smoothly into clinical workflows — not the ones with the best standalone AI — will win this transition.
      </p>

      <p className="mb-5">
        <strong>The AI scribe becomes the AI care partner.</strong> Heidi Health&apos;s stated vision is to evolve from documentation tool to &ldquo;AI care partner.&rdquo; The data generated by millions of consultations becomes the training set for the next generation of clinical AI. The scribe is the wedge; the care partner is the platform.
      </p>

      <p className="mb-5">
        <strong>International expansion validates ANZ as a launchpad.</strong> Harrison.ai operates in 15 countries. Heidi Health processes interactions globally. Eucalyptus generated 60% of revenue internationally before acquisition. ANZ healthcare faces extreme versions of global problems, and AI solutions built for these constraints are over-engineered for gentler markets.
      </p>

      <Callout>
        <p>
          <strong>Investment signal:</strong> The strongest healthcare AI companies in ANZ combine all four moat types. Harrison.ai has proprietary data (JV partnerships), regulatory lock-in (12 FDA clearances), domain-specific models (120+ findings), and workflow embedding. Companies with fewer than two moat layers in healthcare are likely wrappers. Companies with three or more are potential category winners.
        </p>
      </Callout>

      <PillarNav currentSlug="diagnose" />
    </div>
  );
}
