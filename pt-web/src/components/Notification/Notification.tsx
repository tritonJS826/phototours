import {memo, useCallback, useEffect} from "react";
import styles from "src/components/Notification/Notification.module.scss";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

// Constants
const AUTO_HIDE_DELAY = 3000; // 3 seconds

export const Notification = memo(function Notification({
  message,
  type,
  isVisible,
  onClose,
}: NotificationProps) {
  // Auto-hide functionality
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, AUTO_HIDE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  // Memoized close handler
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Memoized keydown handler for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  // Don't render if not visible
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
