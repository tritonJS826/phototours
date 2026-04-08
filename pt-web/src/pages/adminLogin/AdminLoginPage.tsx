import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "src/components/Auth/LoginForm/LoginForm";
import {RegisterForm} from "src/components/Auth/RegisterForm/RegisterForm";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
import styles from "src/pages/adminLogin/AdminLoginPage.module.scss";

type AuthMode = "login" | "register";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [mode, setMode] = useState<AuthMode>("login");

  const handleLoginSuccess = () => {
    if (user?.role === "ADMIN") {
      navigate(PATHS.ADMIN);
    } else {
      navigate(PATHS.HOME);
    }
  };

  const handleRegisterSuccess = () => {
    setMode("login");
  };

  return (
    <div className={styles.adminLoginPage}>
      <div className={styles.adminLoginContainer}>
        <h1 className={styles.loginPageTitle}>
          Admin
        </h1>

        <div className={styles.authTabs}>
          <button
            type="button"
            className={`${styles.tabButton} ${mode === "login" ? styles.active : ""}`}
            onClick={() => setMode("login")}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${mode === "register" ? styles.active : ""}`}
            onClick={() => setMode("register")}
          >
            Sign Up
          </button>
        </div>

        {mode === "login"
          ? (
            <LoginForm
              onSuccess={handleLoginSuccess}
              hideSwitch={true}
            />
          )
          : (
            <RegisterForm
              onSuccess={handleRegisterSuccess}
              hideSwitch={true}
            />
          )}
      </div>
    </div>
  );
}
