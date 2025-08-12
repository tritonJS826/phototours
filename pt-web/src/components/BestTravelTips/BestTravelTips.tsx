import {Link} from "react-router-dom";
import {Container} from "src/components/Container/Container";
import type {Article} from "src/features/articles/articles.data";
import styles from "src/components/BestTravelTips/BestTravelTips.module.scss";

export function BestTravelTips({a}: { a: Article }) {
  return (
    <Container>
      <div>
        <div className={styles.cardBest}>
          <h2 className={styles.cardBestTitle}>
            Best travel tips for Iceland
          </h2>
          <p className={styles.cardBestText}>
            Find all your essential pnotography
            tips and information
          </p>
        </div>
        <div>
          <Link
            to={`/articles/${a.slug}`}
            className={styles.cardLink}
            aria-label={a.title}
          >
            <div className={styles.cardFull}>
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
        </div>
        <div className={styles.cardBestie}>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </Container>
  );
}
