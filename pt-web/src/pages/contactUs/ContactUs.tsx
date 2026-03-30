import email from "/images/email.svg";
import facebook from "/images/facebook.svg";
import instagram from "/images/instagram.svg";
import telegram from "/images/telegram.svg";
import whatsapp from "/images/whatsapp.svg";
import styles from "src/pages/contactUs/ContactUs.module.scss";

export const ContactUs = () => {
  return (
    <main
      className={styles.contactUs}
      role="main"
      aria-labelledby="contact-title"
    >
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <h1 className={styles.infoHeader}>
            Get in Touch With
            <br />
            {" "}
            Tuscany Photo Tours
          </h1>
          <p className={styles.infoSubtitle}>
            Connect with us to start planning your next great photography
            expedition or to explore professional collaboration opportunities
            within our community
          </p>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              general enquiries
            </span>
            <a
              href="mailto:info@tuscanyphototours.com"
              className={styles.infoRightMiniBlockDescription}
            >
              info@tuscanyphototours.com
            </a>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              collaborations
            </span>
            <a
              href="mailto:marketing@tuscanyphototours.com"
              className={styles.infoRightMiniBlockDescription}
            >
              marketing@tuscanyphototours.com
            </a>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              address
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              Harju maakond, Tallinn, Kesklinna linnaosa
              <br />
              {" "}
              10152, Vesivärava tn 50-212
            </span>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              social media
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              <a
                href="mailto:info@tuscany-photo-tours.com"
                className={styles.socialMediaImage}
              >
                <img
                  className={styles.socialMediIcon}
                  src={email}
                  alt="user link"
                />
              </a>
              <a
                href="https://t.me/tuscanyphototours_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialMediaImage}
              >
                <img
                  className={styles.socialMediIcon}
                  src={telegram}
                  alt="user link"
                />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialMediaImage}
              >
                <img
                  className={styles.socialMediIcon}
                  src={whatsapp}
                  alt="user link"
                />
              </a>
              <a
                href="https://instagram.com/tuscany.phototours"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialMediaImage}
              >
                <img
                  className={styles.socialMediIcon}
                  src={instagram}
                  alt="user link"
                />
              </a>
              <a
                href="https://facebook.com/tuscanyphototours"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialMediaImage}
              >
                <img
                  className={styles.socialMediIcon}
                  src={facebook}
                  alt="user link"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imageBlock} />
    </main>
  );
};
