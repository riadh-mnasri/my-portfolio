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
  ],
  authors: [{ name: "Riadh MNASRI", url: "https://riadh-mnasri.com" }],
  metadataBase: new URL("https://riadh-mnasri.com"),
  alternates: {
    canonical: "https://riadh-mnasri.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    title: "Riadh MNASRI — Senior Tech Lead & Architect | AI · Cloud Native · Java",
    description:
      "20+ ans Java/Kotlin · Cloud Native AWS/Azure/GCP · Executive MBA Polytechnique · Certifié Kotlin, Spring, Java. Freelance Paris 750€/j.",
    url: "https://riadh-mnasri.com",
    siteName: "Riadh MNASRI",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riadh MNASRI — Senior Tech Lead & Architect",
    description: "20+ ans Java/Kotlin · Cloud Native · AI · Polytechnique · Freelance Paris",
    creator: "@riadhmnasri",
    site: "@riadhmnasri",
  },
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
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F1F5F9]">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
