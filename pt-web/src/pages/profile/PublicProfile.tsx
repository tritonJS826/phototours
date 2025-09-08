import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPublicGallery, previewUrl} from "src/services/galleryService";
import {PublicUserProfile, userService} from "src/services/userService";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/pages/profile/PublicProfile.module.scss";

type Props = { userId?: number };
type ProfileWithPhotos = PublicUserProfile & { tourPhotos?: string[] };

const ZERO = 0;
const PHOTO_W = 600;
const PHOTO_H = 600;
const PHOTO_INDEX_OFFSET = 1;

export function PublicProfile({userId}: Props) {
  const params = useParams<{ id: string }>();

  const [user, setUser] = useState<ProfileWithPhotos | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const idFromProps = typeof userId === "number" ? userId : undefined;
      const idFromParams = params.id ? Number.parseInt(params.id, 10) : undefined;
      const finalId = idFromProps ?? idFromParams;

      const hasId = typeof finalId === "number" && Number.isFinite(finalId);
      if (!hasId) {
        setError("User ID is required");
        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const profile = (await userService.getPublicProfile(finalId)) as ProfileWithPhotos;
        setUser(profile);

        const gallery = await getPublicGallery(finalId);
        setPhotos(gallery.map(x => previewUrl(x.url, PHOTO_W)));
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to fetch user profile";
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    };

    run();
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

  if (error !== null) {
    return (
      <div className={styles.publicProfileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.error}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (user === null) {
    return (
      <div className={styles.publicProfileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.error}>
            User not found
          </div>
        </div>
      </div>
    );
  }

  const formatRegistrationDate = (s: string) =>
    new Date(s).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});

  return (
    <div className={styles.publicProfileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <img
            loading="lazy"
            src={getProfileImageUrl(user.profilePicUrl)}
            alt={`${user.firstName} ${user.lastName}`}
            className={styles.avatar}
          />
        </div>

        <div className={styles.userInfo}>
          <div className={styles.title}>
            {`${user.firstName} ${user.lastName}`}
          </div>
          <p className={styles.memberSince}>
            {`Member since ${formatRegistrationDate(user.createdAt)}`}
          </p>

          {typeof user.bio === "string" && user.bio.length > ZERO && (
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

        {photos.length > ZERO && (
          <div className={styles.gallery}>
            <div className={styles.galleryTitle}>
              Tour Photos
            </div>
            <div className={styles.grid}>
              {photos.map((url, i) => (
                <div
                  className={styles.gridItem}
                  key={url}
                >
                  <img
                    src={url}
                    alt={`Tour photo ${i + PHOTO_INDEX_OFFSET}`}
                    loading="lazy"
                    className={styles.gridImg}
                    width={PHOTO_W}
                    height={PHOTO_H}
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
