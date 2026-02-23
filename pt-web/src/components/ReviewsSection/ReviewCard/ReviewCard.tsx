import {useState} from "react";
import {createPortal} from "react-dom";
import {CentralNotification} from "src/components/CentralNotification/CentralNotification";
import styles from "src/components/ReviewsSection/ReviewCard/ReviewCard.module.scss";

export interface ReviewCardProps {
    id: string;
    userImg: string;
    title: string;
    subtitle: string | React.ReactElement;
    description: string;
}

export function ReviewCard(props: ReviewCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
        </div>
        <h4 className={styles.subtitle}>
          {props.subtitle}
        </h4>
        <p className={styles.description}>
          {props.description}
        </p>
        <button
          className={styles.linkButton}
          onClick={() => setIsModalOpen(true)}
        >
          <span className={styles.arrowReadMore}>
            ➙
          </span>
          {" "}
          Read full review
        </button>
      </article>

      {createPortal(
        <CentralNotification
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={props.userImg}
          title={props.title}
          subtitle={props.description}
          isCircleImage={true}
        />,
        document.body,
      )}
    </>
  );
}
