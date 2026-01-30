import {Link} from "react-router-dom";
import clsx from "clsx";
import {PATHS} from "src/routes/routes";
import styles from "src/pages/notFound/notFoundPage.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.content}>
        <div className={styles.notFoundContent}>
          <h2 className={styles.title}>
            404
          </h2>
          <h1 className={styles.subtitle}>
            Oops! This page doesn’t exist
          </h1>
          <p className={styles.description}>
            Looks like the page you’re looking for has been moved, deleted, or never existed.
            But don’t worry — Tuscany is still full of beautiful places to discover
          </p>

          <Link
            to={PATHS.TOURS}
            className={clsx(styles.button, styles.primary, styles.md)}
          >
            Explore Tours
          </Link>
        </div>
      </div>
    </div>
  );
}
