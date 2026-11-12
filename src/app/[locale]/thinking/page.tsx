import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { ContactFooter } from "@/components/contact-footer";
import { SiteHeader } from "@/components/site-header";
import { articles, siteCopy } from "@/content/data";
import { getLocale, pageMetadata } from "@/lib/site";

type LocalePageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> { const locale = getLocale((await params).locale); return locale ? pageMetadata(locale, siteCopy[locale].thinking.indexTitle, siteCopy[locale].thinking.indexIntro, "/thinking") : {}; }

export default async function ThinkingPage({ params }: LocalePageProps) {
  const locale = getLocale((await params).locale); if (!locale) notFound(); const copy = siteCopy[locale];
  return <><SiteHeader locale={locale} /><main id="main-content" className="index-page"><div className="content-column"><header className="page-intro"><p className="eyebrow">Bora Sıpal</p><h1>{copy.thinking.indexTitle}</h1><p>{copy.thinking.indexIntro}</p></header><ArticleList articles={articles[locale]} locale={locale} showCovers /></div></main><ContactFooter locale={locale} /></>;
}
