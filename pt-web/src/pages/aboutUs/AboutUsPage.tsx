import cameraBlue from "/images/cameraBlue.svg";
import email from "/images/email.svg";
import infinityBlue from "/images/infinityBlue.svg";
import instagram from "/images/instagram.svg";
import mapMarkerBlue from "/images/mapMarkerBlue.svg";
import smallGroup from "/images/smallGroupBlue.svg";
import telegram from "/images/telegram.svg";
import {FeedbackBlock} from "src/pages/homePage/HomePage";
import styles from "src/pages/aboutUs/AboutUsPage.module.scss";

export function AboutUs() {
  return (
    <div>
      <main
        className={styles.aboutUs}
        role="main"
        aria-labelledby="contact-title"
      >
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <h1 className={styles.infoHeader}>
              Get in Touch: Let’s Plan Your Ultimate Photography Journey
            </h1>
            <p className={styles.infoSubtitle}>
              Expert guidance • Hidden gems • Total immersion • Small group
              exclusivity
            </p>
          </div>
        </div>

        <div className={styles.heroSectionBg}>
          <section className={styles.heroSection}>
            <p className={styles.subtitle}>
              Small groups • Iconic locations • Professional photo mentoring to
              help you create award-winning shots on cinematic Tuscan routes.
            </p>
          </section>
        </div>

        <div className={styles.victorBlock}>
          <div className={styles.victorInfoBlock}>
            <div className={styles.victorSocial}>
              <a
                href="mailto:info@tuscany-photo-tours.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={email}
                  alt="email"
                />
              </a>
              <a
                href="https://t.me/tuscanyphototours_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={telegram}
                  alt="telegram"
                />
              </a>
              <a
                href="https://instagram.com/tuscany.phototours"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </div>
            <h2 className={styles.victorTitle}>
              Pavel Oskin
            </h2>
            <p className={styles.victorDescription}>
              CEO and landscape photographer based in Prague with over 15 years
              of experience leading workshops and photo tours around the world.
            </p>
            <p className={styles.victorDescription2}>
              Epson Pano Awards winner (12 medals), NatGeo author, and FEP
              member. 600+ travelers and photographers have joined Pavel’s
              tours. With Pavel and his team, you’re always in the right place
              at the right time for the perfect shot!
            </p>
          </div>

          <div className={styles.victorImageBlock}>
            <img
              src="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771339565/Frame_5163.png_emiqtp.avif"
              alt="victor block"
              className={styles.victorImage}
            />
          </div>
        </div>

        <div className={styles.ourHistoryBlock}>
          <div className={styles.ourHistoryLeft}>
            <img
              // eslint-disable-next-line max-len
              src="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771339564/tuscany-fall___IGP2998-Pano_141%D1%85312-200dpi-Edit_pz1bzp_1.png_zmrn0r.avif"
              alt="left"
            />
          </div>
          <div className={styles.ourHistoryMain}>
            <h2 className={styles.ourHistoryTitle}>
              Our Mission
            </h2>
            <p className={styles.ourHistoryDescription}>
              Tuscany Photo Tours was founded with a singular vision: to bridge
              the gap between signature travel and photographic education. We
              believe that the world’s most extraordinary locations deserve more
              than just a passing glance — they deserve to be captured with
              intent.
            </p>
            <p className={styles.ourHistoryDescription2}>
              Our purpose is simple: to provide the opportunity to visit
              picturesque spots and to empower you with the skills and access
              needed to create your own photographic masterpieces.
            </p>
            <p className={styles.ourHistoryDescription3}>
              Drawing on over 15 years of experience, we curate exclusive
              expeditions to the most cinematic corners of our planet. From the
              volcanic heart of New Zealand to the misty hills of Tuscany, we
              ensure you are always in the right place at the right time to
              capture the perfect shot.
            </p>
          </div>
          <div className={styles.ourHistoryRight}>
            <img
              src="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771339564/tuscany-fall___IGP2448-Pano-1_l2ahw2_3.png_ufsjqv.avif"
              alt="telegram"
            />
          </div>
        </div>

        <div className={styles.whatMakesUsDifferent}>
          <div className={styles.whatMakesUsDifferentPlaceholder} />
          <h2 className={styles.whatMakesUsDifferentTitle}>
            What Makes Us Different?
          </h2>
          <div className={styles.whatMakesUsDifferentCards}>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={cameraBlue}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Expert Guidance
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                Experienced photographers guide you through composition,
                lighting, and shooting techniques on location.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={mapMarkerBlue}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Hidden Gems
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We select iconic and lesser-known locations for unique and
                breathtaking shots in every season.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={infinityBlue}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Total Immersion
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We handle logistics with local experts, so you can fully focus
                on the creative process.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={smallGroup}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Small Groups
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                Groups of 6–10 participants ensure personal attention and
                individual mentoring.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FeedbackBlock
        title="Find Your Perfect Photo Journey"
        subtitle="Share your contact info, and we’ll reach out to help you select the ideal destination and dates."
        buttonText="Contact Me"
      />
    </div>
  );
}
