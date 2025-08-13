import {useEffect, useState} from "react";
// Importing Framer Motion hooks and components for animations:
// - AnimatePresence: Allows components to animate in and out when they are mounted/unmounted.
// - motion: A special component wrapper that enables animation properties on HTML/SVG elements.
// - useScroll: A hook that tracks the page or container's scroll position.
// - useTransform: A hook that maps one motion value to another (e.g., scroll position
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {Container} from "src/components/Container/Container";
import styles from "src/pages/aboutUs/AboutUsPage.module.scss";

const ANIMATION_DURATION = 300;
const ANIMATION_DELAY = -100;
const CONTACT_SECTION_ANIMATION_DELAY_9 = 0.9;
const CONTACT_SECTION_ANIMATION_DELAY_6 = 0.6;
const CONTACT_SECTION_ANIMATION_DELAY_3 = 0.3;
const CONTACT_SECTION_ANIMATION_DELAY_0 = 0;
const SHOW_TOP_BTN_SCROLL_Y = 300;

const CARD_ANIMATION_DELAY_STEP = 0.2;

const fadeInUpDelayed = (delay = 0) => ({
  hidden: {opacity: 0, y: 50},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay}},
});

const fadeInLeft = {
  hidden: {opacity: 0, x: -50},
  visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
};

const fadeInRight = {
  hidden: {opacity: 0, x: 50},
  visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
};

// All photos are taken from the Internet and may be distributed free of charge.
// They are not related to this website or this page and are provided solely for demonstration purposes.
//The information in any text on this page is fictional and is provided solely for demonstration purposes.

const whyBookCards = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Expert Guides",
    title: "Expert Guides",
    desc: "Learn from award-winning photographers who know Tuscany inside out.",
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Unique Locations",
    title: "Unique Locations",
    desc: "Capture hidden gems and iconic views far from tourist crowds.",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    alt: "Small Groups",
    title: "Small Groups",
    desc: "Enjoy personalized attention and a relaxed learning environment.",
  },
  {
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    alt: "Hands-On Workshops",
    title: "Hands-On Workshops",
    desc: "Practice your skills with practical, immersive photo sessions.",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Flexible Scheduling",
    title: "Flexible Scheduling",
    desc: "Choose dates that suit your busy lifestyle and commitments.",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Community Support",
    title: "Community Support",
    desc: "Join a passionate group of photographers to share and grow.",
  },
];

const amazingDestinations = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Destination 1",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Destination 2",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Destination 3",
  },
];

const meetOurTeam = [
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const ourStoryCards = [
  "https://images.unsplash.com/photo-1754265222750-687ab87f5549",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
];

export function AboutUs() {
  const {scrollY} = useScroll();

  const yHero = useTransform(scrollY, [0, ANIMATION_DURATION], [0, ANIMATION_DELAY]);

  const [submitted, setSubmitted] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > SHOW_TOP_BTN_SCROLL_Y);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: you can add sending data to the server here
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <>
      <motion.section className={styles.hero}>
        <motion.div
          className={styles.heroBackground}
          style={{backgroundPositionY: yHero}}
        />
        <div className={styles.overlay}>
          <h1>
            About Us
          </h1>
          <p>
            Tuscany Photo Tours
          </p>
        </div>
      </motion.section>
      <Container>
        <div className={styles.aboutUs}>

          <motion.section
            className={styles.intro}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUpDelayed(CONTACT_SECTION_ANIMATION_DELAY_0)}
          >

            <div className={styles.container}>
              <h2>
                Who We Are
              </h2>
              <p>
                At Tuscany Photo Tours, we create unforgettable photography
                experiences in the heart of Italy. Our mission is to combine travel,
                culture, and photography into unique journeys that inspire and
                educate photographers of all levels.
              </p>
            </div>
          </motion.section>

          <motion.section
            className={styles.imageText}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInLeft}
          >

            <div className={`${styles.container} ${styles.reverse}`}>
              <div className={styles.text}>
                <h3>
                  Our Story
                </h3>
                <p>
                  Founded by passionate photographers, Tuscany Photo Tours was born out of a desire to share the beauty
                  of Tuscany through a lens.
                  Every trip is carefully curated to ensure you capture breathtaking landscapes and authentic local moments.
                </p>
              </div>
              <div className={styles.imageGrid}>
                {ourStoryCards.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt="Our Story"
                    loading="lazy"
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: i * CARD_ANIMATION_DELAY_STEP, duration: 0.7, ease: "easeOut"}}
                    viewport={{once: true}}
                    className={styles.gridImage}
                    layout
                  />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className={styles.imageTextMeet}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInRight}
          >
            <div className={styles.container}>
              <div className={styles.imageGrid}>
                {meetOurTeam.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt="Our Team"
                    loading="lazy"
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: i * CARD_ANIMATION_DELAY_STEP, duration: 0.7, ease: "easeOut"}}
                    viewport={{once: true}}
                    className={styles.gridImage}
                    layout
                  />
                ))}
              </div>

              <div className={styles.text}>
                <h3>
                  Meet Our Team
                </h3>
                <p>
                  Our team consists of award-winning photographers, local guides, and travel experts
                  dedicated to providing an exceptional experience.
                  We believe in small groups, personalized attention, and plenty of time to capture your perfect shot.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className={styles.whyBook}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUpDelayed(CONTACT_SECTION_ANIMATION_DELAY_3)}
          >
            <div className={styles.container}>
              <h2>
                Why Book With Us?
              </h2>
              <div className={styles.cards}>
                {whyBookCards
                  .map(({img, alt, title, desc}) => (
                    <motion.div
                      key={title}
                      className={styles.card}
                      whileHover={{scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)"}}
                      transition={{type: "spring", stiffness: 300}}
                    >
                      <img
                        src={img}
                        alt={alt}
                        loading="lazy"
                      />
                      <h4>
                        {title}
                      </h4>
                      <p>
                        {desc}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className={styles.destinations}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUpDelayed(CONTACT_SECTION_ANIMATION_DELAY_6)}
          >

            <div className={styles.container}>
              <h2>
                Amazing Destinations
              </h2>
              <p>
                While we started our journey in Iceland, we provide photography tours to incredible destinations all
                over the world. Our guides are professional photographers that will choose the optimal locations for
                an amazing photo, while helping you along with the camera settings and which lens to use. Whether
                it's the glaciers of Iceland, the wild horses of Camargue, the temples of Japan, the deserts of
                Namibia or the mountains of Patagonia... we will take you there!
                Not only will you return with a memory card full of amazing photos,
                but also incredible memories that will last a lifetime!
              </p>
              <div className={styles.grid}>
                {amazingDestinations
                  .map(({src, alt}) => (
                    <img
                      key={alt}
                      src={src}
                      alt={alt}
                      loading="lazy"
                    />
                  ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className={styles.contact}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpDelayed(CONTACT_SECTION_ANIMATION_DELAY_9)}

          >
            <div className={styles.container}>
              <h2>
                Contact Us
              </h2>
              {submitted
                ? (
                  <p className={styles.thankYouMessage}>
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )
                : (
                  <form
                    className={styles.contactForm}
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                    <button type="submit">
                      Send Message
                    </button>
                  </form>
                )}
            </div>
          </motion.section>
        </div>

        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              className={styles.backToTop}
              onClick={scrollToTop}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              whileHover={{scale: 1.1}}
              aria-label="Back to top"
            >
              ↑ Back to Top
            </motion.button>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

