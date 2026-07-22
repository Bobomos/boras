import type { Metadata } from "next";
import { articles, projects } from "@/content/data";
import { isLocale, locales, type Locale } from "@/content/types";

export const siteUrl = "https://boras.design";

export function getLocale(value: string): Locale | null {
  return isLocale(value) ? value : null;
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00Z`));
}

export function getArticle(locale: Locale, slug: string) {
  return articles[locale].find((article) => article.slug === slug && !article.draft);
}

export function getProject(locale: Locale, slug: string) {
  return projects[locale].find((project) => project.slug === slug);
}

export function localizedAlternates(path = "") {
  return Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]));
}

export function pageMetadata(locale: Locale, title: string, description: string, path = ""): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: { ...localizedAlternates(path), "x-default": `${siteUrl}/en${path}` } },
    openGraph: { title, description, url, siteName: "Bora Sıpal", locale, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
