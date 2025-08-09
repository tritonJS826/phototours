
// Import {useEffect} from "react";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
// Import {useEffect} from "react";
import {HeroSection} from "src/components/HeroSection/HeroSection";
import {PATHS} from "src/constants/routes";
// Import {useUsers} from "src/hooks/useUsers";
// Import {useUsers} from "src/hooks/useUsers";
import styles from "src/pages/homePage/HomePage.module.scss";

export function HomePage() {
  // Const {createUser, loading, error} = useUsers();

  // // Demo: Test the hook on component mount
  // useEffect(() => {
  //   const testUserData = {
  //     firstName: "Demo",
  //     lastName: "User",
  //     email: `demo.user.${Date.now()}@example.com`,
  //     phone: "+1234567890",
  //   };

  //   const testHook = async () => {
  //     await createUser(testUserData);
  //   };

  //   testHook();
  // }, []); // Убрал createUser из зависимостей

  return (

    <>
      <Header />
      <Container>
        <div className={styles.homePage}>
          <HeroSection />
        </div>

        {/* <div className={styles.content}>
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
        </div> */}

        // These two buttons are a temporary solution, implemented just for demonstration purposes.
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
