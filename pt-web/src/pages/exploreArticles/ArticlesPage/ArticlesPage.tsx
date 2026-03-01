import {useEffect, useState} from "react";
import {ArticleCard} from "src/components/Articles/ArticleCard/ArticleCard";
import {listArticles} from "src/services/articlesService";
import type {ArticleSummary} from "src/types/article";
import styles from "src/pages/exploreArticles/ArticlesPage/ArticlesPage.module.scss";

export function ArticlesPage() {
  const [items, setItems] = useState<ArticleSummary[]>([]);

  useEffect(() => {
    listArticles()
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <section className={styles.list}>
          {items.map((a) => (
            <ArticleCard
              key={a.id}
              item={a}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
