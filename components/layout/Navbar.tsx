"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#ai", label: "IA & Innovation" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Expérience" },
  { href: "#education", label: "Formation" },
  { href: "#projects", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["about", "ai", "skills", "why-me", "experience", "education", "projects", "certifications", "services", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Scroll progress
      const doc = document.documentElement;
      const totalHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(totalHeight > 0 ? (y / totalHeight) * 100 : 0);

      // Active section
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => active === href.replace("#", "");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}>

      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 h-[2px] transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6366F1, #22D3EE)",
          boxShadow: "0 0 8px rgba(99,102,241,0.6)",
        }} />

      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg gradient-text flex-shrink-0">
          Riadh MNASRI
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a href={l.href}
                className="text-sm transition-colors duration-200 pb-0.5"
                style={{ color: isActive(l.href) ? "#F1F5F9" : "#94A3B8" }}>
                {l.label}
              </a>
              {/* Active underline */}
              {isActive(l.href) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg,#6366F1,#22D3EE)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li>
            <a href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}>
              Me contacter
            </a>
          </li>
        </ul>

        <button className="lg:hidden text-[#94A3B8] hover:text-white"
          onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[rgba(255,255,255,0.06)]">
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm transition-colors"
                    style={{ color: isActive(l.href) ? "#6366F1" : "#94A3B8" }}>
                    {isActive(l.href) ? "▸ " : ""}{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
