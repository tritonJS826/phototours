import {useEffect} from "react";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {PATHS} from "src/constants/routes";
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
      await createUser(testUserData);
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
        <Button href={PATHS.ADMIN_CREATE_TOUR}>
          Create Tour
        </Button>
        <Button href={PATHS.ADMIN_EDIT_TOUR}>
          Edit Tour
        </Button>
      </Container>
      <Footer />
    </>

  );
}
