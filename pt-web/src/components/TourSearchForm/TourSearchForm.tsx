import {useState} from "react";
import {CalendarDays, MapPin, Users, X} from "lucide-react";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

type Panel = "location" | "dates" | "trav" | null;

export function TourSearchForm() {
  const [open, setOpen] = useState<Panel>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container className={styles.tourSearchForm}>
      <div
        className={styles.iconsBar}
        aria-hidden={false}
      >
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Select starting location"
          onClick={() => setOpen(open === "location" ? null : "location")}
        >
          <MapPin className={styles.iconWhite} />
        </button>
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Select dates"
          onClick={() => setOpen(open === "dates" ? null : "dates")}
        >
          <CalendarDays className={styles.iconWhite} />
        </button>
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Add travelers"
          onClick={() => setOpen(open === "trav" ? null : "trav")}
        >
          <Users className={styles.iconWhite} />
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <div className={styles.panelHead}>
            <span className={styles.panelTitle}>
              {open === "location" && "Select starting location"}
              {open === "dates" && "Select dates"}
              {open === "trav" && "Add travelers"}
            </span>
            <button
              type="button"
              className={styles.panelClose}
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X />
            </button>
          </div>

          {open === "location" && (
            <div className={styles.panelBody}>
              <div className={styles.inputWrap}>
                <MapPin className={styles.iconBlack} />
                <input
                  type="text"
                  id="m-location"
                  name="m-location"
                  placeholder="Any location"
                  className={styles.input}
                  autoFocus
                />
              </div>
            </div>
          )}

          {open === "dates" && (
            <div className={styles.panelBody}>
              <div className={styles.dateGroup}>
                <input
                  type="text"
                  id="m-dateFrom"
                  name="m-dateFrom"
                  placeholder="Starting date"
                  className={styles.inputDateLeft}
                />
                <div className={styles.dateDivider} />
                <input
                  type="text"
                  id="m-dateTo"
                  name="m-dateTo"
                  placeholder="Final date"
                  className={styles.inputDateRight}
                />
              </div>
            </div>
          )}

          {open === "trav" && (
            <div className={styles.panelBody}>
              <div className={styles.inputWrap}>
                <Users className={styles.iconBlack} />
                <input
                  type="number"
                  min={1}
                  id="m-travelers"
                  name="m-travelers"
                  placeholder="1 traveler"
                  className={styles.input}
                />
              </div>
            </div>
          )}
        </div>
      )}

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
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>
            Select dates
          </label>
          <div className={styles.dateGroup}>
            <div className={styles.inputWrapHidden}>
              <CalendarDays className={styles.iconBlackHidden} />
            </div>
            <input
              type="text"
              id="dateFrom"
              name="dateFrom"
              placeholder="Starting date"
              className={styles.inputDateLeft}
            />
            <div className={styles.dateDivider} />
            <input
              type="text"
              id="dateTo"
              name="dateTo"
              placeholder="Final date"
              className={styles.inputDateRight}
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
          <Button
            type="submit"
            className={styles.btnSearch}
          >
            Search Now
          </Button>
        </div>
      </form>
    </Container>
  );
}
