"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink } from "lucide-react";
import { Icon } from "@/lib/icons";
import { getContent } from "@/lib/content";

export function Education() {
  const { education } = getContent(useLocale());

  return (
    <section id="education" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label={education.label}
          title={<>{education.titlePrefix}<span className="gradient-text">{education.titleHighlight}</span></>}
          subtitle={education.subtitle}
        />
      </SectionReveal>

      <div className="space-y-6 max-w-4xl mx-auto">
        {education.items.map((edu, i) => (
          <SectionReveal key={`${edu.school}-${edu.year}`} delay={i * 0.1}>
            {edu.highlight ? (
              /* Featured card for Polytechnique */
              <motion.div
                whileHover={{ y: -2 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.06) 100%)",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: "#D4AF37" }} />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(212,175,55,0.12)" }}
                      >
                        <Icon name={edu.logo} size={28} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                            style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                          >
                            {edu.degree}
                          </span>
                          {edu.promo && (
                            <span className="text-xs text-[#94A3B8]">{edu.promo}</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-[#F1F5F9] leading-snug">
                          {edu.field}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#D4AF37] font-semibold text-sm">{edu.school}</span>
                          {edu.url && (
                            <a href={edu.url} target="_blank" rel="noopener noreferrer"
                              className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors">
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#D4AF37] flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>

                  {/* Project */}
                  {edu.project && (
                    <div
                      className="rounded-xl p-4 mb-6"
                      style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.1)" }}
                    >
                      <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-semibold">
                        {education.projectLabel}
                      </div>
                      <p className="text-[#F1F5F9] text-sm leading-relaxed">{edu.project}</p>
                    </div>
                  )}

                  {/* Competences */}
                  {edu.skills.length > 0 && (
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3 font-semibold">
                        {education.skillsLabel}
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {edu.skills.map((skill, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">▸</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Standard card */
              <div
                className="glass rounded-2xl p-6 flex items-center gap-5"
                style={{ border: `1px solid ${edu.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${edu.color}12` }}
                >
                  <Icon name={edu.logo} size={22} style={{ color: edu.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: edu.color }}
                  >
                    {edu.degree}
                  </div>
                  <div className="text-[#F1F5F9] font-semibold text-sm truncate">{edu.field}</div>
                  <div className="text-[#94A3B8] text-xs mt-0.5">{edu.school}</div>
                </div>
                <span className="text-lg font-bold font-mono flex-shrink-0" style={{ color: edu.color }}>
                  {edu.year}
                </span>
              </div>
            )}
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
