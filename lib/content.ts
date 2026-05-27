export const CONTENT = {
  hero: {
    name: "Riadh MNASRI",
    title: "Senior Software Architect",
    subtitle: "& Lead Developer",
    tagline: "20 ans de Java. Des architectures qui tiennent.\nDu code qui dure. Des équipes qui progressent.",
    badges: ["Java ☑ Certifié", "Kotlin ☑ Certifié", "Spring ☑ Certifié", "Paris · Freelance · 750€/j"],
    stats: [
      { value: 20, suffix: "+", label: "ans d'expérience" },
      { value: 110, suffix: "", label: "projets GitHub" },
      { value: 750, suffix: "€", label: "TJM journalier" },
      { value: 3, suffix: "", label: "certifications" },
    ],
  },

  about: {
    bio: [
      "Je conçois des architectures qui tiennent dans le temps et des équipes qui montent en compétences. Depuis 20 ans, j'ai bâti des systèmes critiques pour des acteurs majeurs — banques, utilities, retail — avec une obsession : un code clean, testable, évolutif.",
      "Passionné de Kotlin, speaker dans les conférences Java, auteur de tutoriels et formateur informel. Pour moi, coder c'est artisanat. Chaque ligne compte.",
      "Aujourd'hui disponible en freelance à Paris — et partout en remote.",
    ],
    timeline: [
      { year: "2024", event: "Apache Spark & Scala — Data engineering" },
      { year: "2023", event: "Terraform & IaC — Infrastructure as Code" },
      { year: "2020", event: "Kotlin Certified Developer — JetBrains" },
      { year: "2020", event: "Tech Lead — Galeries Lafayette" },
      { year: "2017", event: "Spring Certified Professional + WeHighTech" },
      { year: "2012", event: "BforBank — Java Architect" },
      { year: "2007", event: "Sun Certified Java Programmer" },
      { year: "2004", event: "Diplôme Ingénieur Informatique (EMI)" },
    ],
  },

  skills: [
    {
      icon: "⚙️",
      category: "Architecture",
      items: ["Microservices", "DDD", "SOA", "REST", "Event-Driven", "CQRS"],
    },
    {
      icon: "☕",
      category: "JVM & Langages",
      items: ["Java 21", "Kotlin", "Scala", "JavaScript", "TypeScript", "Shell"],
    },
    {
      icon: "🌱",
      category: "Frameworks",
      items: ["Spring Boot", "Spring", "Micronaut", "Hibernate", "JPA", "Angular"],
    },
    {
      icon: "📡",
      category: "Data & Messaging",
      items: ["Apache Kafka", "RabbitMQ", "Apache Spark", "Elasticsearch", "PostgreSQL", "Oracle"],
    },
    {
      icon: "🚀",
      category: "DevOps & Cloud",
      items: ["Docker", "Terraform", "Jenkins", "Maven", "Gradle", "Linux", "Git"],
    },
    {
      icon: "🔬",
      category: "Qualité & Méthodo",
      items: ["TDD", "BDD", "Clean Code", "SCRUM", "XP", "Sonar", "IntelliJ"],
    },
  ],

  experience: [
    {
      company: "WeHighTech",
      role: "Technical Leader & Lead Developer",
      period: "2017 – présent",
      emoji: "🏢",
      highlights: [
        "Architecture microservices et design technique",
        "Mentoring et montée en compétences des équipes",
        "Mise en place des best practices craft (TDD, Clean Code, DDD)",
        "Full-stack Java/Kotlin + Angular",
      ],
    },
    {
      company: "Galeries Lafayette",
      role: "Tech Lead Java/Kotlin",
      period: "2020",
      emoji: "🛍️",
      highlights: [
        "Migration vers une architecture microservices",
        "Évangélisation craftsmanship au sein des équipes",
        "Partage de connaissances et formation interne",
      ],
    },
    {
      company: "Enedis",
      role: "Senior Developer",
      period: "2017 – 2020",
      emoji: "⚡",
      highlights: [
        "Contribution à l'architecture des systèmes critiques",
        "Développement Kotlin & TypeScript",
        "Revues de code et standards qualité",
      ],
    },
    {
      company: "BforBank",
      role: "Architecte Java",
      period: "2012 – 2016",
      emoji: "🏦",
      highlights: [
        "Design d'architecture pour systèmes bancaires",
        "Leadership technique et pilotage d'équipe",
        "Automatisation tooling et CI/CD",
      ],
    },
    {
      company: "Société Générale & autres",
      role: "Senior Java Developer",
      period: "2004 – 2012",
      emoji: "🏛️",
      highlights: [
        "Systèmes enterprise Java/JEE en environnement financier",
        "Conception et développement de solutions hautes performances",
      ],
    },
  ],

  projects: [
    {
      title: "kotlin-training",
      desc: "Samples pédagogiques Kotlin — utilisé pour formations et BBL",
      tags: ["Kotlin", "Formation"],
      url: "https://github.com/riadh-mnasri/kotlin-training",
    },
    {
      title: "micronaut-example",
      desc: "Démo complète du framework Micronaut pour microservices JVM",
      tags: ["Java", "Micronaut", "Microservices"],
      url: "https://github.com/riadh-mnasri/micronaut-example",
    },
    {
      title: "kotlin-live-coding",
      desc: "Samples live coding Kotlin présentés en conférences",
      tags: ["Kotlin", "Live Coding"],
      url: "https://github.com/riadh-mnasri/kotlin-live-coding",
    },
    {
      title: "kata-java8",
      desc: "Coding dojo — exercices Java 8 Streams, Lambda, Optional",
      tags: ["Java", "TDD", "Kata"],
      url: "https://github.com/riadh-mnasri/kata-java8",
    },
  ],

  talks: [
    { title: "Architectures Microservices", views: "871 vues", icon: "🏗️" },
    { title: "Git l'essentiel", views: "1 200 vues", icon: "🐙" },
    { title: "Discover Micronaut", views: "306 vues", icon: "🚀" },
    { title: "Kotlin ArrowKt", views: "318 vues", icon: "🎯" },
    { title: "BBL Reactive Programming", views: "197 vues", icon: "⚡" },
    { title: "Functional Programming with Kotlin", views: "122 vues", icon: "λ" },
  ],

  blogPosts: [
    {
      title: "Analyzing Weather Data with Apache Spark & Scala",
      date: "Septembre 2024",
      tags: ["Apache Spark", "Scala", "Data"],
      url: "https://techpassionsharing.com",
    },
    {
      title: "Creating Your First Terraform Module",
      date: "Octobre 2023",
      tags: ["Terraform", "IaC", "DevOps"],
      url: "https://techpassionsharing.com",
    },
    {
      title: "Indexing Content with Elasticsearch & Spring Boot",
      date: "Mai 2020",
      tags: ["Elasticsearch", "Spring Boot", "Kotlin"],
      url: "https://techpassionsharing.com",
    },
    {
      title: "Getting started with Kotlin",
      date: "Mai 2020",
      tags: ["Kotlin", "Java"],
      url: "https://techpassionsharing.com",
    },
  ],

  certifications: [
    {
      name: "Kotlin Certified Developer",
      org: "JetBrains",
      year: "2020",
      color: "#F97316",
    },
    {
      name: "Spring Certified Professional",
      org: "VMware / Pivotal",
      year: "2012",
      color: "#22C55E",
    },
    {
      name: "Sun Certified Java Programmer",
      org: "Oracle / Sun",
      year: "2007",
      color: "#EF4444",
    },
    {
      name: "English C1 Advanced",
      org: "British Council · TOEIC 835/990",
      year: "2017",
      color: "#3B82F6",
    },
  ],

  community: [
    { icon: "☕", name: "JUG Paris", desc: "Java User Group — Membre actif" },
    { icon: "🎪", name: "Devoxx France", desc: "Participant & speaker" },
    { icon: "🥪", name: "Brown Bag Lunch", desc: "Speaker & formateur" },
    { icon: "🤝", name: "Meetup Tech Paris", desc: "Speaker & organisateur" },
    { icon: "🐙", name: "GitHub", desc: "110 repos · Arctic Code Vault Contributor" },
    { icon: "✍️", name: "Blog Technique", desc: "techpassionsharing.com" },
  ],

  services: [
    {
      icon: "🏗️",
      title: "Architecture & Design Technique",
      desc: "Conception d'architectures microservices, revue de code, définition des standards techniques et des patterns à adopter.",
      target: "DSI, CTO, startups en croissance",
    },
    {
      icon: "👨‍💻",
      title: "Lead Developer & Tech Lead",
      desc: "Pilotage technique d'équipes, mentoring, mise en place des pratiques craft (TDD, Clean Code, DDD). Lead by example.",
      target: "Équipes qui veulent monter en niveau",
    },
    {
      icon: "📚",
      title: "Formation & Knowledge Sharing",
      desc: "BBL, workshops, talks internes sur Java, Kotlin, microservices, bonnes pratiques. Pédagogie au cœur.",
      target: "Équipes dev et conférences tech",
    },
  ],

  links: {
    github: "https://github.com/riadh-mnasri",
    linkedin: "https://www.linkedin.com/in/riadhmnasri",
    malt: "https://www.malt.fr/profile/riadhmnasri",
    blog: "https://techpassionsharing.com",
    twitter: "https://x.com/riadhmnasri",
    slideshare: "https://www.slideshare.net/riadhmnasri",
    email: "riadh.mnasri@gmail.com",
  },
};
