import {PropsWithChildren} from "react";
import styles from "src/components/Page/Page.module.scss";

type Props = { className?: string };

export function Page({children, className = ""}: PropsWithChildren<Props>) {
  return (
    <div className={`${styles.page} ${className}`}>
      {children}
    </div>
  );
}
