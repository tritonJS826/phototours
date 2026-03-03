import {Container} from "src/components/Container/Container";
import bridge from "src/pages/bookTours/images/bridge.avif";
import lake from "src/pages/bookTours/images/lake.avif";
import train from "src/pages/bookTours/images/train.avif";
import styles from "src/pages/bookTours/BookTours.module.scss";

// Looks like deprecated thing
export function BookTours() {
  return (
    <Container>
      <div>
        <div>
          <div className={styles.contImg}>
            <img
              src={bridge}
              alt=""
            />
          </div>
          <div>
            <h2 />
            <p />
          </div>
        </div>
        <div>
          <div className={styles.contImg}>
            <img
              src={train}
              alt=""
            />
          </div>
          <div>
            <h2 />
            <p />
          </div>
        </div>
        <div>
          <div className={styles.contImg}>
            <img
              src={lake}
              alt=""
            />
          </div>
          <div>
            <h2 />
            <p />
          </div>
        </div>
      </div>
    </Container>
  );
}
