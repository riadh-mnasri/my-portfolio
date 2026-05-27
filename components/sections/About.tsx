"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";

export function About() {
  const { about } = CONTENT;

  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="À propos"
          title={<>L&apos;humain derrière <span className="gradient-text">le code</span></>}
        />
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Bio */}
        <SectionReveal>
          <div className="space-y-5">
            {about.bio.map((para, i) => (
              <p key={i} className="text-[#94A3B8] text-lg leading-relaxed">
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              {["Artisan du code", "Speaker", "Mentor", "Open-source", "AI Pioneer"].map((tag) => (
                <span key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1", border: "1px solid rgba(99,102,241,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { n: "−50%", label: "temps de traitement @ SGCIB" },
                { n: "+30%", label: "vélocité dev avec l'IA" },
                { n: "99.9%", label: "disponibilité architectures" },
              ].map((kpi) => (
                <div key={kpi.label} className="glass rounded-xl p-3 text-center"
                  style={{ border: "1px solid rgba(99,102,241,0.1)" }}>
                  <div className="text-xl font-bold gradient-text mb-1">{kpi.n}</div>
                  <div className="text-[10px] text-[#94A3B8] leading-tight">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <SectionReveal delay={0.2}>
          <div className="relative">
            <div className="absolute left-3.5 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #6366F1, #22D3EE, transparent)" }} />

            <ol className="space-y-5 pl-10">
              {about.timeline.map((item, i) => (
                <li key={i} className="relative">
                  <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full border-2"
                    style={{ background: "#0A0A0F", borderColor: "#6366F1" }} />
                  <div className="text-xs font-mono text-[#6366F1] mb-0.5 tracking-wider">{item.year}</div>
                  <div className="text-[#F1F5F9] text-sm">{item.event}</div>
                </li>
              ))}
            </ol>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
