import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import {useTours} from "src/hooks/useTours";
import styles from "src/components/ToursRail/ToursRail.module.scss";

interface ToursRailProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

const DEFAULT_TOURS_LIMIT = 3;

export function ToursRail({title, subtitle, limit}: ToursRailProps) {
  const {allTours: data, loading, error, reload} = useTours();

  if (loading) {
    return (
      <Container>
        <section className={styles.stateWrap}>
          <div className={styles.state}>
            Loading…
          </div>
        </section>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <section className={styles.stateWrap}>
          <div className={styles.state}>
            <div className={styles.stateText}>
              Failed to load tours
            </div>
            <button
              className={styles.retry}
              onClick={reload}
            >
              Retry
            </button>
          </div>
        </section>
      </Container>
    );
  }

  const take = typeof limit === "number" ? limit : DEFAULT_TOURS_LIMIT;
  const tours = (data ?? []).slice(0, take);
  if (tours.length === 0) {
    return null;
  }

  return (
    <Container>
      <section className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              {title}
            </h2>
            {subtitle &&
            <p className={styles.subtitle}>
              {subtitle}
            </p>}
          </div>

        </div>

        <div className={styles.grid}>
          {tours.map(t => (
            <TourCard
              key={t.id}
              tour={t}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
