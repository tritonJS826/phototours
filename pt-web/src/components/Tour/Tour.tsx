import {Link} from "react-router-dom";
import reviews from "/images/reviews.svg";
import spotsLeft from "/images/spotsLeft.svg";
import star from "/images/star.svg";
import {Button} from "src/components/Button/Button";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

type Props = {
  tour: TourView;
};

const STARS_FRACTIONAL_DIGITS = 1;

export function TourCard({tour}: Props) {
  const price = Number(tour.price ?? 0).toLocaleString();
  const cover = tour.coverUrl || tour.photos?.[0] || "";
  const tourUrl = `/tours/${tour.slug ?? tour.id}`;

  return (
    <article className={styles.card}>
      <Link
        to={tourUrl}
        className={styles.link}
        aria-label={tour.title}
      >
        <div className={styles.pict}>
          {cover && (
            <img
              src={cover}
              alt={tour.title}
              className={styles.img}
              loading="lazy"
            />
          )}
          <div className={styles.stars}>
            <span className={styles.starsAmount}>
              {tour.stars.toFixed(STARS_FRACTIONAL_DIGITS)}
            </span>
            <img
              src={star}
              alt="stars"
              className={styles.img}
              loading="lazy"
            />
          </div>
        </div>
      </Link>

      <div className={styles.reviewsBlock}>
        <div className={styles.reviewsTag}>
          <img
            src={spotsLeft}
            alt="stars"
            className={styles.tagIcon}
            loading="lazy"
          />
          <span>
            2 spots left
          </span>
        </div>

        <div className={styles.reviewsTag}>
          <img
            src={reviews}
            alt="stars"
            className={styles.tagIcon}
            loading="lazy"
          />
          <span>
            3 reviews
          </span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {tour.title}
        </h3>

        <p className={styles.description}>
          {tour.description}
        </p>

        <div className={styles.priceBlock}>
          <span className={styles.from}>
            From
          </span>
          &nbsp;
          <span className={styles.price}>
            {price}
          </span>
          &nbsp;
          <span className={styles.currency}>
            USD
          </span>
        </div>

        <div className={styles.buttonsBlock}>
          <Button
            as={Link}
            to={tourUrl}
            className={styles.primaryButton}
            size="md"
            variant="primary"
          >
            Book now
          </Button>

          <Button
            as={Link}
            to={tourUrl}
            className={styles.secondaryButton}
            size="md"
            variant="primary"
          >
            Read more
          </Button>
        </div>
      </div>
    </article>
  );
}
