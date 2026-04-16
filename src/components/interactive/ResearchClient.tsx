"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Status = "idle" | "searching" | "analyzing" | "done" | "error";

export default function ResearchClient() {
  const [startup, setStartup] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [report, setReport] = useState("");
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const run = useCallback(async () => {
    const name = startup.trim();
    if (!name) return;

    // Abort any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setReport("");
    setError("");
    setStatus("searching");

    try {
      const res = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startup: name }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setStatus("analyzing");
      const text = await res.text();
      setReport(text);
      setStatus("done");
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") return;
      setError(e instanceof Error ? e.message : "Something went wrong");
      setStatus("error");
    }
  }, [startup]);

  // Progress stages shown on a timer to reflect the 3-phase pipeline
  const [progressMsg, setProgressMsg] = useState("");
  const progressRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (status === "searching") {
      const msgs = [
        "Searching Google, LinkedIn, news sources...",
        "Interpreting results and identifying gaps...",
        "Running targeted follow-up searches...",
        "Researching founder track records...",
        "Analyzing market size and competitive landscape...",
        "Generating due diligence brief...",
      ];
      setProgressMsg(msgs[0]);
      const timers = msgs.slice(1).map((msg, i) =>
        setTimeout(() => setProgressMsg(msg), (i + 1) * 5000)
      );
      progressRef.current = timers;
      return () => timers.forEach(clearTimeout);
    } else {
      progressRef.current.forEach(clearTimeout);
      if (status === "done") setProgressMsg("Research complete");
    }
  }, [status]);

  const statusLabel: Record<Status, string> = {
    idle: "",
    searching: progressMsg,
    analyzing: progressMsg,
    done: "Research complete",
    error: "",
  };

  return (
    <div>
      {/* Input */}
      <div className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={startup}
            onChange={(e) => setStartup(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && status !== "searching" && status !== "analyzing") run();
            }}
            placeholder="Enter a startup name (e.g. Harrison.ai, SafetyCulture, Canva)"
            className="flex-1 rounded-lg border border-border bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none"
            disabled={status === "searching" || status === "analyzing"}
          />
          <button
            onClick={run}
            disabled={!startup.trim() || status === "searching" || status === "analyzing"}
            className="rounded-lg bg-accent px-6 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "searching" || status === "analyzing" ? "Researching..." : "Research"}
          </button>
        </div>

        {/* Status indicator */}
        {(status === "searching" || status === "analyzing") && (
          <div className="mt-3 flex items-center gap-2 font-sans text-sm text-foreground-secondary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            {statusLabel[status]}
          </div>
        )}

        {status === "done" && (
          <div className="mt-3 flex items-center gap-2 font-sans text-sm text-green-600">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 7.5L6 10L10.5 4.5" />
            </svg>
            {statusLabel[status]}
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 font-sans text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Report */}
      {report && (
        <article className="report-content rounded-xl border border-border bg-card p-6 sm:p-8">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(report) }} />
        </article>
      )}

      {/* Empty state */}
      {status === "idle" && !report && (
        <div className="rounded-xl border border-border bg-highlight p-8 sm:p-12">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-4 font-sans text-3xl">🔍</div>
            <h3 className="mb-2 font-sans text-base font-semibold">
              Startup Due Diligence Tool
            </h3>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              Enter any startup name and our AI analyst will search across
              Google, LinkedIn, news sources, and funding databases to generate
              a comprehensive VC due diligence brief in under 30 seconds.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Harrison.ai", "SafetyCulture", "Canva", "Heidi Health", "Employment Hero"].map(
                (name) => (
                  <button
                    key={name}
                    onClick={() => {
                      setStartup(name);
                    }}
                    className="rounded-full border border-border bg-card px-3 py-1.5 font-sans text-xs text-foreground-secondary transition-colors hover:border-foreground-muted hover:text-foreground"
                  >
                    {name}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Minimal markdown-to-HTML converter for the report
function markdownToHtml(md: string): string {
  let html = md
    // Escape HTML entities
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="mt-6 mb-2 font-sans text-base font-semibold">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="mt-8 mb-3 font-sans text-lg font-semibold border-b border-border pb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="mb-4 font-sans text-2xl font-semibold">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">$1</a>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-sm leading-relaxed text-foreground-secondary">$1</li>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-6 border-border" />')
    // Paragraphs (blank line separated)
    .replace(/\n\n/g, '</p><p class="mb-3 text-sm leading-relaxed text-foreground-secondary">');

  // Wrap list items in <ul>
  html = html.replace(
    /(<li[^>]*>.*?<\/li>\n?)+/g,
    '<ul class="mb-4 space-y-1">$&</ul>'
  );

  // Wrap in initial paragraph
  html = '<p class="mb-3 text-sm leading-relaxed text-foreground-secondary">' + html + "</p>";

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, "");

  return html;
}
