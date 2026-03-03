import stokksnesArticle from "src/data/articles/stokksnes-iceland.json";
import type {Article, ArticleSummary} from "src/types/article";

const articles: Article[] = [
  stokksnesArticle as Article,
  stokksnesArticle as Article,
  stokksnesArticle as Article,
  stokksnesArticle as Article,
  stokksnesArticle as Article,
];

const articlesSummary: ArticleSummary[] = articles.map((a) => ({
  id: a.id,
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  coverUrl: a.coverUrl,
  alt: a.alt,
  author: a.author,
  featured: a.featured,
  publishedAt: a.publishedAt,
}));

export function getArticles(limit?: number): ArticleSummary[] {
  if (limit) {
    return articlesSummary.slice(0, limit);
  }

  return articlesSummary;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): ArticleSummary[] {
  return articlesSummary.filter((a) => a.featured);
}
