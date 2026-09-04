import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { routing } from "@/i18n/routing";
import { getContent, Locale } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://riadh-mnasri.pro";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale as Locale);
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  const url = `${SITE_URL}${path}`;

  return {
    verification: {
      google: "KAv0oEIcvHbps_v7thzdNDWrU_Bns-e7_OQF8TZ5Tk0",
    },
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: "Riadh MNASRI", url: SITE_URL }],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        fr: SITE_URL,
        en: `${SITE_URL}/en`,
        "x-default": SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1 },
    },
    openGraph: {
      title: content.meta.ogTitle,
      description: content.meta.ogDescription,
      url,
      siteName: "Riadh MNASRI",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.twitterTitle,
      description: content.meta.twitterDescription,
      creator: "@riadhmnasri",
      site: "@riadhmnasri",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const content = getContent(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riadh MNASRI",
    url: SITE_URL,
    jobTitle: content.meta.personJobTitle,
    description: content.meta.personDescription,
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

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F1F5F9]">
        <NextIntlClientProvider locale={locale}>
          <MotionProvider>
            {children}
            <FloatingCTA />
            <ChatWidget />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
