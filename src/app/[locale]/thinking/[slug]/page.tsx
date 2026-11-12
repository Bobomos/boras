import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/article-list";
import { Arrow } from "@/components/icons";
import { ReadingProgress } from "@/components/reading-progress";
import { RichText } from "@/components/rich-text";
import { SiteHeader } from "@/components/site-header";
import { articles, siteCopy } from "@/content/data";
import { locales } from "@/content/types";
import { formatDate, getArticle, getLocale, pageMetadata, siteUrl } from "@/lib/site";

export function generateStaticParams() { return locales.flatMap((locale) => articles[locale].map((article) => ({ locale, slug: article.slug }))); }
type ArticlePageProps = { params: Promise<{ locale: string; slug: string }> };
const readingProgressLabels = { en: "Reading progress", it: "Avanzamento della lettura", tr: "Okuma ilerlemesi" };
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> { const values = await params; const locale = getLocale(values.locale); const article = locale ? getArticle(locale, values.slug) : null; return locale && article ? { ...pageMetadata(locale, article.seoTitle, article.seoDescription, `/thinking/${article.slug}`), openGraph: { title: article.seoTitle, description: article.seoDescription, type: "article", publishedTime: article.publishedAt, url: `${siteUrl}/${locale}/thinking/${article.slug}` } } : {}; }

export default async function ArticlePage({ params }: ArticlePageProps) {
  const values = await params; const locale = getLocale(values.locale); if (!locale) notFound(); const article = getArticle(locale, values.slug); if (!article) notFound();
  const related = articles[locale]
    .filter((item) => item.slug !== article.slug && !item.draft)
    .map((item) => ({ item, sharedTags: item.tags.filter((tag) => article.tags.includes(tag)).length }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, 2)
    .map(({ item }) => item);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: { "@type": "Person", name: "Bora Sıpal", url: siteUrl }, mainEntityOfPage: `${siteUrl}/${locale}/thinking/${article.slug}` };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="article-site-header">
        <SiteHeader locale={locale} />
        <ReadingProgress key={article.slug} articleId="article-content" label={readingProgressLabels[locale]} />
      </div>
      <main id="main-content" className="article-page">
        <article id="article-content">
          <header className="article-header">
            <Link className="back-link" href={`/${locale}/thinking`}><Arrow direction="left" />{siteCopy[locale].thinking.back}</Link>
            {article.coverImage ? (
              <Image
                className="article-header__cover"
                src={article.coverImage.src}
                width={article.coverImage.width}
                height={article.coverImage.height}
                sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 844px) 90vw, 760px"
                loading="eager"
                fetchPriority="high"
                alt=""
              />
            ) : null}
            <h1>{article.title}</h1>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
            {article.intro ? <p>{article.intro}</p> : null}
          </header>
          <RichText blocks={article.body} />
        </article>
        {related.length > 0 ? (
          <aside className="related" aria-labelledby="related-writing-heading">
            <h2 id="related-writing-heading">{siteCopy[locale].thinking.related}</h2>
            <ArticleList articles={related} locale={locale} showCovers />
          </aside>
        ) : null}
      </main>
    </>
  );
}
