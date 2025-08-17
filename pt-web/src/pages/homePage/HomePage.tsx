import {BestTravelTips} from "src/components/BestTravelTips/BestTravelTips";
import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import {ToursRail} from "src/components/ToursRail/ToursRail";
import {articles} from "src/features/articles/articles.data";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <TourSearchForm />
      <PopularWorkshops />
      <ToursRail title="Best Winter Photo Tours & Workshops in Iceland" subtitle="Best photography tours" limit={3} />
      <BestTravelTips items={articles} />
    </div>
  );
}