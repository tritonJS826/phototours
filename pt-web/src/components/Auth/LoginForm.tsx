import React, {useState} from "react";
import {useAuth} from "src/hooks/useAuth";
import {LoginData} from "src/types/auth";
import styles from "src/components/Auth/Auth.module.scss";

interface LoginFormProps {
  onSuccess?: () => void;
  onSwitchToRegister?: () => void;
  hideTitle?: boolean;
  hideSwitch?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onSwitchToRegister,
  hideTitle = false,
  hideSwitch = false,
}) => {
  const {login, isLoading} = useAuth();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    setError(""); // Clear error when field changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData);

      const REFRESH_DELAY = 100;
      setTimeout(() => {
        onSuccess?.();
      }, REFRESH_DELAY);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login error");
    }
  };

  return (
    <div className={styles.authForm}>
      {!hideTitle && (
        <h2>
          Login
        </h2>
      )}
      {error && <div className={styles.error}>
        {error}
      </div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {!hideSwitch && (
        <div className={styles.switchForm}>
          <p>
            Don't have an account?
            {" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className={styles.linkButton}
            >
              Register
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
