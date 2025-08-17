<<<<<<< HEAD
import {useEffect, useState} from "react";
import {listTours} from "src/api/tours";
=======
import {useEffect} from "react";
import {AsyncSection} from "src/components/AsyncSection/AsyncSection";
>>>>>>> 725d3d5 (feat: #24 added tours in HomePage)
import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import type {TourView} from "src/types/tour";
import styles from "src/pages/toursPage/ToursPage.module.scss";

export function ToursPage() {
  const [items, setItems] = useState<TourView[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await listTours();
        setItems(data);
      } catch (e) {
        const message =
          e instanceof Error ? e.message : "Failed to load tours";
        setErr(message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <section className={styles.wrap}>
        Loading…
      </section>
    );
  }

  if (err) {
    return (
      <section className={styles.wrap}>
        Error:
        {" "}
        {err}
      </section>
    );
  }

  useEffect(() => {
    document.title = "All Tours";
  }, []);

  return (
<<<<<<< HEAD
    <section className={styles.wrap}>
      <Container>
        <h1 className={styles.sectionTitle}>
          All Tours
        </h1>

        <div className={styles.grid}>
          {items.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}
        </div>
      </Container>
    </section>
=======
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
>>>>>>> 725d3d5 (feat: #24 added tours in HomePage)
  );
}
