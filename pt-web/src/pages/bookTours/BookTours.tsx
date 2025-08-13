import bridge from "src/assets/images/bridge.avif";
import lake from "src/assets/images/lake.avif";
import train from "src/assets/images/train.avif";
import {Container} from "src/components/Container/Container";
import styles from "src/pages/bookTours/BookTours.module.scss";

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
