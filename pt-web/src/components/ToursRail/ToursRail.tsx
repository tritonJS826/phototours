import {Link} from "react-router-dom";
import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import {PATHS} from "src/constants/routes";
import {useTours} from "src/hooks/useTours";
import styles from "src/components/ToursRail/ToursRail.module.scss";

interface ToursRailProps {
  title: string;
  subtitle?: string;
  limit?: number;
}

const DEFAULT_TOURS_LIMIT = 3;

export function ToursRail({title, subtitle, limit}: ToursRailProps) {
  const {data, loading, error, reload} = useTours();

  if (loading) {
    return (
      <div className={styles.state}>
        Loading…
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <div>
          Failed to load tours
        </div>
        <button
          className={styles.retry}
          onClick={reload}
        >
          Retry
        </button>
      </div>
    );
  }

  const take = typeof limit === "number" ? limit : DEFAULT_TOURS_LIMIT;
  const tours = (data ?? []).slice(0, take);

  return (
    <Container>
      <section className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.headings}>
            <h2 className={styles.title}>
              {title}
            </h2>
            {subtitle && <p className={styles.subtitle}>
              {subtitle}
            </p>}
          </div>

          <Link
            to={PATHS.TOURS}
            className={styles.link}
          >
            See all travel plans
          </Link>
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
