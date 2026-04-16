import { type MoatType, moatLabels, moatColors } from "@/data/sectors";

interface MoatTagProps {
  type: MoatType;
}

export default function MoatTag({ type }: MoatTagProps) {
  const colors = moatColors[type];
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 font-sans text-[0.65rem] font-medium uppercase tracking-wide"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {moatLabels[type]}
    </span>
  );
}
