import {memo} from "react";
import styles from "src/pages/contactUs/ContactUs.module.scss";

export const ContactUs = memo(function ContactUs() {
  return (
    <main
      className={styles.contactUs}
      role="main"
      aria-labelledby="contact-title"
    >
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <h1 className={styles.infoHeader}>
            Get in Touch With Tuscany Photo Tours
          </h1>
          <p className={styles.infoSubtitle}>
            Small-group photo tours | Award-winning locations | Professional mentoring
          </p>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              general enquiries
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              info@tuscanyphototours.com
            </span>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              collaborations
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              partners@tuscanyphototours.com
            </span>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              address
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              Via della Toscana 12,
              <br />
              {" "}
              53100 Siena, Italy
            </span>
          </div>
          <div className={styles.infoRightMiniBlock}>
            <span className={styles.infoRightMiniBlockTitle}>
              social media
            </span>
            <span className={styles.infoRightMiniBlockDescription}>
              social media links
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imageBlock} />
    </main>
  );
});

