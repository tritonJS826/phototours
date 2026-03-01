import {getArticleBySlug as getLocalArticleBySlug, getArticles as getLocalArticles} from "src/data/articles";
import {Article, ArticleSummary} from "src/types/article";
import {buildApiUrl} from "src/utils/apiBase";

export const ARTICLES_SHOWCASE_LIMIT = 4;
const HTTP_NOT_FOUND = 404;
const USE_LOCAL_DATA = true;

function build(path: string) {
  return buildApiUrl(path);
}

export async function listArticles(limit?: number): Promise<ArticleSummary[]> {
  if (USE_LOCAL_DATA) {
    return getLocalArticles(limit);
  }

  const url = new URL(build("general/articles"));
  if (typeof limit === "number" && Number.isFinite(limit) && limit > 0) {
    url.searchParams.set("limit", String(limit));
  }
  const res = await fetch(url.toString(), {headers: {"Content-Type": "application/json"}});
  if (!res.ok) {
    throw new Error("Failed to load articles");
  }

  return res.json();
}

export async function getArticleBySlug(
  slug: string,
  opts?: { signal?: AbortSignal },
): Promise<Article | null> {
  if (USE_LOCAL_DATA) {
    return getLocalArticleBySlug(slug) ?? null;
  }

  const res = await fetch(build(`/articles/${encodeURIComponent(slug)}`), {
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
