import type {HTMLAttributes} from "react";
import {Link} from "react-router-dom";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

const PREVIEW_CHARS = 120;
const COVER_INDEX = 0;

export interface TourCardProps extends HTMLAttributes<HTMLElement> {
  tour: TourView;
  className?: string;
}

export function TourCard({tour, className}: TourCardProps) {
  const cls = [styles.card, className].filter(Boolean).join(" ");
  const cover = tour.coverUrl ?? tour.photos?.[COVER_INDEX];

  const fullDesc = tour.description ?? "";
  const isLong = fullDesc.length > PREVIEW_CHARS;
  const short = isLong ? `${fullDesc.slice(0, PREVIEW_CHARS)}…` : fullDesc;

  const href = `/tours/${tour.slug ?? tour.id}`;

  return (
    <article className={cls}>
      <div className={styles.media}>
        {cover && (
          <img
            src={cover}
            alt={tour.title}
            className={styles.cover}
            loading="lazy"
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
          {tour.region ?? ""}
          {tour.durationDays ? ` · ${tour.durationDays} days` : ""}
        </p>

        <p title={fullDesc}>
          {short}
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
