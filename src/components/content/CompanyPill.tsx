import { cn } from "@/lib/utils";

interface CompanyPillProps {
  name: string;
  highlight?: boolean;
}

export default function CompanyPill({ name, highlight }: CompanyPillProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 font-sans text-[0.72rem]",
        highlight
          ? "border-accent bg-accent-light text-accent"
          : "border-border bg-card text-foreground-secondary"
      )}
    >
      {name}
    </span>
  );
}
