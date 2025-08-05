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
    // eslint-disable-next-line no-console
    console.log("HomePage mounted - testing useUsers hook");

    const testUserData = {
      firstName: "Demo",
      lastName: "User",
      email: `demo.user.${Date.now()}@example.com`,
      phone: "+1234567890",
    };

    const testHook = async () => {
      try {
        // eslint-disable-next-line no-console
        console.log("HomePage - creating test user...");
        const newUser = await createUser(testUserData);
        // eslint-disable-next-line no-console
        console.log("HomePage - user created successfully:", newUser);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("HomePage - failed to create user:", err);
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
