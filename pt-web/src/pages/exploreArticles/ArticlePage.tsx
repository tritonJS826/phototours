import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticleBySlug} from "src/api/articles";
import {ArticleFull} from "src/components/Articles/ArticleFull/ArticleFull";
import type {Article} from "src/types/article";

export function ArticlePage() {
  const {slug} = useParams<{slug: string}>();
  const [article, setArticle] = useState<Article | null>(null);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    if (!slug) {
      return;
    }
    getArticleBySlug(slug)
      .then(setArticle)
      .catch(() => setErr("Failed to load article"));
  }, [slug]);

  if (err) {
    return (
      <div className="container">
        <p>
          {err}
        </p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return <ArticleFull article={article} />;
}
