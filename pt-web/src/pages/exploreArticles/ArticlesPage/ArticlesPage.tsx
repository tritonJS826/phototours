import {ArticleCard} from "src/components/Articles/ArticleCard/ArticleCard";
import {Loader} from "src/components/Loader/Loader";
import {useArticles} from "src/hooks/useArticles";
import styles from "src/pages/exploreArticles/ArticlesPage/ArticlesPage.module.scss";

export function ArticlesPage() {
  const {data: items, isLoading} = useArticles();

  if (isLoading || !items) {
    return <Loader />;
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        Blog & Photography Guides
      </h1>

      <h2 className={styles.subTitle}>
        Expert insights, practical tips, and stories designed to elevate your photography and uncover the world's hidden gems.
      </h2>
      <section className={styles.list}>
        {items.map((a) => (
          <ArticleCard
            key={a.id}
            item={a}
          />
        ))}
      </section>
    </main>
  );
}
