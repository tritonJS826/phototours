import {fetchData} from "src/services/httpHelper";
import {Article, ArticleSummary} from "src/types/article";
import {buildApiUrl} from "src/utils/apiBase";

export const ARTICLES_SHOWCASE_LIMIT = 4;
const HTTP_NOT_FOUND = 404;

export async function listArticles(limit?: number): Promise<ArticleSummary[]> {
  const url = new URL(buildApiUrl("articles"));
  if (typeof limit === "number" && Number.isFinite(limit) && limit > 0) {
    url.searchParams.set("limit", String(limit));
  }
  const res = await fetch(url.toString(), {headers: {"Content-Type": "application/json"}});
  if (!res.ok) {
    throw new Error("Failed to load articles");
  }
  const result = await res.json();

  return result;
}

export async function getArticleBySlug(
  slug: string,
  opts?: { signal?: AbortSignal },
): Promise<Article | null> {
  const res = await fetch(buildApiUrl(`articles/${encodeURIComponent(slug)}`), {
    headers: {"Content-Type": "application/json"},
    signal: opts?.signal,
  });

  if (!res.ok) {
    if (res.status === HTTP_NOT_FOUND) {
      return null;
    }
    throw new Error("Failed to load article");
  }

  return res.json();
}

export interface AdminArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  alt?: string;
  author?: string;
  featured: boolean;
  createdAt: string;
  blocks: Array<{type: string; content?: string; src?: string; alt?: string}>;
}

export interface CreateArticleData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  alt?: string;
  author?: string;
  featured: boolean;
  blocks: Array<{type: string; content?: string; src?: string; alt?: string}>;
}

export async function listAdminArticles(): Promise<AdminArticle[]> {
  return fetchData<AdminArticle[]>("general/articles/admin");
}

export async function getAdminArticle(id: string): Promise<AdminArticle> {
  return fetchData<AdminArticle>(`general/articles/admin/${encodeURIComponent(id)}`);
}

export async function createArticle(data: CreateArticleData): Promise<AdminArticle> {
  return fetchData<AdminArticle>("general/articles/admin", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateArticle(id: string, data: CreateArticleData): Promise<AdminArticle> {
  return fetchData<AdminArticle>(`general/articles/admin/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteArticle(id: string): Promise<void> {
  return fetchData<void>(`general/articles/admin/${encodeURIComponent(id)}`, {method: "DELETE"});
}
