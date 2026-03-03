import {Link} from "react-router-dom";
import clsx from "clsx";
import {PATHS} from "src/routes/routes";
import {ArticleSummary} from "src/types/article";
import styles from "src/components/Articles/ArticleCard/ArticleCard.module.scss";

type Props = { item: ArticleSummary; className?: string };

export function ArticleCard({item, className}: Props) {
  return (
    <Link
      to={PATHS.getArticle(item.slug)}
      className={clsx(styles.card, className)}
      aria-label={item.title}
    >
      <div className={styles.pict}>
        <img
          src={item.coverUrl}
          alt={item.alt ?? item.title}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {item.title}
        </h3>
        <p className={styles.description}>
          {item.excerpt}
        </p>
      </div>
    </Link>
  );
}
