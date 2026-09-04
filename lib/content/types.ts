export type Locale = "fr" | "en";

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  event: string;
  color?: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  items: string[];
}

export interface DomainItem {
  icon: string;
  sector: string;
  color: string;
  client: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  emoji: string;
  highlights: string[];
  stack: string;
}

export interface EducationItem {
  school: string;
  logo: string;
  degree: string;
  field: string;
  promo: string;
  year: string;
  highlight: boolean;
  color: string;
  project: string;
  skills: string[];
  url: string;
}

export interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  url: string;
}

export interface TalkItem {
  title: string;
  views: string;
  icon: string;
}

export interface LinkedInPost {
  title: string;
  excerpt: string;
  tags: string[];
  reactions: number;
}

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  url: string;
}

export interface CertificationItem {
  name: string;
  org: string;
  year: string;
  color: string;
  featured: boolean;
}

export interface CommunityItem {
  icon: string;
  name: string;
  desc: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  target: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  emoji: string;
  color: string;
}

export interface DifferentiatorItem {
  icon: string;
  color: string;
  gradient: string;
  border: string;
  tag: string;
  title: string;
  body: string;
  kpis: string[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    personJobTitle: string;
    personDescription: string;
  };

  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };

  floatingCta: string;

  hero: {
    availability: string;
    name: string;
    title: string;
    subtitle: string;
    tagline: string;
    badges: string[];
    ctaContact: string;
    ctaProjects: string;
    maltLabel: string;
    location: string;
    scroll: string;
    photoAlt: string;
    polytechniqueBadge: string;
    stats: StatItem[];
  };

  clientLogos: {
    label: string;
  };

  about: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    bio: string[];
    tags: string[];
    timeline: TimelineItem[];
  };

  aiSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    impacts: { value: string; label: string; detail: string }[];
    toolsLabel: string;
    certifiedLabel: string;
    journeyLabel: string;
    timeline: TimelineItem[];
    thoughtLeadershipLabel: string;
    thoughtLeadershipTitle: string;
    followLinkedIn: string;
    reactionsLabel: string;
  };

  whyMe: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    differentiators: DifferentiatorItem[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  skills: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    categories: SkillCategory[];
    domainDividerLabel: string;
    domains: DomainItem[];
    moreLabel: string;
    moreDesc: string;
  };

  experience: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    stackLabel: string;
    items: ExperienceItem[];
  };

  education: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    projectLabel: string;
    skillsLabel: string;
    items: EducationItem[];
  };

  projects: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    linkedinInsightsTitle: string;
    followersLabel: string;
    reactionsLabel: string;
    githubTitle: string;
    reposLabel: string;
    talksTitle: string;
    slideshareLabel: string;
    blogTitle: string;
    blogLabel: string;
    items: ProjectItem[];
    talks: TalkItem[];
    linkedinPosts: LinkedInPost[];
    blogPosts: BlogPost[];
  };

  certifications: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    aiBadge: string;
    allLabel: string;
    communityTitlePrefix: string;
    communityTitleHighlight: string;
    items: CertificationItem[];
    community: CommunityItem[];
  };

  testimonials: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: TestimonialItem[];
    footerPrefix: string;
    footerLinkLabel: string;
  };

  services: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    items: ServiceItem[];
    dayRateBig: string;
    dayRateSubtitle: string;
    ctaButton: string;
  };

  contact: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    sentTitle: string;
    sentDesc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    typePlaceholder: string;
    typeOptions: string[];
    messagePlaceholder: string;
    errorMessage: string;
    sendingLabel: string;
    sendLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    maltLabel: string;
    maltCta: string;
    findMeLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    blogLabel: string;
    availableLabel: string;
    dayRate: string;
  };

  footer: {
    role: string;
    lastUpdatedLabel: string;
  };

  chat: {
    toggleOpen: string;
    toggleClose: string;
    title: string;
    subtitle: string;
    emptyPrompt: string;
    suggestions: string[];
    inputPlaceholder: string;
    errorMessage: string;
  };

  links: {
    github: string;
    linkedin: string;
    malt: string;
    blog: string;
    twitter: string;
    slideshare: string;
    email: string;
  };
}
