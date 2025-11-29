import clsx from "clsx";
import {TourCard} from "src/components/Tour/Tour";
import {useTours} from "src/hooks/useTours";
import styles from "src/components/ToursSection/ToursSection.module.scss";

interface ToursSectionProps {
  limit?: number;
  className?: string;
}

const DEFAULT_LIMIT = 6;

export function ToursSection({limit, className = ""}: ToursSectionProps) {
  const {data, loading, error, reload} = useTours();

  if (loading) {
    return (
      <section className={`${styles.wrap} ${className}`}>
        <div className={styles.state}>
          Loading…
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`${styles.wrap} ${className}`}>
        <div className={styles.state}>
          <div>
            Failed to load tours
          </div>
          <button
            type="button"
            className={styles.retry}
            onClick={reload}
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  const take = typeof limit === "number" ? limit : DEFAULT_LIMIT;
  const tours = (data ?? []).slice(0, take);

  if (!tours.length) {
    return (
      <section className={clsx(styles.wrap, className)}>
        <div className={styles.state}>
          No tours yet.
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.wrap} ${className}`}>
      <div className={styles.grid}>
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}
      </div>
    </section>
  );
}
