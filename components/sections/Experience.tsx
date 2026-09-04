"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/lib/icons";
import { getContent } from "@/lib/content";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  const { experience } = getContent(useLocale());

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label={experience.label}
          title={<>{experience.titlePrefix}<span className="gradient-text">{experience.titleHighlight}</span></>}
          subtitle={experience.subtitle}
        />
      </SectionReveal>

      <div className="max-w-3xl mx-auto space-y-4">
        {experience.items.map((exp, i) => (
          <SectionReveal key={exp.company} delay={i * 0.08}>
            <div
              className="glass rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: open === i ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-4">
                  <Icon name={exp.emoji} size={24} className="text-[#D4AF37]" />
                  <div>
                    <div className="font-bold text-[#F1F5F9]">{exp.company}</div>
                    <div className="text-sm text-[#D4AF37]">{exp.role}</div>
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
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                            <span className="text-[#D4AF37] mt-0.5">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      {"stack" in exp && exp.stack && (
                        <div className="pt-3 border-t border-[rgba(255,255,255,0.06)]">
                          <div className="text-xs text-[#94A3B8] mb-2 uppercase tracking-wider">{experience.stackLabel}</div>
                          <p className="text-xs font-mono text-[#D4AF37]">{exp.stack as string}</p>
                        </div>
                      )}
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
