import logoBlack from "/images/logoBlack.svg";
import styles from "src/components/Loader/Loader.module.scss";

export function Loader() {
  return (
    <div className={styles.loader}>
      <img
        src={logoBlack}
        alt="Loading"
        className={styles.logo}
      />
    </div>
  );
}
