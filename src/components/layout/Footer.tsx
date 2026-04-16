export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="font-sans text-xs leading-relaxed text-foreground-muted">
          <p className="mb-3">
            <span className="font-medium text-foreground-secondary">
              Sources & Methodology
            </span>
          </p>
          <p className="mb-3">
            Primary data: State of Australian Startup Funding 2025 (Cut Through
            Venture & Folklore Ventures, Feb 2026). Additional: Tracxn,
            Crunchbase, PitchBook, TechCrunch, SmartCompany, Dynamic Business,
            company announcements and filings. 55 companies mapped across 6
            verticals.
          </p>
          <p className="mb-4">
            This analysis is independent and not endorsed by any company
            mentioned. Defensibility scores are the author&apos;s qualitative
            assessment.
          </p>
          <p className="text-foreground-muted">
            Ming Qin &middot; April 2026 &middot; Prepared for Square Peg
            Capital
          </p>
        </div>
      </div>
    </footer>
  );
}
