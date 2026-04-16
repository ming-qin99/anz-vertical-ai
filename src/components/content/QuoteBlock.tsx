interface QuoteBlockProps {
  children: React.ReactNode;
}

export default function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <blockquote className="my-6 border-l-3 border-border pl-6 italic text-foreground-secondary leading-relaxed">
      {children}
    </blockquote>
  );
}
