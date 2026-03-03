import {useNavigate} from "react-router-dom";
import checkMarkGreen from "/images/checkMarkGreen.svg";
import {Button} from "src/components/Button/Button";
import {Page} from "src/components/Page/Page";
import {PATHS} from "src/routes/routes";
import styles from "src/pages/thankYouPage/ThankYouPage.module.scss";

export function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <Page className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Thank you
        </h1>
        <img
          src={checkMarkGreen}
          alt="Success"
          className={styles.image}
        />
        <Button
          className={styles.backHomeButton}
          onClick={() => navigate(PATHS.HOME)}
        >
          Back to Home
        </Button>
      </div>
    </Page>
  );
}
