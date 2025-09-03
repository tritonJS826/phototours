import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ARTICLES_SHOWCASE_LIMIT, listArticles} from "src/api/articles";
import type {ArticleSummary} from "src/types/article";
import styles from "src/pages/homePage/ArticlesShowcase/ArticlesShowcase.module.scss";

type ArticlesShowcaseProps = {
  className?: string;
};

export function ArticlesShowcase({className = ""}: ArticlesShowcaseProps) {
  const [items, setItems] = useState<ArticleSummary[]>([]);

  useEffect(() => {
    listArticles(ARTICLES_SHOWCASE_LIMIT)
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  if (!items.length) {
    return null;
  }

  const [first, ...rest] = items;

  return (
    <section className={`${styles.showcase} ${className}`}>
      <div className={styles.showcaseGrid}>
        <article className={`${styles.card} ${styles.featured}`}>
          <Link
            to={`/articles/${first.slug}`}
            className={styles.cardLink}
          >
            <div className={styles.cardPict}>
              <img
                src={first.coverUrl}
                alt={first.alt || first.title}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>
                {first.title}
              </h3>
              <p className={styles.cardExcerpt}>
                {first.excerpt}
              </p>
              <button className={styles.cardBtn}>
                Read More
              </button>
            </div>
          </Link>
        </article>

        {rest.map(a => (
          <article
            key={a.id}
            className={`${styles.card} ${styles.compact}`}
          >
            <Link
              to={`/articles/${a.slug}`}
              className={styles.cardLink}
            >
              <div className={styles.cardPict}>
                <img
                  src={a.coverUrl}
                  alt={a.alt || a.title}
                  className={styles.cardImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  {a.title}
                </h3>
                <p className={styles.cardExcerpt}>
                  {a.excerpt}
                </p>
                <button className={styles.cardBtn}>
                  Read More
                </button>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

