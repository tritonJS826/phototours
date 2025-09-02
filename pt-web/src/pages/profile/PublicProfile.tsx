import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PublicUserProfile, userService} from "src/services/userService";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/pages/profile/PublicProfile.module.scss";

type Props = {
  userId?: number;
};

type ProfileWithPhotos = PublicUserProfile & { tourPhotos?: string[] };

export function PublicProfile({userId}: Props) {
  const params = useParams<{ id: string }>();
  const [user, setUser] = useState<ProfileWithPhotos | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PHOTO_INDEX_OFFSET = 1;

  useEffect(() => {
    const fetchUserProfile = async () => {
      const idFromProps = typeof userId === "number" ? userId : undefined;
      const idFromParams = params.id ? parseInt(params.id, 10) : undefined;
      const finalId = idFromProps ?? idFromParams;

      if (!finalId || Number.isNaN(finalId)) {
        setError("User ID is required");
        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const data = (await userService.getPublicProfile(finalId)) as ProfileWithPhotos;
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch user profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId, params.id]);

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

    return date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
  };

  const photos = user.tourPhotos ?? [];

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
          <div className={styles.title}>
            {user.firstName}
            {" "}
            {user.lastName}
          </div>

          <p className={styles.memberSince}>
            Member since
            {" "}
            {formatRegistrationDate(user.createdAt)}
          </p>

          {user.bio && (
            <div className={styles.bioSection}>
              <div className={styles.sectionTitle}>
                About
              </div>
              <p className={styles.bioText}>
                {user.bio}
              </p>
            </div>
          )}
        </div>

        {photos.length > 0 && (
          <div className={styles.gallery}>
            <div className={styles.galleryTitle}>
              Tour Photos
            </div>
            <div className={styles.grid}>
              {photos.map((url, i) => (
                <div
                  className={styles.gridItem}
                  key={`${url}-${i}`}
                >
                  <img
                    src={url}
                    alt={`Tour photo ${i + PHOTO_INDEX_OFFSET}`}
                    loading="lazy"
                    className={styles.gridImg}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
