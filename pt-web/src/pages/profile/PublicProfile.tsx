import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PublicUserProfile, userService} from "src/services/userService";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/pages/profile/PublicProfile.module.scss";

export function PublicProfile() {
  const {id} = useParams<{id: string}>();
  const [user, setUser] = useState<PublicUserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!id) {
        setError("User ID is required");
        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const userData = await userService.getPublicProfile(parseInt(id));
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load user profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.publicProfileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.loading}>
            Loading profile...
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className={styles.publicProfileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.error}>
            {error || "User not found"}
          </div>
        </div>
      </div>
    );
  }

  const formatRegistrationDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={styles.publicProfileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <img
            src={getProfileImageUrl(user.profilePicUrl)}
            alt={`${user.firstName} ${user.lastName}`}
            className={styles.avatar}
          />
        </div>

        <div className={styles.userInfo}>
          <h1>
            {user.firstName}
            {" "}
            {user.lastName}
          </h1>
          <p className={styles.memberSince}>
            Member since
            {" "}
            {formatRegistrationDate(user.createdAt)}
          </p>
          {user.bio && (
            <div className={styles.bioSection}>
              <h3>
                About
              </h3>
              <p>
                {user.bio}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
