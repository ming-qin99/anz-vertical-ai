import { Metadata } from "next";
import PillarHeader from "@/components/content/PillarHeader";
import SectionHeader from "@/components/content/SectionHeader";
import Callout from "@/components/content/Callout";
import PillarNav from "@/components/content/PillarNav";

export const metadata: Metadata = {
  title: "Create — Creative Tools & Brand Infrastructure | ANZ Vertical AI",
};

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PillarHeader
        number="06"
        title="Create — Creative Tools & Brand Infrastructure"
        subtitle="Creative Tools & Brand Infrastructure"
        description="The companies building AI-powered platforms that enable creation, measurement, and distribution at scale. Less regulated than other verticals, but defended by network effects and the sheer volume of user-generated data."
        verticals={["creative"]}
      />

      <SectionHeader>Why You Should Care</SectionHeader>

      <p className="mb-5">
        Creative tools and brand infrastructure might seem like the least &ldquo;vertical&rdquo; category in this analysis. But the ANZ companies in this space demonstrate a powerful variant of the vertical AI thesis: platform-layer companies that become the infrastructure other businesses build on. They&apos;re not vertical in the industry sense — they&apos;re vertical in the value chain sense, owning a specific, indispensable layer of how businesses create, measure, and distribute.
      </p>

      <p className="mb-5">
        Canva ($40B valuation) is the anchor. By acquiring Leonardo.ai (29M+ users) in 2024, Canva absorbed one of the most advanced AI image and video generation platforms globally. AI now powers features across the entire Canva design workflow — Magic Design, text-to-image, background removal, brand kit generation — making sophisticated design accessible to anyone.
      </p>

      <SectionHeader>The Major Categories</SectionHeader>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Creative Platforms
      </h4>

      <p className="mb-5">
        <strong>Canva&apos;s</strong> AI strategy is the most advanced of any ANZ company. The acquisition of Leonardo.ai brought in-house diffusion models (Phoenix, Kino XL), custom model training capabilities, and the new Creative Engine API launched in 2026. With 190+ countries served and AI features embedded throughout the product, Canva&apos;s moat is network effects + data flywheel.
      </p>

      <p className="mb-5">
        <strong>Linktree</strong> ($1.3B valuation, 40M+ users) occupies a different but complementary position as creator economy infrastructure. AI-powered features for link optimisation, audience insights, and content recommendations are being layered onto a platform that already has distribution.
      </p>

      <h4 className="mt-6 mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-accent">
        Brand Measurement & Intelligence
      </h4>

      <p className="mb-5">
        <strong>Tracksuit</strong> (NZ-founded, $38M Series B, 1,000+ customers, 130% YoY growth) is the standout. Its always-on brand tracking dashboard processes continuous survey data across 10,000+ brands globally. The defensibility is elegant: each brand tracked makes the benchmark more valuable for all other brands on the platform. This is a network effect where the product literally improves for existing customers every time a new customer joins.
      </p>

      <p className="mb-5">
        <strong>Cuttable</strong> ($4.5M seed, led by Square Peg) uses AI to optimise advertising creative performance. Each campaign improves the model — a data flywheel in ad tech.
      </p>

      <SectionHeader>How AI is Reshaping Creative</SectionHeader>

      <p className="mb-5">
        AI&apos;s impact on creative tools is the most visible to consumers but the least defensible for most companies. Generating an image from a text prompt is increasingly commoditised. The defensibility comes from three sources: distribution (Canva&apos;s 190+ countries), data network effects (Tracksuit&apos;s comparative brand dataset), and integration into existing workflows (Cuttable&apos;s campaign-level learning).
      </p>

      <p className="mb-5">
        The risk in this vertical is highest for standalone AI creative tools that don&apos;t have distribution or data moats. If Canva, Adobe, or Google build equivalent features into their existing platforms, a standalone AI image generator has no structural defence.
      </p>

      <SectionHeader>What&apos;s the Future</SectionHeader>

      <Callout>
        <p>
          The creative vertical is heading toward AI-native platforms where the creation, measurement, and optimisation of creative content happens in a single integrated loop. Canva creates the design → Tracksuit measures its brand impact → Cuttable optimises the ad creative → the cycle repeats with AI improving each step. The companies that own a node in this loop have durable positions.
        </p>
      </Callout>

      <PillarNav currentSlug="create" />
    </div>
  );
}
