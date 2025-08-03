import {Container} from "src/components/Container/Container";
import {CreateUserButton} from "src/components/CreateUserButton/CreateUserButton";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import styles from "src/pages/testPage/TestPage.module.scss";

export function TestPage() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Developer Test Page
          </h1>
          <p className={styles.subtitle}>
            This page contains test components for development and API testing.
          </p>

          <div className={styles.testSection}>
            <h2>
              User Management Tests
            </h2>
            <CreateUserButton />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
