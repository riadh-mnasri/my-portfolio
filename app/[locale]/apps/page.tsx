import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { AppCatalog } from "@/components/sections/AppCatalog";
import { catalogContent } from "@/lib/content/catalog";
import { routing } from "@/i18n/routing";

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
  const content = catalogContent[locale === "en" ? "en" : "fr"];
  const path = locale === routing.defaultLocale ? "/apps" : `/${locale}/apps`;
  const url = `${SITE_URL}${path}`;
  const keywords = Array.from(
    new Set(content.categories.flatMap((c) => c.apps.flatMap((a) => [...a.tags, ...a.techStack]))),
  );

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/apps`,
        en: `${SITE_URL}/en/apps`,
        "x-default": `${SITE_URL}/apps`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      siteName: "Riadh MNASRI",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default async function AppsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = catalogContent[locale === "en" ? "en" : "fr"];

  return (
    <>
      <AppCatalog content={content} />
      <Footer />
    </>
  );
}
