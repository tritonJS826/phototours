import type {PropsWithChildren} from "react";
import styles from "src/components/AsyncSection/AsyncSection.module.scss";

type Props = PropsWithChildren<{
  loading?: boolean;
  error?: string;
  onRetry?: () => void;
}>;

export function AsyncSection({loading, error, onRetry, children}: Props) {
  if (loading) {
    return (
      <div className={styles.center}>
        Loading…
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.center}>
        <div className={styles.errorBox}>
          {error}
        </div>
        {onRetry
          ? (
            <button
              className={styles.retry}
              onClick={onRetry}
            >
              Retry
            </button>
          )
          : null}
      </div>
    );
  }

  return (
    <>
      {children}
    </>
  );
}
