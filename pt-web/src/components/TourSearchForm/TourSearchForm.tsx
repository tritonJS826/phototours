import {Container} from "src/components/Container/Container";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

export function TourSearchForm() {
  return (
    <Container className={styles.tourSearchForm}>
      <form>
        <div className={styles.form}>
          <div className={styles.formLocation}>
            <label htmlFor="search">
              Select starting location
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Any location"
              className={styles.formLocationInput}
            />
          </div>
          <div className={styles.formDate}>
            <label htmlFor="date">
              Select dates
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className={styles.formDateInputFirst}
              placeholder="Starting date"
            />
            <input
              type="text"
              id="date"
              name="date"
              className={styles.formDateInputSecond}
              placeholder="Final date"
            />
          </div>
          <div className={styles.formTrav}>
            <label htmlFor="date">
              Add travelers
            </label>
            <input
              type="text"
              id="travelor"
              name="travelor"
              placeholder='1 traveler'
              className={styles.formTravInput}
            />
          </div>
        </div>
        <div className={styles.formBtn}>
          <button
            type="submit"
            className={styles.formBtnSub}
          >
            Search
          </button>
        </div>
      </form>
    </Container>
  );
}
