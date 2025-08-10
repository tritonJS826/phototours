import {HeroSection} from "src/components/HeroSection/HeroSection";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  return (
    <>
      <div className={styles.homePage}>
        <HeroSection />
      </div>
    </>
  );
}
