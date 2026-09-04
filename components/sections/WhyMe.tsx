"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/lib/icons";
import { getContent } from "@/lib/content";

export function WhyMe() {
  const { whyMe } = getContent(useLocale());

  return (
    <section id="why-me" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label={whyMe.label}
          title={<>{whyMe.titlePrefix}<span className="gradient-text">{whyMe.titleHighlight}</span></>}
          subtitle={whyMe.subtitle}
        />
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {whyMe.differentiators.map((d, i) => (
          <SectionReveal key={d.tag} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
              style={{ background: d.gradient, border: `1px solid ${d.border}` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${d.color}, transparent)` }} />

              {/* Icon */}
              <Icon name={d.icon} size={32} className="mb-5" style={{ color: d.color }} />

              {/* Tag */}
              <span className="text-xs font-bold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full w-fit"
                style={{ background: `${d.color}18`, color: d.color }}>
                {d.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#F1F5F9] leading-snug mb-4">
                {d.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 flex-1">
                {d.body}
              </p>

              {/* KPIs */}
              <ul className="space-y-2">
                {d.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: d.color }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: d.color }} />
                    {kpi}
                  </li>
                ))}
              </ul>
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <SectionReveal delay={0.3}>
        <div className="mt-12 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.05))",
            border: "1px solid rgba(212,175,55,0.2)",
          }}>
          <div>
            <p className="text-[#F1F5F9] font-semibold text-lg mb-0.5">
              {whyMe.ctaTitle}
            </p>
            <p className="text-[#94A3B8] text-sm">
              {whyMe.ctaSubtitle}
            </p>
          </div>
          <a href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-white text-sm flex-shrink-0 transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "#D4AF37" }}>
            {whyMe.ctaButton}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
