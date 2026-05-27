# PROMPT ULTIME — Portfolio de Riadh MNASRI

---

## CONTEXTE & MISSION

Tu es un designer-développeur full-stack expert en personal branding et en UX/UI premium.
Ta mission : concevoir et coder **le meilleur portfolio professionnel qui existe** pour **Riadh MNASRI**,
Senior Software Architect & Lead Developer freelance basé à Paris, avec 20+ ans d'expérience.

Ce portfolio doit être **beau, percutant, vendeur**. Il doit convaincre en moins de 10 secondes
qu'il faut travailler avec Riadh. Chaque pixel, chaque mot, chaque animation a un rôle commercial.

---

## IDENTITÉ — QUI EST RIADH

**Riadh MNASRI** est un architecte logiciel senior et lead developer freelance à Paris.

- **20+ ans d'expérience** en développement Java/JEE et architecture d'entreprise
- **Certifications** : Java Certified Professional, Spring Certified Professional, Kotlin Certified Developer
- **TJM Malt** : 750 €/jour
- **Clients** : Galeries Lafayette, Enedis, BforBank, Société Générale, Manpower, WeHighTech
- **Communauté** : speaker JUG, Devoxx, BBL, Meetup Paris — contributeur open-source (Arctic Code Vault)
- **Auteur** : blog technique [techpassionsharing.com](https://techpassionsharing.com), présentations SlideShare
- **Langues** : Français natif, Anglais C1 (TOEIC 835/990)

**Ce qui le différencie :**
Riadh n'est pas juste un développeur — c'est un **artisan du code**, un **transmetteur de savoir**
et un **leader technique** qui conjugue excellence craft, vision architecture et partage communautaire.

---

## STACK TECHNIQUE DU PORTFOLIO

```
Framework    : Next.js 15 (App Router)
Styling      : Tailwind CSS v4 + CSS custom properties
Animations   : Framer Motion (scroll-driven, entrance, hover)
3D / WebGL   : Three.js ou React Three Fiber (hero section)
Typo         : Geist (headings) + Inter (body)
Icons        : Lucide React
Déploiement  : Vercel (avec Analytics + Speed Insights)
SEO          : next/metadata, sitemap.xml, robots.txt
```

---

## DIRECTION ARTISTIQUE

### Palette de couleurs
```
Background  : #0A0A0F (noir profond, pas pur)
Surface     : #111118
Primary     : #6366F1 (indigo vif)
Accent      : #22D3EE (cyan électrique)
Text        : #F1F5F9 (blanc doux)
Muted       : #94A3B8
Border      : rgba(255,255,255,0.06)
Gradient    : linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)
```

### Ambiance visuelle
- Fond sombre élégant (dark premium, pas cheapy)
- Glassmorphism subtil sur les cards (backdrop-filter: blur)
- Particules / constellation en arrière-plan (Three.js)
- Lignes de code animées façon Matrix mais premium
- Dégradés lumineux discrets (glow effects)
- Typographie grande, aérée, audacieuse

### Ton éditorial
- **Confiant sans arrogance** — les faits parlent d'eux-mêmes
- **Humain et accessible** — passionné, communauté, pédagogie
- **Précis et quantifié** — 20 ans, 750€/jour, 1 200 vues, 110 repos
- **Bilingue FR/EN** — le portfolio doit switcher instantanément (i18n)

---

## ARCHITECTURE DES SECTIONS

### 1. HERO — L'accroche qui stoppe le scroll

Layout : Plein écran, centré verticalement
Background : Canvas Three.js avec particules connectées animées

**Headline (animée lettre par lettre) :**
```
Riadh MNASRI
Senior Software Architect & Lead Developer
```

**Sous-titre (fade-in delayed) :**
```
20 ans de Java. Des architectures qui tiennent.
Du code qui dure. Des équipes qui progressent.
```

**Badges animés (pill tags) :**
`Java ☑ Certifié` · `Kotlin ☑ Certifié` · `Spring ☑ Certifié` · `Paris · Freelance · 750€/j`

**CTA double :**
- Bouton primaire : `Voir mes projets` (scroll smooth vers Projects)
- Bouton ghost : `Me contacter` (scroll vers Contact)

**Stat bar animée (compteurs qui s'incrémentent) :**
```
20+   ans d'expérience
110   projets GitHub
750€  TJM journalier
3     certifications
1.2K  vues "Git l'essentiel"
```

---

### 2. ABOUT — L'humain derrière le code

Layout : 2 colonnes — photo à gauche, texte à droite

**Photo :** Avatar professionnel avec border gradient animé (halo tournant)

**Texte :**
```
Je conçois des architectures qui tiennent dans le temps et des équipes
qui montent en compétences. Depuis 20 ans, j'ai bâti des systèmes critiques
pour des acteurs majeurs — banques, utilities, retail — avec une obsession :
un code clean, testable, évolutif.

Passionné de Kotlin, speaker dans les conférences Java, auteur de tutoriels
et formateur informel. Pour moi, coder c'est artisanat. Chaque ligne compte.

Aujourd'hui disponible en freelance à Paris — et partout en remote.
```

**Timeline interactive :**
```
2024  ▸ Apache Spark & Scala — Data engineering
2023  ▸ Terraform & IaC — Infrastructure as Code
2020  ▸ Kotlin Certified Developer
2020  ▸ Tech Lead — Galeries Lafayette
2017  ▸ Spring Certified Professional + WeHighTech
2012  ▸ BforBank — Java Architect
2007  ▸ Sun Certified Java Programmer
2004  ▸ Diplôme Ingénieur Informatique (EMI)
```

---

### 3. SKILLS — La preuve par la tech

Layout : Grid de cartes avec hover glow

**Catégories visuelles avec icônes :**

```
⚙️  Architecture
    Microservices · DDD · SOA · REST · Event-Driven

☕  JVM & Langages
    Java 21 · Kotlin · Scala · JavaScript · Shell

🌱  Frameworks
    Spring Boot · Spring · Micronaut · Hibernate · Angular

🗄️  Data & Search
    Apache Kafka · RabbitMQ · Elasticsearch · PostgreSQL · Oracle

🚀  DevOps & Cloud
    Docker · Terraform · Jenkins · Maven · Gradle · Linux

🔬  Qualité & Méthodo
    TDD · BDD · Clean Code · SCRUM · XP · Sonar · Git
```

**Niveaux de maîtrise :** Barres animées au scroll, pas de % (trop subjectif) — plutôt des labels : Expert / Avancé / Maîtrisé

---

### 4. EXPÉRIENCE — Le parcours qui rassure

Layout : Vertical timeline avec cards expandables

**Entrées (de la plus récente à la plus ancienne) :**

```
🏢 WeHighTech (2017 – présent)
   Technical Leader & Lead Developer
   Full-stack, architecture microservices, mentoring d'équipe,
   intégration des best practices craft.

🛍️ Galeries Lafayette (2020)
   Tech Lead Java/Kotlin
   Migration microservices, craftsmanship, partage de connaissances.

⚡ Enedis (2017 – 2020)
   Senior Developer
   Contribution architecture, développement Kotlin/TypeScript.

🏦 BforBank (2012 – 2016)
   Architecte Java
   Design architecture, leadership technique, automatisation tooling.

🏦 Société Générale / Manpower / ...
   Senior Java Developer
   Systèmes financiers enterprise, JEE, performance.
```

---

### 5. PROJETS & CONTRIBUTIONS — La preuve par les réalisations

Layout : Masonry grid (3 col desktop, 1 col mobile), cards avec preview

**GitHub Highlights (avec fetch live de l'API GitHub) :**
```
📦 kotlin-training        — Samples pédagogiques Kotlin
📦 kotlin-live-coding     — Sessions live coding Kotlin
📦 micronaut-example      — Demo Micronaut framework
📦 kata-java8             — Coding dojo Java 8
📦 kotlin-arrowkt         — Kotlin Everywhere Paris 2019
```

**Talks & Présentations (avec vignettes SlideShare) :**
```
🎤 Architectures Microservices    — 871 vues
🎤 Git l'essentiel                — 1 200 vues
🎤 Discover Micronaut             — 306 vues
🎤 Kotlin ArrowKt                 — 318 vues
🎤 BBL Reactive Programming       — 197 vues
🎤 Functional Programming Kotlin  — 122 vues
```

**Blog posts (avec dates et tags) :**
```
📝 Analyzing Weather Data with Apache Spark & Scala (Sept 2024)
📝 Creating Your First Terraform Module (Oct 2023)
📝 Indexing Content with Elasticsearch & Spring Boot (May 2020)
📝 Getting started with Kotlin (May 2020)
```

---

### 6. CERTIFICATIONS — La crédibilité certifiée

Layout : Cards avec badge doré, date, organisme

```
🏅 Kotlin Certified Developer     — JetBrains (2020)
🏅 Spring Certified Professional  — VMware/Pivotal (2012, renouvelé)
🏅 Sun Certified Java Programmer  — Oracle/Sun (2007)
🏅 English C1 Advanced            — British Council (2017)
   TOEIC 835/990
```

---

### 7. COMMUNAUTÉ — L'engagement qui différencie

Layout : Grille de cards avec logos et chiffres clés

```
☕  JUG Paris          — Membre actif Java User Group
🎪  Devoxx France      — Participant & speaker
🥪  Brown Bag Lunch    — Speaker (sessions formation)
🤝  Meetup Paris Tech  — Organisateur & speaker
🐙  GitHub             — 110 repos · Arctic Code Vault Contributor
✍️   Blog technique     — techpassionsharing.com
🐘  Mastodon           — @riadhmnasri@mastodon.social
🐦  Twitter/X          — @riadhmnasri
```

---

### 8. TESTIMONIALS — La preuve sociale

Layout : Carousel avec photos, noms, entreprises

> Placeholder pour les recommandations LinkedIn — importer dynamiquement ou copier-coller les plus impactantes.

Structure de chaque testimonial :
```
Photo + Nom + Titre + Entreprise
"Citation..." (max 3 lignes)
★★★★★
```

---

### 9. SERVICES — Ce qu'il offre concrètement

Layout : 3 cards principales avec CTA

```
🏗️  Architecture & Design Technique
    Conception d'architectures microservices, revue de code,
    définition des standards techniques.
    → Pour les DSI, CTO, startups en croissance

👨‍💻  Lead Developer & Tech Lead
    Pilotage technique d'équipes, mentoring, mise en place
    des pratiques craft (TDD, Clean Code, DDD).
    → Pour les équipes qui veulent monter en niveau

📚  Formation & Knowledge Sharing
    BBL, workshops, talks internes sur Java, Kotlin,
    microservices, bonnes pratiques.
    → Pour les équipes et les conférences
```

**TJM affiché clairement : 750 €/jour**
**Disponibilité : À préciser dans le contact**

---

### 10. CONTACT — La conversion finale

Layout : Split — formulaire à gauche, infos + liens à droite

**Formulaire (avec validation Zod + Server Actions Next.js) :**
```
Prénom / Nom
Email
Entreprise (optionnel)
Type de mission (Architecture / Lead Dev / Formation / Autre)
Message
[Envoyer →]
```

**Infos directes :**
```
📧  riadh.mnasri@gmail.com
📍  Paris, France (Remote OK)
💼  malt.fr/profile/riadhmnasri
🔗  linkedin.com/in/riadhmnasri
🐙  github.com/riadh-mnasri
```

**Indicateur de disponibilité :**
```
🟢 Disponible pour missions — [mois/année]
```

---

## FEATURES TECHNIQUES AVANCÉES

### Performance & SEO
```js
// Metadata dynamique
export const metadata = {
  title: "Riadh MNASRI — Senior Software Architect & Lead Developer | Paris",
  description: "20 ans d'expérience Java, Kotlin, Spring. Architecte logiciel senior freelance à Paris. Certifié Java, Spring, Kotlin. Disponible pour missions.",
  keywords: ["architecte logiciel", "lead developer java kotlin", "freelance paris", "spring certified", "microservices"],
  openGraph: { /* image preview rich */ },
  twitter: { /* card large */ }
}
```

### GitHub API Live
```ts
// Fetch repos en temps réel depuis l'API GitHub publique
const repos = await fetch('https://api.github.com/users/riadh-mnasri/repos?sort=updated&per_page=6')
// Affiche : stars, langage, dernière update, description
```

### Animations Framer Motion
```ts
// Scroll-triggered reveals sur chaque section
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

// Compteurs animés (useInView + useSpring)
const count = useSpring(0, { duration: 2000 })
// → 0 → 20 (ans), 0 → 110 (repos), 0 → 750 (TJM)
```

### Three.js Hero Canvas
```ts
// Réseau de particules connectées (constellation)
// Réagit au mouvement de la souris (parallax)
// Couleurs : indigo #6366F1 + cyan #22D3EE
// Performance : requestAnimationFrame optimisé, moins de 200 particules
```

### i18n FR/EN
```
app/
  [locale]/
    layout.tsx
    page.tsx
messages/
  fr.json
  en.json
```

### Mode sombre natif
- Seul mode disponible (c'est le design principal)
- `prefers-color-scheme: dark` respecté d'office

---

## STRUCTURE DES FICHIERS

```
my-portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/route.ts      ← Envoi email (Resend)
│   │   └── github/route.ts       ← Proxy GitHub API
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Community.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── AnimatedCounter.tsx
│   │   ├── GlowCard.tsx
│   │   ├── ParticleCanvas.tsx
│   │   ├── Timeline.tsx
│   │   └── Badge.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/
│   ├── github.ts
│   └── content.ts               ← Toutes les données du portfolio
├── messages/
│   ├── fr.json
│   └── en.json
├── public/
│   └── riadh-photo.jpg
└── vercel.ts
```

---

## RÈGLES DE QUALITÉ

1. **Lighthouse score ≥ 95** sur Performance, Accessibilité, SEO
2. **Core Web Vitals** : LCP < 2.5s, CLS < 0.1, FID < 100ms
3. **Responsive** : Mobile-first, testé sur 320px → 1920px
4. **Accessible** : aria-labels, contraste WCAG AA, navigation clavier
5. **Pas de CLS** : réserver les espaces images avec width/height
6. **Fonts** : `next/font` avec `display: swap`
7. **Images** : `next/image` + WebP + lazy loading
8. **Animations** : `prefers-reduced-motion` respecté

---

## DÉPLOIEMENT

```bash
# 1. Init
npx create-next-app@latest my-portfolio --typescript --tailwind --app --turbopack

# 2. Dépendances
npm install framer-motion three @react-three/fiber @react-three/drei
npm install next-intl resend zod react-hook-form
npm install lucide-react clsx tailwind-merge

# 3. Deploy
vercel --prod
```

**Domaine cible :** `riadh-mnasri.com` (déjà enregistré)
**Analytics :** Vercel Analytics activé
**Speed Insights :** Vercel Speed Insights activé

---

## RÉSULTAT ATTENDU

Un portfolio qui :
- **Arrête le scroll** avec un hero magnétique en < 3 secondes
- **Rassure** avec 20 ans d'expérience et 3 certifications visibles immédiatement
- **Convainc** avec des chiffres concrets, des logos clients, des contributions réelles
- **Convertit** avec un CTA clair vers le formulaire de contact ou Malt
- **Impressionne** par sa qualité technique (c'est un portfolio de dev, il doit être parfait)
- **Référence** en SEO sur "architecte logiciel java kotlin paris freelance"

---

*Données source : linkedin.com/in/riadhmnasri · malt.fr/profile/riadhmnasri*
*techpassionsharing.com · github.com/riadh-mnasri · slideshare.net/riadhmnasri*
