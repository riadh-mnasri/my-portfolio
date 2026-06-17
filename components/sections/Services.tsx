"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { CONTENT } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Services"
          title={<>Ce que je peux faire <span className="gradient-text">pour vous</span></>}
          subtitle="Disponible en mission freelance à Paris et en remote. TJM : 700€/jour."
        />
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {CONTENT.services.map((service, i) => (
          <SectionReveal key={service.title} delay={i * 0.1}>
            <GlowCard className="h-full flex flex-col">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{service.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
              <div
                className="text-xs px-3 py-1.5 rounded-full font-medium w-fit"
                style={{ background: "rgba(34,211,238,0.08)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.15)" }}
              >
                → {service.target}
              </div>
            </GlowCard>
          </SectionReveal>
        ))}
      </div>

      {/* TJM Banner */}
      <SectionReveal>
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.08))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <div className="text-5xl font-bold gradient-text mb-2">700€ / jour</div>
          <p className="text-[#94A3B8] mb-6 text-lg">
            Tarif journalier moyen · Paris & Remote · Disponible dès maintenant
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}
          >
            Discutons de votre projet <ArrowRight size={16} />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
