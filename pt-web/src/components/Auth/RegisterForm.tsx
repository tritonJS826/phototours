import React, {useState} from "react";
import {useAuth} from "../../hooks/useAuth.js";
import {RegisterData} from "../../types/auth.js";
import styles from "./Auth.module.scss";

interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
  hideTitle?: boolean;
  hideSwitch?: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
  hideTitle = false,
  hideSwitch = false,
}) => {
  const {register, isLoading} = useAuth();
  const [formData, setFormData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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
      await register(formData);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration error");
    }
  };

  return (
    <div className={styles.authForm}>
      {!hideTitle && (
        <h2>
          Registration
        </h2>
      )}
      {error && <div className={styles.error}>
        {error}
      </div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email *
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
          <label htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">
            Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {!hideSwitch && (
        <div className={styles.switchForm}>
          <p>
            Already have an account?
            {" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className={styles.linkButton}
            >
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
