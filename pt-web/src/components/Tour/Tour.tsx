import {Link} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import type {TourView} from "src/types/tour";
import styles from "src/components/Tour/Tour.module.scss";

type Props = {
  tour: TourView;
};

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
          <span className={styles.quick}>
            Quick view
          </span>
        </div>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {tour.title}
        </h3>

        <div className={styles.meta}>
          {tour.startLocation && (
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>
                Tour starts:
              </span>
              <span className={styles.metaVal}>
                {tour.startLocation}
              </span>
            </div>
          )}
          {tour.endLocation && (
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>
                Ending place:
              </span>
              <span className={styles.metaVal}>
                {tour.endLocation}
              </span>
            </div>
          )}
          {tour.durationDays && (
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>
                Duration:
              </span>
              <span className={styles.metaVal}>
                {tour.durationDays}
                {" "}
                days
              </span>
            </div>
          )}
          {tour.languages?.length
            ? (
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>
                  Languages:
                </span>
                <span className={styles.metaVal}>
                  {tour.languages.join(", ")}
                </span>
              </div>
            )
            : null}
        </div>

        <div className={styles.priceRow}>
          <span className={styles.from}>
            From
          </span>
          <span className={styles.price}>
            {price}
          </span>
          <span className={styles.currency}>
            USD
          </span>
        </div>

        <Button
          as={Link}
          to={tourUrl}
          className={styles.cta}
          size="md"
          variant="primary"
        >
          See More
        </Button>
      </div>
    </article>
  );
}
