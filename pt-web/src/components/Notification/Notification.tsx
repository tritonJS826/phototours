import {memo, useCallback, useEffect} from "react";
import styles from "src/components/Notification/Notification.module.scss";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

const AUTO_HIDE_DELAY = 3000;

export const Notification = memo(function Notification({
  message,
  type,
  isVisible,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, AUTO_HIDE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${styles.notification} ${styles[type]}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.content}>
        <span
          className={styles.message}
          id="notification-message"
        >
          {message}
        </span>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label={`Close ${type} notification`}
          aria-describedby="notification-message"
          type="button"
        >
          <span aria-hidden="true">
            ×
          </span>
        </button>
      </div>
    </div>
  );
});
