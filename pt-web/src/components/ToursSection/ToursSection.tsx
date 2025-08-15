import {Container} from "src/components/Container/Container";
import {TourCard} from "src/components/Tour/Tour";
import type {TourView} from "src/types/tour";
import styles from "src/components/ToursSection/ToursSection.module.scss";

interface ToursSectionProps {
  title: string;
  tours: TourView[];
  cardClassName?: string;
}

export function ToursSection({title, tours, cardClassName}: ToursSectionProps) {
  return (
    <section>
      <Container>
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>

        <div className={styles.row}>
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              className={cardClassName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
