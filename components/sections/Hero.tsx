"use client";
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CONTENT } from "@/lib/content";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const { hero, links } = CONTENT;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: 0 }}
    >
      <ParticleCanvas />

      {/* Glow left */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)",
      }} />
      {/* Glow right */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 50% at 75% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col items-start order-2 lg:order-1">

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 glass"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[#94A3B8]">Disponible pour missions freelance</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
            >
              <span className="gradient-text">{hero.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#94A3B8] font-light mb-1"
            >
              {hero.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base text-[#94A3B8] font-light mb-6"
            >
              {hero.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[#F1F5F9] text-base leading-relaxed mb-6 max-w-lg"
              style={{ whiteSpace: "pre-line" }}
            >
              {hero.tagline}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {hero.badges.map((badge) => (
                <span key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-medium glass text-[#F1F5F9]"
                  style={{ border: "1px solid rgba(99,102,241,0.3)" }}>
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#contact"
                className="px-7 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}>
                Me contacter
              </a>
              <a href="#projects"
                className="px-7 py-3 rounded-xl font-semibold text-[#F1F5F9] glass border border-[rgba(99,102,241,0.3)] hover:border-[rgba(99,102,241,0.6)] transition-all text-sm">
                Voir mes projets
              </a>
              <a href={links.malt} target="_blank" rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl font-semibold text-[#22D3EE] glass border border-[rgba(34,211,238,0.25)] hover:border-[rgba(34,211,238,0.5)] transition-all text-sm flex items-center gap-1.5">
                Malt · 750€/j <ExternalLink size={12} />
              </a>
            </motion.div>

            {/* Social + Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-5"
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <div className="w-px h-5 bg-[rgba(255,255,255,0.1)]" />
              <span className="text-xs text-[#94A3B8]">Paris · Hybride · Remote</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo + Stats ── */}
          <div className="flex flex-col items-center gap-8 order-1 lg:order-2">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer glow pulse */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                }}
              />

              {/* Spinning gradient ring */}
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #6366F1 0%, #22D3EE 40%, #6366F1 60%, #A78BFA 80%, #6366F1 100%)",
                  }}
                />

                {/* Mask ring to show only border */}
                <div className="absolute inset-[3px] rounded-full"
                  style={{ background: "#0A0A0F" }} />

                {/* Photo */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/riadh-photo.jpg"
                    alt="Riadh MNASRI — Senior Tech Lead & Architect"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Polytechnique badge — floating bottom right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #F97316)",
                    color: "#0A0A0F",
                    boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                  }}
                >
                  🏛️ Polytechnique
                </motion.div>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 w-full max-w-xs"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                  style={{ border: "1px solid rgba(99,102,241,0.15)" }}>
                  <div className="text-2xl font-bold gradient-text mb-0.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
