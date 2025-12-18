import React from "react";
import {X} from "lucide-react";
import styles from "src/pages/toursPage/FilterModal.module.scss";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function FilterModal({isOpen, onClose, children}: FilterModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2>
            Filters
          </h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            <X className="icon" />
          </button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
}
