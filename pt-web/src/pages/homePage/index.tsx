import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <TourSearchForm />
      <PopularWorkshops />
    </div>
  );
}
