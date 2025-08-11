import {Container} from "src/components/Container/Container";
import styles from "src/components/HeroSection/HeroSection.module.scss";

export function HeroSection() {
  return (
    <Container>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span>
              Everything you need
            </span>
            <span>
              for your dream photography
            </span>
            <span>
              adventure in Iceland
            </span>
          </h1>
          <p className={styles.heroDescription}>
            <span>
              As Iceland's leading photo tour operator, we offer expert tours
            </span>
            <span>
              to help you capture breathtaking images at the best spots-guaranteed
            </span>
          </p>
        </div>
      </section>
    </Container>
  );
}

