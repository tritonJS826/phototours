import {Link} from "react-router-dom";
import flag from "/images/flag.svg";
import language from "/images/language.svg";
import reviews from "/images/reviews.svg";
import spotsLeft from "/images/spotsLeft.svg";
import star from "/images/star.svg";
import starYellow from "/images/star-yellow.png";
import timer from "/images/timer.svg";
import clsx from "clsx";
import {Button} from "src/components/Button/Button";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/TourCardExtended/TourCardExtended.module.scss";

type Props = {
  tour: TourView;
  className: string;
};

const STARS_FRACTIONAL_DIGITS = 1;

export function TourCardExtended({tour, className}: Props) {
  const price = Number(tour.price ?? 0).toLocaleString();
  const cover = tour.coverUrl || tour.photos?.[0] || "";
  const tourUrl = `/tours/${tour.slug ?? tour.id}`;

  return (
    <article className={clsx(styles.card, className)}>
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
              {tour.starAmount.toFixed(STARS_FRACTIONAL_DIGITS)}
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
        <div className={styles.horizontal}>
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
              {tour.reviewAmount}
            </span>
          </div>

        </div>

        <div className={styles.starsList}>
          <img
            src={starYellow}
            alt="stars"
            loading="lazy"
            className={styles.starYellowImg}
          />
          <img
            src={starYellow}
            alt="stars"
            loading="lazy"
            className={styles.starYellowImg}
          />
          <img
            src={starYellow}
            alt="stars"
            loading="lazy"
            className={styles.starYellowImg}
          />
          <img
            src={starYellow}
            alt="stars"
            loading="lazy"
            className={styles.starYellowImg}
          />
          <img
            src={starYellow}
            alt="stars"
            loading="lazy"
            className={styles.starYellowImg}
          />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {tour.title}
        </h3>

        <div className={styles.startEndInfo}>
          <div className={styles.startEndInfoTag}>
            <img
              src={language}
              alt="info"
              className={styles.startEndInfoIcon}
              loading="lazy"
            />
            <div className={styles.startEndInfoDescription}>
              <p className={styles.startEndInfoDescriptionTop}>
                Duration
              </p>
              <p className={styles.startEndInfoDescriptionBottom}>
                {tour.durationDays}
              </p>
            </div>
          </div>

          <div className={styles.startEndInfoTag}>
            <img
              src={flag}
              alt="info"
              className={styles.startEndInfoIcon}
              loading="lazy"
            />
            <div className={styles.startEndInfoDescription}>
              <p className={styles.startEndInfoDescriptionTop}>
                Tour starts
              </p>
              <p className={styles.startEndInfoDescriptionBottom}>
                {tour.startLocation}
              </p>
            </div>
          </div>

          <div className={styles.startEndInfoTag}>
            <img
              src={timer}
              alt="info"
              className={styles.startEndInfoIcon}
              loading="lazy"
            />
            <div className={styles.startEndInfoDescription}>
              <p className={styles.startEndInfoDescriptionTop}>
                Ending place
              </p>
              <p className={styles.startEndInfoDescriptionBottom}>
                {tour.endLocation}
              </p>
            </div>
          </div>

        </div>

        <p className={styles.description}>
          {tour.description}
        </p>

        <div className={styles.cardFooter}>
          <div className={styles.priceBlock}>
            <div className={styles.priceBlockTop}>
              From
              {" "}
              <b>
                {price}
              </b>
              {" "}
              USD
            </div>
            <div className={styles.priceBlockBottom}>
              Price for 1 traveler
            </div>
          </div>

          <Button
            as={Link}
            to={tourUrl}
            className={styles.primaryButton}
            size="md"
            variant="primary"
          >
            Book now
          </Button>
        </div>

      </div>
    </article>
  );
}
