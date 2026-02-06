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
import {ChevronDown, ChevronRight, Menu} from "lucide-react";
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
import {submitContactMe} from "src/services/sailsService";
import "react-international-phone/style.css";
import popularWorkshopsStyles from "src/components/PopularWorkshops/PopularWorkshops.module.scss";
import styles from "src/pages/homePage/HomePage.module.scss";

interface FeedbackBlockProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

// Const FEATURED_TOURS_LIMIT = 3;
export const FeedbackBlock = (props: FeedbackBlockProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert("Contact request submitted successfully!");
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
    <div className={styles.feedBackBlock}>
      <div className={styles.feedBackContent}>
        <h2 className={styles.feedBackTitle}>
          {props.title}
        </h2>
        <p className={styles.feedBackDescription}>
          {props.subtitle}
        </p>
        <div className="">
          <div className={styles.feedBackForm}>
            <input
              type="text"
              className={styles.feedBackInput}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
  );
};

const COPY = {
  hero: {
    title:
      "Everything you need\nfor your dream photography\nadventure in Iceland",
    subtitle:
      "As Iceland’s leading photo tour operator, we offer expert tours\n" +
      "to help you capture breathtaking images at the best photo locations.",
  },
  topPopularDestinations: {title: "Our Top Photo Tours & Workshops"},
  topSelections: {
    title: "Explore Our Photo Tours & Photography Expeditions",
    subtitle:
      "Join our expert-led journeys to the world's most iconic locations. Master your skills and capture the beauty of the planet.",
  },
  reviews: {
    title: "Reviews",
    subtitle:
      "Testimonials from Our Photo Tours & Workshop Participants",
  },
  articles: {
    title: "Best travel tips for Iceland",
    subtitle: "Find all your essential photography tips and information",
  },
};

const accordionItemsLeft = [
  {
    trigger: {child: "What photography level is required to join? Can non-photographers participate?"},
    // eslint-disable-next-line max-len
    content: {child: "We welcome photographers of all skill levels, from absolute beginners to seasoned professionals, as well as non-photographers. Our tour leaders are experts dedicated to helping participants refine their skills, regardless of their starting point. You are welcome to shoot with a professional camera or simply a mobile phone.\n\nSeeing the world through the eyes of a professional photographer — who meticulously plans every detail, including the exact time of arrival at each location — is a unique experience for both photographers and travelers alike. On a photo tour, you avoid tourist crowds and witness the authentic beauty of the planet’s most stunning locations."},
  },
  {
    trigger: {child: "What should I bring with me?"},
    // eslint-disable-next-line max-len
    content: {child: "We always provide specific gear recommendations for each tour. After booking your spot, you will receive a comprehensive manual listing everything you need to prepare — from cameras and lenses to appropriate clothing. You can also schedule a consultation with your tour leader to help you get ready for the trip."},
  },
  {
    trigger: {child: "What level of physical fitness is required?"},
    // eslint-disable-next-line max-len
    content: {child: "The difficulty level is always specified on each tour’s dedicated page. If you have health restrictions or concerns about your physical fitness, you can always contact our manager, who will help you assess the requirements for a specific expedition."},
  },
];
const accordionItemsRight = [
  {
    trigger: {child: "How many people are in a group?"},
    // eslint-disable-next-line max-len
    content: {child: "We specialize in small groups and value an individual approach to every participant. Our priority is ensuring you gain valuable experience, new knowledge, and vivid impressions, while bringing home trophy shots for your portfolio or social media.\n\n The maximum group size depends on the destination. Most tours consist of up to 7 participants. However, there are exceptions, such as our sailing photo tour in the Cyclades, where the catamaran can accommodate up to 11 participants. You can find the exact group size on the specific tour page or by contacting our managers."},
  },
  {
    trigger: {child: "Are flights included in the price?"},
    // eslint-disable-next-line max-len
    content: {child: "Our tour prices do not include airfare or visas, as our participants join us from all over the world. The standard price includes: \n\n Accommodation: Twin-share room with your partner or another participant of the same gender. \n\n Local Logistics: Airport transfers and all transportation between locations in a comfortable vehicle (typically a Mercedes). \n\n Expert Mentoring: All shooting sessions, on-site mentoring, and workshops, including post-processing. In some tours, breakfast, additional activities, and entrance fees are also included. Please check the specific tour page for full details or contact us for clarification."},
  },
  {
    trigger: {child: "What is included in the cost?"},
    // eslint-disable-next-line max-len
    content: {child: "The cost of all our photo tours & photography workshops includes: \n\n Accommodation: Double or single occupancy options. \n\n Local Logistics: Airport transfers and ground transportation between cities and locations. \n\n Expert Mentoring: All shooting sessions, on-site mentoring, and workshops, including post-processing. \n\n Depending on the destination, breakfasts, extra activities, and entrance tickets may also be part of the package. Detailed information is available on each tour's page."},
  },
];

const RightBlockDark = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

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
          trigger={
            <button
              className={clsx(
                styles.contactUsDropdownTrigger,
                {[styles.contactUsDropdownTriggerOpen]: isContactDropdownOpen},
              )}
              onClick={() => {}}
            >
              Contact Us
              {isContactDropdownOpen
                ? (
                  <ChevronDown size={16} />
                )
                : (
                  <ChevronRight size={16} />
                )}
            </button>
          }
          onOpenChange={setIsContactDropdownOpen}
          dropdownMenuItems={[
            {
              dropdownSubMenuItems: [
                {
                  id: "Phone",
                  isPreventDefaultUsed: false,
                  value: (
                    <div className={styles.contactUsItem}>
                      <img
                        src={phone}
                        alt="user link"
                      />
                      Phone
                    </div>
                  ),
                  isVisible: true,
                },
                {
                  id: "Telegram",
                  isPreventDefaultUsed: false,
                  value: (
                    <div className={styles.contactUsItem}>
                      <img
                        src={telegram}
                        alt="user link"
                      />
                      Telegram
                    </div>
                  ),
                  isVisible: true,
                },
                {
                  id: "WhatsApp",
                  isPreventDefaultUsed: false,
                  value: (
                    <div className={styles.contactUsItem}>
                      <img
                        src={whatsapp}
                        alt="user link"
                      />
                      WhatsApp
                    </div>
                  ),
                  isVisible: true,
                },
                {
                  id: "Email",
                  isPreventDefaultUsed: false,
                  value: (
                    <div className={styles.contactUsItem}>
                      <img
                        src={email}
                        alt="user link"
                      />
                      Email
                    </div>
                  ),
                  isVisible: true,
                },
                {
                  id: "Instagram",
                  isPreventDefaultUsed: false,
                  value: (
                    <div className={clsx(styles.contactUsItem, styles.lastChild)}>
                      <img
                        src={instagram}
                        alt="user link"
                      />
                      Instagram
                    </div>
                  ),
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className={styles.heroSectionBg}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <button
              className={styles.burgerBtn}
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Menu />
            </button>
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

      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <ul>
            <li>
              <Link to={PATHS.HOME}>
                Home
              </Link>
            </li>
            <li>
              <Link to={PATHS.TOURS}>
                Book Photo Tours
              </Link>
            </li>
            <li>
              <Link to={PATHS.ARTICLES}>
                Explore Articles
              </Link>
            </li>
            <li>
              <Link to={PATHS.ABOUT}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={PATHS.CONTACT}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}

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
          Ready to discover more?
        </h3>
        <button
          onClick={() => navigate(PATHS.TOURS)}
          className={styles.wantMoreButton}
        >
          Explore All Tours
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
              Expert insights, practical tips, and stories designed to elevate your photography and uncover the world's hidden gems.
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
        <div
          className={popularWorkshopsStyles.paginationContainer}
          id="pagination-container"
        />
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
          Photography Tours and Expeditions: Frequently Asked Questions.
          <br />
          Find answers to common questions about our journeys and logistics.
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

      <FeedbackBlock
        title="Find Your Perfect Photo Journey"
        subtitle="Share your contact info, and we’ll reach out to help you select the ideal destination and dates."
        buttonText="Contact Me"
      />
      <Footer />
    </div>
  );
}
