import React, {ReactElement, useEffect, useState} from "react";
import {X} from "lucide-react";
import styles from "src/components/TimeoutPopup/TimeoutPopup.module.scss";

interface TimeoutPopupProps {
  delay: number;
  imgUrl: string;
  title: string;
  description: string;
  leftBtn: string | ReactElement;
  rightBtn: string | ReactElement;
  leftBtnCallback: () => void;
  rightBtnCallback: () => void;
}

const MILLISECONDS_IN_SECOND = 1000;

export function TimeoutPopup({
  delay,
  imgUrl,
  title,
  description,
  leftBtn,
  rightBtn,
  leftBtnCallback,
  rightBtnCallback,
}: TimeoutPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * MILLISECONDS_IN_SECOND);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    leftBtnCallback();
  };

  const handleRightBtn = () => {
    setIsVisible(false);
    rightBtnCallback();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleClose}
    >
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
        >
          <X className="icon" />
        </button>

        {imgUrl && (
          <div className={styles.imageContainer}>
            <img
              src={imgUrl}
              alt={title}
              className={styles.cardImage}
            />
          </div>
        )}

        <div className={styles.cardContent}>
          <h2 className={styles.title}>
            {title}
          </h2>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.leftButton}
              onClick={handleClose}
            >
              {leftBtn}
            </button>
            <button
              type="button"
              className={styles.rightButton}
              onClick={handleRightBtn}
            >
              {rightBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
