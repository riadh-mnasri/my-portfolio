"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const differentiators = [
  {
    icon: "🏛️",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))",
    border: "rgba(245,158,11,0.25)",
    tag: "Vision Stratégique",
    title: "Le pont entre la C-suite et l'ingénierie",
    body: "Executive MBA à l'École Polytechnique + 20 ans sur le terrain. Je traduis vos enjeux business en architectures techniques et vos contraintes techniques en décisions stratégiques. Je parle autant à votre DSI qu'à votre équipe dev.",
    kpis: ["Executive MBA Polytechnique", "20+ ans d'expérience", "Leadership C-level ↔ Engineering"],
  },
  {
    icon: "⚡",
    color: "#6366F1",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04))",
    border: "rgba(99,102,241,0.25)",
    tag: "Performance Prouvée",
    title: "Des résultats mesurables, pas des promesses",
    body: "Chez Société Générale CIB, j'ai réduit les temps de traitement de 50% sur un moteur de risque critique, et accéléré la vélocité dev de 30% via l'intégration de l'IA. Je livre des impacts business chiffrés, pas des slides.",
    kpis: ["−50% temps de traitement @ SGCIB", "+30% vélocité dev avec l'IA", "99.9% disponibilité systèmes"],
  },
  {
    icon: "🤖",
    color: "#22D3EE",
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(34,211,238,0.03))",
    border: "rgba(34,211,238,0.25)",
    tag: "AI-Ready dès J+1",
    title: "L'IA dans vos pipelines, maintenant",
    body: "Certifié Anthropic (Claude Code, Subagents), pionnier de l'intégration GitHub Copilot & Claude en contexte enterprise. J'intègre l'IA dans vos workflows de développement de façon sécurisée, maîtrisée et immédiatement actionnable.",
    kpis: ["Claude Code 101 — Anthropic 2026", "GitHub Copilot en production", "Architecture Agent-Ready"],
  },
];

export function WhyMe() {
  return (
    <section id="why-me" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Pourquoi moi"
          title={<>Ce qui me <span className="gradient-text">différencie</span></>}
          subtitle="Trois raisons concrètes de choisir Riadh MNASRI pour votre prochain défi technique."
        />
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {differentiators.map((d, i) => (
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
              <div className="text-4xl mb-5">{d.icon}</div>

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
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(34,211,238,0.05))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}>
          <div>
            <p className="text-[#F1F5F9] font-semibold text-lg mb-0.5">
              Prêt à transformer votre stack ?
            </p>
            <p className="text-[#94A3B8] text-sm">
              Disponible pour missions freelance · Paris & Remote · 750€/j
            </p>
          </div>
          <a href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-white text-sm flex-shrink-0 transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}>
            Discutons de votre projet →
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
