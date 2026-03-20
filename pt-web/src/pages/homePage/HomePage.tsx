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
import telegramBlue from "/images/telegram-blue.svg";
import tripAdvisor from "/images/tripAdvisor.svg";
import trustPilot from "/images/trustPilot.svg";
import viator from "/images/viator.svg";
import whatsapp from "/images/whatsapp.svg";
import whatsappGreen from "/images/whatsapp-green.svg";
import clsx from "clsx";
import {ChevronDown, ChevronRight, Menu} from "lucide-react";
import {Accordion, accordionTypes} from "src/components/Accordion/Accordion";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {FeedbackBlock} from "src/components/FeedbackBlock/FeedbackBlock";
import {Footer} from "src/components/Footer/Footer";
import {SidebarMenu} from "src/components/Header/SidebarMenu";
import {HeroTextSection} from "src/components/HeroSection/HeroSection";
import {PartnersSlider} from "src/components/PartnersSlider/PartnersSlider";
import {PopularDestinations} from "src/components/PopularDestinations/PopularDestinations";
import {PopularWorkshops} from "src/components/PopularWorkshops/PopularWorkshops";
import {ReviewsSection} from "src/components/ReviewsSection/ReviewsSection";
import {TimeoutPopup} from "src/components/TimeoutPopup/TimeoutPopup";
import {ToursSection} from "src/components/ToursSection/ToursSection";
export {FeedbackBlock} from "src/components/FeedbackBlock/FeedbackBlock";
import {PATHS} from "src/routes/routes";
import "react-international-phone/style.css";
import popularWorkshopsStyles from "src/components/PopularWorkshops/PopularWorkshops.module.scss";
import styles from "src/pages/homePage/HomePage.module.scss";

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
    subtitle: "Testimonials from Our Photo Tours & Workshop Participants",
  },
  articles: {
    title: "Best travel tips for Iceland",
    subtitle: "Find all your essential photography tips and information",
  },
};

const partners = [
  {id: "1", src: tripAdvisor, alt: "tripAdvisor logo"},
  {id: "2", src: viator, alt: "viator logo"},
  {id: "3", src: getYourGuide, alt: "getYourGuide Logo"},
  {id: "4", src: trustPilot, alt: "trustPilot Logo"},
];

const accordionItemsLeft = [
  {
    trigger: {child: "What photography level is required? Can non-photographers join?"},
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
    content: {child: "Our tour prices do not include airfare or visas, as our participants join us from all over the world. The standard price includes: \n\n• Accommodation: Twin-share room with your partner or another participant of the same gender. \n\n• Local Logistics: Airport transfers and all transportation between locations in a comfortable vehicle (typically a Mercedes). \n\n• Expert Mentoring: All shooting sessions, on-site mentoring, and workshops, including post-processing. In some tours, breakfast, additional activities, and entrance fees are also included. Please check the specific tour page for full details or contact us for clarification."},
  },
  {
    trigger: {child: "What is included in the cost?"},
    // eslint-disable-next-line max-len
    content: {child: "The cost of all our photo tours & photography workshops includes: \n\n• Accommodation: Double or single occupancy options. \n\n• Local Logistics: Airport transfers and ground transportation between cities and locations. \n\n• Expert Mentoring: All shooting sessions, on-site mentoring, and workshops, including post-processing. \n\n Depending on the destination, breakfasts, extra activities, and entrance tickets may also be part of the package. Detailed information is available on each tour's page."},
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
        <Dropdown
          trigger={
            <button
              className={clsx(styles.contactUsDropdownTrigger, {[styles.contactUsDropdownTriggerOpen]: isContactDropdownOpen})}
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
                    <a
                      href="tel:+1234567890"
                      className={styles.contactUsItem}
                    >
                      <img
                        src={phone}
                        alt="user link"
                      />
                      Phone
                    </a>
                  ),
                  isVisible: true,
                },
                {
                  id: "Telegram",
                  isPreventDefaultUsed: false,
                  value: (
                    <a
                      href="https://t.me/tuscanyphototours_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactUsItem}
                    >
                      <img
                        src={telegram}
                        alt="user link"
                      />
                      Telegram
                    </a>
                  ),
                  isVisible: true,
                },
                {
                  id: "WhatsApp",
                  isPreventDefaultUsed: false,
                  value: (
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactUsItem}
                    >
                      <img
                        src={whatsapp}
                        alt="user link"
                      />
                      WhatsApp
                    </a>
                  ),
                  isVisible: true,
                },
                {
                  id: "Email",
                  isPreventDefaultUsed: false,
                  value: (
                    <a
                      href="mailto:info@tuscany-photo-tours.com"
                      className={styles.contactUsItem}
                    >
                      <img
                        src={email}
                        alt="user link"
                      />
                      Email
                    </a>
                  ),
                  isVisible: true,
                },
                {
                  id: "Instagram",
                  isPreventDefaultUsed: false,
                  value: (
                    <a
                      href="https://instagram.com/tuscany.phototours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(styles.contactUsItem, styles.lastChild)}
                    >
                      <img
                        src={instagram}
                        alt="user link"
                      />
                      Instagram
                    </a>
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
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFirstPopUpVisible, setIsFirstPopUpVisible] = useState(false);

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
              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="Photo Tour Logo"
                  className={styles.heroLogo}
                />
              </div>
            </Link>

            <RightBlockDark />
          </div>

          <div className={styles.heroText}>
            <HeroTextSection />
          </div>
        </div>
      </div>

      <SidebarMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <PartnersSlider partners={partners} />

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
              Insights, tips, and stories to help you elevate your photography
              and explore Tuscany with confidence.
            </p>
            <Link
              to={PATHS.ARTICLES}
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
        <h2
          className={styles.reviewsTitle}
          id="reviews-block"
        >
          {COPY.reviews.title}
        </h2>
        <p className={styles.reviewsSubTitle}>
          {COPY.reviews.subtitle}
        </p>
        <ReviewsSection />
      </div>

      <div className={styles.faqBlock}>
        <h3
          className={styles.faqTitle}
          id="faq-block"
        >
          FAQ
        </h3>
        <p className={styles.faqSubtitle}>
          Photography Tours and Expeditions: Frequently Asked Questions.
          <br className={styles.faqTitleSeparator} />
          Find answers to common questions about our journeys and logistics.
        </p>
        <div className={styles.accordions}>
          <Accordion
            items={accordionItemsLeft}
            type={accordionTypes.MULTIPLE}
            className={styles.accordion}
            itemClassName={styles.accordionItem}
          />
          <Accordion
            items={accordionItemsRight}
            type={accordionTypes.MULTIPLE}
            className={styles.accordion}
            itemClassName={styles.accordionItem}
          />
        </div>
      </div>

      <FeedbackBlock
        title="Find Your Perfect Photo Journey"
        subtitle="Share your contact info, and we’ll reach out to help you select the ideal destination and dates."
        buttonText="Contact Me"
      />
      <Footer />

      <TimeoutPopup
        delay={20}
        title={"Get the Ultimate \"Top 100 Global Locations\" Map"}
        // eslint-disable-next-line max-len
        description="From the peaks of Iceland and New Zealand to the hidden corners of Japan and Italy, get our curated map of the world's most breathtaking spots sent straight to your phone. Which messenger do you prefer?"
        imgUrl="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771361885/20SecPopUpImage_h6vybz.avif"
        leftBtnCallback={() => {}}
        leftBtn={
          <a
            href="https://t.me/tuscanyphototours_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            <span>
              Telegram
            </span>
            <img
              src={telegramBlue}
              alt=""
            />
          </a>
        }
        rightBtnCallback={() => {}}
        rightBtn={
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            WhatsApp
            <img
              src={whatsappGreen}
              alt=""
            />
          </a>
        }
        onOpen={() => setIsFirstPopUpVisible(true)}
        onClose={() => setIsFirstPopUpVisible(false)}
      />

      <TimeoutPopup
        // 100 + 20 bc of the first popup
        delay={100}
        isDisabled={isFirstPopUpVisible}
        title="Find Your Perfect Photo Expedition"
        // eslint-disable-next-line max-len
        description="Let us help you find the trip that matches your style, skill level, and bucket list. Tell us what you're looking for. Which messenger do you prefer?"
        imgUrl="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771361885/20SecPopUpImage_h6vybz.avif"
        leftBtnCallback={() => {}}
        leftBtn={
          <a
            href="https://t.me/tuscanyphototours_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            Telegram
            <img
              src={telegramBlue}
              alt=""
            />
          </a>
        }
        rightBtnCallback={() => {}}
        rightBtn={
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            WhatsApp
            <img
              src={whatsappGreen}
              alt=""
            />
          </a>
        }
      />

      <TimeoutPopup
        // 100 + 20 bc of the first popup
        delay={100}
        isDisabled={isFirstPopUpVisible}
        title="Find Your Perfect Photo Expedition"
        // eslint-disable-next-line max-len
        description="Let us help you find the trip that matches your style, skill level, and bucket list. Tell us what you're looking for. Which messenger do you prefer?"
        imgUrl="https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771361885/20SecPopUpImage_h6vybz.avif"
        leftBtnCallback={() => {}}
        leftBtn={
          <span className={styles.pupUpButton}>
            Telegram
            <img
              src={telegramBlue}
              alt=""
            />
          </span>
        }
        rightBtnCallback={() => {}}
        rightBtn={
          <span className={styles.pupUpButton}>
            WhatsApp
            <img
              src={whatsappGreen}
              alt=""
            />
          </span>
        }
      />
    </div>
  );
}
