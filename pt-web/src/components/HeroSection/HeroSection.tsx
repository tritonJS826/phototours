import styles from "src/components/HeroSection/HeroSection.module.scss";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  className?: string;
}

function renderMultiline(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
    </span>
  ));
}

export function HeroSection({title, subtitle, className = ""}: HeroSectionProps) {
  return (
    <section className={`${styles.heroSection} ${className}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {renderMultiline(title)}
        </h1>
        {subtitle && (
          <p className={styles.heroDescription}>
            {renderMultiline(subtitle)}
          </p>
        )}
      </div>
    </section>
  );
}
