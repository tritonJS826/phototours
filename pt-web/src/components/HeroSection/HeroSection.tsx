import clsx from "clsx";
import {TourSearchForm} from "src/components/TourSearchForm/TourSearchForm";
import styles from "src/components/HeroSection/HeroSection.module.scss";

interface HeroSectionProps {
  className?: string;
}

export function HeroTextSection(props: HeroSectionProps) {
  return (
    <section className={clsx(styles.heroSection, props.className)}>
      <h1 className={styles.heroTitle}>
        <b>
          Unforgettable Photo
          {" "}
          <i className={styles.italic}>
            Tours Across Tuscany
          </i>
          {" "}
          Capture breathtaking landscapes with expert guidance
        </b>
      </h1>
      <p className={styles.subtitle}>
        Small groups • Iconic locations • Professional photo mentoring to
        help you create award-winning shots on cinematic Tuscan routes.
      </p>
      <TourSearchForm />
    </section>
  );
}
