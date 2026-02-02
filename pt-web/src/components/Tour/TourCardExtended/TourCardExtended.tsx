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
import {renderMultilineDouble} from "src/utils/textUtils";
import styles from "src/components/Tour/TourCardExtended/TourCardExtended.module.scss";

type Props = {
  tour: TourView;
  className: string;
  travelers?: number;
};

const STARS_FRACTIONAL_DIGITS = 1;
const DEFAULT_TRAVELERS_AMOUNT = 1;
const ONE_TRAVELER_AMOUNT = 1;

export function TourCardExtended({tour, className, travelers}: Props) {
  const travelerCount = travelers || DEFAULT_TRAVELERS_AMOUNT;
  const basePrice = Number(tour.price ?? 0);

  const totalPrice = basePrice; //  * TravelerCount
  const price = totalPrice.toLocaleString();
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
              alt="spots left"
              className={styles.tagIcon}
              loading="lazy"
            />
            <span>
              {tour.spotsLeft}
&nbsp;spots&nbsp;left
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
&nbsp;reviews
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
          {renderMultilineDouble(tour.description)}
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
              Price for
              {" "}
              {travelerCount}
              {" "}
              traveler
              {travelerCount > ONE_TRAVELER_AMOUNT ? "s" : ""}
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
