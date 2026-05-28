"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { CONTENT } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Compétences"
          title={<>Technique <span className="gradient-text">& Métier</span></>}
          subtitle="20 ans sur le terrain, dans des secteurs exigeants. Une double expertise rare : architecture cloud-native et compréhension profonde des domaines fonctionnels."
        />
      </SectionReveal>

      {/* Technical skills grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {CONTENT.skills.map((skill, i) => (
          <SectionReveal key={skill.category} delay={i * 0.07}>
            <GlowCard className="h-full">
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-bold text-[#F1F5F9] mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-[#94A3B8]"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlowCard>
          </SectionReveal>
        ))}
      </div>

      {/* Domain expertise divider */}
      <SectionReveal>
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3))" }} />
          <div className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", color: "#6366F1" }}>
            Expertise Métier & Sectorielle
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.3), transparent)" }} />
        </div>
      </SectionReveal>

      {/* Domain cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {CONTENT.domains.map((domain, i) => (
          <SectionReveal key={domain.sector} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl overflow-hidden h-full flex flex-col"
              style={{
                background: "rgba(17,17,24,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Colored top bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${domain.color}, ${domain.color}44)` }} />

              <div className="p-5 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{domain.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F1F5F9] leading-snug">{domain.sector}</h3>
                    <span className="text-[10px] font-medium mt-0.5 inline-block px-2 py-0.5 rounded-full"
                      style={{ background: `${domain.color}14`, color: domain.color }}>
                      {domain.client}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <ul className="space-y-2 flex-1">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-snug">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: domain.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </SectionReveal>
        ))}

        {/* "Et plus encore" card */}
        <SectionReveal delay={CONTENT.domains.length * 0.08}>
          <div className="rounded-2xl p-5 h-full flex flex-col items-center justify-center text-center min-h-[180px]"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(34,211,238,0.03))",
              border: "1px dashed rgba(99,102,241,0.25)",
            }}>
            <div className="text-3xl mb-3">🌍</div>
            <p className="text-sm font-semibold text-[#F1F5F9] mb-1">Secteur public, privé, international</p>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-[200px]">
              Capacité d&apos;adaptation rapide à tout domaine métier grâce à 20 ans de missions variées.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
