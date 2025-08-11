import {useState} from "react";
import {LoginForm} from "./LoginForm";
import {RegisterForm} from "./RegisterForm";
import styles from "./Auth.module.scss";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
  onSuccess?: () => void;
}

export function AuthModal({isOpen, onClose, initialMode = "login", onSuccess}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  if (!isOpen) {
    return null;
  }

  const handleSuccess = () => {
    onSuccess?.();
    onClose();
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ×
        </button>

        <div className={styles.authContainer}>
          <h2 className={styles.authTitle}>
            {mode === "login" ? "Login" : "Registration"}
          </h2>

          {mode === "login"
            ? (
              <LoginForm
                onSuccess={handleSuccess}
                hideTitle
                hideSwitch
              />
            )
            : (
              <RegisterForm
                onSuccess={handleSuccess}
                hideTitle
                hideSwitch
              />
            )}

          <div className={styles.authSwitch}>
            <p>
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className={styles.switchButton}
                onClick={switchMode}
              >
                {mode === "login" ? "Register" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
