import {useState} from "react";
import {Link} from "react-router-dom";
import notificationCheckMark from "/images/notificationCheckMark.svg";
import {CentralNotification} from "src/components/CentralNotification/CentralNotification";
import {InputPhone} from "src/components/InputPhone/InputPhone";
import {submitContactMe} from "src/services/sailsService";
import styles from "src/pages/homePage/HomePage.module.scss";

interface FeedbackBlockProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export function FeedbackBlock(props: FeedbackBlockProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNotificationOpen, setIsContactMeSucceededNotificationOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !phoneNumber.trim()) {
      alert("Please fill in both name and phone number");

      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactMe({
        name: name.trim(),
        phone: phoneNumber.trim(),
      });
      setIsContactMeSucceededNotificationOpen(true);
      setName("");
      setPhoneNumber("");
    } catch (error) {
      alert("Failed to submit contact request. Please try again.");
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.feedBackBlock}>
        <div className={styles.feedBackContent}>
          <h2 className={styles.feedBackTitle}>
            {props.title}
          </h2>
          <p className={styles.feedBackDescription}>
            {props.subtitle}
          </p>
          <div className={styles.feedbackFormContainer}>
            <div className={styles.feedBackForm}>
              <input
                type="text"
                className={styles.feedBackInput}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              <InputPhone
                defaultCountry="us"
                value={phoneNumber}
                className={styles.feedBackPhoneInput}
                onChange={setPhoneNumber}
              />
              <button
                className={styles.feedBackButton}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : props.buttonText}
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
          </div>
        </div>
      </div>

      <CentralNotification
        isOpen={isNotificationOpen}
        onClose={() => setIsContactMeSucceededNotificationOpen(false)}
        imageUrl={notificationCheckMark}
        title="We’ve received your request!"
        // eslint-disable-next-line max-len
        subtitle="One of our travel experts will contact you soon using your details to help you choose the perfect destination and itinerary. Expect a call or message shortly."
      />
    </>
  );
}
