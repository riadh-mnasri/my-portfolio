"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Témoignages"
          title={<>Ce que disent <span className="gradient-text">mes clients</span></>}
          subtitle="Des résultats concrets, des équipes satisfaites. Quelques retours de collaborateurs et clients."
        />
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {CONTENT.testimonials.map((t, i) => (
          <SectionReveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
              style={{
                background: "rgba(17,17,24,0.8)",
                border: `1px solid ${t.color}22`,
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }} />

              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none mb-4 select-none"
                style={{ color: t.color, opacity: 0.4 }}>
                "
              </div>

              {/* Quote text */}
              <p className="text-[#CBD5E1] text-sm leading-relaxed flex-1 mb-6 italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4"
                style={{ borderTop: `1px solid ${t.color}18` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}>
                  {t.emoji}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F1F5F9]">{t.author}</div>
                  <div className="text-xs font-medium" style={{ color: t.color }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Bottom note */}
      <SectionReveal delay={0.4}>
        <p className="text-center text-xs text-[#475569] mt-8">
          Références détaillées disponibles sur demande · Profil LinkedIn vérifié
        </p>
      </SectionReveal>
    </section>
  );
}
