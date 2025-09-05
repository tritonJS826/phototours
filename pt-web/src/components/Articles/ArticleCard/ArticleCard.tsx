import {Link} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {ArticleSummary} from "src/types/article";
import styles from "src/components/Articles/ArticleCard/ArticleCard.module.scss";

type Props = { item: ArticleSummary; className?: string };

export function ArticleCard({item, className}: Props) {
  return (
    <article className={`${styles.card} ${className ?? ""}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>
          {item.title}
        </h3>
        <p className={styles.excerpt}>
          {item.excerpt}
        </p>

        <div className={styles.actions}>
          <Button
            as={Link}
            to={`/articles/${item.slug}`}
            variant="primary"
            aria-label={item.title}
          >
            Read More
          </Button>
        </div>
      </div>

      <Link
        to={`/articles/${item.slug}`}
        className={styles.pict}
        aria-label={item.title}
      >
        <img
          src={item.coverUrl}
          alt={item.alt ?? item.title}
          loading="lazy"
        />
      </Link>
    </article>
  );
}
