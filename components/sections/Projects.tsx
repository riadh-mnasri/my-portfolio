"use client";
import { ExternalLink, BookOpen, Mic, MessageSquare, Heart, Eye } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Icon } from "@/lib/icons";
import { CONTENT } from "@/lib/content";

export function Projects() {
  const { projects, talks, blogPosts, linkedinPosts, links } = CONTENT;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Projets & Contributions"
          title={<>La preuve <span className="gradient-text">par les actes</span></>}
          subtitle="Code open-source, talks, articles et réflexions sur l'IA, l'architecture et le leadership tech."
        />
      </SectionReveal>

      {/* LinkedIn Posts - insights AI & Architecture */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare size={20} className="text-[#F59E0B]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">Insights LinkedIn</h3>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-[#F59E0B] hover:text-[#F97316] flex items-center gap-1 transition-colors"
          >
            7 735 abonnés <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid md:grid-cols-3 gap-4 mb-14">
        {linkedinPosts.map((post, i) => (
          <SectionReveal key={post.title} delay={i * 0.08}>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <GlowCard className="group h-full flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-[#F1F5F9] font-semibold mb-3 group-hover:text-[#F97316] transition-colors leading-snug text-sm">
                  {post.title}
                </h4>
                <p className="text-[#94A3B8] text-xs leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <Heart size={12} className="text-[#F97316]" />
                  <span>{post.reactions} réactions</span>
                </div>
              </GlowCard>
            </a>
          </SectionReveal>
        ))}
      </div>

      {/* GitHub repos */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <Icon name="github" size={20} className="text-[#F59E0B]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">GitHub Open Source</h3>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-[#F59E0B] hover:text-[#F97316] flex items-center gap-1 transition-colors"
          >
            153 repos <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {projects.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.08}>
            <GlowCard className="h-full">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[#F97316] font-semibold group-hover:underline">
                    {p.title}
                  </span>
                  <ExternalLink size={14} className="text-[#94A3B8] flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
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
          <Mic size={20} className="text-[#F59E0B]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">Talks & Présentations</h3>
          <a href={links.slideshare} target="_blank" rel="noopener noreferrer"
            className="ml-auto text-sm text-[#F59E0B] hover:text-[#F97316] flex items-center gap-1 transition-colors">
            SlideShare <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {talks.map((t, i) => (
          <SectionReveal key={t.title} delay={i * 0.07}>
            <div className="glass rounded-xl p-4 flex items-start gap-4"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon name={t.icon} size={22} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-[#F1F5F9] mb-1">{t.title}</div>
                <div className="text-xs text-[#F59E0B] flex items-center gap-1">
                  <Eye size={12} /> {t.views}
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* Blog */}
      <SectionReveal>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={20} className="text-[#F59E0B]" />
          <h3 className="text-xl font-bold text-[#F1F5F9]">Articles de blog</h3>
          <a href={links.blog} target="_blank" rel="noopener noreferrer"
            className="ml-auto text-sm text-[#F59E0B] hover:text-[#F97316] flex items-center gap-1 transition-colors">
            riadhmnasri.fr <ExternalLink size={12} />
          </a>
        </div>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {blogPosts.map((post, i) => (
          <SectionReveal key={post.title} delay={i * 0.08}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <GlowCard className="group hover:border-[rgba(245,158,11,0.4)] h-full">
                <div className="text-xs text-[#F59E0B] font-mono mb-2">{post.date}</div>
                <h4 className="text-[#F1F5F9] font-semibold mb-4 group-hover:text-[#F97316] transition-colors leading-snug">
                  {post.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs text-[#94A3B8]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
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
