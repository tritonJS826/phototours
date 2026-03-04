import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {ArticleFull} from "src/components/Articles/ArticleFull/ArticleFull";
import {Loader} from "src/components/Loader/Loader";
import {NotFoundPage} from "src/pages/notFound/notFoundPage";
import {getArticleBySlug} from "src/services/articlesService";
import type {Article} from "src/types/article";
import styles from "src/pages/exploreArticles/ArticlePage/ArticlePage.module.scss";

export function ArticlePage() {
  const {slug} = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
    didMount.current = true;

    if (!slug) {
      setError(true);
      setLoading(false);

      return;
    }

    const abort = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getArticleBySlug(slug, {signal: abort.signal});
        if (!data) {
          setError(true);

          return;
        }
        setArticle(data);
        document.title = `${data.title} — PhotoTours`;
      } catch {
        if (!abort.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abort.signal.aborted) {
          setLoading(false);
        }
      }
    })();

    return () => abort.abort();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section>
        <NotFoundPage />
      </section>
    );
  }

  return (
    <main className={styles.page}>
      <div className="container">
        {article && (
          <ArticleFull article={article} />
        )}
      </div>
    </main>
  );
}
