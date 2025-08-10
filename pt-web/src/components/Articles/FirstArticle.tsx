import picture from "src/components/Articles/assets/first.avif";
import styles from "src/components/Articles/Articles.module.scss";

export function FirstArticle() {
  return (
    <div className={styles.articleCont}>
      <div className={styles.fotoCont}>
        <img
          src={picture}
          alt=""
        />
      </div>
      <div className={styles.textCont}>
        <h2>
          The Ultimate Guide to Photographing
          ine Aurora in Icelane
        </h2>
        <p>
          There is nothina quite as enigmatic as the slow-dance of tne Aurora sorealis
          (more comi moniv known as the 'Northern Liants ). auietiv undulating across
          the night sky. For many pho-tographers, witnessing these ethereal colours in
          the atmosphere is quite literally a dream come true.
        </p>
        <div className={styles.btnCont}>
          <button>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
