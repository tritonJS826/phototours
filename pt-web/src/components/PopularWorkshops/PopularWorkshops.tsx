import {useRef} from "react";
import {Container} from "src/components/Container/Container";
import First from "src/components/PopularWorkshops/assets/1.avif";
import Second from "src/components/PopularWorkshops/assets/2.avif";
import Third from "src/components/PopularWorkshops/assets/3.avif";
import Fourth from "src/components/PopularWorkshops/assets/4.avif";
import Fifth from "src/components/PopularWorkshops/assets/5.avif";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/PopularWorkshops/PopularWorkshops.module.scss";

const slides = [
  {image: First, title: "Norway Photo Tours and Workshops"},
  {image: Second, title: "Faroe Islands Photo Tours and Workshops"},
  {image: Third, title: "Faroe Islands Photo Tours and Workshops"},
  {image: Fourth, title: "Faroe Islands Photo Tours and Workshops"},
  {image: Fifth, title: "Norway Photo Tours and Workshops"},
];

// Breakpoint constants
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

// Slides per view constants
const MOBILE_SLIDES_PER_VIEW = 1;
const TABLET_SLIDES_PER_VIEW = 2;
const DESKTOP_SLIDES_PER_VIEW = 3;
const LARGE_DESKTOP_SLIDES_PER_VIEW = 4;

export function PopularWorkshops() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      <section className={styles.wrap}>
        <header className={styles.title}>
          <h2>
            Popular photo tours & workshops
          </h2>
          <p>
            Travel the world to capture the most incredible landscapes
          </p>
        </header>

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
              <figure className={styles.card}>
                <div className={styles.media}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className={styles.image}
                    loading="lazy"
                    draggable={false}
                  />
                  <figcaption className={`${styles.caption} ${styles.captionOverlay}`}>
                    {s.title}
                  </figcaption>
                </div>
                {/* <figcaption className={styles.captionBelow}>
                  {s.title}
                </figcaption> */}
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
}
