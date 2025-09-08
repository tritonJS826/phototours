import {PropsWithChildren} from "react";
import styles from "src/components/Container/Container.module.scss";

type Props = { className?: string };

export function Container({children, className = ""}: PropsWithChildren<Props>) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
