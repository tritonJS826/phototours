import React from "react";
import {Container} from "src/components/Container/Container";
import styles from "src/components/SectionHeader/SectionHeader.module.scss";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({title, subtitle, className = ""}: SectionHeaderProps) {
  return (
    <Container>
      <header className={`${styles.sectionHeader} ${className}`}>
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>
        {subtitle && (
          <p className={styles.sectionSubtitle}>
            {subtitle}
          </p>
        )}
      </header>
    </Container>
  );
}
