"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Photo */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-col items-center gap-5">
            {/* Animated gradient border ring */}
            <div className="relative w-52 h-52 md:w-60 md:h-60 mx-auto">
              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6366F1, #22D3EE, #6366F1)",
                  padding: "3px",
                  borderRadius: "9999px",
                }}
              />
              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden"
                style={{ background: "#0A0A0F" }}>
                <Image
                  src="/riadh-photo.jpg"
                  alt="Riadh MNASRI — Senior Software Architect"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Name + role under photo */}
            <div className="text-center">
              <div className="font-bold text-[#F1F5F9] text-lg">Riadh MNASRI</div>
              <div className="text-sm text-[#6366F1]">Senior Software Architect</div>
              <div className="text-xs text-[#94A3B8] mt-1">Paris · Freelance</div>
            </div>
          </div>
        </SectionReveal>

        {/* Bio — span 2 cols */}
        <div className="md:col-span-2 space-y-8">
          <SectionReveal delay={0.15}>
            <div className="space-y-5">
              {about.bio.map((para, i) => (
                <p key={i} className="text-[#94A3B8] text-lg leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                {["Artisan du code", "Speaker", "Mentor", "Open-source"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      color: "#6366F1",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Timeline */}
          <SectionReveal delay={0.25}>
            <div className="relative">
              <div
                className="absolute left-3.5 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #6366F1, #22D3EE, transparent)" }}
              />
              <ol className="space-y-5 pl-10">
                {about.timeline.map((item, i) => (
                  <li key={i} className="relative">
                    <div
                      className="absolute -left-[26px] top-1 w-3 h-3 rounded-full border-2"
                      style={{ background: "#0A0A0F", borderColor: "#6366F1" }}
                    />
                    <div className="text-xs font-mono text-[#6366F1] mb-0.5 tracking-wider">
                      {item.year}
                    </div>
                    <div className="text-[#F1F5F9] text-sm">{item.event}</div>
                  </li>
                ))}
              </ol>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
