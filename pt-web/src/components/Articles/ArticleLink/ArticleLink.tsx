import {Link} from "react-router-dom";
import type {ArticleSummary} from "src/types/article";
import styles from "src/components/Articles/Articles.module.scss";

type Props = {
  a: ArticleSummary;
  className?: string;
};

export function ArticleLink({a, className = ""}: Props) {
  return (
    <article className={`${styles.card} ${className}`}>
      <Link
        to={`/articles/${a.slug}`}
        className={styles.cardLink}
        aria-label={a.title}
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
  );
}
