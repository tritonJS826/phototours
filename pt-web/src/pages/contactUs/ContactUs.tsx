import {memo} from "react";
import {ContactForm} from "src/components/ContactForm/ContactForm";
import {ContactInfo} from "src/components/ContactInfo/ContactInfo";
import styles from "src/pages/contactUs/ContactUs.module.scss";

interface ContactUsContent {
  title: string;
  subtitle: string;
}

// Constants
const CONTACT_US_CONTENT: ContactUsContent = {
  title: "Get in Touch",
  subtitle: "Have a question about our tours? We're here to help!",
} as const;

export const ContactUs = memo(function ContactUs() {
  return (
    <main
      className={styles.contactUs}
      role="main"
      aria-labelledby="contact-title"
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 id="contact-title">
              {CONTACT_US_CONTENT.title}
            </h1>
            <p>
              {CONTACT_US_CONTENT.subtitle}
            </p>
          </header>

          <section
            className={styles.content}
            aria-label="Contact form and information"
          >
            <div
              className={styles.formSection}
              role="region"
              aria-labelledby="contact-title"
            >
              <ContactForm />
            </div>

            <div
              className={styles.infoSection}
              role="complementary"
              aria-label="Contact information and social media"
            >
              <ContactInfo />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
});

