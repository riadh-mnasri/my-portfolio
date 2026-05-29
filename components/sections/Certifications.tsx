"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";

export function Certifications() {
  const { certifications, community } = CONTENT;
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Certifications & Communauté"
          title={<>19 certifications, <span className="gradient-text">une expertise prouvée</span></>}
          subtitle="Des certifications reconnues sur les domaines les plus stratégiques : IA, Cloud, Architecture, JVM."
        />
      </SectionReveal>

      {/* Featured — Anthropic AI certs */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-5">
          <div className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(167,139,250,0.1)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.25)" }}>
            🤖 IA & Anthropic — 2026
          </div>
        </div>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {featured.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4, boxShadow: `0 16px 40px ${cert.color}25` }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl p-5 text-center flex flex-col items-center gap-2.5 h-full relative overflow-hidden"
              style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}30` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: `${cert.color}15` }}>
                🏅
              </div>
              <div className="font-bold text-[#F1F5F9] text-xs text-center leading-snug">{cert.name}</div>
              <div className="text-[10px] text-[#94A3B8]">{cert.org}</div>
              <div className="text-[10px] font-mono px-2 py-0.5 rounded-full mt-auto"
                style={{ background: `${cert.color}15`, color: cert.color }}>
                {cert.year}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Divider */}
      <SectionReveal>
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-xs text-[#475569] uppercase tracking-widest font-semibold">
            Toutes les certifications ({certifications.length})
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
      </SectionReveal>

      {/* All other certs — compact grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
        {others.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.05}>
            <div
              className="glass rounded-xl px-4 py-3 flex items-center gap-3 h-full"
              style={{ border: `1px solid ${cert.color}18` }}
            >
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm"
                style={{ background: `${cert.color}12`, color: cert.color }}>
                ✓
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#F1F5F9] leading-snug truncate">{cert.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-[#64748B]">{cert.org}</span>
                  <span className="text-[10px] font-mono" style={{ color: cert.color }}>{cert.year}</span>
                </div>
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
