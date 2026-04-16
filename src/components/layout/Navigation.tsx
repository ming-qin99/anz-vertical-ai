"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { pillars } from "@/data/sectors";

const topLinks = [
  { href: "/landscape", label: "Landscape" },
  { href: "/defensibility", label: "Defensibility" },
];

const bottomLinks = [
  { href: "/thesis", label: "Thesis" },
  { href: "/map", label: "Map" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          ANZ Vertical AI
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 font-sans text-xs text-foreground-secondary hover:text-foreground hover:bg-highlight transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Pillars dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 rounded-md px-2.5 py-1.5 font-sans text-xs text-foreground-secondary hover:text-foreground hover:bg-highlight transition-colors"
            >
              Vertical AI Pillars
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4L5 6.5L7.5 4" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card py-1 shadow-lg">
                {pillars.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-baseline gap-2 px-3 py-2 font-sans text-xs text-foreground-secondary hover:text-foreground hover:bg-highlight transition-colors"
                  >
                    <span className="text-[0.6rem] text-foreground-muted">
                      {p.number}
                    </span>
                    <span>
                      {p.name}{" "}
                      <span className="text-foreground-muted">
                        — {p.subtitle}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {bottomLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 font-sans text-xs text-foreground-secondary hover:text-foreground hover:bg-highlight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-highlight md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="14" y2="14" />
                <line x1="14" y1="4" x2="4" y2="14" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="15" y2="5" />
                <line x1="3" y1="9" x2="15" y2="9" />
                <line x1="3" y1="13" x2="15" y2="13" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border px-4 pb-4 md:hidden">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-sans text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2 font-sans text-xs font-medium uppercase tracking-wide text-foreground-muted">
            Vertical AI Pillars
          </div>
          {pillars.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 pl-3 font-sans text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {p.name} — {p.subtitle}
            </Link>
          ))}
          {bottomLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-sans text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
