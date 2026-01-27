import {useState} from "react";
import {useNavigate} from "react-router-dom";
import calendar from "/images/calendar.svg";
import group from "/images/group.svg";
import location from "/images/phone.svg";
import sun from "/images/sun-solid.svg";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {PATHS} from "src/routes/routes";
// Import {CalendarDays, MapPin, Users, X} from "lucide-react";
// Import {Button} from "src/components/Button/Button";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

// Type Panel = "location" | "dates" | "trav" | null;

export function TourSearchForm() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: "",
    season: "",
    travelers: 1,
  });

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
              {searchData.location || "Choose location"}
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "location-1",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Location 1
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, location: "Location 1"})),
              },
              {
                id: "location-2",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Location 2
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, location: "Location 2"})),
              },
              {
                id: "location-3",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Location 3
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, location: "Location 3"})),
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
                alt="season icon"
              />
              {" "}
              Season
            </div>
            <span
              className={styles.currentValue}
              onClick={() => {}}
            >
              {searchData.season || "Choose season"}
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "winter",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Winter
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Winter"})),
              },
              {
                id: "spring",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Spring
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Spring"})),
              },
              {
                id: "summer",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Summer
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Summer"})),
              },
              {
                id: "autumn",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  Autumn
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Autumn"})),
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
              Travelers
            </div>
            <span
              className={styles.currentValue}
              onClick={() => {}}
            >
              {searchData.travelers === 1
                ? "1 traveler"
                : `${searchData.travelers} travelers`}
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "traveler-1",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  1 traveler
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, travelers: 1})),
              },
              {
                id: "traveler-2",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  2 travelers
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, travelers: 2})),
              },
              {
                id: "traveler-3",
                isPreventDefaultUsed: true,
                value: <div className={styles.tourLocationItem}>
                  3 travelers
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, travelers: 3})),
              },
            ],
          },
        ]}
      />

      <div className={styles.verticalSeparator} />

      <div className={styles.button}>
        <button
          className={styles.searchNowButton}
          onClick={() => {
            const params = new URLSearchParams();

            if (searchData.location) {
              params.set("location", searchData.location);
            }
            if (searchData.season) {
              // Map season to representative month
              const seasonMonthMap: {[key: string]: string} = {
                "Winter": "December",
                "Spring": "March",
                "Summer": "June",
                "Autumn": "September",
              };
              params.set("month", seasonMonthMap[searchData.season]);
            }
            if (searchData.travelers > 1) {
              params.set("travelers", searchData.travelers.toString());
            }

            const queryString = params.toString();
            navigate(`${PATHS.TOURS}${queryString ? `?${queryString}` : ""}`);
          }}
        >
          Search now
        </button>
      </div>
    </div>
  );
}
