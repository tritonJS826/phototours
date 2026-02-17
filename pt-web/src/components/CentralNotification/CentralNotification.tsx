import styles from "src/components/CentralNotification/CentralNotification.module.scss";

interface CentralNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export function CentralNotification({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
}: CentralNotificationProps) {
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
        <img
          src={imageUrl}
          alt=""
          className={styles.image}
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
