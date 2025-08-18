import {AsyncSection} from "src/components/AsyncSection/AsyncSection";
import {Page} from "src/components/Page/Page";
import {TourCard} from "src/components/Tour/Tour";
import {useTours} from "src/hooks/useTours";
import styles from "src/pages/toursPage/ToursPage.module.scss";

export function ToursPage() {
  const {data, loading, error, reload} = useTours();

  return (
    <Page title="All Tours">
      <AsyncSection
        loading={loading}
        error={error}
        onRetry={reload}
      >
        <div className={styles.grid}>
          {(data ?? []).map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}
        </div>
      </AsyncSection>
    </Page>
  );
}
