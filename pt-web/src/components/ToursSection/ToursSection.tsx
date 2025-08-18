import {Link} from "react-router-dom";
import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import {PATHS} from "src/constants/routes";
import {useTours} from "src/hooks/useTours";
import styles from "src/components/ToursSection/ToursSection.module.scss";

interface ToursSectionProps {
  title: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}

const DEFAULT_LIMIT = 6;

export function ToursSection(props: ToursSectionProps) {
  const {title, subtitle, limit, className = ""} = props;
  const {data, loading, error, reload} = useTours();

  if (loading) {
    return (
      <Container>
        <section className={`${styles.wrap} ${className}`}>
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
        <section className={`${styles.wrap} ${className}`}>
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
        </section>
      </Container>
    );
  }

  const take = typeof limit === "number" ? limit : DEFAULT_LIMIT;
  const tours = (data ?? []).slice(0, take);

  return (
    <Container>
      <section className={`${styles.wrap} ${className}`}>
        <div className={styles.header}>
          <div className={styles.titles}>
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
