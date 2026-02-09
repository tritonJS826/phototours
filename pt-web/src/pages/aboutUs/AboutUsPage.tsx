import blueEmailAbout from "/images/blueEmailAbout.svg";
import blueGroups from "/images/blueGroups.svg";
import blueInstagramAbout from "/images/blueInstagramAbout.svg";
import bluePhotoPlus from "/images/bluePhotoPlus.svg";
import blueTelegramAbout from "/images/blueTelegramAbout.svg";
import blueTravelBags from "/images/blueTravelBags.svg";
import ourHistoryLeft from "/images/ourHistoryLeft.avif";
import ourHistoryRight from "/images/ourHistoryRight.avif";
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
              Expert guidance • Hidden gems • Total immersion • Small group exclusivity
            </p>
          </div>

        </div>

        <div className={styles.heroSectionBg}>
          <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>
              <b>
                Unforgettable Photo
                {" "}
                <i className={styles.italic}>
                  Tours Across Tuscany
                </i>
                {" "}
                Capture breathtaking landscapes with expert guidance
              </b>
            </h1>
            <p className={styles.subtitle}>
              Small groups • Iconic locations • Professional photo mentoring to
              help you create award-winning shots on cinematic Tuscan routes.
            </p>
          </section>
        </div>

        <div className={styles.victorBlock}>
          <div className={styles.victorImageBlock}>
            <img
              src="/images/homeHero.avif"
              alt="victor block"
              className={styles.victorImage}
            />
          </div>

          <div className={styles.victorInfoBlock}>
            <div className={styles.victorSocial}>
              <img
                src={blueEmailAbout}
                alt="email"
              />
              <img
                src={blueTelegramAbout}
                alt="instagram"
              />
              <img
                src={blueInstagramAbout}
                alt="telegram"
              />
            </div>
            <h2 className={styles.victorTitle}>
              Pavel Oskin
            </h2>
            <p className={styles.victorDescription}>
              Tuscany Photo Tours was founded with a singular vision: to bridge the gap between signature travel and photographic education.
              We believe that the world’s most extraordinary locations deserve more than just a passing glance — they
              deserve to be captured with intent
            </p>
            <p className={styles.victorDescription2}>
              Our purpose is simple: to provide the opportunity to visit picturesque spots and to empower you with the skills
              and access needed to create your own photographic masterpieces.
            </p>
          </div>

          <div />
        </div>

        <div className={styles.ourHistoryBlock}>
          <div className={styles.ourHistoryLeft}>
            <img
              src={ourHistoryLeft}
              alt="telegram"
            />
          </div>
          <div className={styles.ourHistoryMain}>
            <h2 className={styles.ourHistoryTitle}>
              Our Mission
            </h2>
            <p className={styles.ourHistoryDescription}>
              Tuscany Photo Tours was founded with a singular vision: to bridge the gap between signature
              travel and photographic education. We believe that the world’s most extraordinary locations deserve
              more than just a passing glance — they deserve to be captured with intent.
            </p>
            <p className={styles.ourHistoryDescription2}>
              Our purpose is simple:
              <br />
              Our purpose is simple: to provide the opportunity to visit picturesque spots and to empower you with the skills and
              access needed to create your own photographic masterpieces.
            </p>
            <p className={styles.ourHistoryDescription3}>
              Drawing on over 15 years of experience, we curate exclusive expeditions to the most cinematic
              corners of our planet. From the volcanic heart of New Zealand to the misty hills of Tuscany,
              we ensure you are always in the right place at the right time to capture the perfect shot.
            </p>
          </div>
          <div className={styles.ourHistoryRight}>
            <img
              src={ourHistoryRight}
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
                  src={bluePhotoPlus}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Expert Guidance
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                Experienced photographers guide you through composition, lighting, and shooting techniques on location.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={blueGroups}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Hidden Gems
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We select iconic and lesser-known locations for unique and breathtaking shots in every season.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={bluePhotoPlus}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Total Immersion
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We handle logistics with local experts, so you can fully focus on the creative process.
              </p>
            </div>
            <div className={styles.whatMakesUsDifferentCard}>
              <div className={styles.whatMakesUsDifferentCardImageWrapper}>
                <img
                  className={styles.whatMakesUsDifferentCardImg}
                  src={blueTravelBags}
                  alt=""
                />
              </div>
              <h3 className={styles.whatMakesUsDifferentCardTitle}>
                Small Groups
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                Groups of 6–10 participants ensure personal attention and individual mentoring.
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

