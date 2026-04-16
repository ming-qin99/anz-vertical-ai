import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import MoatTag from "@/components/content/MoatTag";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Extract — Resources, Energy & AgTech | ANZ Vertical AI",
};

export default function ExtractPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="02"
        title="Extract — Resources, Energy & AgTech"
        subtitle="Resources, Energy & AgTech"
        description="How AI is transforming Australia's foundational industries — mining, energy, and agriculture — by replacing human observation with machine intelligence in some of the harshest operating environments on earth."
        verticals={["resources"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        Australia&apos;s economy was built on extraction — mining, agriculture, and energy have defined the country&apos;s global role for two centuries. These industries contribute over $400 billion annually to the Australian economy and employ hundreds of thousands of workers across some of the most remote and challenging environments on the planet.
      </p>

      <p className="mb-5">
        The reason is physical. Australian mines span thousands of square kilometres. Farms cover areas larger than some European countries. Power networks stretch across vast distances, exposed to bushfires, cyclones, and extreme heat. These aren&apos;t environments where you can send a human to check every asset, every day. They&apos;re environments built for autonomous monitoring, predictive maintenance, and machine intelligence operating at scales that humans physically cannot.
      </p>

      <p className="mb-5">
        This creates an unusual investment dynamic. While most vertical AI companies compete on software sophistication, resource AI companies compete on hardware-software integration in hostile environments. The defensibility comes not just from the AI models, but from the physical infrastructure required to deploy them — satellite constellations, IoT sensor networks, digital twin platforms — that take years and hundreds of millions of dollars to build.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Infrastructure Digital Twins
      </h4>

      <p className="mb-5">
        <strong>Neara</strong> is the standout — an ANZ AI unicorn valued at over $1 billion after a $90 million Series D. Neara builds 3D digital models of power and infrastructure networks using AI and machine learning, enabling utilities to simulate the impact of weather events, vegetation growth, and asset degradation before they cause failures. The platform now serves utilities across 15+ countries, with wildfire prevention technology that&apos;s particularly relevant given Australia&apos;s annual bushfire seasons. Neara is a Square Peg portfolio company, and it exemplifies the ANZ-to-global playbook: build for Australian conditions, then export to markets where the same problems exist at lower intensity.
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <MoatTag type="data" />
        <MoatTag type="domain" />
      </div>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Satellite & Remote Sensing
      </h4>

      <p className="mb-5">
        <strong>Fleet Space Technologies</strong> (Adelaide, Series C) is building a satellite constellation for IoT connectivity in mining and agriculture — low-bandwidth, low-power satellite communications that enable real-time monitoring in places where terrestrial networks don&apos;t exist. The infrastructure moat is significant: building and deploying a satellite constellation is a multi-year, capital-intensive process that no software startup can replicate quickly.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Geological AI
      </h4>

      <p className="mb-5">
        <strong>EARTH AI</strong> uses machine learning to identify mineral deposits with higher accuracy and lower environmental impact than traditional exploration methods. The company trains proprietary geological models on Australian geological data — a dataset that reflects the country&apos;s unique mineral composition and geological formations. No amount of general-purpose ML can match models trained on decades of Australian geological surveys and drilling data.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Agricultural AI
      </h4>

      <p className="mb-5">
        <strong>Halter</strong> (New Zealand, $1B valuation — NZ&apos;s sole unicorn) represents the most advanced application of AI in ANZ agriculture. Smart GPS collars for livestock enable virtual fencing and proactive herd management. The data flywheel is powerful: every animal wearing a Halter collar generates behavioural data that improves the AI&apos;s ability to predict health issues, optimise grazing patterns, and manage breeding cycles.
      </p>

      <p className="mb-5">
        <strong>ExoFlare</strong> (backed by W23/Woolworths) addresses biosecurity in intensive agriculture. <strong>Amber</strong> (Square Peg portfolio, $29.6M raise) optimises household energy buying and selling, expanding into Europe.
      </p>

      <SectionHeader>How AI is Reshaping Resources</SectionHeader>

      <p className="mb-5">
        <strong>Predictive infrastructure management</strong> is the highest-value application. Neara&apos;s digital twins allow utilities to simulate &ldquo;what if&rdquo; scenarios — what happens to this power line if wind speeds reach 120km/h with 40-degree heat? — without waiting for the event to occur. The economic value is measured in avoided outages, prevented bushfires, and reduced insurance costs — billions of dollars annually.
      </p>

      <p className="mb-5">
        <strong>Autonomous monitoring at scale</strong> is where satellite and IoT AI creates unique defensibility. Fleet Space and Halter both solve the same fundamental problem: how do you monitor assets spread across areas too vast for human observation? The companies that build the physical infrastructure to enable it have moats that pure software companies can&apos;t replicate.
      </p>

      <p className="mb-5">
        <strong>Geological prediction</strong> is where domain-specific models matter most. EARTH AI&apos;s geological ML models are trained on datasets that reflect Australian mineral formations — data that can&apos;t be approximated by general-purpose AI or transferred from other geographies.
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <p className="mb-5">
        The future of resource AI is <strong>physical AI</strong> — intelligence that leaves the screen for machines, infrastructure, and the natural environment. As one investor noted: &ldquo;Australia has a small population, a vast landmass, and abundant minerals and critical resources, making it a useful microcosm for the Western world and a natural testbed for robotics, computer vision, and autonomous systems.&rdquo;
      </p>

      <Callout>
        <p>
          The biggest whitespace in this vertical is the post-harvest agricultural value chain — grading, logistics optimisation, market pricing — which remains largely unaddressed despite Australian agricultural exports exceeding $70 billion annually.
        </p>
      </Callout>

      <PillarNav currentSlug="extract" />
    </div>
  );
}
