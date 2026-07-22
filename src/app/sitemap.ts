import type { MetadataRoute } from "next";
import { articles, projects } from "@/content/data";
import { locales } from "@/content/types";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    { url: `${siteUrl}/${locale}`, changeFrequency: "monthly" as const, priority: locale === "en" ? 1 : 0.9 },
    { url: `${siteUrl}/${locale}/thinking`, changeFrequency: "weekly" as const, priority: 0.8 },
    ...articles[locale].filter((article) => !article.draft).map((article) => ({ url: `${siteUrl}/${locale}/thinking/${article.slug}`, lastModified: article.updatedAt ?? article.publishedAt, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${siteUrl}/${locale}/work`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...projects[locale].map((project) => ({ url: `${siteUrl}/${locale}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: project.featured ? 0.8 : 0.6 })),
  ]);
}
