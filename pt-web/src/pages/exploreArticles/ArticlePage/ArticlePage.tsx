import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticleBySlug} from "src/api/articles";
import {ArticleFull} from "src/components/Articles/ArticleFull/ArticleFull";
import type {Article} from "src/types/article";
import styles from "src/pages/exploreArticles/ArticlePage/ArticlePage.module.scss";

export function ArticlePage() {
  const {slug} = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
    didMount.current = true;

    if (!slug) {
      setErr("Invalid article slug");
      setLoading(false);

      return;
    }

    const abort = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await getArticleBySlug(slug, {signal: abort.signal});
        if (!data) {
          setErr("Article not found");
          setArticle(null);

          return;
        }
        setArticle(data);
        document.title = `${data.title} — PhotoTours`;
      } catch {
        if (!abort.signal.aborted) {
          setErr("Failed to load article");
          setArticle(null);
        }
      } finally {
        if (!abort.signal.aborted) {
          setLoading(false);
        }
      }
    })();

    return () => abort.abort();
  }, [slug]);

  return (
    <main className={styles.page}>
      <div className="container">
        {loading && (
          <div
            className={styles.loading}
            role="status"
            aria-live="polite"
          >
            <div className={`${styles.bar} ${styles["w-60"]}`} />
            <div className={`${styles.bar} ${styles["w-80"]}`} />
            <div className={`${styles.bar} ${styles["w-100"]}`} />
            <div className={`${styles.bar} ${styles["w-40"]}`} />
          </div>
        )}

        {!loading && err && (
          <p className={styles.error}>
            {err}
          </p>
        )}

        {!loading && !err && article && (
          <ArticleFull article={article} />
        )}
      </div>
    </main>
  );
}
