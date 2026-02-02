import {useRef} from "react";
import {Link} from "react-router-dom";
import carouselImageArrow from "/images/carouselImageArrow.svg";
import clsx from "clsx";
import {PATHS} from "src/routes/routes";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Autoplay, Keyboard, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/PopularWorkshops/PopularWorkshops.module.scss";

type PopularWorkshopsProps = {
  className?: string;
};

const slides = [
  {
    id: "1",
    image:
          "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif",
    link: PATHS.getTour("tuscany-spring-photo-tour"),
    title: "Chianti Hills & Vineyards",
    subtitle: "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "2",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429914/morocco___A8B2183_90x63-topaz-denoiseraw-sharpen-color_copy_d6h1s7.avif",
    link: PATHS.getTour("morocco-photo-tour"),
    title: "Your Guide to Iconic Tuscany Shots",
    subtitle: "Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "3",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430346/venice__FUJI4667_Dehancer_ovjl23.avif",
    link: PATHS.getTour("venice-carnival-photo-tour"),
    title: "Inspiration for Your Next Photo Adventure",
    subtitle: "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
  {
    id: "4",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429985/new-zealand___IGP8438-Pano-Dehancer_copy_3_ymdyii.avif",
    link: PATHS.getTour("new-zealand-photo-tour"),
    title: "Chianti Hills & Vineyards",
    subtitle: "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "5",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429835/japan-spring__P1040001-Edit_imq7un.avif",
    link: PATHS.getTour("japan-cherry-blossom-tour"),
    title: "Your Guide to Iconic Tuscany Shots",
    subtitle: "Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "6",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429871/cyclades__IMG_8808-Pano_copy_jkdqjj.avif",
    link: PATHS.getTour("cyclades-sailing-tour"),
    title: "Inspiration for Your Next Photo Adventure",
    subtitle: "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
];

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 920;
const DESKTOP_BREAKPOINT = 1224;

const MOBILE_SLIDES_PER_VIEW = 1;
const TABLET_SLIDES_PER_VIEW = 2;
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
        modules={[Keyboard, A11y, Autoplay, Pagination]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop={slides.length > LARGE_DESKTOP_SLIDES_PER_VIEW}
        loopAdditionalSlides={6}
        slidesPerView={MOBILE_SLIDES_PER_VIEW}
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
          el: "#pagination-container",
          bulletClass: styles.paginationBullet,
          bulletActiveClass: styles.paginationBulletActive,
        }}
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
