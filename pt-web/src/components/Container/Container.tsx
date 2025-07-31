import {PropsWithChildren} from "react";
import styles from "src/components/Container/Container.module.scss";

interface ContainerProps {
  className?: string;
}

export function Container({children, className = ""}: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
