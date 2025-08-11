import styles from "src/components/BlogCard/BlogCard.module.scss";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

export function BlogCard({image, title, date, excerpt}: BlogCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.image}
      />
      <div className={styles.content}>
        <span className={styles.date}>
          {date}
        </span>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.excerpt}>
          {excerpt}
        </p>
        <a
          href="#"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
    </div>
  );
}
