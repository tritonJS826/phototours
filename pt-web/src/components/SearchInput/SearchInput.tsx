import {Icon} from "src/components/Icon/Icon";
import styles from "src/components/SearchInput/SearchInput.module.scss";

export function SearchInput() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Поиск по турам..."
        className={styles.input}
      />
      <button className={styles.button}>
        <Icon name="search" />
      </button>
    </div>
  );
}
