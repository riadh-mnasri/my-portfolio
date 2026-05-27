"use client";
import { ExternalLink, BookOpen, Mic } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { CONTENT } from "@/lib/content";

export function Projects() {
  const { projects, talks, blogPosts, links } = CONTENT;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Projets & Contributions"
          title={<>La preuve <span className="gradient-text">par les actes</span></>}
          subtitle="Code open-source, talks en conférences, articles techniques. Partager, c'est progresser."
        />
      </SectionReveal>

      {/* GitHub repos */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl">🐙</span>
          <h3 className="text-xl font-bold text-[#F1F5F9]">GitHub Open Source</h3>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-[#6366F1] hover:text-[#22D3EE] flex items-center gap-1 transition-colors"
          >
            Voir tout <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {projects.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.08}>
            <GlowCard className="h-full">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[#22D3EE] font-semibold group-hover:underline">
                    {p.title}
                  </span>
                  <ExternalLink size={14} className="text-[#94A3B8] flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </GlowCard>
          </SectionReveal>
        ))}
      </div>

      {/* Talks */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <Mic size={20} className="text-[#6366F1]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">Talks & Présentations</h3>
          <a
            href={links.slideshare}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-[#6366F1] hover:text-[#22D3EE] flex items-center gap-1 transition-colors"
          >
            SlideShare <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {talks.map((t, i) => (
          <SectionReveal key={t.title} delay={i * 0.07}>
            <div
              className="glass rounded-xl p-4 flex items-start gap-4"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-2xl">{t.icon}</span>
              <div>
                <div className="text-sm font-medium text-[#F1F5F9] mb-1">{t.title}</div>
                <div className="text-xs text-[#6366F1]">👁 {t.views}</div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* Blog */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={20} className="text-[#6366F1]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">Articles de blog</h3>
          <a
            href={links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-[#6366F1] hover:text-[#22D3EE] flex items-center gap-1 transition-colors"
          >
            techpassionsharing.com <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {blogPosts.map((post, i) => (
          <SectionReveal key={post.title} delay={i * 0.08}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <GlowCard className="group hover:border-[rgba(99,102,241,0.4)] h-full">
                <div className="text-xs text-[#6366F1] font-mono mb-2">{post.date}</div>
                <h4 className="text-[#F1F5F9] font-semibold mb-4 group-hover:text-[#22D3EE] transition-colors leading-snug">
                  {post.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-[#94A3B8]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </a>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
