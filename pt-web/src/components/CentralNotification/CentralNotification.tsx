import clsx from "clsx";
import {X} from "lucide-react";
import {useBodyScrollLock} from "src/hooks/useBodyScrollLock";
import styles from "src/components/CentralNotification/CentralNotification.module.scss";

interface CentralNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle: string;
  isCircleImage?: boolean;
}

export function CentralNotification({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  isCircleImage = false,
}: CentralNotificationProps) {
  useBodyScrollLock(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          <X className="icon" />
        </button>
        <img
          src={imageUrl}
          alt=""
          className={clsx(styles.image, isCircleImage ? styles.circleImage : false)}
        />
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        <button
          className={styles.button}
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
