import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import cart from "/images/cart.svg";
import email from "/images/email.svg";
import getYourGuide from "/images/getYourGuide.svg";
import instagram from "/images/instagram.svg";
import logo from "/images/logo.svg";
import phone from "/images/phone.svg";
import telegram from "/images/telegram.svg";
import tripAdvisor from "/images/tripAdvisor.svg";
import trustPilot from "/images/trustPilot.svg";
import user from "/images/user.svg";
import viator from "/images/viator.svg";
import whatsapp from "/images/whatsapp.svg";
import clsx from "clsx";
import {Container} from "src/components/Container/Container";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {HeroTextSection} from "src/components/HeroSection/HeroSection";
import {PopularDestinations} from "src/components/PopularDestinations/PopularDestinations";
import {SectionHeader} from "src/components/SectionHeader/SectionHeader";
import {ToursSection} from "src/components/ToursSection/ToursSection";
import {ArticlesShowcase} from "src/pages/homePage/ArticlesShowcase/ArticlesShowcase";
import {PATHS} from "src/routes/routes";
import {listTours} from "src/services/toursService";
import type {TourView} from "src/types/tour";
import styles from "src/pages/homePage/HomePage.module.scss";

const FEATURED_TOURS_LIMIT = 3;

const COPY = {
  hero: {
    title: "Everything you need\nfor your dream photography\nadventure in Iceland",
    subtitle:
      "As Iceland’s leading photo tour operator, we offer expert tours\n" +
      "to help you capture breathtaking images at the best photo locations.",
  },
  popular: {
    title: "Top Tuscany Photo Destinations",
    // Subtitle: "Travel the world to capture the most incredible landscapes",
  },
  bestWinter: {
    title: "Best Winter Photo Tours & Workshops in Iceland",
    subtitle: "Best photography tours",
  },
  articles: {
    title: "Best travel tips for Iceland",
    subtitle: "Find all your essential photography tips and information",
  },
};

export function HomePage() {
  const [tours, setTours] = useState<TourView[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await listTours();
        if (mounted) {
          setTours((data ?? []).slice(0, FEATURED_TOURS_LIMIT));
        }
      } catch {
        if (mounted) {
          setTours([]);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

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
              />
            </Link>

            <div className={styles.rightHeaderBlock}>
              <ul className={styles.leftHeaderLinks}>
                <li>
                  <Link
                    to={PATHS.TOURS}
                    className={styles.primaryHeaderLink}
                  >
                    Explore Tours
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

                <Link to={PATHS.HOME}>
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
                </Link>

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

      <div className={styles.popularDestinationsBlock}>
        <h2 className={styles.popularDestinationsTitle}>
          {COPY.popular.title}
        </h2>
        <PopularDestinations />
      </div>

      <Container>
        <SectionHeader
          title={COPY.bestWinter.title}
          subtitle={COPY.bestWinter.subtitle}
        />
        <ToursSection />
      </Container>

      <Container>
        <SectionHeader
          title={COPY.articles.title}
          subtitle={COPY.articles.subtitle}
        />
        <ArticlesShowcase
          title={COPY.articles.title}
          subtitle={COPY.articles.subtitle}
        />
      </Container>
    </div>
  );
}
