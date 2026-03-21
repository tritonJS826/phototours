import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {ArticleFull} from "src/components/Articles/ArticleFull/ArticleFull";
import {Loader} from "src/components/Loader/Loader";
import {useArticleBySlug} from "src/hooks/useArticles";
import {NotFoundPage} from "src/pages/notFound/notFoundPage";
import styles from "src/pages/exploreArticles/ArticlePage/ArticlePage.module.scss";

export function ArticlePage() {
  const {slug} = useParams<{ slug: string }>();
  const {data: article, isLoading, error} = useArticleBySlug(slug ?? "");

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [slug]);

  useEffect(() => {
    if (article?.title) {
      document.title = `${article.title} — PhotoTours`;
    }
  }, [article]);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !article) {
    return (
      <section>
        <NotFoundPage />
      </section>
    );
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <ArticleFull article={article} />
      </div>
    </main>
  );
}
