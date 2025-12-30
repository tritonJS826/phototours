// Import {useEffect, useState} from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// Import cart from "/images/cart.svg";
import email from "/images/email.svg";
import getYourGuide from "/images/getYourGuide.svg";
import instagram from "/images/instagram.svg";
import logo from "/images/logo.svg";
import phone from "/images/phone.svg";
import telegram from "/images/telegram.svg";
import tripAdvisor from "/images/tripAdvisor.svg";
import trustPilot from "/images/trustPilot.svg";
// Import user from "/images/user.svg";
import viator from "/images/viator.svg";
import whatsapp from "/images/whatsapp.svg";
import clsx from "clsx";
import {Accordion, accordionTypes} from "src/components/Accordion/Accordion";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {Footer} from "src/components/Footer/Footer";
import {HeroTextSection} from "src/components/HeroSection/HeroSection";
import {InputPhone} from "src/components/InputPhone/InputPhone";
import {PopularDestinations} from "src/components/PopularDestinations/PopularDestinations";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {ReviewsSection} from "src/components/ReviewsSection/ReviewsSection";
import {ToursSection} from "src/components/ToursSection/ToursSection";
import {PATHS} from "src/routes/routes";
import "react-international-phone/style.css";
import styles from "src/pages/homePage/HomePage.module.scss";

// Const FEATURED_TOURS_LIMIT = 3;
export const FeedbackBlock = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className={styles.feedBackBlock}>
      <div className={styles.feedBackContent}>
        <h2 className={styles.feedBackTitle}>
          Book Your Spring Tuscany Experience
        </h2>
        <p className={styles.feedBackDescription}>
          Small groups • Iconic locations • Professional photo mentoring to help you create award-winning shots on
          cinematic Tuscan routes.
        </p>
        <div className="">
          <div className={styles.feedBackForm}>
            <input
              type="text"
              className={styles.feedBackInput}
              placeholder="Name"
            />
            <InputPhone
              defaultCountry="us"
              value={phoneNumber}
              className={styles.feedBackPhoneInput}
              onChange={setPhoneNumber}
            />
            {/* <input
                type="tel"
                className={styles.feedBackInput}
                placeholder="+1 000 000-000"
              /> */}
            <button className={styles.feedBackButton}>
              Sent
            </button>
          </div>
          <span className={styles.privacyPolicyText}>
            By submitting, you agree to our
            {" "}
            <Link
              to="#"
              className={styles.privacyLink}
            >
              Privacy Policy
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

const COPY = {
  hero: {
    title: "Everything you need\nfor your dream photography\nadventure in Iceland",
    subtitle:
      "As Iceland’s leading photo tour operator, we offer expert tours\n" +
      "to help you capture breathtaking images at the best photo locations.",
  },
  topPopularDestinations: {title: "Top Tuscany Photo Destinations"},
  topSelections: {
    title: "Top Destinations Selection",

    subtitle: "Small groups • Iconic locations • Professional photo mentoring to help you create award-winning shots on cinematic Tuscan routes.",
  },
  reviews: {
    title: "Reviews",
    subtitle: "Insights, tips, and stories to help you elevate your photography and explore Tuscany with confidence.",
  },
  articles: {
    title: "Best travel tips for Iceland",
    subtitle: "Find all your essential photography tips and information",
  },
};

const accordionItemsLeft = [
  {
    trigger: {child: "What experience level is required for this tour?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
  {
    trigger: {child: "What kind of equipment should I bring?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
  {
    trigger: {child: "How physically demanding is the tour?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
];
const accordionItemsRight = [
  {
    trigger: {child: "What weather can I expect in spring?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
  {
    trigger: {child: "How many people are in the group?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
  {
    trigger: {child: "Are accommodations and meals included?"},
    content: {child: "Lorem ipsum dolor, lorem ipsum"},
  },
];

const RightBlockDark = () => {

  return (
    <div className={styles.rightHeaderBlock}>
      <ul className={styles.leftHeaderLinks}>
        <li>
          <Link
            to={PATHS.TOURS}
            className={styles.primaryHeaderLink}
          >
            Explore&nbsp;Tours
          </Link>
        </li>
        &#9675;
        <li>
          <Link to={PATHS.ARTICLES}>
            Blog
          </Link>
        </li>
        &#9675;
        <li>
          <Link to={PATHS.ABOUT}>
            About Us
          </Link>
        </li>
      </ul>
      <div className={styles.rightHeaderLinks}>

        {/* <Link to={PATHS.CART}>
          <img
            src={cart}
            alt="cart link"
          />
        </Link>
        <Link to={PATHS.HOME}>
          <img
            src={user}
            alt="user link"
          />
        </Link> */}

        <Dropdown
          trigger={(
            <button
              className={styles.contactUsDropdownTrigger}
              onClick={() => {}}
            >
              Contact Us
            </button>
          )}

          dropdownMenuItems={[
            {
              dropdownSubMenuItems: [
                {
                  id: "Phone",
                  isPreventDefaultUsed: true,
                  value: <div className={styles.contactUsItem}>
                    <img
                      src={phone}
                      alt="user link"
                    />
                    Phone
                  </div>,
                  isVisible: true,
                },
                {
                  id: "Telegram",
                  isPreventDefaultUsed: true,
                  value: <div className={styles.contactUsItem}>
                    <img
                      src={telegram}
                      alt="user link"
                    />
                    Telegram
                  </div>,
                  isVisible: true,
                },
                {
                  id: "WhatsApp",
                  isPreventDefaultUsed: true,
                  value: <div className={styles.contactUsItem}>
                    <img
                      src={whatsapp}
                      alt="user link"
                    />
                    WhatsApp
                  </div>,
                  isVisible: true,
                },
                {
                  id: "Email",
                  isPreventDefaultUsed: true,
                  value: <div className={styles.contactUsItem}>
                    <img
                      src={email}
                      alt="user link"
                    />
                    Email
                  </div>,
                  isVisible: true,
                },
                {
                  id: "Instagram",
                  isPreventDefaultUsed: true,
                  value: <div className={clsx(styles.contactUsItem, styles.lastChild)}>
                    <img
                      src={instagram}
                      alt="user link"
                    />
                    Instagram
                  </div>,
                  isVisible: true,
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export function HomePage() {
  // Const [tours, setTours] = useState<TourView[]>([]);

  // useEffect(() => {
  //   // let mounted = true;
  //   // (async () => {
  //   //   try {
  //   //     const data = await listTours();
  //   //     if (mounted) {
  //   //       setTours((data ?? []).slice(0, FEATURED_TOURS_LIMIT));
  //   //     }
  //   //   } catch {
  //   //     if (mounted) {
  //   //       setTours([]);
  //   //     }
  //   //   }
  //   // })();

  //   // return () => {
  //   //   mounted = false;
  //   // };
  // }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.heroSectionBg}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <Link
              to={PATHS.HOME}
              aria-label="Homepage"
            >
              <img
                src={logo}
                alt="Photo Tour Logo"
                className={styles.heroLogo}
              />
            </Link>

            <RightBlockDark />
          </div>

          <div className={styles.heroText}>
            <HeroTextSection />
          </div>
        </div>
      </div>

      <div className={styles.partners}>
        <img
          src={tripAdvisor}
          alt="tripAdvisor logo"
        />
        <img
          src={viator}
          alt="viator logo"
        />
        <img
          src={getYourGuide}
          alt="getYourGuide Logo"
        />
        <img
          src={trustPilot}
          alt="trustPilot Logo"
        />
      </div>

      <div className={styles.blockWrapper}>
        <h2 className={styles.popularDestinationsTitle}>
          {COPY.topPopularDestinations.title}
        </h2>
        <PopularDestinations />
      </div>

      <div className={styles.blockWrapper}>
        <h2 className={styles.topDestinationsSelectionTitle}>
          {COPY.topSelections.title}
        </h2>
        <p className={styles.topDestinationsSelectionSubTitle}>
          {COPY.topSelections.subtitle}
        </p>
        <ToursSection />
      </div>

      <div className={styles.wantMoreBlock}>
        <h3 className={styles.wantMoreHeader}>
          Want more options?
        </h3>
        <button
          onClick={() => navigate(PATHS.TOURS)}
          className={styles.wantMoreButton}
        >
          Explore all tours
        </button>
      </div>

      <div className={styles.blockWrapper}>
        <div className={styles.blogAndPhotographyGuides}>
          <div className={styles.blogAndPhotographyFirstContainer}>
            <h3 className={styles.blogAndPhotographyTitle}>
              <b>
                Blog &
              </b>
              {" "}
              <i>
                Photography Guides
              </i>
            </h3>
            <p className={styles.blogAndPhotographyText}>
              Insights, tips, and stories to help you elevate your photography and explore Tuscany with confidence.
            </p>
            <Link
              to={PATHS.TOURS}
              className={styles.blogAndPhotographyButton}
            >
              Read more
            </Link>
          </div>

          <div className={styles.carouselContainer}>
            <PopularWorkshops />
          </div>
        </div>

      </div>

      <div className={styles.blockWrapper}>
        <h2 className={styles.reviewsTitle}>
          {COPY.reviews.title}
        </h2>
        <p className={styles.reviewsSubTitle}>
          {COPY.reviews.subtitle}
        </p>
        <ReviewsSection />
      </div>

      <div className={styles.faqBlock}>
        <h3 className={styles.faqTitle}>
          FAQ
        </h3>
        <p className={styles.faqSubtitle}>
          Insights, tips, and stories to help you elevate your photography and explore Tuscany with confidence.
        </p>
        <div className={styles.accordions}>
          <Accordion
            items={accordionItemsLeft}
            type={accordionTypes.MULTIPLE}
            className={styles.accordion}
          />
          <Accordion
            items={accordionItemsRight}
            type={accordionTypes.MULTIPLE}
            className={styles.accordion}
          />
        </div>
      </div>

      <FeedbackBlock />

      <Footer />

    </div>
  );
}
