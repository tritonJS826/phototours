import {CalendarDays, MapPin, Users} from "lucide-react";
import {Container} from "src/components/Container/Container";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

export function TourSearchForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container className={styles.tourSearchForm}>
      <div
        className={styles.iconsBar}
        aria-hidden
      >
        <MapPin className={styles.iconWhite} />
        <CalendarDays className={styles.iconWhite} />
        <Users className={styles.iconWhite} />
      </div>

      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <div className={styles.field}>
          <label htmlFor="location">
            Select starting location
          </label>
          <div className={styles.inputWrap}>
            <MapPin className={styles.iconBlack} />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Any location"
              className={styles.formLocationInput}
            />
          </div>
          <div className={styles.formDate}>
            <label htmlFor="startDate">
              Select dates
            </label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              className={styles.formDateInputFirst}
              placeholder="Starting date"
            />
            <input
              type="text"
              id="endDate"
              name="endDate"
              className={styles.formDateInputSecond}
              placeholder="Final date"
            />
          </div>
          <div className={styles.formTrav}>
            <label htmlFor="travelers">
              Add travelers
            </label>
            <input
              type="text"
              id="travelers"
              name="travelers"
              placeholder='1 traveler'
              className={styles.formTravInput}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>
            Select dates
          </label>
          <div className={styles.dateGroup}>
            <div className={styles.inputWrap}>
              <CalendarDays className={styles.iconBlack} />
              <input
                type="input"
                id="dateFrom"
                name="dateFrom"
                placeholder="Starting date"
                className={`${styles.input} ${styles.inputDateLeft}`}
              />
            </div>
            <div className={styles.dateDivider} />
            <input
              type="input"
              id="dateTo"
              name="dateTo"
              placeholder="Final date"
              className={`${styles.input} ${styles.inputDateRight}`}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="travelers">
            Add travelers
          </label>
          <div className={styles.inputWrap}>
            <Users className={styles.iconBlack} />
            <input
              type="number"
              min={1}
              id="travelers"
              name="travelers"
              placeholder="1 traveler"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formBtn}>
          <button
            type="submit"
            className={styles.btnSearch}
          >
            Search Now
          </button>
        </div>
      </form>
    </Container>
  );
}
