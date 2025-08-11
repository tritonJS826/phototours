import {BestTravelTips} from "src/components/BestTravelTips/BestTravelTips";
import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import {articles} from "src/features/articles/articles.data";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <TourSearchForm />
      <PopularWorkshops />
      <BestTravelTips a={articles[0]} />
    </div>
  );
}
