import calendar from "/images/calendar.svg";
import group from "/images/group.svg";
import location from "/images/phone.svg";
import {Dropdown} from "src/components/Dropdown/Dropdown";
// Import {CalendarDays, MapPin, Users, X} from "lucide-react";
// Import {Button} from "src/components/Button/Button";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

// Type Panel = "location" | "dates" | "trav" | null;

export function TourSearchForm() {
  // Const [open, setOpen] = useState<Panel>(null);

  // function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  // }

  return (
    <div className={styles.tourSearchForm}>

      <Dropdown
        trigger={(
          <div className={styles.location}>
            <div className={styles.label}>
              <img
                src={location}
                alt="user link"
              />
              {" "}
              Location
            </div>
            <span
              className={styles.currentValue}
              onClick={() => {}}
            >
              Start Location
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "tour-1",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Tour 1
                </div>,
                isVisible: true,
              },
              {
                id: "tour-2",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Tour 2
                </div>,
                isVisible: true,
              },
              {
                id: "tour-3",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Tour 3
                </div>,
                isVisible: true,
              },
            ],
          },
        ]}
      />

      <div className={styles.verticalSeparator} />

      <Dropdown
        trigger={(
          <div className={styles.dates}>
            <div className={styles.label}>
              <img
                src={calendar}
                alt="user link"
              />
              {" "}
              Dates
            </div>
            <span
              className={styles.currentValue}
              onClick={() => {}}
            >
              Start Location
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "start-1",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  1. Start date - End date
                </div>,
                isVisible: true,
              },
              {
                id: "Email",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  2. Start date - End date
                </div>,
                isVisible: true,
              },
              {
                id: "Instagram",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  3. Start date - End date
                </div>,
                isVisible: true,
              },
            ],
          },
        ]}
      />

      <div className={styles.verticalSeparator} />

      <Dropdown
        trigger={(
          <div className={styles.groupSize}>
            <div className={styles.label}>
              <img
                src={group}
                alt="group img"
              />
              {" "}
              Group Size
            </div>
            <span
              className={styles.currentValue}
              onClick={() => {}}
            >
              Start Location
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "start-1",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  1. Start date - End date
                </div>,
                isVisible: true,
              },
              {
                id: "Email",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  2. Start date - End date
                </div>,
                isVisible: true,
              },
              {
                id: "Instagram",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  3. Start date - End date
                </div>,
                isVisible: true,
              },
            ],
          },
        ]}
      />

      <div className={styles.verticalSeparator} />

      <div className={styles.button}>
        <button className={styles.searchNowButton}>
          Search now
        </button>
      </div>
    </div>
  );
}
