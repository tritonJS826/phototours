import {Link} from "react-router-dom";
import clsx from "clsx";
import {PATHS} from "src/constants/routes";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

interface TourCartProps {
  tour: TourView;
  className?: string;
}

export function TourCard({tour, className}: TourCartProps) {
  const cover = tour.coverUrl || tour.photos?.[0] || "";
  const priceText = Number(tour.price || 0).toLocaleString();

  return (
    <article className={clsx(styles.card, className)}>
      <Link
        to={`${PATHS.TOURS}/${tour.id}`}
        className={styles.link}
        aria-label={tour.title}
      >
        <div className={styles.media}>
          {cover
            ? (
              <img
                className={styles.image}
                src={cover}
                alt={tour.title}
                loading="lazy"
              />
            )
            : (
              <div
                className={styles.placeholder}
                aria-hidden="true"
              />
            )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>
            {tour.title}
          </h3>
          <p className={styles.desc}>
            {tour.description}
          </p>

          <div className={styles.meta}>
            {tour.durationDays
              ? <span>
                {tour.durationDays}
                {" "}
                days
              </span>
              : null}
            {tour.difficulty
              ? <span>
                {tour.difficulty}
              </span>
              : null}
          </div>

          <div className={styles.footer}>
            <div className={styles.price}>
              <span className={styles.priceValue}>
                {priceText}
              </span>
              <span className={styles.priceCurrency}>
                USD
              </span>
            </div>
            <span className={styles.cta}>
              See More
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
