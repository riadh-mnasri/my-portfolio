"use client";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTENT } from "@/lib/content";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const { links } = CONTENT;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-[#F1F5F9] text-sm outline-none focus:border-[rgba(99,102,241,0.5)] transition-colors placeholder-[#94A3B8]";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Contact"
          title={<>Parlons de votre <span className="gradient-text">projet</span></>}
          subtitle="Une mission, une formation, un audit technique ? Je réponds en moins de 24h."
        />
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <SectionReveal>
          {status === "sent" ? (
            <div
              className="glass rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center gap-4"
              style={{ border: "1px solid rgba(34,211,238,0.2)" }}
            >
              <div className="text-5xl">🎉</div>
              <h3 className="text-2xl font-bold text-[#F1F5F9]">Message envoyé !</h3>
              <p className="text-[#94A3B8]">Je vous réponds dans les 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Prénom / Nom *"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={inputClass}
                  style={inputStyle}
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                className={inputClass}
                style={inputStyle}
                placeholder="Entreprise (optionnel)"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
              />
              <select
                className={inputClass}
                style={inputStyle}
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
              >
                <option value="" style={{ background: "#111118" }}>Type de mission</option>
                <option style={{ background: "#111118" }}>Architecture technique</option>
                <option style={{ background: "#111118" }}>Lead Developer / Tech Lead</option>
                <option style={{ background: "#111118" }}>Formation / BBL</option>
                <option style={{ background: "#111118" }}>Autre</option>
              </select>
              <textarea
                className={inputClass}
                style={{ ...inputStyle, resize: "none" }}
                placeholder="Décrivez votre besoin... *"
                rows={5}
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">Une erreur est survenue. Contactez-moi directement par email.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg,#6366F1,#22D3EE)" }}
              >
                {status === "sending" ? "Envoi..." : (<><Send size={16} /> Envoyer le message</>)}
              </button>
            </form>
          )}
        </SectionReveal>

        {/* Info */}
        <SectionReveal delay={0.2}>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(99,102,241,0.15)" }}>
                  <Mail size={16} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] mb-0.5">Email</div>
                  <a href={`mailto:${links.email}`} className="text-[#F1F5F9] hover:text-[#6366F1] transition-colors text-sm">
                    {links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(99,102,241,0.15)" }}>
                  <MapPin size={16} className="text-[#6366F1]" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] mb-0.5">Localisation</div>
                  <span className="text-[#F1F5F9] text-sm">Paris, France · Remote OK</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(34,211,238,0.1)" }}>
                  <span className="text-sm">💼</span>
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] mb-0.5">Malt</div>
                  <a href={links.malt} target="_blank" rel="noopener noreferrer"
                    className="text-[#22D3EE] hover:underline text-sm flex items-center gap-1">
                    Voir mon profil Malt <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="text-sm font-semibold text-[#F1F5F9] mb-4">Retrouvez-moi sur</div>
              <div className="flex gap-3">
                {[
                  { href: links.github, icon: <GithubIcon size={18} />, label: "GitHub" },
                  { href: links.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                  { href: links.blog, icon: <span className="text-sm">✍️</span>, label: "Blog" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-5 text-center"
              style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <div className="flex items-center justify-center gap-2 text-sm text-[#94A3B8] mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponible pour missions
              </div>
              <div className="text-[#6366F1] font-bold text-lg">700€ / jour</div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
