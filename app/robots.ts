import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://riadh-mnasri.pro/sitemap.xml",
    host: "https://riadh-mnasri.pro",
  };
}
