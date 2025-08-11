import {HeroSection} from "src/components/HeroSection/HeroSection";
import styles from "src/pages/homePage/HomePage.module.scss";
// Import {ArticlesCarousel} from "src/features/articles/ArticlesCarousel";

export function HomePage() {
  return (
    <>
      <div className={styles.homePage}>
        <HeroSection />
        {/* <ArticlesCarousel /> */}
      </div>
    </>
  );
}
