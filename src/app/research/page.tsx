import { Metadata } from "next";
import ResearchClient from "@/components/interactive/ResearchClient";

export const metadata: Metadata = {
  title: "Startup Research Tool | The State of ANZ Verticalised AI",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-8">
        <h1 className="font-sans text-3xl font-semibold tracking-tight">
          Startup Research Tool
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-foreground-secondary">
          AI-powered due diligence. Enter any startup and get a comprehensive
          VC research brief covering team, product, market, traction,
          funding, and defensibility.
        </p>
      </header>
      <ResearchClient />
    </div>
  );
}
