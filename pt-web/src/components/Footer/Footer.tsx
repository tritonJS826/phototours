import {Container} from "src/components/Container/Container";
import styles from "src/components/Footer/Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Первый контейнер для основного контента футера */}
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <h4>
              TPT
            </h4>
            <p>
              Информация о компании...
            </p>
          </div>
          <div className={styles.column}>
            <h4>
              Навигация
            </h4>
            <ul>
              <li>
                <a href="#">
                  О нас
                </a>
              </li>
              <li>
                <a href="#">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>
              Социальные сети
            </h4>
            <div className={styles.socialIcons} />
          </div>
        </div>
      </Container>

      {/* Отдельный контейнер для блока с авторскими правами */}
      <Container>
        <div className={styles.copyright}>
          &copy; 2025 TPT. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
