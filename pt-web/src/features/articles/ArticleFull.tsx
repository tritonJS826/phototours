import {Container} from "src/components/Container/Container";
import type {Article} from "src/features/articles/articles.data";
import styles from "src/features/articles/Articles.module.scss";

export function ArticleFull({a}: { a: Article }) {
  return (
    <Container>
      <article className={styles.fullArt}>
        <div className={styles.fullPict}>
          <img
            src={a.cover}
            alt={a.alt}
            className={styles.fullImg}
          />
        </div>
        <div className={styles.fullText}>
          <h2 className={styles.fullTitle}>
            {a.title}
          </h2>
          <div
            className={styles.fullBody}
            dangerouslySetInnerHTML={{__html: a.content}}
          />
        </div>
      </article>
    </Container>
  );
}
