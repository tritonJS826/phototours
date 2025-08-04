import {useState} from "react";
import {Button} from "src/components/Button/Button";
import styles from "src/components/Navbar/Navbar.module.scss";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a
          href="/"
          className={styles.logo}
        >
          TPT
        </a>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          <li>
            <a href="/discounts">
              Скидки
            </a>
          </li>
          <li>
            <a href="/tours">
              Туры
            </a>
          </li>
          <li>
            <a href="/hot-tours">
              Горящие туры
            </a>
          </li>
          <li>
            <a href="/blog">
              Блог
            </a>
          </li>
        </ul>
        <Button
          href="/contact"
          variant="secondary"
          className={styles.contactButton}
        >
          Связаться с нами
        </Button>
      </div>
    </nav>
  );
}
