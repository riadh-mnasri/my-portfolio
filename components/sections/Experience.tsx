"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Expérience"
          title={<>20 ans de <span className="gradient-text">terrain</span></>}
          subtitle="De la banque à la grande distribution, des systèmes critiques et des équipes qui durent."
        />
      </SectionReveal>

      <div className="max-w-3xl mx-auto space-y-4">
        {CONTENT.experience.map((exp, i) => (
          <SectionReveal key={exp.company} delay={i * 0.08}>
            <div
              className="glass rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: open === i ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{exp.emoji}</span>
                  <div>
                    <div className="font-bold text-[#F1F5F9]">{exp.company}</div>
                    <div className="text-sm text-[#6366F1]">{exp.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#94A3B8] font-mono hidden sm:block">{exp.period}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} className="text-[#94A3B8]" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 border-t border-[rgba(255,255,255,0.06)]">
                      <div className="text-xs text-[#94A3B8] font-mono mt-4 mb-3 sm:hidden">
                        {exp.period}
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                            <span className="text-[#6366F1] mt-0.5">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
