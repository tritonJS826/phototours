import {useEffect, useRef, useState} from "react";
import arrowRightBlack from "/images/arrowRightBlack.svg";
import blueArrowCircleRight from "/images/blueArrowCircleRight.svg";
import userStub1 from "/images/userStub1.avif";
import userStub2 from "/images/userStub2.avif";
import userStub3 from "/images/userStub3.avif";
import clsx from "clsx";
import {
  ReviewCard,
  ReviewCardProps,
} from "src/components/ReviewsSection/ReviewCard/ReviewCard";
import {getRandomReviews as getReviewsMain, Review} from "src/services/reviewsService";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Autoplay, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/ReviewsSection/Reviews.module.scss";

interface ToursSectionProps {
  className?: string;
}

const MOBILE_BREAKPOINT = 320;
const TABLET_BREAKPOINT = 920;
const DESKTOP_BREAKPOINT = 1200;

const MOBILE_SLIDES_PER_VIEW = 1.1;
const TABLET_SLIDES_PER_VIEW = 2.1;
const DESKTOP_SLIDES_PER_VIEW = 3.1;

const getRandomUserImage = () => {
  const images = [userStub1, userStub2, userStub3];

  return images[Math.floor(Math.random() * images.length)];
};

const mapReviewToCardProps = (review: Review): ReviewCardProps => ({
  id: review.id,
  userImg: review.image || getRandomUserImage(),
  title: review.userName,
  subtitle: (
    <span>
      You can message
      {" "}
      {review.userName}
      {" "}
      <a
        style={{textDecoration: "underline"}}
        href={review.link}
      >
        here
      </a>
    </span>
  ),
  description:
    review.comment ||
    "Amazing experience! Would definitely recommend this tour.",
});

const DEFAULT_FIRST_SLIDE = 1;
const SLIDES_INCREMENT = 1;

export function ReviewsSection(props: ToursSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);
  const [reviews, setReviews] = useState<ReviewCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(DEFAULT_FIRST_SLIDE);
  const totalSlides = reviews.length;

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const apiReviews = await getReviewsMain();
        if (apiReviews.length > 0) {
          const mappedReviews = apiReviews.map(mapReviewToCardProps);
          setReviews(mappedReviews);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to load reviews, using fallback data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, []);

  if (isLoading) {
    return (
      <section className={clsx(styles.wrap, props.className)}>
        <div className={styles.reviewsSlider}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
          >
            <p>
              Loading reviews...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={clsx(styles.wrap, props.className)}>
      <div className={styles.reviewsSlider}>
        <button
          type="button"
          aria-label="Previous"
          className={clsx(styles.arrow, styles.arrowLeft)}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span>
            <img
              src={arrowRightBlack}
              alt="left slider button"
              loading="lazy"
            />
          </span>
        </button>
        <button
          type="button"
          aria-label="Next"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span>
            <img
              src={blueArrowCircleRight}
              alt="right slider button"
              loading="lazy"
            />
          </span>
        </button>
        <Swiper
          modules={[Keyboard, A11y, Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          loop={true}
          loopAdditionalSlides={3}
          slidesPerView={1.2}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          keyboard={{enabled: true}}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className={styles.swiper}
          style={{overflow: "visible"}}
          breakpoints={{
            [MOBILE_BREAKPOINT]: {
              slidesPerView: MOBILE_SLIDES_PER_VIEW,
              loop: true,
            },
            [TABLET_BREAKPOINT]: {
              slidesPerView: TABLET_SLIDES_PER_VIEW,
              loop: true,
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: DESKTOP_SLIDES_PER_VIEW,
              loop: true,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className={styles.reviewSlide}
            >
              <ReviewCard
                key={review.id}
                description={review.description}
                id={review.id}
                subtitle={review.subtitle}
                title={review.title}
                userImg={review.userImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.desktopSlider}>
        <div className={styles.desktopNav}>
          <button
            type="button"
            aria-label="Previous"
            className={styles.desktopArrow}
            onClick={() => desktopSwiperRef.current?.slidePrev()}
          >
            <span>
              <img
                src={arrowRightBlack}
                alt="left slider button"
                loading="lazy"
              />
            </span>
          </button>
          <span className={styles.slideCounter}>
            {currentSlide}
            /
            {totalSlides}
          </span>
          <button
            type="button"
            aria-label="Next"
            className={styles.desktopArrow}
            onClick={() => desktopSwiperRef.current?.slideNext()}
          >
            <span>
              <img
                src={arrowRightBlack}
                alt="right slider button"
                loading="lazy"
              />
            </span>
          </button>
        </div>
        <Swiper
          modules={[Keyboard, A11y]}
          onSwiper={(s) => (desktopSwiperRef.current = s)}
          onSlideChange={(s) => setCurrentSlide(s.realIndex + SLIDES_INCREMENT)}
          loop={true}
          loopAdditionalSlides={3}
          slidesPerView={3}
          spaceBetween={24}
          speed={500}
          allowTouchMove={false}
          keyboard={{enabled: true}}
          className={styles.swiper}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className={styles.reviewSlide}
            >
              <ReviewCard
                key={review.id}
                description={review.description}
                id={review.id}
                subtitle={review.subtitle}
                title={review.title}
                userImg={review.userImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
