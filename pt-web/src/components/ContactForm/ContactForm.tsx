import {Button} from "src/components/Button/Button";
import styles from "src/components/ContactForm/ContactForm.module.scss";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        Связаться с нами
      </h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>
      <Button
        type="submit" // Теперь этот пропс работает корректно
        variant="green"
        className={styles.submitButton}
      >
        Отправить
      </Button>
    </form>
  );
}
