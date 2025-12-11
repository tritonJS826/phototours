import germanyFlag from "/images/germanyFlag.avif";
import unitedKingdomFlag from "/images/unitedKingdomFlag.avif";
import userStub1 from "/images/userStub1.avif";
import userStub2 from "/images/userStub2.avif";
import userStub3 from "/images/userStub3.avif";
import clsx from "clsx";
import {ReviewCard, ReviewCardProps} from "src/components/ReviewsSection/ReviewCard/ReviewCard";
import styles from "src/components/ToursSection/ToursSection.module.scss";

interface ToursSectionProps {
  className?: string;
}

const commentsDataStub: ReviewCardProps[] = [
  {
    id: "1",
    userImg: userStub1,
    title: "Emily Carter, UK",
    subtitle: "The Most Magical Spring Experience",
    // eslint-disable-next-line max-len
    description: "Spring Tuscany was a dream come true. Soft pastel sunrise light, rolling green hills, and the smell of fresh blossoms made me feel like I stepped into a painting. Every location was perfectly chosen. This tour filled me with so much inspiration.",
    flagImg: germanyFlag,
  },
  {
    id: "2",
    userImg: userStub2,
    title: "Liam Becker, Germany",
    subtitle: "A Photographer’s Spring Paradise",
    // eslint-disable-next-line max-len
    description: "Perfectly timed sunrise spots, soft morning mist, and endless green hills — Tuscany in spring feels unreal. Every shoot gave me portfolio-level shots, even without rushing. One of the most inspiring trips I’ve ever joined.",
    flagImg: unitedKingdomFlag,
  },
  {
    id: "3",
    userImg: userStub3,
    title: "Ava Thompson, USA",
    subtitle: "Where Every Sunrise Feels Magical",
    // eslint-disable-next-line max-len
    description: "Spring Tuscany glows with pastel colors and gentle light that makes every moment feel cinematic. The atmosphere was calm, beautifully organized, and full of creativity. I left with photos — an",
    flagImg: unitedKingdomFlag,
  },
];

export function ReviewsSection(props: ToursSectionProps) {
  // If (loading) {
  //   return (
  //     <section className={clsx(styles.wrap, props.className)}>
  //       <div className={styles.state}>
  //         Loading…
  //       </div>
  //     </section>
  //   );
  // }

  // if (error) {
  //   return (
  //     <section className={`${styles.wrap} ${props.className}`}>
  //       <div className={styles.state}>
  //         <div>
  //           Failed to load tours
  //         </div>
  //         <button
  //           type="button"
  //           className={styles.retry}
  //           onClick={reload}
  //         >
  //           Retry
  //         </button>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className={clsx(styles.wrap, props.className)}>
      <div className={styles.grid}>
        {commentsDataStub.map((review) => (
          <ReviewCard
            key={review.id}
            description={review.description}
            id={review.id}
            subtitle={review.subtitle}
            title={review.title}
            userImg={review.userImg}
            flagImg={review.flagImg}
          />
        ))}
      </div>
    </section>
  );
}
