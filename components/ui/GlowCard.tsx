"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className = "", glowColor = "rgba(99,102,241,0.15)" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: `0 20px 60px ${glowColor}` }}
      transition={{ duration: 0.2 }}
      className={`glass rounded-2xl p-6 transition-colors duration-300 hover:border-[rgba(99,102,241,0.3)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
