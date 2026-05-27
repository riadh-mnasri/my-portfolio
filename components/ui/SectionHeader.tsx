import { ReactNode } from "react";

interface Props {
  label: string;
  title: ReactNode;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1", border: "1px solid rgba(99,102,241,0.2)" }}>
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
