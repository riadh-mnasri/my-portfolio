# Riadh MNASRI — Portfolio

> Senior Tech Lead & Architect · AI-Driven Solutions · Cloud Native · Java & Kotlin Expert  
> **[riadh-mnasri.com](https://riadh-mnasri.com)**

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
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
- **Why Me** — 3 différenciateurs : Vision Stratégique · Performance · AI-Ready
- **Skills** — 6 catégories tech : Architecture, JVM, Cloud, AI, Data, Qualité
- **Experience** — Accordion : SGCIB, GRTgaz, Casino, Ministère de la Justice, WeHighTech
- **Education** — Executive MBA École Polytechnique (featured) + certif + ingénieur
- **Projects** — GitHub repos · LinkedIn posts · Talks SlideShare · Blog
- **Certifications** — 6 certifs dont Claude Code 101 & Subagents (Anthropic 2026)
- **Services** — 3 offres freelance + bannière TJM 750€/j
- **Contact** — Formulaire + liens directs

## Lancer en local

\`\`\`bash
npm install
npm run dev
\`\`\`

Ouvre [http://localhost:3000](http://localhost:3000)

## Modifier le contenu

Tout le contenu est centralisé dans un seul fichier :

\`\`\`
lib/content.ts
\`\`\`

Modifie ce fichier pour mettre à jour textes, expériences, projets, certifications, liens.

## Activer l'envoi d'emails (contact form)

1. Crée un compte sur [resend.com](https://resend.com) (gratuit)
2. Génère une API key
3. Ajoute-la dans Vercel :

\`\`\`bash
vercel env add RESEND_API_KEY
\`\`\`

## Déployer

\`\`\`bash
git push  # → déploiement automatique via Vercel Git integration
# ou manuellement :
vercel --prod
\`\`\`

## Structure

\`\`\`
my-portfolio/
├── app/
│   ├── api/contact/route.ts   # Formulaire de contact
│   ├── layout.tsx             # Metadata SEO + domaine
│   ├── page.tsx               # Assemblage des sections
│   ├── sitemap.ts             # /sitemap.xml auto
│   └── robots.ts              # /robots.txt auto
├── components/
│   ├── layout/                # Navbar (scroll progress + active link) · Footer
│   ├── sections/              # Hero · ClientLogos · About · WhyMe · Skills · ...
│   └── ui/                    # AnimatedCounter · GlowCard · ParticleCanvas · FloatingCTA · ...
├── lib/
│   └── content.ts             # ← toutes les données du site
└── public/
    └── riadh-photo.jpg
\`\`\`

---

Built with [Claude Code](https://claude.ai/code) · Deployed on [Vercel](https://vercel.com)
