"use client";
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
          title={<>Un spectre <span className="gradient-text">technique</span> complet</>}
          subtitle="20 ans de pratique, des milliers d'heures de code. Voici l'arsenal technique."
        />
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
