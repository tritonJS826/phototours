import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
import {getPublicGallery, previewUrl} from "src/services/galleryService";
import {PublicUserProfile, userService} from "src/services/userService";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/pages/profile/Profile.module.scss";

type ProfileProps = { userId?: number };

const ZERO = 0;
const ONE = 1;
const PHOTO_W = 2000;
const HISTORY_BACK_STEP = 1;

export function Profile({userId}: ProfileProps) {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const {user: me} = useAuth();

  const [user, setUser] = useState<PublicUserProfile | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const fromProp = typeof userId === "number" ? userId : Number.NaN;
  const fromParams = typeof params.id === "string" ? Number.parseInt(params.id, 10) : Number.NaN;
  const fromAuth = typeof me?.id === "number" ? me.id : Number.NaN;
  const viewedId = Number.isFinite(fromProp) ? fromProp : Number.isFinite(fromParams) ? fromParams : fromAuth;
  const isOwner = Number.isFinite(viewedId) && typeof me?.id === "number" && me.id === viewedId;

  useEffect(() => {
    const run = async () => {
      if (!Number.isFinite(viewedId)) {
        setErr("User ID is required");
        setLoading(false);

        return;
      }
      try {
        setLoading(true);
        setErr(null);
        const profile = await userService.getPublicProfile(viewedId);
        setUser(profile);
        const gallery = await getPublicGallery(viewedId);
        setUrls(gallery.map(g => previewUrl(g.url, PHOTO_W)));
      } catch (e) {
        setErr(e instanceof Error ? e.message : "Failed to fetch user profile");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [viewedId]);

  useEffect(() => {
    if (active !== null && stageRef.current) {
      stageRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }, [active]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.states}>
          <div className={styles.loading}>
            Loading profile...
          </div>
        </div>
      </div>
    );
  }
  if (err !== null) {
    return (
      <div className={styles.page}>
        <div className={styles.states}>
          <div className={styles.error}>
            {err}
          </div>
        </div>
      </div>
    );
  }
  if (user === null) {
    return (
      <div className={styles.page}>
        <div className={styles.states}>
          <div className={styles.error}>
            User not found
          </div>
        </div>
      </div>
    );
  }

  const title = `${user.firstName} ${user.lastName}`;
  const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {year: "numeric", month: "long"});

  const goPrev = () => {
    if (active === null) {
      return;
    }
    const last = urls.length - ONE;
    setActive(active - ONE < ZERO ? last : active - ONE);
  };
  const goNext = () => {
    if (active === null) {
      return;
    }
    const last = urls.length - ONE;
    setActive(active + ONE > last ? ZERO : active + ONE);
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Button
          variant="outline"
          onClick={() => navigate(-HISTORY_BACK_STEP)}
        >
          ← Back
        </Button>
        {isOwner && (
          <div className={styles.topActions}>
            <Button
              as={Link}
              to={PATHS.MY_PHOTOS}
              className={styles.primaryCta}
            >
              Manage Photos
            </Button>
          </div>
        )}
      </div>

      <section className={styles.hero}>
        <img
          loading="lazy"
          src={getProfileImageUrl(user.profilePicUrl)}
          alt={title}
          className={styles.avatar}
        />
        <div className={styles.heroInfo}>
          <h1 className={styles.name}>
            {title}
          </h1>
          <div className={styles.meta}>
            <span>
              Member since
              {memberSince}
            </span>
          </div>
          {typeof user.bio === "string" && user.bio.length > ZERO && (
            <div className={styles.bioBox}>
              {user.bio}
            </div>
          )}
        </div>
      </section>

      {active !== null && urls[active] && (
        <section
          ref={stageRef}
          className={styles.stage}
        >
          <div className={styles.stageInner}>
            <img
              src={urls[active]}
              alt={`Photo ${active + ONE}`}
              className={styles.stageImg}
            />
            <div className={styles.stageBar}>
              <button
                className={styles.navBtn}
                onClick={goPrev}
                aria-label="Previous"
              >
                ‹
              </button>
              <div className={styles.stageInfo}>
                {active + ONE}
                {" "}
                /
                {" "}
                {urls.length}
              </div>
              <button
                className={styles.navBtn}
                onClick={goNext}
                aria-label="Next"
              >
                ›
              </button>
            </div>
            <button
              className={styles.closeStage}
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </section>
      )}

      {urls.length > ZERO && (
        <section className={styles.galleryWrap}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>
              Tour Photos
            </h2>
            <div className={styles.count}>
              {urls.length}
              {" "}
              photos
            </div>
          </div>
          <div className={styles.grid}>
            {urls.map((u, i) => (
              <button
                key={u}
                className={styles.card}
                onClick={() => setActive(i)}
                aria-label={`Open photo ${i + ONE}`}
              >
                <img
                  src={u}
                  alt={`Tour photo ${i + ONE}`}
                  className={styles.img}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
