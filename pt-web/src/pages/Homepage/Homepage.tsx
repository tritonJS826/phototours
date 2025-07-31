import React, {useState} from "react";
// eslint-disable-next-line no-restricted-imports
import {Booking} from "../../components/Booking/Booking";
// eslint-disable-next-line no-restricted-imports
import {Registration} from "../../components/Registration/Registration";
// eslint-disable-next-line no-restricted-imports
import styles from "./Homepage.module.scss";

export const Homepage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"booking" | "registration">("booking");

  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <h1>
          Photo Tours
        </h1>
        <p>
          Профессиональные фототуры по России
        </p>
      </header>

      <nav className={styles.navigation}>
        <button
          className={`${styles.navButton} ${activeTab === "booking" ? styles.active : ""}`}
          onClick={() => setActiveTab("booking")}
        >
          🏖️ Бронирование туров
        </button>
        <button
          className={`${styles.navButton} ${activeTab === "registration" ? styles.active : ""}`}
          onClick={() => setActiveTab("registration")}
        >
          👤 Регистрация
        </button>
      </nav>

      <main className={styles.main}>
        {activeTab === "booking" ? <Booking /> : <Registration />}
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; 2025 Photo Tours. Все права защищены.
        </p>
      </footer>
    </div>
  );
};
