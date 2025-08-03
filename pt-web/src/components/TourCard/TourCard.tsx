import {Button} from "src/components/Button/Button";
import styles from "src/components/TourCard/TourCard.module.scss";

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

export function TourCard({image, title, location, price}: TourCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.location}>
          {location}
        </p>
        <span className={styles.price}>
          {price}
        </span>
        <Button
          href="#"
          variant="primary"
          className={styles.button}
        >
          Узнать подробнее
        </Button>
      </div>
    </div>
  );
}
