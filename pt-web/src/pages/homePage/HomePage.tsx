import {useEffect, useState} from "react";
import {listTours} from "src/api/tours";
import {BestTravelTips} from "src/components/BestTravelTips/BestTravelTips";
import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import {ToursSection} from "src/components/ToursSection/ToursSection";
import {articles} from "src/features/articles/articles.data";
import type {TourView} from "src/types/tour";
import styles from "src/pages/homePage/HomePage.module.scss";

const FEATURED_TOURS_LIMIT = 3;

export function HomePage() {
  const [tours, setTours] = useState<TourView[]>([]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await listTours();
        if (mounted) {
          setTours((data ?? []).slice(0, FEATURED_TOURS_LIMIT));
        }
      } catch {
        if (mounted) {
          setTours([]);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSectionBg}>
        <HeroSection />
        <TourSearchForm />
      </div>
      <PopularWorkshops />

      {tours.length > 0 && (
        <ToursSection
          title="Best Winter Photo Tours & Workshops in Iceland"
          subtitle="Best photography tours"
        />
      )}

      <BestTravelTips
        items={articles}
        title="Best travel tips for Iceland"
        subtitle="Find all your essential photography tips and information"
      />
    </div>
  );
}

