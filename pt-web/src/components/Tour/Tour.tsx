import {Link} from "react-router-dom";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

interface TourCardProps {
  tour: TourView;
}

export function TourCard({tour}: TourCardProps) {
  const cover = tour.coverUrl || tour.photos?.[0];

  return (
    <Link
      to={`/tours/${tour.id}`}
      className={styles.card}
    >
      {cover && (
        <img
          className={styles.image}
          src={cover}
          alt={tour.title}
          loading="lazy"
        />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>
          {tour.title}
        </h3>
        {tour.durationDays && (
          <p className={styles.meta}>
            {tour.durationDays}
            {" "}
            days
          </p>
        )}
        {tour.price !== undefined && (
          <p className={styles.price}>
            {Number(tour.price).toLocaleString()}
            {" "}
            USD
          </p>
        )}
      </div>
    </Link>
  );
}
