import {useEffect} from "react";
import {AsyncSection} from "src/components/AsyncSection/AsyncSection";
import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import {useTours} from "src/hooks/useTours";
import styles from "src/pages/toursPage/ToursPage.module.scss";

export function ToursPage() {
  const {data, loading, error, reload} = useTours();

  useEffect(() => {
    document.title = "All Tours";
  }, []);

  return (
    <Container>
      <section className={styles.wrap}>
        <h1 className={styles.title}>
          All Tours
        </h1>

        <AsyncSection
          loading={loading}
          error={error ?? undefined}
          onRetry={reload}
        >
          <div className={styles.grid}>
            {(data ?? []).map(tour => (
              <TourCard
                key={tour.id}
                tour={tour}
              />))}
          </div>
        </AsyncSection>
      </section>
    </Container>
  );
}
