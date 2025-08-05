import {useEffect} from "react";
import {Container} from "src/components/Container/Container";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {useUsers} from "src/hooks/useUsers";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  const {createUser, loading, error} = useUsers();

  // Demo: Test the hook on component mount
  useEffect(() => {
    const testUserData = {
      firstName: "Demo",
      lastName: "User",
      email: `demo.user.${Date.now()}@example.com`,
      phone: "+1234567890",
    };

    const testHook = async () => {
      try {
        await createUser(testUserData);
      } catch {
        // Error is handled by the hook
      }
    };

    testHook();
  }, []); // Убрал createUser из зависимостей

  return (
    <>
      <Header />
      <Container>
        <div className={styles.content}>
          <h1>
            Главная страница
          </h1>
          {loading && (
            <p>
              Loading...
            </p>
          )}
          {error && (
            <p style={{color: "red"}}>
              Error:
              {error}
            </p>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
