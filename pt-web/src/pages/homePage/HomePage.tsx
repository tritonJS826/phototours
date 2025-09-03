import {useEffect, useState} from "react";
import {listTours} from "src/api/tours";
import {Container} from "src/components/Container/Container";
import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import {ToursSection} from "src/components/ToursSection/ToursSection";
import {ArticlesShowcase} from "src/pages/homePage/ArticlesShowcase/ArticlesShowcase";
import type {TourView} from "src/types/tour";
import styles from "src/pages/homePage/HomePage.module.scss";

const FEATURED_TOURS_LIMIT = 3;

const COPY = {
  hero: {
    title:
      "Everything you need\nfor your dream photography\nadventure in Iceland",
    subtitle:
      "As Iceland’s leading photo tour operator, we offer expert tours\n" +
      "to help you capture breathtaking images at the best photo locations.",
    cta: "Search Now",
  },
  popular: {
    title: "Popular photo tours & workshops",
    subtitle: "Travel the world to capture the most incredible landscapes",
  },
  bestWinter: {
    title: "Best Winter Photo Tours & Workshops in Iceland",
    subtitle: "Best photography tours",
  },
  articles: {
    title: "Best travel tips for Iceland",
    subtitle: "Find all your essential photography tips and information",
  },
};

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
        <Container>
          <div className={styles.heroInner}>
            <HeroSection
              title={COPY.hero.title}
              subtitle={COPY.hero.subtitle}
              ctaLabel={COPY.hero.cta}
            />
            <TourSearchForm />
          </div>
        </Container>
      </div>

      <Container>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {COPY.popular.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {COPY.popular.subtitle}
          </p>
        </header>
        <PopularWorkshops />
      </Container>

      {tours.length > 0 && (
        <Container>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {COPY.bestWinter.title}
            </h2>
            <p className={styles.sectionSubtitle}>
              {COPY.bestWinter.subtitle}
            </p>
          </header>
          <ToursSection limit={3} />
        </Container>
      )}

      <Container>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {COPY.articles.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {COPY.articles.subtitle}
          </p>
        </header>
        <ArticlesShowcase />
      </Container>
    </div>
  );
}
