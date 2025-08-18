import {useEffect, useState} from "react";
import {listTours} from "src/api/tours";
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

  return (
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
  );
}
