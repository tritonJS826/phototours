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

export function HomePage() {
  const [winter, setWinter] = useState<TourView[]>([]);

  useEffect(() => {
    (async () => {
      const all = await listTours();
      setWinter(all.filter(t => t.tags?.includes("winter")));
    })();
  }, []);

  return (
    <div className={styles.homePage}>
      <HeroSection />
      <TourSearchForm />
      <PopularWorkshops />
      <ToursSection
        title="Best winter photography tours"
        tours={winter}
      />
      <BestTravelTips a={articles[0]} />
    </div>
  );
}
