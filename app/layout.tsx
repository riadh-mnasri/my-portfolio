import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riadh MNASRI — Senior Software Architect & Lead Developer | Paris",
  description:
    "20+ ans d'expérience Java, Kotlin, Spring. Architecte logiciel senior et lead developer freelance à Paris. Certifié Java, Spring, Kotlin. Disponible pour missions.",
  keywords: [
    "architecte logiciel",
    "lead developer java kotlin",
    "freelance paris",
    "spring certified",
    "microservices",
    "riadh mnasri",
  ],
  authors: [{ name: "Riadh MNASRI" }],
  openGraph: {
    title: "Riadh MNASRI — Senior Software Architect & Lead Developer",
    description: "20+ ans Java/Kotlin. Architecte freelance Paris. 750€/j.",
    url: "https://riadh-mnasri.com",
    siteName: "Riadh MNASRI Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riadh MNASRI — Senior Software Architect",
    description: "20+ ans Java/Kotlin. Architecte freelance Paris.",
    creator: "@riadhmnasri",
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
      </body>
    </html>
  );
}
