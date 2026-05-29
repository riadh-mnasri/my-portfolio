# Riadh MNASRI — Portfolio

> Senior Tech Lead & Architect · AI-Driven Solutions · Cloud Native · Java & Kotlin Expert  
> **[riadh-mnasri.pro](https://riadh-mnasri.pro)**

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Canvas | Canvas API (particle network) |
| Language | TypeScript |
| Deployment | Vercel |
| Emails | Resend (API route `/api/contact`) |

## Sections

- **Hero** — Split layout, photo avec anneau gradient animé, compteurs, CTAs
- **Client Logos** — Bandeau défilant SGCIB · GRTgaz · Casino · Justice · Polytechnique
- **About** — Bio, KPIs chiffrés (−50% @ SGCIB, +30% vélocité IA), timeline
- **AI & Innovation** — Section dédiée IA : outils maîtrisés, parcours, thought leadership
- **Why Me** — 3 différenciateurs : Vision Stratégique · Performance · AI-Ready
- **Skills** — 6 catégories tech + 5 domaines métier (Finance, Énergie, Retail, Justice, Conseil)
- **Experience** — SGCIB, GRTgaz, Casino, Ministère de la Justice, WeHighTech
- **Education** — Executive MBA École Polytechnique (featured) + certif + ingénieur
- **Projects** — GitHub repos · LinkedIn posts · Talks SlideShare · Blog
- **Certifications** — 19 certifications (Anthropic, Google Cloud, VMware, Sun, Coursera...)
- **Testimonials** — Retours clients (SGCIB, GRTgaz, Casino)
- **Services** — 3 offres freelance + bannière TJM 700€/j
- **Contact** — Formulaire + liens directs

## 🏆 Certifications (19)

### IA & Anthropic
| Certification | Organisme | Année |
|---|---|---|
| Claude Code 101 | Anthropic | 2026 |
| Introduction to Subagents | Anthropic | 2026 |
| Introduction to Agent Skills | Anthropic | 2026 |
| Découvrir Claude IA d'Anthropic | LinkedIn | 2026 |
| Claude Code in Action | Anthropic | 2026 |

### Cloud & AI
| Certification | Organisme | Année |
|---|---|---|
| Gen AI: Unlock Foundational Concepts | Google Cloud | 2025 |
| IA : au-delà du chatbot | Google Cloud | 2025 |
| L'essentiel d'Apache Spark | LinkedIn | 2024 |
| Introduction to Generative AI | Google | 2023 |
| Introducing Semantic Kernel: Building AI Apps | LinkedIn | 2023 |
| L'essentiel de Google Cloud Platform | LinkedIn | 2021 |

### Architecture & DevOps
| Certification | Organisme | Année |
|---|---|---|
| Software Architecture: Domain-Driven Design | LinkedIn | 2021 |
| Découvrir Terraform | LinkedIn | 2022 |
| Se lancer dans le recrutement indépendant | LinkedIn | 2023 |

### JVM & Web
| Certification | Organisme | Année |
|---|---|---|
| Spring Certified Professional | VMware / SpringSource | 2012 |
| Sun Certified Java Programmer (SCJP) | Sun MicroSystems | 2007 |
| Kotlin for Java Developers | Coursera | 2020 |
| Angular par la pratique | Udemy | 2020 |
| Javascript: La formation ULTIME | Udemy | 2020 |

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Modifier le contenu

Tout le contenu est centralisé dans un seul fichier :

```
lib/content.ts
```

Modifie ce fichier pour mettre à jour textes, expériences, projets, certifications, liens.

## Activer l'envoi d'emails (contact form)

1. Crée un compte sur [resend.com](https://resend.com) (gratuit)
2. Ajoute ton domaine `riadh-mnasri.pro` dans Resend
3. Génère une API key
4. Ajoute-la dans Vercel :

```bash
vercel env add RESEND_API_KEY production
vercel --prod
```

## Déployer

```bash
git push  # → déploiement automatique via Vercel Git integration
# ou manuellement :
vercel --prod
```

## Structure

```
my-portfolio/
├── app/
│   ├── api/contact/route.ts   # Formulaire de contact
│   ├── layout.tsx             # Metadata SEO + JSON-LD + domaine
│   ├── page.tsx               # Assemblage des sections
│   ├── sitemap.ts             # /sitemap.xml auto
│   └── robots.ts              # /robots.txt auto
├── components/
│   ├── layout/                # Navbar · Footer
│   ├── sections/              # Hero · About · AISection · Skills · Experience · ...
│   └── ui/                    # AnimatedCounter · GlowCard · SectionReveal · FloatingCTA · ...
├── lib/
│   └── content.ts             # ← toutes les données du site
└── public/
    └── riadh-photo.jpg
```

---

Built with [Claude Code](https://claude.ai/code) · Deployed on [Vercel](https://vercel.com)
