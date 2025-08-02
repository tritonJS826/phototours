import React, {useState} from "react";
// eslint-disable-next-line no-restricted-imports
import styles from "./Registration.module.scss";

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  password: string;
  confirmPassword: string;
}

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({type: "error", text: "Пароли не совпадают"});

      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // Регистрация пользователя в базе данных
      const userResponse = await fetch("/general/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
        }),
      });

      if (!userResponse.ok) {
        throw new Error("Ошибка регистрации пользователя");
      }

      setMessage({type: "success", text: "Регистрация успешно завершена! Добро пожаловать!"});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        password: "",
        confirmPassword: "",
      });

    } catch {
      setMessage({type: "error", text: "Ошибка при регистрации. Попробуйте еще раз."});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registration}>
      <h2>
        Регистрация
      </h2>
      <p>
        Создайте аккаунт для доступа к нашим услугам
      </p>

      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          {message.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">
              Имя *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">
              Фамилия *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
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
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">
            Компания
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              Пароль *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">
              Подтвердите пароль *
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
};
