import {type HTMLAttributes} from "react";
import {Link} from "react-router-dom";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

const PREVIEW_CHARS = 120;

export interface TourCardProps extends HTMLAttributes<HTMLElement> {
  tour: TourView;
}

export function TourCard({tour, className}: TourCardProps) {
  const fullDesc = tour.description ?? "";
  const shortDesc =
    fullDesc.length > PREVIEW_CHARS
      ? `${fullDesc.slice(0, PREVIEW_CHARS)}...`
      : fullDesc;

  const href = `/tours/${tour.slug ?? tour.id}`;
  const cls = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article className={cls}>
      <div className={styles.media}>
        {tour.photos?.[0]
          ? (
            <img
              src={tour.photos[0]}
              alt={tour.title}
              className={styles.cover}
              loading="lazy"
            />
          )
          : (
            <div
              className={styles.coverPlaceholder}
              aria-hidden="true"
            />
          )}
        <span className={styles.quick}>
          Quick view
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {tour.title}
        </h3>
        <p className={styles.meta}>
          {tour.durationDays ? `${tour.durationDays} days` : ""}
        </p>
        <p title={fullDesc}>
          {shortDesc}
        </p>
      </div>

      <div className={styles.footer}>
        <span className={styles.price}>
          From
          {" "}
          <strong>
            {Number(tour.price).toLocaleString("en-US")}
          </strong>
          {" "}
          USD
        </span>
        <Link
          to={href}
          className={styles.more}
          aria-label={`See more about ${tour.title}`}
        >
          See More
        </Link>
      </div>
    </article>
  );
}
