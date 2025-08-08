import {Button} from "src/components/Button/Button";
import styles from "src/pages/notFound/notFound.module.scss";

export function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.content}>
        <div className={styles.notFoundContent}>
          <h1 className={styles.title}>
            404
          </h1>
          <h2 className={styles.subtitle}>
            Oops!
          </h2>
          <p className={styles.description}>
            This page wandered off somewhere...
          </p>
          <Button href="/">
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
}
