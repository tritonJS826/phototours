import {PropsWithChildren} from "react";
import {Container} from "src/components/Container/Container";
import styles from "src/components/Section/Section.module.scss";

interface SectionProps {
  title?: string;
  className?: string;
}

export function Section({children, title, className = ""}: PropsWithChildren<SectionProps>) {
  return (
    <section className={`${styles.section} ${className}`}>
      <Container>
        {title && <h2 className={styles.title}>
          {title}
        </h2>}
        {children}
      </Container>
    </section>
  );
}
