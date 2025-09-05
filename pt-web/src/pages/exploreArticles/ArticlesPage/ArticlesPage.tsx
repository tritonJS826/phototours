import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {listArticles} from "src/api/articles";
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
            <article
              key={a.id}
              className={styles.card}
            >
              <Link
                to={`/articles/${a.slug}`}
                className={styles.cardLink}
                aria-label={a.title}
              >
                <div className={styles.pict}>
                  <img
                    src={a.coverUrl}
                    alt={a.alt ?? a.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>
                    {a.title}
                  </h3>
                  <p className={styles.excerpt}>
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
