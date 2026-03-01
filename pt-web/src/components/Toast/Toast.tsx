import {Check} from "lucide-react";
import {useEffect, useState} from "react";
import styles from "src/components/Toast/Toast.module.scss";

type Props = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

export function Toast({message, isVisible, onClose, duration = 3000}: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !show) return null;

  return (
    <div className={`${styles.toast} ${show ? styles.visible : styles.hidden}`}>
      <Check size={18} className={styles.icon} />
      <span>{message}</span>
    </div>
  );
}
