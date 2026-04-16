interface CalloutProps {
  children: React.ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="my-6 rounded-r-lg border-l-3 border-accent bg-accent-light py-5 pr-6 pl-5 text-[0.9rem] leading-relaxed">
      {children}
    </div>
  );
}
