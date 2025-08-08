// Import {useEffect} from "react";
import {HeroSection} from "src/components/HeroSection/HeroSection";
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
    <div className={styles.homePage}>
      <HeroSection />
    </div>
  );
}
