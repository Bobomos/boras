import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/content/data";
import type { Article, Locale } from "@/content/types";
import { formatDate } from "@/lib/site";
import { Arrow } from "./icons";

type ArticleListProps = {
  articles: Article[];
  locale: Locale;
  compact?: boolean;
  showCovers?: boolean;
};

export function ArticleList({ articles, locale, compact = false, showCovers = false }: ArticleListProps) {
  return (
    <div className={`article-list${compact ? " article-list--compact" : " article-list--open"}`}>
      <div className="article-cards">
        {articles.map((article) => (
          <article className={`article-card${compact ? "" : " article-card--open"}`} key={article.slug}>
            <Link className="article-card__link" href={`/${locale}/thinking/${article.slug}`}>
              {showCovers && article.coverImage ? (
                <Image
                  className="article-card__cover"
                  src={article.coverImage.src}
                  width={article.coverImage.width}
                  height={article.coverImage.height}
                  sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 888px) 90vw, 800px"
                  style={{ objectPosition: article.coverImage.objectPosition }}
                  alt=""
                />
              ) : null}
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
