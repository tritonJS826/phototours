import React, {useState} from "react";
import {ChangePasswordForm} from "src/components/Auth/ChangePasswordForm";
import {useAuth} from "src/hooks/useAuth";
import styles from "src/components/Auth/UserProfile.module.scss";

export const UserProfile: React.FC = () => {
  const {user, logout} = useAuth();
  const [showChangePassword, setShowChangePassword] = useState(false);

  if (!user) {
    return (
      <div>
        User not found
      </div>
    );
  }

  const handleLogout = () => {
    logout();
  };

  const handlePasswordChangeSuccess = () => {
    setShowChangePassword(false);
  };

  return (
    <div className={styles.profileContainer}>
      <h2>
        User Profile
      </h2>

      <div className={styles.profileInfo}>
        <div className={styles.profileField}>
          <label>
            First Name:
          </label>
          <span>
            {user.firstName}
          </span>
        </div>

        <div className={styles.profileField}>
          <label>
            Last Name:
          </label>
          <span>
            {user.lastName}
          </span>
        </div>

        <div className={styles.profileField}>
          <label>
            Email:
          </label>
          <span>
            {user.email}
          </span>
        </div>

        {user.phone && (
          <div className={styles.profileField}>
            <label>
              Phone:
            </label>
            <span>
              {user.phone}
            </span>
          </div>
        )}

        <div className={styles.profileField}>
          <label>
            Role:
          </label>
          <span>
            {user.role}
          </span>
        </div>

        <div className={styles.profileField}>
          <label>
            Registration Date:
          </label>
          <span>
            {new Date(user.createdAt).toLocaleDateString("en-US")}
          </span>
        </div>
      </div>

      <div className={styles.profileActions}>
        <button
          type="button"
          onClick={() => setShowChangePassword(true)}
          className={styles.actionButton}
        >
          Change Password
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className={`${styles.actionButton} ${styles.logoutButton}`}
        >
          Logout
        </button>
      </div>

      {showChangePassword && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowChangePassword(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setShowChangePassword(false)}
            >
              ×
            </button>
            <ChangePasswordForm
              onSuccess={handlePasswordChangeSuccess}
              onCancel={() => setShowChangePassword(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
