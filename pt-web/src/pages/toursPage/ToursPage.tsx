import {useEffect} from "react";
import location_blue from "/images/location_blue.svg";
import people from "/images/people.svg";
import price from "/images/price.svg";
import sun from "/images/sun-solid.svg";
import {AsyncSection} from "src/components/AsyncSection/AsyncSection";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {TourCardExtended} from "src/components/Tour/TourCardExtended/TourCardExtended";
import {useTours} from "src/hooks/useTours";
import styles from "src/pages/toursPage/ToursPage.module.scss";

export function ToursPage() {
  const {data, loading, error, reload} = useTours();

  useEffect(() => {
    document.title = "All Tours";
  }, []);

  return (
    <section className={styles.wrap}>
      <div className={styles.horizontal}>
        <div className={styles.filters}>
          <label className={styles.filtersLabel}>
            Location
          </label>
          <Dropdown
            trigger={(
              <div className={styles.locationInputBlock}>
                <img
                  className={styles.locationInputImg}
                  src={location_blue}
                  alt="Photo Tour Logo"
                />
                <input
                  type="text"
                  id="filters-location"
                  placeholder="Location"
                  className={styles.locationInput}
                />
              </div>

            )}

            dropdownMenuItems={[
              {
                dropdownSubMenuItems: [
                  {
                    id: "location-1",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Location 1
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "location-2",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Location 2
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "location-3",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Location 3
                    </div>,
                    isVisible: true,
                  },
                ],
              },
            ]}
          />

          <label className={styles.filtersLabel}>
            Select season
          </label>
          <Dropdown
            trigger={(
              <div className={styles.locationInputBlock}>
                <img
                  className={styles.locationInputImg}
                  src={sun}
                  alt="select season icon"
                />
                <input
                  type="text"
                  id="filters-location"
                  placeholder="Choose season"
                  className={styles.locationInput}
                />
              </div>

            )}

            dropdownMenuItems={[
              {
                dropdownSubMenuItems: [
                  {
                    id: "winter",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Winter
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "Spring",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Spring
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "Summer",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Summer
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "Autumn",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      Autumn
                    </div>,
                    isVisible: true,
                  },
                ],
              },
            ]}
          />

          <label className={styles.filtersLabel}>
            Location
          </label>
          <Dropdown
            trigger={(
              <div className={styles.locationInputBlock}>
                <img
                  className={styles.locationInputImg}
                  src={people}
                  alt="Photo Tour Logo"
                />
                <input
                  type="text"
                  id="filters-location"
                  placeholder="Select number of travelers"
                  className={styles.locationInput}
                />
              </div>

            )}

            dropdownMenuItems={[
              {
                dropdownSubMenuItems: [
                  {
                    id: "traveler-1",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      1 traveler
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "traveler-2",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      2 travelers
                    </div>,
                    isVisible: true,
                  },
                  {
                    id: "traveler-3",
                    isPreventDefaultUsed: true,
                    value: <div className={styles.dropdownItem}>
                      3 travelers
                    </div>,
                    isVisible: true,
                  },
                ],
              },
            ]}
          />

          <div className={styles.priceLabelBlock}>
            <img
              className={styles.locationInputImg}
              src={price}
              alt="Photo Tour Logo"
            />
            <label className={styles.priceLabel}>
              Price
            </label>
          </div>

          <div className={styles.priceRange}>

            <div className={styles.rangeWrapper}>
              <input
                type="range"
                min="300"
                max="6000"
                className={styles.range}
                id="min"
              />
              <input
                type="range"
                min="300"
                max="6000"
                className={styles.range}
                id="max"
              />
            </div>

            <div className={styles.labels}>
              <span>
                Min price
                <br />
                <b>
                  300 USD
                </b>
              </span>
              <span>
                Max price
                <br />
                <b>
                  6000 USD
                </b>
              </span>
            </div>
          </div>

        </div>

        <AsyncSection
          loading={loading}
          error={error ?? undefined}
          onRetry={reload}
        >
          <div className={styles.verticalContainer}>
            <div className={styles.filtersHeader}>
              <div />
              <div>
                <p className={styles.filtersHeaderCenterToursAmount}>
                  20 tours match your search
                </p>
                <p className={styles.filtersHeaderCenterSub}>
                  Refine the results by using the filters
                </p>
              </div>
              <div />

            </div>
            <div className={styles.grid}>
              {(data ?? []).map(tour => (
                <TourCardExtended
                  key={tour.id}
                  tour={tour}
                  className={styles.tourCard}
                />))}
            </div>

          </div>
        </AsyncSection>
      </div>

    </section>
  );
}
