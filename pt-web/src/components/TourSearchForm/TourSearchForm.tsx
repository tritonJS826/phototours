import {useState} from "react";
import {useNavigate} from "react-router-dom";
import calendar from "/images/calendar.svg";
import group from "/images/group.svg";
import location from "/images/phone.svg";
// Import sun from "/images/sun-solid.svg";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {NumberInput} from "src/components/NumberInput/NumberInput";
import {PATHS} from "src/routes/routes";
// Import {CalendarDays, MapPin, Users, X} from "lucide-react";
// Import {Button} from "src/components/Button/Button";
import styles from "src/components/TourSearchForm/TourSearchForm.module.scss";

// Type Panel = "location" | "dates" | "trav" | null;

const TRAVELERS_ONE_AMOUNT = 1;

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
                id: "location-all",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  All
                </div>,
                isVisible: true,
                onClick: () => {
                  setSearchData(prev => ({...prev, location: ""}));
                },
              },
              {
                id: "location-europe",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Europe
                </div>,
                isVisible: true,
                onClick: () => {
                  setSearchData(prev => ({...prev, location: "Europe"}));
                },
              },
              {
                id: "location-asia-oceania",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Asia & Oceania
                </div>,
                isVisible: true,
                onClick: () => {
                  setSearchData(prev => ({...prev, location: "Asia & Oceania"}));
                },
              },
              {
                id: "location-africa",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Africa
                </div>,
                isVisible: true,
                onClick: () => {
                  setSearchData(prev => ({...prev, location: "Africa"}));
                },
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
                id: "season-all",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  All
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: ""})),
              },
              {
                id: "winter",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Winter
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Winter"})),
              },
              {
                id: "spring",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Spring
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Spring"})),
              },
              {
                id: "summer",
                isPreventDefaultUsed: false,
                value: <div className={styles.tourLocationItem}>
                  Summer
                </div>,
                isVisible: true,
                onClick: () => setSearchData(prev => ({...prev, season: "Summer"})),
              },
              {
                id: "autumn",
                isPreventDefaultUsed: false,
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
              {searchData.travelers === TRAVELERS_ONE_AMOUNT
                ? "1 traveler"
                : `${searchData.travelers} travelers`}
            </span>
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "travelers-number-input",
                isPreventDefaultUsed: true,
                value: (
                  <div className={styles.tourTravelersInput}>
                    <NumberInput
                      value={searchData.travelers}
                      onChange={(newValue) => setSearchData(prev => ({...prev, travelers: newValue}))}
                      min={1}
                      max={20}
                      className={styles.dropdownNumberInput}
                    />
                  </div>
                ),
                isVisible: true,
                onClick: () => {},
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
              params.set("season", searchData.season);
            }
            if (searchData.travelers > TRAVELERS_ONE_AMOUNT) {
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
