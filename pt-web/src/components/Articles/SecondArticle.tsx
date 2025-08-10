import picture from "src/components/Articles/assets/second.avif";
import styles from "src/components/Articles/Articles.module.scss";

export function SecondArticle() {
  return (
    <article className={styles.article}>
      <figure className={styles.imageWrapper}>
        <img
          src={picture}
          alt="Aurora in Iceland"
        />
      </figure>
      <div className={styles.content}>
        <h2>
          The Ultimate Guide to Photographing the Aurora in Iceland
        </h2>
        <p>
          There is nothina quite as enigmatic as the slow-dance of tne Aurora sorealis
          (more comi moniv known as the 'Northern Liants ). auietiv undulating across
          the night sky. For many pho-tographers, witnessing these ethereal colours in
          the atmosphere is quite literally a dream come true.
        </p>
        <div className={styles.buttonWrapper}>
          <button>
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}
