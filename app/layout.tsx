import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "KAv0oEIcvHbps_v7thzdNDWrU_Bns-e7_OQF8TZ5Tk0",
  },
  title: "Riadh MNASRI — Senior Tech Lead & Architect | Cloud Native · AI · Java · Paris",
  description:
    "Senior Tech Lead & Architect freelance à Paris. 20+ ans d'expérience Java/Kotlin, Cloud Native (AWS, Azure, GCP), AI Integration. Executive MBA École Polytechnique. Certifié Java, Spring, Kotlin. Disponible pour missions.",
  keywords: [
    "riadh mnasri",
    "senior tech lead paris",
    "architecte logiciel freelance",
    "lead developer java kotlin",
    "cloud native aws azure gcp",
    "executive master polytechnique",
    "spring certified developer",
    "microservices architect paris",
    "ai integration java",
    "freelance tech lead paris",
    "risque de contrepartie",
    "finance de marche java",
    "tech lead société générale",
  ],
  authors: [{ name: "Riadh MNASRI", url: "https://riadh-mnasri.pro" }],
  metadataBase: new URL("https://riadh-mnasri.pro"),
  alternates: {
    canonical: "https://riadh-mnasri.pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    title: "Riadh MNASRI — Senior Tech Lead & Architect | AI · Cloud Native · Java",
    description:
      "20+ ans Java/Kotlin · Cloud Native AWS/Azure/GCP · Executive MBA Polytechnique · Certifié Kotlin, Spring, Java. Freelance Paris 700€/j.",
    url: "https://riadh-mnasri.pro",
    siteName: "Riadh MNASRI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/riadh-photo.jpg",
        width: 512,
        height: 512,
        alt: "Riadh MNASRI — Senior Tech Lead & Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riadh MNASRI — Senior Tech Lead & Architect",
    description: "20+ ans Java/Kotlin · Cloud Native · AI · Polytechnique · Freelance Paris",
    creator: "@riadhmnasri",
    site: "@riadhmnasri",
    images: ["/riadh-photo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Riadh MNASRI",
  url: "https://riadh-mnasri.pro",
  jobTitle: "Senior Tech Lead & Architect",
  description: "Senior Tech Lead & Architect freelance spécialisé Java/Kotlin, Cloud Native, AI Integration. 20+ ans d'expérience. Executive MBA École Polytechnique.",
  sameAs: [
    "https://www.linkedin.com/in/riadhmnasri",
    "https://github.com/riadh-mnasri",
    "https://www.malt.fr/profile/riadhmnasri",
    "https://x.com/riadhmnasri",
  ],
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  knowsAbout: ["Java", "Kotlin", "Spring Boot", "Cloud Native", "AWS", "Azure", "GCP", "Microservices", "AI Integration", "Apache Spark", "Kubernetes"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "École Polytechnique" },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Claude Code 101", credentialCategory: "Certification", recognizedBy: { "@type": "Organization", name: "Anthropic" } },
    { "@type": "EducationalOccupationalCredential", name: "Kotlin Certified Developer", recognizedBy: { "@type": "Organization", name: "JetBrains" } },
    { "@type": "EducationalOccupationalCredential", name: "Spring Certified Professional", recognizedBy: { "@type": "Organization", name: "VMware" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F1F5F9]">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
