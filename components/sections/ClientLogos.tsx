"use client";
import { motion } from "framer-motion";

const clients = [
  { name: "Société Générale CIB", abbr: "SGCIB", icon: "🏦", color: "#E31837" },
  { name: "GRTgaz", abbr: "GRTgaz", icon: "⚡", color: "#F97316" },
  { name: "Groupe Casino", abbr: "Casino", icon: "🛒", color: "#22C55E" },
  { name: "Ministère de la Justice", abbr: "Justice", icon: "⚖️", color: "#6366F1" },
  { name: "WeHighTech", abbr: "WeHighTech", icon: "🚀", color: "#22D3EE" },
  { name: "École Polytechnique", abbr: "Polytechnique", icon: "🏛️", color: "#F59E0B" },
];

// Duplicated for seamless infinite loop
const track = [...clients, ...clients, ...clients];

export function ClientLogos() {
  return (
    <div className="w-full overflow-hidden py-12 relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0A0A0F, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0A0A0F, transparent)" }} />

      {/* Label */}
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#94A3B8]">
          Ils m&apos;ont fait confiance
        </span>
      </div>

      {/* Scrolling track */}
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {track.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-xl flex-shrink-0 glass"
            style={{
              border: `1px solid ${client.color}22`,
              minWidth: "180px",
            }}
          >
            <span className="text-xl">{client.icon}</span>
            <div>
              <div className="text-sm font-semibold text-[#F1F5F9] whitespace-nowrap">
                {client.abbr}
              </div>
              <div className="text-[10px] text-[#94A3B8] whitespace-nowrap truncate max-w-[120px]">
                {client.name}
              </div>
            </div>
            {/* Color dot */}
            <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: client.color }} />
          </div>
        ))}
      </motion.div>

      {/* Separator line */}
      <div className="mt-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.3), rgba(34,211,238,0.3), transparent)" }} />
      </div>
    </div>
  );
}
