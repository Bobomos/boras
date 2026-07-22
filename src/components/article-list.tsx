import Link from "next/link";
import { siteCopy } from "@/content/data";
import type { Article, Locale } from "@/content/types";
import { formatDate } from "@/lib/site";
import { Arrow } from "./icons";

export function ArticleList({ articles, locale, compact = false }: { articles: Article[]; locale: Locale; compact?: boolean }) {
  return (
    <div className={`article-list${compact ? " article-list--compact" : " article-list--open"}`}>
      <div className="article-cards">
        {articles.map((article) => (
          <article className={`article-card${compact ? "" : " article-card--open"}`} key={article.slug}>
            <Link className="article-card__link" href={`/${locale}/thinking/${article.slug}`}>
              <h3>{article.title}</h3>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
              <Arrow />
            </Link>
            <div className="article-card__reveal">
              <div>
                <p>{article.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      {compact ? <Link className="text-link" href={`/${locale}/thinking`}>{siteCopy[locale].thinking.all} <span aria-hidden="true">→</span></Link> : null}
    </div>
  );
}
