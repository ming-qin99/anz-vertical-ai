interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h3 className="mt-8 mb-3 font-sans text-lg font-medium">{children}</h3>
  );
}
