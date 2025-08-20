import {memo, useState} from "react";
import {Mail} from "lucide-react";
import {subscribeToNewsletter} from "src/services/newsletterService";
import styles from "src/components/NewsletterForm/NewsletterForm.module.scss";

// ====== CONSTANTS ======
const MESSAGES = {
  EMPTY_EMAIL: "Please enter your email address",
  INVALID_EMAIL: "Please enter a valid email address",
  SUCCESS: "Thank you for subscribing!",
  ERROR: "Something went wrong. Please try again.",
} as const;

const BUTTON_TEXT = {
  SUBSCRIBE: "Subscribe",
  SUBSCRIBING: "Subscribing...",
} as const;

// ====== VALIDATION ======
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email.trim());
};

const isSuccessMessage = (message: string): boolean => {
  return message.toLowerCase().includes("thank you") ||
         message.toLowerCase().includes("success");
};

export const NewsletterForm = memo(function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage(MESSAGES.EMPTY_EMAIL);

      return;
    }

    if (!validateEmail(email)) {
      setMessage(MESSAGES.INVALID_EMAIL);

      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const result = await subscribeToNewsletter(email, "footer");

      setMessage(result.message || MESSAGES.SUCCESS);
      setEmail("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : MESSAGES.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={styles.newsletterForm}
      onSubmit={handleSubmit}
      role="form"
      aria-label="Newsletter subscription form"
    >
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <Mail className={styles.emailIcon} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.emailInput}
            disabled={isSubmitting}
            aria-label="Email address"
            required
          />
        </div>
        <button
          type="submit"
          className={styles.subscribeButton}
          disabled={isSubmitting}
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? BUTTON_TEXT.SUBSCRIBING : BUTTON_TEXT.SUBSCRIBE}
        </button>
      </div>

      {message && (
        <div className={`${styles.message} ${isSuccessMessage(message) ? styles.successMessage : styles.errorMessage}`}>
          {message}
        </div>
      )}
    </form>
  );
});
