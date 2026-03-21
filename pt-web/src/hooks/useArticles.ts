import {useQuery} from "@tanstack/react-query";
import {getArticleBySlug, listArticles} from "src/services/articlesService";

const ARTICLE_KEYS = {
  all: ["articles"] as const,
  list: (limit?: number) => [...ARTICLE_KEYS.all, "list", limit] as const,
  detail: (slug: string) => [...ARTICLE_KEYS.all, "detail", slug] as const,
};

export function useArticles(limit?: number) {
  return useQuery({
    queryKey: ARTICLE_KEYS.list(limit),
    queryFn: () => listArticles(limit),
  });
}

export function useArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ARTICLE_KEYS.detail(slug),
    queryFn: () => getArticleBySlug(slug),
    enabled: !!slug,
  });
}
