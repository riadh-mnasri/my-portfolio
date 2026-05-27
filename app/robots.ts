import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://riadh-mnasri.com/sitemap.xml",
    host: "https://riadh-mnasri.com",
  };
}
