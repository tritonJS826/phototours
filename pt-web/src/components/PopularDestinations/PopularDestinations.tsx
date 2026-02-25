import {useRef} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {PATHS} from "src/routes/routes";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Autoplay, Keyboard, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/PopularDestinations/PoplarDestinations.module.scss";

type PopularWorkshopsProps = {
  className?: string;
};

const slides = [
  {
    image:
    "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824429/mainPageTop1TuscanyFall_dzsr1a.avif",
    title: "Misty Tuscan Harvest",
    href: PATHS.getTour("tuscany-autumn-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824430/mainPageTop2Iceland_miysef.avif",
    title: "Iceland Off-Road Adventure",
    href: PATHS.getTour("iceland-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824430/mainPageTop3NewZealand_ekuw7r.avif",
    title: "Epic New Zealand",
    href: PATHS.getTour("new-zealand-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824431/mainPageTop4Venice_on23ox.avif",
    title: "Mystical Venice Masquerade",
    href: PATHS.getTour("venice-carnival-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824431/mainPageTop5CzechFall_h6iohn.avif",
    title: "Golden Prague & Moravia",
    href: PATHS.getTour("czechia-autumn-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771824433/mainPageTop6TuscanySpring_rnnwsz.avif",
    title: "Dreamy\nTuscan Fog",
    href: PATHS.getTour("tuscany-spring-photo-tour"),
  },
];

const MOBILE_BREAKPOINT_EXTRA_SMALL = 380;
const MOBILE_BREAKPOINT_SMALL = 420;
const MOBILE_BREAKPOINT = 490;
const TABLET_BREAKPOINT = 600;
const DESKTOP_BREAKPOINT = 750;
const LARGE_DESKTOP_BREAKPOINT = 980;
const EXTRA_LARGE_DESKTOP_BREAKPOINT = 1230;
const ULTRA_LARGE_DESKTOP_BREAKPOINT = 1430;

const EXTRA_SMALL_MOBILE_SLIDES_PER_VIEW = 1.6;
const SMALL_MOBILE_SLIDES_PER_VIEW = 1.8;
const MOBILE_SLIDES_PER_VIEW = 2.2;
const TABLET_SLIDES_PER_VIEW = 2.6;
const DESKTOP_SLIDES_PER_VIEW = 3.2;
const LARGE_DESKTOP_SLIDES_PER_VIEW = 4.2;
const EXTRA_LARGE_SLIDES_PER_VIEW = 5.2;
const ULTRA_SLIDES_PER_VIEW = 6;

export function PopularDestinations({className = ""}: PopularWorkshopsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={clsx(styles.wrap, className)}>
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
        modules={[Keyboard, A11y, Autoplay, Pagination]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop={slides.length > ULTRA_SLIDES_PER_VIEW}
        loopAdditionalSlides={6}
        slidesPerView={1.4}
        spaceBetween={24}
        speed={500}
        allowTouchMove
        keyboard={{enabled: true}}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: "#popular-destinations-pagination",
          bulletClass: styles.paginationBullet,
          bulletActiveClass: styles.paginationBulletActive,
        }}
        className={styles.swiper}
        breakpoints={{
          [MOBILE_BREAKPOINT_EXTRA_SMALL]: {
            slidesPerView: EXTRA_SMALL_MOBILE_SLIDES_PER_VIEW,
            loop: slides.length > EXTRA_SMALL_MOBILE_SLIDES_PER_VIEW,
          },
          [MOBILE_BREAKPOINT_SMALL]: {
            slidesPerView: SMALL_MOBILE_SLIDES_PER_VIEW,
            loop: slides.length > SMALL_MOBILE_SLIDES_PER_VIEW,
          },
          [MOBILE_BREAKPOINT]: {
            slidesPerView: MOBILE_SLIDES_PER_VIEW,
            loop: slides.length > MOBILE_SLIDES_PER_VIEW,
          },
          [TABLET_BREAKPOINT]: {
            slidesPerView: TABLET_SLIDES_PER_VIEW,
            loop: slides.length > TABLET_SLIDES_PER_VIEW,
          },
          [DESKTOP_BREAKPOINT]: {
            slidesPerView: DESKTOP_SLIDES_PER_VIEW,
            loop: slides.length > DESKTOP_SLIDES_PER_VIEW,
          },
          [LARGE_DESKTOP_BREAKPOINT]: {
            slidesPerView: LARGE_DESKTOP_SLIDES_PER_VIEW,
            loop: slides.length > LARGE_DESKTOP_SLIDES_PER_VIEW,
          },
          [EXTRA_LARGE_DESKTOP_BREAKPOINT]: {
            slidesPerView: EXTRA_LARGE_SLIDES_PER_VIEW,
            loop: slides.length > EXTRA_LARGE_SLIDES_PER_VIEW,
          },
          [ULTRA_LARGE_DESKTOP_BREAKPOINT]: {
            slidesPerView: ULTRA_SLIDES_PER_VIEW,
            loop: slides.length > ULTRA_SLIDES_PER_VIEW,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.image}
            className={styles.slide}
          >
            <Link
              to={slide.href}
              className={styles.popularDestinationCard}
            >
              <div
                className={styles.imageWrapper}
                style={{backgroundImage: `url(${slide.image})`}}
                aria-label={slide.title}
              >
                <span className={styles.overlayText}>
                  {slide.title}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="popular-destinations-pagination"
        className={styles.paginationContainer}
      />
    </section>
  );
}
