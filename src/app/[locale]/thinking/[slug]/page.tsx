import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { Arrow } from "@/components/icons";
import { RichText } from "@/components/rich-text";
import { SiteHeader } from "@/components/site-header";
import { articles, siteCopy } from "@/content/data";
import { locales } from "@/content/types";
import { formatDate, getArticle, getLocale, pageMetadata, siteUrl } from "@/lib/site";

export function generateStaticParams() { return locales.flatMap((locale) => articles[locale].map((article) => ({ locale, slug: article.slug }))); }
type ArticlePageProps = { params: Promise<{ locale: string; slug: string }> };
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> { const values = await params; const locale = getLocale(values.locale); const article = locale ? getArticle(locale, values.slug) : null; return locale && article ? { ...pageMetadata(locale, article.seoTitle, article.seoDescription, `/thinking/${article.slug}`), openGraph: { title: article.seoTitle, description: article.seoDescription, type: "article", publishedTime: article.publishedAt, url: `${siteUrl}/${locale}/thinking/${article.slug}` } } : {}; }

export default async function ArticlePage({ params }: ArticlePageProps) {
  const values = await params; const locale = getLocale(values.locale); if (!locale) notFound(); const article = getArticle(locale, values.slug); if (!article) notFound();
  const related = articles[locale].filter((item) => item.slug !== article.slug).slice(0, 2);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: { "@type": "Person", name: "Bora Sıpal", url: siteUrl }, mainEntityOfPage: `${siteUrl}/${locale}/thinking/${article.slug}` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SiteHeader locale={locale} /><main id="main-content" className="article-page"><article><header className="article-header"><Link className="back-link" href={`/${locale}/thinking`}><Arrow direction="left" />{siteCopy[locale].thinking.back}</Link><h1>{article.title}</h1><time dateTime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>{article.intro ? <p>{article.intro}</p> : null}</header><RichText blocks={article.body} /></article><aside className="related"><h2>{siteCopy[locale].thinking.related}</h2><ArticleList articles={related} locale={locale} /></aside></main></>;
}
