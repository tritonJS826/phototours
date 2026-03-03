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
const TABLET_BREAKPOINT = 650;
const DESKTOP_BREAKPOINT = 1200;

const MOBILE_SLIDES_PER_VIEW = 1.2;
const TABLET_SLIDES_PER_VIEW = 2.4;
const DESKTOP_SLIDES_PER_VIEW = 3.1;
const LOOP_ADDITIONAL_SLIDES = 3;
const MIN_SLIDES_FOR_LOOP = 1;

const getRandomUserImage = () => {
  const images = [userStub1, userStub2, userStub3];

  return images[Math.floor(Math.random() * images.length)];
};

const mapReviewToCardProps = (review: Review): ReviewCardProps => {
  const INDEX_OF_FIRST_SPACE = 1;
  const titleParts = review.userName.split(" ");
  const firstName = titleParts[0];
  const surname = titleParts.slice(INDEX_OF_FIRST_SPACE).join(" ");

  return ({
    id: review.id,
    userImg: review.image || getRandomUserImage(),
    title: firstName,
    secondTitle: surname,
    subtitle: (
      <span>
        You can message
        {" "}
        {firstName}
        {" "}
        <a
          style={{textDecoration: "underline"}}
          href={review.link}
        >
          here
        </a>
      </span>
    ),
    description: review.comment,
  });
};

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
          loop={totalSlides > MIN_SLIDES_FOR_LOOP}
          loopAdditionalSlides={totalSlides > MIN_SLIDES_FOR_LOOP ? LOOP_ADDITIONAL_SLIDES : 0}
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
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
            },
            [TABLET_BREAKPOINT]: {
              slidesPerView: TABLET_SLIDES_PER_VIEW,
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: Math.min(DESKTOP_SLIDES_PER_VIEW, totalSlides),
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
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
                secondTitle={review.secondTitle}
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
          loop={totalSlides > MIN_SLIDES_FOR_LOOP}
          loopAdditionalSlides={totalSlides > MIN_SLIDES_FOR_LOOP ? LOOP_ADDITIONAL_SLIDES : 0}
          slidesPerView={Math.min(LOOP_ADDITIONAL_SLIDES, totalSlides)}
          spaceBetween={24}
          speed={500}
          allowTouchMove={false}
          keyboard={{enabled: true}}
          className={styles.swiper}
          breakpoints={{
            [MOBILE_BREAKPOINT]: {
              slidesPerView: MOBILE_SLIDES_PER_VIEW,
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
            },
            [TABLET_BREAKPOINT]: {
              slidesPerView: TABLET_SLIDES_PER_VIEW,
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: Math.min(DESKTOP_SLIDES_PER_VIEW, totalSlides),
              loop: totalSlides > MIN_SLIDES_FOR_LOOP,
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
                secondTitle={review.secondTitle}
                userImg={review.userImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
