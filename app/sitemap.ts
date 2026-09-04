import { MetadataRoute } from "next";

const SITE_URL = "https://riadh-mnasri.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = { fr: SITE_URL, en: `${SITE_URL}/en` };

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
