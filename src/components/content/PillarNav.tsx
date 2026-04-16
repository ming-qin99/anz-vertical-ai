import Link from "next/link";
import { pillars } from "@/data/sectors";

interface PillarNavProps {
  currentSlug: string;
}

export default function PillarNav({ currentSlug }: PillarNavProps) {
  const idx = pillars.findIndex((p) => p.slug === currentSlug);
  const prev = idx > 0 ? pillars[idx - 1] : null;
  const next = idx < pillars.length - 1 ? pillars[idx + 1] : null;

  return (
    <nav className="mt-12 flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="font-sans text-sm text-foreground-secondary hover:text-accent transition-colors"
        >
          &larr; {prev.name}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${next.slug}`}
          className="font-sans text-sm text-foreground-secondary hover:text-accent transition-colors"
        >
          {next.name} &rarr;
        </Link>
      ) : (
        <Link
          href="/thesis"
          className="font-sans text-sm text-foreground-secondary hover:text-accent transition-colors"
        >
          Investment Thesis &rarr;
        </Link>
      )}
    </nav>
  );
}
