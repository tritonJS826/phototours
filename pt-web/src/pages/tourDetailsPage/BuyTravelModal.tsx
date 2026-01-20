import React from "react";
import {X} from "lucide-react";
import styles from "src/pages/tourDetailsPage/BuyTravelModal.module.scss";

interface BuyTravelModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showHeader?: boolean;
}

export function BuyTravelModal({
  isOpen,
  onClose,
  children,
  showHeader = true,
}: BuyTravelModalProps) {
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
        {showHeader && (
          <div className={styles.modalHeader}>
            <h2>
              Travel details
            </h2>
            <button
              className={styles.closeButton}
              onClick={onClose}
            >
              <X className="icon" />
            </button>
          </div>
        )}
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
}
