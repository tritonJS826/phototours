import {Link} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import type {Article} from "src/types/article";
import styles from "src/components/Articles/Articles.module.scss";

type Props = { article: Article };

export function ArticleFull({article}: Props) {
  return (
    <article className={styles.fullArt}>
      <div className={styles.fullPict}>
        <img
          src={article.coverUrl}
          alt={article.alt ?? article.title}
          className={styles.fullImg}
          loading="eager"
        />
      </div>

      <div className={styles.fullText}>
        <h2 className={styles.fullTitle}>
          {article.title}
        </h2>

        <div
          className={styles.fullBody}
          dangerouslySetInnerHTML={{__html: article.content}}
        />

        <div className={styles.actions}>
          <Button
            as={Link}
            to="/articles"
            variant="outline"
            aria-label="Back to articles"
          >
            Back to articles
          </Button>
        </div>
      </div>
    </article>
  );
}
