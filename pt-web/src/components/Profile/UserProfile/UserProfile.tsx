import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "src/hooks/useAuth";
import styles from "src/components/Profile/UserProfile/UserProfile.module.scss";

export const UserProfile: React.FC = () => {
  const {user} = useAuth();
  const [imageKey, setImageKey] = useState(0);

  const IMAGE_KEY_INCREMENT = 1;

  useEffect(() => {
    if (user?.profilePicUrl) {
      setImageKey(prev => prev + IMAGE_KEY_INCREMENT);
    }
  }, [user?.profilePicUrl]);

  if (!user) {
    return (
      <div>
        User not found
      </div>
    );
  }

  const isAdmin = user.role === "ADMIN";

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles["profile-heading-2"]}>
        User Profile
      </h2>

      <div className={styles.profileInfo}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarContainer}>
            {user.profilePicUrl
              ? (
                <img
                  key={imageKey}
                  src={`${user.profilePicUrl}?t=${imageKey}`}
                  alt={`${user.firstName} ${user.lastName}`}
                  className={styles.avatar}
                />
              )
              : (
                <div className={styles.avatarPlaceholder}>
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </div>
              )}
          </div>
        </div>

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

        {isAdmin && (
          <>
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
          </>
        )}

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
        <Link
          to="/profile/edit"
          className={styles.editButton}
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};
