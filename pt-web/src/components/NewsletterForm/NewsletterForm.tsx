import {memo, useState} from "react";
import {Link} from "react-router-dom";
import notificationCheckMark from "/images/notificationCheckMark.svg";
import {CentralNotification} from "src/components/CentralNotification/CentralNotification";
import {subscribe} from "src/services/sailsService";
import styles from "src/components/NewsletterForm/NewsletterForm.module.scss";

const BUTTON_TEXT = {
  SUBSCRIBE: "Subscribe",
  SUBSCRIBING: "Subscribing...",
} as const;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email.trim());
};

const isDuplicateError = (error: unknown): boolean => {
  if (!(error instanceof Error)) {
    return false;
  }

  return error.message.includes("DUPLICATE_DATA");
};

export const NewsletterForm = memo(function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessNotificationOpen, setIsSuccessNotificationOpen] = useState(false);
  const [isDuplicateNotificationOpen, setIsDuplicateNotificationOpen] = useState(false);
  const [isErrorNotificationOpen, setIsErrorNotificationOpen] = useState(false);

  const handleSubmitSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await subscribe({email});
      setEmail("");
      setIsSuccessNotificationOpen(true);
    } catch (error) {
      if (isDuplicateError(error)) {
        setIsDuplicateNotificationOpen(true);
        setEmail("");
      } else {
        setIsErrorNotificationOpen(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        className={styles.newsletterForm}
        onSubmit={handleSubmitSubscribe}
        role="form"
        aria-label="Newsletter subscription form"
        autoComplete="on"
      >
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.emailInput}
              disabled={isSubmitting}
              aria-label="Email address"
              autoComplete="on"
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
        <span className={styles.privacyPolicyText}>
          By submitting, you agree to our
          {" "}
          <Link
            to="#"
            className={styles.privacyLink}
          >
            Privacy Policy.
          </Link>
        </span>
      </form>

      <CentralNotification
        isOpen={isSuccessNotificationOpen}
        onClose={() => setIsSuccessNotificationOpen(false)}
        imageUrl={notificationCheckMark}
        title="You're on the list!"
        subtitle="Welcome to Tuscany Photo Tours! You'll now receive exclusive updates, early offers, and photography tips straight to your inbox."
      />

      <CentralNotification
        isOpen={isDuplicateNotificationOpen}
        onClose={() => setIsDuplicateNotificationOpen(false)}
        imageUrl={notificationCheckMark}
        title="You're already in the list!"
        subtitle="No worries! You're already subscribed to our newsletter. Stay tuned for exciting updates and offers."
      />

      <CentralNotification
        isOpen={isErrorNotificationOpen}
        onClose={() => setIsErrorNotificationOpen(false)}
        imageUrl={notificationCheckMark}
        title="Oops! Something went wrong"
        subtitle="Please try again later. If the problem persists, contact us through other means."
      />
    </>
  );
});
