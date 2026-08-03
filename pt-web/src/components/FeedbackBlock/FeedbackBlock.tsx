import {useState} from "react";
import {Link} from "react-router-dom";
import notificationCheckMark from "/images/notificationCheckMark.svg";
import notificationError from "/images/notificationError.svg";
import clsx from "clsx";
import {CentralNotification} from "src/components/CentralNotification/CentralNotification";
import {InputPhone} from "src/components/InputPhone/InputPhone";
import {submitContactMe} from "src/services/sailsService";
import {getUserInfo} from "src/utils/userInfo";
import styles from "src/pages/homePage/HomePage.module.scss";

interface FeedbackBlockProps {
  title: string;
  subtitle: string;
  buttonText: string;

  feedBackDescriptionCustomClass?: string;
}

export function FeedbackBlock(props: FeedbackBlockProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNotificationOpen, setIsContactMeSucceededNotificationOpen] =
    useState(false);
  const [isErrorNotificationOpen, setIsErrorNotificationOpen] = useState(false);

  const handleSubmit = async () => {
    const MIN_PHONE_NUMBER_LENGTH = 7;
    const isNameInvalid = !name.trim();
    const isPhoneInvalid = !phoneNumber.trim() || phoneNumber.trim().length < MIN_PHONE_NUMBER_LENGTH;

    if (isNameInvalid || isPhoneInvalid) {
      setNameError(isNameInvalid);
      setPhoneError(isPhoneInvalid);

      return;
    }

    setIsSubmitting(true);
    try {
      const userInfo = await getUserInfo();
      await submitContactMe({
        name: name.trim(),
        phone: phoneNumber.trim(),
        language: userInfo.language,
        timezone: userInfo.timezone,
        city: userInfo.location?.city,
        country: userInfo.location?.country_name,
        lastContactPage: window.location.href,
      });
      setIsContactMeSucceededNotificationOpen(true);
      setName("");
      setPhoneNumber("");
      setNameError(false);
      setPhoneError(false);
    } catch (error) {
      setIsErrorNotificationOpen(true);
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
          <p className={clsx(
            styles.feedBackDescription,
            props.feedBackDescriptionCustomClass,
          )}
          >
            {props.subtitle}
          </p>
          <div className={styles.feedbackFormContainer}>
            <div className={styles.feedBackForm}>
              <div>
                <input
                  type="text"
                  className={clsx(styles.feedBackInput, nameError && styles.inputError)}
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  autoComplete="name"
                />
                {nameError && (
                  <span className={styles.feedbackFieldError}>
                    Please enter your name
                  </span>
                )}
              </div>
              <div>
                <InputPhone
                  defaultCountry="us"
                  value={phoneNumber}
                  className={clsx(styles.feedBackPhoneInput, phoneError && styles.inputError)}
                  onChange={(val) => {
                    setPhoneNumber(val);
                    setPhoneError(false);
                  }}
                />
                {phoneError && (
                  <span className={styles.feedbackFieldError}>
                    Please enter a valid phone number
                  </span>
                )}
              </div>
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
                to="/privacy-policy"
                className={styles.privacyLink}
              >
                Privacy Policy
              </Link>
              <span className={styles.requiredAsterisk}>
                *
              </span>
              .
            </span>
          </div>
        </div>
      </div>

      <CentralNotification
        isOpen={isNotificationOpen}
        onClose={() => setIsContactMeSucceededNotificationOpen(false)}
        imageUrl={notificationCheckMark}
        title="We've received your request!"
        // eslint-disable-next-line max-len
        subtitle="One of our travel experts will contact you soon using your details to help you choose the perfect destination and itinerary. Expect a call or message shortly."
      />

      <CentralNotification
        isOpen={isErrorNotificationOpen}
        onClose={() => setIsErrorNotificationOpen(false)}
        imageUrl={notificationError}
        title="Oops! Something went wrong"
        subtitle="Please try again later. If the problem persists, contact us through other means."
      />
    </>
  );
}
