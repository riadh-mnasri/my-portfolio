"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";

export function Certifications() {
  const { certifications, community } = CONTENT;

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Certifications & Communauté"
          title={<>La <span className="gradient-text">crédibilité</span> certifiée</>}
          subtitle="Des certifications reconnues et un engagement communautaire actif depuis des années."
        />
      </SectionReveal>

      {/* Certifications */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {certifications.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.1}>
            <div
              className="glass rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center gap-3"
              style={{ border: `1px solid ${cert.color}22` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ background: `${cert.color}15`, color: cert.color }}
              >
                🏅
              </div>
              <div className="font-bold text-[#F1F5F9] text-sm text-center leading-snug">
                {cert.name}
              </div>
              <div className="text-xs text-[#94A3B8] text-center">{cert.org}</div>
              <div
                className="text-xs font-mono px-2 py-0.5 rounded"
                style={{ background: `${cert.color}15`, color: cert.color }}
              >
                {cert.year}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* Community */}
      <SectionReveal>
        <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8 text-center">
          Engagement <span className="gradient-text">communautaire</span>
        </h3>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {community.map((c, i) => (
          <SectionReveal key={c.name} delay={i * 0.07}>
            <div
              className="glass rounded-xl px-5 py-4 flex items-center gap-4"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="font-semibold text-[#F1F5F9] text-sm">{c.name}</div>
                <div className="text-xs text-[#94A3B8]">{c.desc}</div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
