"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ExternalLink, Heart } from "lucide-react";
import { Icon } from "@/lib/icons";
import { CONTENT } from "@/lib/content";

const tools = [
  { name: "Claude", org: "Anthropic", emoji: "ai", color: "#EF4444", certified: true },
  { name: "GitHub Copilot", org: "Microsoft", emoji: "energy", color: "#2DD4BF", certified: false },
  { name: "Claude Code", org: "Anthropic", emoji: "terminal", color: "#D4AF37", certified: true },
  { name: "AI Agents", org: "Architecture", emoji: "network", color: "#22C55E", certified: false },
  { name: "LLM Integration", org: "Enterprise", emoji: "link", color: "#38BDF8", certified: false },
];

const impacts = [
  { value: "~+30%", label: "vélocité de développement", detail: "via GitHub Copilot & Claude @ SGCIB" },
  { value: "J+1", label: "intégration opérationnelle", detail: "IA dans vos pipelines dès le premier jour" },
  { value: "2026", label: "double certifié Anthropic", detail: "Claude Code 101 · Introduction to Subagents" },
];

const timeline = [
  { year: "2026", event: "Certifié Claude Code 101 - Anthropic", color: "#D4AF37" },
  { year: "2026", event: "Certifié Introduction to Subagents - Anthropic", color: "#D4AF37" },
  { year: "2025", event: "Formation Claude Code @ SFEIR Institute", color: "#D4AF37" },
  { year: "2024", event: "Pionnier GitHub Copilot en production @ SGCIB", color: "#D4AF37" },
  { year: "2024", event: "Architecture Agent-Ready sur systèmes Java enterprise", color: "#D4AF37" },
  { year: "2023", event: "Veille active LLM : architecture AI-Driven, sécurité, agents", color: "#94A3B8" },
];

export function AISection() {
  const { links } = CONTENT;

  return (
    <section id="ai" className="max-w-6xl mx-auto px-6">

      {/* Section header with special AI feel */}
      <SectionReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
            AI & Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] leading-tight mb-4">
            L&apos;IA, pas comme un <span style={{ color: "#D4AF37" }}>buzzword</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Certifié Anthropic, formé sur le terrain. J&apos;intègre l&apos;IA de façon structurée, sécurisée et immédiatement rentable dans vos projets.
          </p>
        </div>
      </SectionReveal>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">

        {/* Left - Impact metrics + tools */}
        <div className="space-y-6">

          {/* Impact cards */}
          <SectionReveal>
            <div className="space-y-4">
              {impacts.map((item, i) => (
                <motion.div
                  key={item.value}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-5 rounded-xl px-6 py-4"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <div className="text-3xl font-bold flex-shrink-0" style={{ color: "#D4AF37" }}>
                    {item.value}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F1F5F9]">{item.label}</div>
                    <div className="text-xs text-[#94A3B8]">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Tools strip */}
          <SectionReveal delay={0.1}>
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(17,17,24,0.6)", border: "1px solid rgba(212,175,55,0.12)" }}>
              <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-4 font-semibold">
                Outils maîtrisés
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div key={tool.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: `${tool.color}10`, border: `1px solid ${tool.color}25` }}>
                    <Icon name={tool.emoji} size={18} style={{ color: tool.color }} />
                    <div>
                      <div className="text-xs font-semibold text-[#F1F5F9] flex items-center gap-1.5">
                        {tool.name}
                        {tool.certified && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5"
                            style={{ background: `${tool.color}20`, color: tool.color }}>
                            <Icon name="check" size={9} /> Certifié
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#94A3B8]">{tool.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right - Timeline AI journey */}
        <SectionReveal delay={0.15}>
          <div className="rounded-2xl p-6 h-full"
            style={{ background: "rgba(17,17,24,0.6)", border: "1px solid rgba(212,175,55,0.12)" }}>
            <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-6 font-semibold">
              Mon parcours IA
            </div>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)" }} />
              <ol className="space-y-5 pl-9">
                {timeline.map((item, i) => (
                  <li key={i} className="relative">
                    <div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full border-2"
                      style={{ background: "#111118", borderColor: item.color }} />
                    <div className="text-xs font-mono mb-0.5" style={{ color: item.color }}>
                      {item.year}
                    </div>
                    <div className="text-sm text-[#F1F5F9] leading-snug">{item.event}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Bottom - LinkedIn AI posts highlight */}
      <SectionReveal delay={0.2}>
        <div className="rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.04))",
            border: "1px solid rgba(212,175,55,0.2)",
          }}>
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-1 font-semibold">
                Thought Leadership
              </div>
              <div className="text-[#F1F5F9] font-bold text-lg">
                Je partage mes réflexions sur l&apos;IA chaque semaine
              </div>
            </div>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white flex-shrink-0"
              style={{ background: "#D4AF37" }}>
              Suivre sur LinkedIn <ExternalLink size={12} />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {CONTENT.linkedinPosts.map((post) => (
              <a key={post.title} href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.15 }}
                  className="rounded-xl p-4 h-full"
                  style={{ background: "rgba(17,17,24,0.5)", border: "1px solid rgba(212,175,55,0.1)" }}>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#F1F5F9] font-medium leading-snug mb-2">{post.title}</p>
                  <div className="text-[10px] text-[#94A3B8] flex items-center gap-1">
                    <Heart size={10} /> {post.reactions} réactions
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
