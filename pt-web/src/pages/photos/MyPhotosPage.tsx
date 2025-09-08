import React from "react";
import {Link} from "react-router-dom";
import {UserGallery} from "src/components/UserGallery/UserGallery";
import {useAuth} from "src/hooks/useAuth";
import styles from "src/pages/photos/MyPhotosPage.module.scss";

export function MyPhotosPage() {
  const {user} = useAuth();

  if (!user) {
    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.msg}>
            Please sign in to manage your photos
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <Link
        to="/profile"
        className={styles.backBtn}
      >
        ← Back to Profile
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>
          My Tour Photos
        </h1>
        <p className={styles.sub}>
          Upload, download and manage your gallery
        </p>
      </header>

      <section className={styles.section}>
        <UserGallery
          userId={user.id}
          canManage
        />
      </section>
    </div>
  );
}
