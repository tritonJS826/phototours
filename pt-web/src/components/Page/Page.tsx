import type {HTMLAttributes, PropsWithChildren} from "react";
import {Container} from "src/components/Container/Container";
import styles from "src/components/Page/Page.module.scss";

type Props = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {title?: string}
>;

export function Page({title, className, children, ...rest}: Props) {
  const cls = [styles.wrap, className].filter(Boolean).join(" ");

  return (
    <section
      className={cls}
      {...rest}
    >
      <Container>
        {title
          ? <h1 className={styles.title}>
            {title}
          </h1>
          : null}
        {children}
      </Container>
    </section>
  );
}
