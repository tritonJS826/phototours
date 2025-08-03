import {Container} from "src/components/Container/Container";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.content}>
          <h1>
            Главная страница
          </h1>
        </div>
      </Container>
      <Footer />
    </>
  );
}
