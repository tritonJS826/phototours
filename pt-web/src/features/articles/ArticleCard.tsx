import {Link} from "react-router-dom";
import type {Article} from "src/features/articles/articles.data";
import styles from "src/features/articles/Articles.module.scss";

export function ArticleCard({a}: { a: Article }) {
  return (
    <article>
      <Link
        to={`/articles/${a.slug}`}
        className={styles.cardLink}
        aria-label={a.title}
      >
        <div className={styles.card}>
          <div className={styles.cardPict}>
            <img
              src={a.cover}
              alt={a.alt}
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
        </div>
      </Link>
    </article>
  );
}
