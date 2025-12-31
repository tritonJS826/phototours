import blueEmailAbout from "/images/blueEmailAbout.svg";
import blueGroups from "/images/blueGroups.svg";
import blueInstagramAbout from "/images/blueInstagramAbout.svg";
import bluePhotoPlus from "/images/bluePhotoPlus.svg";
import blueTelegramAbout from "/images/blueTelegramAbout.svg";
import blueTravelBags from "/images/blueTravelBags.svg";
import ourHistoryLeft from "/images/ourHistoryLeft.avif";
import ourHistoryRight from "/images/ourHistoryRight.avif";
import {Link} from "src/components/ui/link/Link";
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
              Discover Tuscany Through the Lens of Passion & Expertise
            </h1>
            <p className={styles.infoSubtitle}>
              Small-group photo tours | Award-winning locations | Professional mentoring
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
              Viktor Tsoi
            </h2>
            <p className={styles.victorDescription}>
              Viktor is a passionate photographer with a deep love for natural light, authentic moments, and clean visual storytelling.
            </p>
            <p className={styles.victorDescription2}>
              His approach combines artistic vision with technical precision, helping clients feel confident and relaxed in front of the camera.
              He believes that every photograph should preserve not just a moment — but a feeling
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
              Our History
            </h2>
            <p className={styles.ourHistoryDescription}>
              Tuscany Photo Tours was founded by a team of passionate photographers who fell in love with the timeless charm
              of the Italian countryside — golden vineyards, rolling hills, medieval towns, and dreamy sunrise valleys.
            </p>
            <p className={styles.ourHistoryDescription2}>
              Our purpose is simple:
              <br />
              to help you capture photographs you’ll be proud of for years to come.
            </p>
            <p className={styles.ourHistoryDescription3}>
              After years of exploring every corner of the region, we curated a collection of the most
              cinematic routes and hidden vantage points, turning them into a unique
              photo-travel experience for beginners and professionals alike.
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
                Professional Photo Mentoring
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                Our experienced photographers guide you through composition, lighting, and shooting techniques right on location.
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
                Award-Winning Spots
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We handpick the most iconic and lesser-known locations across Tuscany to ensure breathtaking shots in every season.
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
                Small Groups, Personal Attention
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                With a maximum of 6–8 participants, every guest receives individual guidance and a relaxed atmosphere.
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
                Seamless Travel & Local Expertise
              </h3>
              <p className={styles.whatMakesUsDifferentCardDescription}>
                We collaborate with local drivers and guides to create an authentic, comfortable, and stress-free experience.
              </p>
            </div>
          </div>
        </div>

      </main>

      <FeedbackBlock />
    </div>
  );
}

