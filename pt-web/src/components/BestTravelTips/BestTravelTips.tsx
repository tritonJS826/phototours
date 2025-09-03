import {Link} from "react-router-dom";
import type {ArticleSummary} from "src/types/article";
import styles from "src/components/BestTravelTips/BestTravelTips.module.scss";

interface BestTravelTipsProps {
  items: ArticleSummary[];
  title: string;
  subtitle: string;
  className?: string;
}

const FIRST_INDEX = 0 as const;
const DEFAULT_FEATURED_COUNT = 1;
const DEFAULT_GRID_COLUMNS = 3;

export function BestTravelTips({items, title, subtitle, className = ""}: BestTravelTipsProps) {
  if (!items?.length) {
    return null;
  }

  const featured = items.slice(FIRST_INDEX, DEFAULT_FEATURED_COUNT);
  const compact = items.slice(DEFAULT_FEATURED_COUNT, DEFAULT_FEATURED_COUNT + DEFAULT_GRID_COLUMNS);

  return (
    <section className={`${styles.showcase} ${className}`}>
      <header className={styles.showcaseHeader}>
        <h2 className={styles.showcaseTitle}>
          {title}
        </h2>
        <p className={styles.showcaseSubtitle}>
          {subtitle}
        </p>
      </header>

      <div className={styles.showcaseGrid}>
        {featured.map(a => (
          <article
            key={a.id}
            className={`${styles.card} ${styles.featured}`}
          >
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
        ))}

        {compact.map(a => (
          <article
            key={a.id}
            className={`${styles.card} ${styles.compact}`}
          >
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
        ))}
      </div>
    </section>
  );
}
