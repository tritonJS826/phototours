import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import location_blue from "/images/location_blue.svg";
import people from "/images/people.svg";
import price from "/images/price.svg";
import sun from "/images/sun-solid.svg";
import {Filter} from "lucide-react";
import {AsyncSection} from "src/components/AsyncSection/AsyncSection";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {NumberInput} from "src/components/NumberInput/NumberInput";
import {TourCardExtended} from "src/components/Tour/TourCardExtended/TourCardExtended";
import {useTours} from "src/hooks/useTours";
import {FilterModal} from "src/pages/toursPage/FilterModal";
import {type ToursFilter} from "src/services/toursService";
import {TourView} from "src/types/tour";
import styles from "src/pages/toursPage/ToursPage.module.scss";

export function ToursPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from URL params
  const getFiltersFromURL = (): ToursFilter => {
    const params: ToursFilter = {};

    if (searchParams.get("location")) {
      params.location = searchParams.get("location") ?? "";
    }
    if (searchParams.get("month")) {
      params.month = searchParams.get("month") ?? "";
    }
    if (searchParams.get("season")) {
      params.season = searchParams.get("season") ?? "";
    }
    if (searchParams.get("travelers")) {
      params.travelers = parseInt(searchParams.get("travelers") ?? "");
    }

    return params;
  };

  const [filters, setFilters] = useState<ToursFilter>(getFiltersFromURL());
  const [priceRange, setPriceRange] = useState({min: 300, max: 6000});
  const {allTours, loading, error, reload} = useTours(filters);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    document.title = "All Tours";
  }, []);

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.location) {
      params.set("location", filters.location);
    }
    if (filters.month) {
      params.set("month", filters.month);
    }
    if (filters.season) {
      params.set("season", filters.season);
    }
    if (filters.travelers) {
      params.set("travelers", filters.travelers.toString());
    }

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Helper function to check if tour is available in selected season
  const isTourAvailableInSeason = (tour: TourView, season: string) => {
    if (!tour.availableMonths || !season) {
      return true;
    }

    const seasonMonths = {
      "Winter": ["December", "January", "February"],
      "Spring": ["March", "April", "May"],
      "Summer": ["June", "July", "August"],
      "Autumn": ["September", "October", "November"],
    };

    const months = seasonMonths[season as keyof typeof seasonMonths] || [];

    return tour.availableMonths.some((month: string) => months.includes(month));
  };

  // Client-side filtering with travelers multiplier and season mapping
  const data = useMemo(() => {
    if (!allTours) {
      return allTours;
    }

    // Const DEFAULT_TRAVELERS = 1;

    return allTours.filter(tour => {
      // Price filtering with travelers multiplier
      if (!tour.price) {
        return true;
      } // Include tours without price
      // const travelerCount = filters.travelers || DEFAULT_TRAVELERS;
      const totalPrice = tour.price; // * TravelerCount;
      const priceMatch = totalPrice >= priceRange.min && totalPrice <= priceRange.max;

      // Season filtering
      let seasonMatch = true;
      if (filters.season) {
        seasonMatch = isTourAvailableInSeason(tour, filters.season);
      }

      return priceMatch && seasonMatch;
    });
  }, [allTours, priceRange, filters.travelers, filters.season]);

  const handlePriceRangeChange = (type: "min" | "max", value: number) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleResetAll = () => {
    setFilters({});
    setPriceRange({min: 300, max: 6000});
    setSearchParams(new URLSearchParams()); // Clear URL params
  };

  const ONE_TRAVELER = 1;

  const filtersContent = (
    <>
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
              autoComplete="off"
              value={filters.location || ""}
              readOnly
            />
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "location-europe",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Europe
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, location: "Europe"}));
                },
              },
              {
                id: "location-japan",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Japan
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, location: "Japan"}));
                },
              },
              // {
              //   id: "location-usa",
              //   isPreventDefaultUsed: true,
              //   value: <div className={styles.dropdownItem}>
              //     USA
              //   </div>,
              //   isVisible: true,
              //   onClick: () => {
              //     const input = document.getElementById(
              //       "filters-location",
              //     ) as HTMLInputElement;
              //     if (input) {
              //       input.value = "USA";
              //     }
              //     setFilters(prev => ({...prev, location: "USA"}));
              //   },
              // },
              {
                id: "location-north-africa",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  North Africa
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, location: "North Africa"}));
                },
              },
              {
                id: "location-oceania",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Oceania
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, location: "Oceania"}));
                },
              },
              {
                id: "location-mediterranean",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Mediterranean
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, location: "Mediterranean"}));
                },
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
              id="filters-season"
              placeholder="Choose season"
              className={styles.locationInput}
              autoComplete="off"
              value={filters.season || ""}
              readOnly
            />
          </div>

        )}

        dropdownMenuItems={[
          {
            dropdownSubMenuItems: [
              {
                id: "winter",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Winter
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, season: "Winter"}));
                },
              },
              {
                id: "spring",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Spring
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, season: "Spring"}));
                },
              },
              {
                id: "summer",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Summer
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, season: "Summer"}));
                },
              },
              {
                id: "autumn",
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  Autumn
                </div>,
                isVisible: true,
                onClick: () => {
                  setFilters(prev => ({...prev, season: "Autumn"}));
                },
              },
            ],
          },
        ]}
      />

      <div className={styles.filterHeader}>
        <label className={styles.filtersLabel}>
          Travelers amount
        </label>
      </div>
      <NumberInput
        className={styles.travelersAmountInput}
        value={filters.travelers || ONE_TRAVELER}
        onChange={(newValue) => setFilters(prev => ({...prev, travelers: newValue}))}
        min={1}
        max={99}
        description="Travelers"
        icon={people}
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
            value={priceRange.min}
            className={styles.range}
            id="min"
            onChange={(e) => handlePriceRangeChange("min", parseInt(e.target.value))}
          />
          <input
            type="range"
            min="300"
            max="6000"
            value={priceRange.max}
            className={styles.range}
            id="max"
            onChange={(e) => handlePriceRangeChange("max", parseInt(e.target.value))}
          />
        </div>

        <div className={styles.labels}>
          <span>
            Min price
            <br />
            <b>
              {priceRange.min}
              {" "}
              USD
            </b>
          </span>
          <span>
            Max price
            <br />
            <b>
              {priceRange.max}
              {" "}
              USD
            </b>
          </span>
        </div>
      </div>

      <div className={styles.resetButtonContainer}>
        <button
          type="button"
          className={styles.resetAllButton}
          onClick={handleResetAll}
        >
          Reset All Filters
        </button>
      </div>
    </>
  );

  return (
    <section className={styles.wrap}>
      <button
        className={styles.floatingFilterButton}
        onClick={() => setIsFilterModalOpen(true)}
      >
        <Filter />
      </button>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      >
        <div className={styles.modalFiltersWrapper}>
          {filtersContent}
        </div>
      </FilterModal>

      <div className={styles.horizontal}>
        <div className={styles.filters}>
          {filtersContent}
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
                  {data?.length ?? 0}
                  {" "}
                  tours match your search
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
                  travelers={filters.travelers}
                />))}
            </div>

          </div>
        </AsyncSection>
      </div>

    </section>
  );
}
