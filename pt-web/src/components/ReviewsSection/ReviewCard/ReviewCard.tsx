import styles from "src/components/ReviewsSection/ReviewCard/ReviewCard.module.scss";

export interface ReviewCardProps {
    id: string;
    userImg: string;
    title: string;
    subtitle: string;
    description: string;
    flagImg: string;
}

export function ReviewCard(props: ReviewCardProps) {

  return (
    <article className={styles.reviewCard}>
      <img
        src={props.userImg}
        alt="user image"
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>
          {props.title}
        </h3>
        {/* <img
          src={props.flagImg}
          alt="flag image"
          className={styles.flagImage}
        /> */}

      </div>
      <h4 className={styles.subtitle}>
        {props.subtitle}
      </h4>
      <p className={styles.description}>
        {props.description}
      </p>
    </article>
  );
}
