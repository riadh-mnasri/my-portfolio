"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink } from "lucide-react";

const education = [
  {
    school: "École Polytechnique",
    logo: "🏛️",
    degree: "Executive MBA",
    field: "Stratège de la Transformation Numérique",
    promo: "Promotion 7",
    year: "2024",
    highlight: true,
    color: "#F59E0B",
    project: "Transformation d'un distributeur de produits de cybersécurité en fournisseur de services managés.",
    skills: [
      "Concevoir et impulser la stratégie de transformation numérique",
      "Créer de la valeur à partir des technologies de pointe",
      "Construire des business models basés sur l'innovation technologique",
      "Déclencher et animer la dynamique collective de transformation",
      "Accompagner les collectifs dans le changement",
    ],
    url: "https://www.polytechnique.edu/executive-education",
  },
  {
    school: "École Polytechnique",
    logo: "🎓",
    degree: "Certification",
    field: "Digital Business — Act on the Digital World",
    promo: "",
    year: "2023",
    highlight: false,
    color: "#6366F1",
    project: "",
    skills: [],
    url: "https://www.polytechnique.edu/executive-education",
  },
  {
    school: "EMI — École Mohammadia d'Ingénieurs",
    logo: "⚙️",
    degree: "Diplôme d'Ingénieur",
    field: "Génie Informatique",
    promo: "",
    year: "2004",
    highlight: false,
    color: "#22D3EE",
    project: "",
    skills: [],
    url: "",
  },
];

export function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <SectionHeader
          label="Formation"
          title={<>Excellence <span className="gradient-text">académique</span></>}
          subtitle="Une formation d'ingénieur ancrée dans la technique, élevée par une vision stratégique de haut niveau."
        />
      </SectionReveal>

      <div className="space-y-6 max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <SectionReveal key={`${edu.school}-${edu.year}`} delay={i * 0.1}>
            {edu.highlight ? (
              /* Featured card for Polytechnique */
              <motion.div
                whileHover={{ y: -2 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(99,102,241,0.06) 100%)",
                  border: "1px solid rgba(245,158,11,0.3)",
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #F59E0B, #6366F1)" }} />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                        style={{ background: "rgba(245,158,11,0.12)" }}
                      >
                        {edu.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                            style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}
                          >
                            {edu.degree}
                          </span>
                          {edu.promo && (
                            <span className="text-xs text-[#94A3B8]">{edu.promo}</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-[#F1F5F9] leading-snug">
                          {edu.field}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#F59E0B] font-semibold text-sm">{edu.school}</span>
                          {edu.url && (
                            <a href={edu.url} target="_blank" rel="noopener noreferrer"
                              className="text-[#94A3B8] hover:text-[#F59E0B] transition-colors">
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#F59E0B] flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>

                  {/* Project */}
                  {edu.project && (
                    <div
                      className="rounded-xl p-4 mb-6"
                      style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.1)" }}
                    >
                      <div className="text-xs uppercase tracking-widest text-[#F59E0B] mb-2 font-semibold">
                        Projet de transformation
                      </div>
                      <p className="text-[#F1F5F9] text-sm leading-relaxed">{edu.project}</p>
                    </div>
                  )}

                  {/* Competences */}
                  {edu.skills.length > 0 && (
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3 font-semibold">
                        Compétences développées
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {edu.skills.map((skill, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                            <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">▸</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Standard card */
              <div
                className="glass rounded-2xl p-6 flex items-center gap-5"
                style={{ border: `1px solid ${edu.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${edu.color}12` }}
                >
                  {edu.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: edu.color }}
                  >
                    {edu.degree}
                  </div>
                  <div className="text-[#F1F5F9] font-semibold text-sm truncate">{edu.field}</div>
                  <div className="text-[#94A3B8] text-xs mt-0.5">{edu.school}</div>
                </div>
                <span className="text-lg font-bold font-mono flex-shrink-0" style={{ color: edu.color }}>
                  {edu.year}
                </span>
              </div>
            )}
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
