import {useRef} from "react";
import blueArrowCircleRight from "/images/blueArrowCircleRight.svg";
import germanyFlag from "/images/germanyFlag.avif";
import unitedKingdomFlag from "/images/unitedKingdomFlag.avif";
import userStub1 from "/images/userStub1.avif";
import userStub2 from "/images/userStub2.avif";
import userStub3 from "/images/userStub3.avif";
import clsx from "clsx";
import {ReviewCard, ReviewCardProps} from "src/components/ReviewsSection/ReviewCard/ReviewCard";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Autoplay, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/ReviewsSection/Reviews.module.scss";

interface ToursSectionProps {
  className?: string;
}

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 920;
// Const DESKTOP_BREAKPOINT = 1224;s

const MOBILE_SLIDES_PER_VIEW = 1;
const TABLET_SLIDES_PER_VIEW = 2;
const DESKTOP_SLIDES_PER_VIEW = 3;

const commentsDataStub: ReviewCardProps[] = [
  {
    id: "1",
    userImg: userStub1,
    title: "Emily Carter, UK",
    subtitle: "The Most Magical Spring Experience",
    // eslint-disable-next-line max-len
    description: "It all began with a desire to visit Sicily. Islands, volcanoes, a catamaran… Back then, we didn't yet know that this would be the beginning of a much bigger story. Then came Iceland — magical, with its waterfalls, icy rivers, and the Blue Lagoon. After that, Provence — lavender fields, small towns, and sunrises that take your breath away. The Czech Republic, Moravia, Hungary — each country left its own unique mark. And ahead await the Balkans and Scotland.",
    flagImg: germanyFlag,
  },
  {
    id: "2",
    userImg: userStub2,
    title: "Liam Becker, Germany",
    subtitle: "A Photographer's Spring Paradise",
    // eslint-disable-next-line max-len
    description: "Perfectly timed sunrise spots, soft morning mist, and endless green hills — Tuscany in spring feels unreal. Every shoot gave me portfolio-level shots, even without rushing. One of the most inspiring trips I've ever joined.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "3",
    userImg: userStub3,
    title: "Ava Thompson, USA",
    subtitle: "Where Every Sunrise Feels Magical",
    // eslint-disable-next-line max-len
    description: "Spring Tuscany glows with pastel colors and gentle light that makes every moment feel cinematic. The atmosphere was calm, beautifully organized, and full of creativity. I left with photos that still take my breath away.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "4",
    userImg: userStub1,
    title: "Marcus Weber, France",
    subtitle: "Beyond Photography Expectations",
    // eslint-disable-next-line max-len
    description: "The attention to detail in planning was exceptional. From sunrise locations to hidden gems, every spot offered unique photographic opportunities. The guidance on composition and lighting elevated my skills significantly.",
    flagImg: germanyFlag,
  },
  {
    id: "5",
    userImg: userStub2,
    title: "Sophie Laurent, Canada",
    subtitle: "A Journey Through Light and Color",
    // eslint-disable-next-line max-len
    description: "Tuscany's landscapes are breathtaking, but experiencing them through a photographer's lens was transformative. The small group size allowed for personalized attention and incredible access to viewpoints.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "6",
    userImg: userStub3,
    title: "David Chen, Australia",
    subtitle: "Professional Guidance, Stunning Results",
    // eslint-disable-next-line max-len
    description: "As an intermediate photographer, I learned more in these few days than in months of self-study. The instructor's expertise and the carefully chosen locations resulted in portfolio-worthy images.",
    flagImg: germanyFlag,
  },
  {
    id: "7",
    userImg: userStub1,
    title: "Marcus Weber, France",
    subtitle: "Beyond Photography Expectations",
    // eslint-disable-next-line max-len
    description: "The attention to detail in planning was exceptional. From sunrise locations to hidden gems, every spot offered unique photographic opportunities. The guidance on composition and lighting elevated my skills significantly.",
    flagImg: germanyFlag,
  },
  {
    id: "8",
    userImg: userStub2,
    title: "Sophie Laurent, Canada",
    subtitle: "A Journey Through Light and Color",
    // eslint-disable-next-line max-len
    description: "Tuscany's landscapes are breathtaking, but experiencing them through a photographer's lens was transformative. The small group size allowed for personalized attention and incredible access to viewpoints.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "9",
    userImg: userStub3,
    title: "David Chen, Australia",
    subtitle: "Professional Guidance, Stunning Results",
    // eslint-disable-next-line max-len
    description: "As an intermediate photographer, I learned more in these few days than in months of self-study. The instructor's expertise and the carefully chosen locations resulted in portfolio-worthy images.",
    flagImg: germanyFlag,
  },
  {
    id: "10",
    userImg: userStub1,
    title: "Marcus Weber, France",
    subtitle: "Beyond Photography Expectations",
    // eslint-disable-next-line max-len
    description: "The attention to detail in planning was exceptional. From sunrise locations to hidden gems, every spot offered unique photographic opportunities. The guidance on composition and lighting elevated my skills significantly.",
    flagImg: germanyFlag,
  },
  {
    id: "11",
    userImg: userStub2,
    title: "Sophie Laurent, Canada",
    subtitle: "A Journey Through Light and Color",
    // eslint-disable-next-line max-len
    description: "Tuscany's landscapes are breathtaking, but experiencing them through a photographer's lens was transformative. The small group size allowed for personalized attention and incredible access to viewpoints.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "12",
    userImg: userStub3,
    title: "David Chen, Australia",
    subtitle: "Professional Guidance, Stunning Results",
    // eslint-disable-next-line max-len
    description: "As an intermediate photographer, I learned more in these few days than in months of self-study. The instructor's expertise and the carefully chosen locations resulted in portfolio-worthy images.",
    flagImg: germanyFlag,
  },
];

export function ReviewsSection(props: ToursSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={clsx(styles.wrap, props.className)}>
      <div className={styles.reviewsSlider}>
        <button
          type="button"
          aria-label="Previous"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span>
            <img
              src={blueArrowCircleRight}
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
          loop={commentsDataStub.length > DESKTOP_SLIDES_PER_VIEW}
          loopAdditionalSlides={3}
          slidesPerView={MOBILE_SLIDES_PER_VIEW}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          keyboard={{enabled: true}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className={styles.swiper}
          breakpoints={{
            [MOBILE_BREAKPOINT]: {
              slidesPerView: TABLET_SLIDES_PER_VIEW,
              loop: commentsDataStub.length > TABLET_SLIDES_PER_VIEW,
            },
            [TABLET_BREAKPOINT]: {
              slidesPerView: DESKTOP_SLIDES_PER_VIEW,
              loop: commentsDataStub.length > DESKTOP_SLIDES_PER_VIEW,
            },
          }}
        >
          {commentsDataStub.map((review) => (
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
                flagImg={review.flagImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
