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
          "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772633959/articleIclandicRivers_1_mln3cq.avif",
    link: PATHS.getArticle("icelandic-rivers"),
    title: "Icelandic rivers",
    subtitle: "These images were taken about 12 years ago by a remarkable photographer, Andrey Ermolayev, who, unfortunately...",
  },
  {
    id: "2",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772635334/valDorcia-1_bpku0z.avif",
    link: PATHS.getArticle("val-dorcia"),
    title: "Val d’Orcia",
    subtitle: "Over the past 16 years, I have visited Tuscany nearly 50 times, experiencing its beauty in every season. However...",
  },
  {
    id: "3",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772635307/stockssnesIceland-1_rc0ymq.avif",
    link: PATHS.getArticle("stockness-iceland"),
    title: "Stockness Iceland",
    subtitle: "A place beyond time — where black dunes rise like silent waves and Vestrahorn stands reflected in the shifting...",
  },
  {
    id: "4",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772635280/snowInVenice-1_b3qtup.avif",
    link: PATHS.getArticle("snow-in-venice-a-dream-come-true"),
    title: "Snow In Venice. A Dream Come True",
    subtitle: "Snow in Venice… a waking dream. A promise made years ago, fulfilled in a fleeting, once-in-a-lifetime moment during...",
  },
  {
    id: "5",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772635324/top10PlacesInIcelandForPhotography-1_zs5vnf.avif",
    link: PATHS.getArticle("top-10-places-in-iceland-for-photography-tours-and-workshops"),
    title: "Top 10 Places in Iceland",
    subtitle: "Iceland is a dreamland for photographers, offering a surreal mix of fiery volcanoes, glacial landscapes...",
  },
  {
    id: "6",
    image:
           "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1772635251/Moravia-1_oclegj.avif",
    link: PATHS.getArticle("moravian-waves-framing-the-poetry-of-the-land"),
    title: "Moravian",
    subtitle: "Moravia, with its undulating fields, velvety hills, and ever-changing textures, is a paradise for...",
  },
];

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 920;
const DESKTOP_BREAKPOINT = 1224;

const MOBILE_SLIDES_PER_VIEW = 1.2;
const TABLET_SLIDES_PER_VIEW = 2.2;
const DESKTOP_SLIDES_PER_VIEW = 2.2;
const LARGE_DESKTOP_SLIDES_PER_VIEW = 3.2;

export function PopularWorkshops({className = ""}: PopularWorkshopsProps) {
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
