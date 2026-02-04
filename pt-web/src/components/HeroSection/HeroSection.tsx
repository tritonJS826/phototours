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
          Exclusive Photo
          {" "}
          <i className={styles.italic}>
            Tours & Workshops:
          </i>
          {" "}
          Signature Photo Expeditions Across the Globe
        </b>
      </h1>
      <p className={styles.subtitle}>
        Join our award-winning professional photographers and tour leaders on exclusive
        photo expeditions. Capture the raw beauty of the world with expert mentoring
      </p>
      <TourSearchForm />
    </section>
  );
}
