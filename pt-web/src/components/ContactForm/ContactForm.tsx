import {useCallback, useMemo, useState} from "react";
import {Notification} from "src/components/Notification/Notification";
import {API_ROUTES} from "src/config/apiRoutes";
import styles from "src/components/ContactForm/ContactForm.module.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface NotificationState {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
}

interface FormField {
  id: keyof FormData;
  label: string;
  type: "text" | "email";
  placeholder: string;
  title: string;
}

// Constants
import {env} from "src/env";

const API_BASE_URL = env.VITE_API_BASE_URL;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERROR_MESSAGES = {
  NAME_REQUIRED: "Please enter your name",
  EMAIL_REQUIRED: "Please enter a valid email address",
  MESSAGE_REQUIRED: "Please enter your message",
  NETWORK_ERROR: "Network error. Please check your connection and try again.",
  SEND_ERROR: "Failed to send message. Please try again.",
  SUCCESS: "Message sent successfully!",
} as const;

const FORM_FIELDS: FormField[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    title: "Please enter your name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    title: "Please enter a valid email address",
  },
];

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_NOTIFICATION: NotificationState = {
  message: "",
  type: "success",
  isVisible: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [notification, setNotification] = useState<NotificationState>(INITIAL_NOTIFICATION);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized handlers
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const closeNotification = useCallback(() => {
    setNotification(prev => ({...prev, isVisible: false}));
  }, []);

  const showNotification = useCallback((message: string, type: "success" | "error") => {
    setNotification({
      message,
      type,
      isVisible: true,
    });
  }, []);

  // Validation logic
  const validateField = useCallback((field: keyof FormData, value: string): string | null => {
    switch (field) {
      case "name":
        return !value.trim() ? ERROR_MESSAGES.NAME_REQUIRED : null;

      case "email":
        return !value.trim() || !EMAIL_REGEX.test(value) ? ERROR_MESSAGES.EMAIL_REQUIRED : null;

      case "message":
        return !value.trim() ? ERROR_MESSAGES.MESSAGE_REQUIRED : null;

      default:
        return null;
    }
  }, []);

  const validateForm = useCallback((): boolean => {
    for (const [field, value] of Object.entries(formData)) {
      const error = validateField(field as keyof FormData, value);

      if (error) {
        showNotification(error, "error");

        return false;
      }
    }

    return true;
  }, [formData, validateField, showNotification]);

  // Form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}${API_ROUTES.CONTACT.SEND_MESSAGE}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(INITIAL_FORM_DATA);
        showNotification(ERROR_MESSAGES.SUCCESS, "success");
      } else {
        const errorData = await response.json().catch(() => ({}));
        showNotification(errorData.error || ERROR_MESSAGES.SEND_ERROR, "error");
      }
    } catch {
      showNotification(ERROR_MESSAGES.NETWORK_ERROR, "error");
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateForm, showNotification]);

  // Memoized form fields
  const renderedFormFields = useMemo(() =>
    FORM_FIELDS.map(({id, label, type, placeholder, title}) => (
      <div
        key={id}
        className={styles.formGroup}
      >
        <label
          htmlFor={id}
          className={styles.formLabel}
        >
          {label}
        </label>
        <input
          className={styles.formInput}
          type={type}
          id={id}
          name={id}
          value={formData[id]}
          onChange={handleChange}
          required
          lang="en"
          title={title}
          placeholder={placeholder}
          disabled={isLoading}
          aria-describedby={`${id}-error`}
          aria-invalid={validateField(id, formData[id]) ? "true" : "false"}
        />
      </div>
    )), [formData, handleChange, isLoading, validateField],
  );

  return (
    <>
      <form
        className={styles.contactForm}
        onSubmit={handleSubmit}
        lang="en"
        acceptCharset="UTF-8"
        data-lang="en"
        noValidate
        aria-label="Contact form"
      >
        {renderedFormFields}

        <div className={styles.formGroup}>
          <label
            htmlFor="message"
            className={styles.formLabel}
          >
            Message
          </label>
          <textarea
            className={styles.formTextarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            lang="en"
            placeholder="Enter your message here..."
            title="Please enter your message"
            disabled={isLoading}
            aria-describedby="message-error"
            aria-invalid={validateField("message", formData.message) ? "true" : "false"}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
          aria-describedby="submit-status"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        {isLoading && (
          <div
            id="submit-status"
            className="sr-only"
            aria-live="polite"
          >
            Sending your message...
          </div>
        )}
      </form>
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </>
  );
}
