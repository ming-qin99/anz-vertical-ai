interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
}

export default function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-4"
        >
          <div className="font-sans text-xl font-semibold text-accent">
            {stat.value}
          </div>
          <div className="mt-1 font-sans text-[0.7rem] uppercase tracking-wide text-foreground-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
