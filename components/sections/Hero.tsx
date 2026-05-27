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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: 0 }}
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 glass"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#94A3B8]">Disponible pour missions freelance</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text">{hero.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-3xl font-light text-[#94A3B8] mb-2"
        >
          {hero.title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl md:text-3xl font-light text-[#94A3B8] mb-8"
        >
          {hero.subtitle}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-xl text-[#F1F5F9] max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ whiteSpace: "pre-line" }}
        >
          {hero.tagline}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {hero.badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full text-sm font-medium glass text-[#F1F5F9]"
              style={{ border: "1px solid rgba(99,102,241,0.3)" }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-[#F1F5F9] glass border border-[rgba(99,102,241,0.3)] hover:border-[rgba(99,102,241,0.6)] transition-all duration-200"
          >
            Me contacter
          </a>
          <a
            href={links.malt}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-[#F1F5F9] glass border border-[rgba(34,211,238,0.3)] hover:border-[rgba(34,211,238,0.6)] transition-all duration-200 flex items-center gap-2"
          >
            Malt — 750€/j <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-5 mt-10"
        >
          <a href={links.github} target="_blank" rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
            <GithubIcon size={22} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#6366F1] transition-colors">
            <LinkedinIcon size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
