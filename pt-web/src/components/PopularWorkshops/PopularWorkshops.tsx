import {useRef} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import blogAndPhotography1 from "public/images/blogAndPhotography1.avif";
import blogAndPhotography2 from "public/images/blogAndPhotography2.avif";
import blogAndPhotography3 from "public/images/blogAndPhotography3.avif";
// Import First from "src/components/PopularWorkshops/assets/1.avif";
// import Second from "src/components/PopularWorkshops/assets/2.avif";
// import Third from "src/components/PopularWorkshops/assets/3.avif";
// import Fourth from "src/components/PopularWorkshops/assets/4.avif";
import carouselImageArrow from "public/images/carouselImageArrow.svg";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/PopularWorkshops/PopularWorkshops.module.scss";

type PopularWorkshopsProps = {
  className?: string;
};

const slides = [
  {
    id: "1",
    image: blogAndPhotography1,
    link: "#",
    title: "Chianti Hills & Vineyards",
    subtitle: "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "2",
    image: blogAndPhotography2,
    link: "#",
    title: "Your Guide to Iconic Tuscany Shots",
    subtitle: "Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "3",
    image: blogAndPhotography3,
    link: "#",
    title: "Inspiration for Your Next Photo Adventure",
    subtitle: "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
  {
    id: "4",
    image: blogAndPhotography1,
    link: "#",
    title: "Chianti Hills & Vineyards",
    subtitle: "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "5",
    image: blogAndPhotography2,
    link: "#",
    title: "Your Guide to Iconic Tuscany Shots",
    subtitle: "Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "6",
    image: blogAndPhotography3,
    link: "#",
    title: "Inspiration for Your Next Photo Adventure",
    subtitle: "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
];

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 920;
const DESKTOP_BREAKPOINT = 1224;

const MOBILE_SLIDES_PER_VIEW = 1;
const TABLET_SLIDES_PER_VIEW = 1;
const DESKTOP_SLIDES_PER_VIEW = 2;
const LARGE_DESKTOP_SLIDES_PER_VIEW = 3;

export function PopularWorkshops({className = ""}: PopularWorkshopsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={`${styles.wrap} ${className}`}>
      <button
        type="button"
        aria-label="Previous"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <span>
          ‹
        </span>
      </button>
      <button
        type="button"
        aria-label="Next"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <span>
          ›
        </span>
      </button>

      <Swiper
        modules={[Keyboard, A11y]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop={slides.length > LARGE_DESKTOP_SLIDES_PER_VIEW}
        loopAdditionalSlides={6}
        slidesPerView={MOBILE_SLIDES_PER_VIEW}
        spaceBetween={24}
        speed={500}
        allowTouchMove
        keyboard={{enabled: true}}
        className={styles.swiper}
        breakpoints={{
          [MOBILE_BREAKPOINT]: {
            slidesPerView: TABLET_SLIDES_PER_VIEW,
            loop: slides.length > TABLET_SLIDES_PER_VIEW,
          },
          [TABLET_BREAKPOINT]: {
            slidesPerView: DESKTOP_SLIDES_PER_VIEW,
            loop: slides.length > DESKTOP_SLIDES_PER_VIEW,
          },
          [DESKTOP_BREAKPOINT]: {
            slidesPerView: LARGE_DESKTOP_SLIDES_PER_VIEW,
            loop: slides.length > LARGE_DESKTOP_SLIDES_PER_VIEW,
          },
        }}
      >
        {slides.concat(slides).map((s, i) => (
          <SwiperSlide
            key={i}
            className={styles.slide}
          >
            <Link
              to={s.link}
              className={styles.card}
            >
              <div className={styles.media}>
                <img
                  className={styles.slideTopRightIcon}
                  src={carouselImageArrow}
                  alt="arrow-right"
                />
                <img
                  src={s.image}
                  alt={s.title}
                  className={styles.image}
                  loading="lazy"
                  draggable={false}
                />
                <figcaption className={clsx(styles.caption, styles.captionOverlay)}>
                  <h3>
                    {s.title}
                  </h3>
                  <p>
                    {s.subtitle}
                  </p>
                </figcaption>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
