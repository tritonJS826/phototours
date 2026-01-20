import {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import arrowsToRight from "/images/arrowsToRight.svg";
import blogAndPhotography1 from "/images/blogAndPhotography1.avif";
import blogAndPhotography2 from "/images/blogAndPhotography2.avif";
import blogAndPhotography3 from "/images/blogAndPhotography3.avif";
import blueArrowCircleRight from "/images/blueArrowCircleRight.svg";
import calendar from "/images/calendar-blue.svg";
import checkboxAccepted from "/images/checkboxAccepted.svg";
import flagRoundBlue from "/images/flagRoundBlue.svg";
import grayArrowRightCircle from "/images/grayArrowRightCircle.svg";
import people from "/images/people.svg";
import photoRoundBlue from "/images/photoRoundBlue.svg";
import reviews from "/images/reviews.svg";
import spotsLeft from "/images/spotsLeft.svg";
import starYellow from "/images/star-yellow.png";
import clsx from "clsx";
import {Accordion, accordionTypes} from "src/components/Accordion/Accordion";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {ReviewsSection} from "src/components/ReviewsSection/ReviewsSection";
import {TourCardExtended} from "src/components/Tour/TourCardExtended/TourCardExtended";
import {FeedbackBlock} from "src/pages/homePage/HomePage";
import {BuyTravelModal} from "src/pages/tourDetailsPage/BuyTravelModal";
import {getTourBySlag as getTourBySlug} from "src/services/toursService";
import type {TourView} from "src/types/tour";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/pages/tourDetailsPage/TourDetailsPage.module.scss";

interface ScheduleAccordionItemProps {
  description: string;
  image?: string;
  className?: string;
}

const ScheduleAccordionItem = (props: ScheduleAccordionItemProps) => {
  return (
    <div className={props.className}>
      {props.image && (
        <img
          src={props.image}
          alt="dayImage"
        />
      )}
      <br />
      <p>
        {props.description}
      </p>
    </div>
  );
};

interface AccordionItemData {
  trigger: { child: React.ReactNode };
  content: { child: React.ReactNode };
}

const faqAccordionItems: AccordionItemData[] = [
  {
    trigger: {child: "Day 1. Arrival and meet-up with the group"},
    content: {
      child: (
        <ScheduleAccordionItem
          className={styles.scheduleAccordionItem}
          // eslint-disable-next-line max-len
          description="Upon arrival, our coordinator will greet you at the meeting point. Check-in at the hotel, time to rest, and a welcome briefing in the evening. We'll go over the tour program, shooting locations, weather conditions, and plans for the next morning."
        />
      ),
    },
  },
  {
    trigger: {child: "Day 2. Sunrise shoot and exploring the surroundings"},
    content: {
      child: (
        <ScheduleAccordionItem
          className={styles.scheduleAccordionItem}
          // eslint-disable-next-line max-len
          description="Upon arrival, our coordinator will greet you at the meeting point. Check-in at the hotel, time to rest, and a welcome briefing in the evening. We'll go over the tour program, shooting locations, weather conditions, and plans for the next morning."
        />
      ),
    },
  },
  {
    trigger: {child: "Day 3. Iconic landmarks and guided photography session"},
    content: {
      child: (
        <ScheduleAccordionItem
          className={styles.scheduleAccordionItem}
          // eslint-disable-next-line max-len
          description="Upon arrival, our coordinator will greet you at the meeting point. Check-in at the hotel, time to rest, and a welcome briefing in the evening. We'll go over the tour program, shooting locations, weather conditions, and plans for the next morning."
        />
      ),
    },
  },
];

function getScheduleAccordionItems(tour: TourView): AccordionItemData[] {
  if (!tour.dailyItinerary || tour.dailyItinerary.length === 0) {
    return [];
  }

  return tour.dailyItinerary.map((day) => ({
    trigger: {child: `Day ${day.day}. ${day.plan || ""}`},
    content: {
      child: (
        <ScheduleAccordionItem
          className={styles.scheduleAccordionItem}
          image={day.imgUrl}
          description={day.description}
        />
      ),
    },
  }));
}

const slidesForExtraTours = [
  {
    id: "1",
    image: blogAndPhotography1,
    link: "#",
    title: "Chianti Hills & Vineyards",
    subtitle:
      "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "2",
    image: blogAndPhotography2,
    link: "#",
    title: "Your Guide to Iconic Tuscany Shots",

    subtitle:
      "Explore essential techniques and hidden locations for creating cinematic images in Tuscany. Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "3",
    image: blogAndPhotography3,
    link: "#",
    title: "Inspiration for Your Next Photo Adventure",
    subtitle:
      "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
  {
    id: "4",
    image: blogAndPhotography1,
    link: "#",
    title: "Chianti Hills & Vineyards",
    subtitle:
      "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "5",
    image: blogAndPhotography2,
    link: "#",
    title: "Your Guide to Iconic Tuscany Shots",

    subtitle:
      "Explore essential techniques and hidden locations for creating cinematic images in Tuscany. Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "6",
    image: blogAndPhotography3,
    link: "#",
    title: "Inspiration for Your Next Photo Adventure",
    subtitle:
      "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
];

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 920;
const DESKTOP_BREAKPOINT = 1224;

const MOBILE_SLIDES_PER_VIEW = 1;
const TABLET_SLIDES_PER_VIEW = 2;
const DESKTOP_SLIDES_PER_VIEW = 3;
const LARGE_DESKTOP_SLIDES_PER_VIEW = 4;

const MOBILE_BREAKPOINT_GALLERY_SLIDER = 640;
const TABLET_BREAKPOINT_GALLERY_SLIDER = 920;
const DESKTOP_BREAKPOINT_GALLERY_SLIDER = 1224;

const MOBILE_SLIDES_PER_VIEW_GALLERY_SLIDER = 3;
const TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER = 4;
const DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 6;
const LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 8;

const buyTravelContent = (
  <>
    <div className={styles.buyTravelBlockTitle}>
      Travel details
    </div>

    <p className={styles.buyTravelLabel}>
      Your Name
    </p>
    <input
      type="text"
      className={styles.butTravelInput}
    />
    <p className={styles.buyTravelLabel}>
      Your Email
    </p>
    <input
      type="text"
      className={styles.butTravelInput}
    />
    <p className={styles.buyTravelLabel}>
      Your Phone
    </p>
    <input
      type="text"
      className={styles.butTravelInput}
    />
    <p className={styles.buyTravelLabel}>
      Travel dates
    </p>
    <Dropdown
      trigger={
        <div className={styles.locationInputBlock}>
          <img
            className={styles.locationInputImg}
            src={calendar}
            alt="calendar icon"
          />
          <input
            type="text"
            id="filters-location"
            placeholder="Nov 25"
            className={styles.locationInput}
          />
        </div>
      }
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
    <p className={styles.buyTravelLabel}>
      Travelers
    </p>
    <Dropdown
      trigger={
        <div className={styles.locationInputBlock}>
          <img
            className={styles.locationInputImg}
            src={people}
            alt="Photo Tour Logo"
          />
          <input
            type="text"
            id="filters-location"
            placeholder="1 travaler"
            className={styles.locationInput}
          />
        </div>
      }
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

    <div className={styles.personalizeHr}>
      <img
        className={styles.personalizeHrArrowsToRight}
        src={arrowsToRight}
        alt="Photo Tour Logo"
      />
      <span>
        Personalize your experience
      </span>
      <img
        className={styles.personalizeHrArrowsToLeft}
        src={arrowsToRight}
        alt="Photo Tour Logo"
      />
    </div>

    <div className={styles.personalizationBlock}>
      <span>
        Number of rooms
      </span>
      <span>
        From
        {" "}
        <span className={styles.blueText}>
          100$
        </span>
      </span>
    </div>

    <div className={styles.buyTravelFooter}>
      <div className={styles.buyTravelFooterLeft}>
        <span className={styles.buyTravelFooterLeftTop}>
          Total
          {" "}
          <b className={styles.boldPrice}>
            2000
          </b>
          {" "}
          USD
        </span>
        <span className={styles.buyTravelFooterLeftBottom}>
          Price for 1 traveler
        </span>
      </div>
      <Button
        as={Link}
        to={"TODO"}
        className={styles.primaryButton}
        size="md"
        variant="primary"
      >
        Book now
      </Button>
    </div>
  </>
);

export function TourDetailsPage() {
  const {slug} = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [tour, setTour] = useState<TourView | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBuyTravelModalOpen, setIsBuyTravelModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  useEffect(() => {
    if (!slug) {
      setError("Missing tour id");
      setLoading(false);

      return;
    }
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const t = await getTourBySlug(slug);
        if (!alive) {
          return;
        }
        setTour(t);
        if (t.photos && t.photos.length > 0) {
          setSelectedPhotoIndex(0);
        }
        document.title = t.title || "Tour";
      } catch {
        if (!alive) {
          return;
        }
        setError("Tour not found");
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [slug]);

  const photos = tour?.photos || [];
  const cover = photos[selectedPhotoIndex] || tour?.coverUrl || photos[0];

  const swiperExtraToursRef = useRef<SwiperType | null>(null);
  const swiperGalleryRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperGalleryRef.current && tour?.photos) {
      swiperGalleryRef.current.slideTo(selectedPhotoIndex);
    }
  }, [selectedPhotoIndex, tour?.photos]);

  if (loading) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            Loading…
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            {error}
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => navigate("/tours")}
            >
              Back to all tours
            </button>
          </div>
        </Container>
      </section>
    );
  }

  if (!tour) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            No data
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div>
      <section className={styles.wrap}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            {tour.title}
          </h1>

          <div className={styles.gallery}>
            <img
              className={styles.galleryImage}
              src={cover}
              alt={tour.title}
            />

            <button
              type="button"
              aria-label="Previous"
              className={clsx(styles.galleryArrow, styles.galleryArrowLeft)}
              onClick={() => {
                if (photos.length === 0) {
                  return;
                }
                setSelectedPhotoIndex((prev) =>
                  prev === 0 ? photos.length - 1 : prev - 1,
                );
              }}
            >
              <img
                src={grayArrowRightCircle}
                alt="left slider button"
                loading="lazy"
              />
            </button>
            <button
              type="button"
              aria-label="Next"
              className={clsx(styles.galleryArrow, styles.galleryArrowRight)}
              onClick={() => {
                if (photos.length === 0) {
                  return;
                }
                setSelectedPhotoIndex((prev) =>
                  prev === photos.length - 1 ? 0 : prev + 1,
                );
              }}
            >
              <img
                src={grayArrowRightCircle}
                alt="right slider button"
                loading="lazy"
              />
            </button>
            <div className={styles.gallerySlider}>
              <Swiper
                modules={[Keyboard, A11y]}
                onSwiper={(s) => (swiperGalleryRef.current = s)}
                loop={
                  (tour?.photos?.length || 0) >
                  LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER
                }
                loopAdditionalSlides={6}
                slidesPerView={MOBILE_SLIDES_PER_VIEW_GALLERY_SLIDER}
                spaceBetween={24}
                speed={500}
                allowTouchMove
                keyboard={{enabled: true}}
                className={styles.swiper}
                breakpoints={{
                  [MOBILE_BREAKPOINT_GALLERY_SLIDER]: {
                    slidesPerView: TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER,
                    loop:
                      (tour?.photos?.length || 0) >
                      TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER,
                  },
                  [TABLET_BREAKPOINT_GALLERY_SLIDER]: {
                    slidesPerView: DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER,
                    loop:
                      (tour?.photos?.length || 0) >
                      DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER,
                  },
                  [DESKTOP_BREAKPOINT_GALLERY_SLIDER]: {
                    slidesPerView: LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER,
                    loop:
                      (tour?.photos?.length || 0) >
                      LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER,
                  },
                }}
              >
                {tour.photos?.map((photo, i) => (
                  <SwiperSlide
                    key={i}
                    className={styles.gallerySlide}
                  >
                    <button
                      className={clsx(styles.gallerySlideButton, {[styles.active]: i === selectedPhotoIndex})}
                      onClick={() => setSelectedPhotoIndex(i)}
                    >
                      <img
                        src={photo}
                        alt={`gallery image ${i + 1}`}
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className={styles.reviewsBlock}>
            <div className={styles.reviewsBlockLeft}>
              <div className={styles.reviewsTag}>
                <img
                  src={spotsLeft}
                  alt="stars"
                  className={styles.tagIcon}
                  loading="lazy"
                />
                <span>
                  2 spots left
                </span>
              </div>

              <div className={styles.reviewsTag}>
                <img
                  src={reviews}
                  alt="stars"
                  className={styles.tagIcon}
                  loading="lazy"
                />
                <span>
                  3 reviews
                </span>
              </div>
            </div>

            <div className={styles.starsList}>
              <img
                src={starYellow}
                alt="stars"
                loading="lazy"
                className={styles.starYellowImg}
              />
              <img
                src={starYellow}
                alt="stars"
                loading="lazy"
                className={styles.starYellowImg}
              />
              <img
                src={starYellow}
                alt="stars"
                loading="lazy"
                className={styles.starYellowImg}
              />
              <img
                src={starYellow}
                alt="stars"
                loading="lazy"
                className={styles.starYellowImg}
              />
              <img
                src={starYellow}
                alt="stars"
                loading="lazy"
                className={styles.starYellowImg}
              />
            </div>
          </div>

          <hr />
          <div className={styles.tourDescriptionBlock}>
            <div className={styles.tourDescription}>
              <h2 className={styles.tourDescriptionTitle}>
                Description
              </h2>
              <p className={styles.tourDescriptionDescription}>
                {tour.description}
              </p>
            </div>
            <div className={styles.tourSummary}>
              <h2 className={styles.tourSummaryTitle}>
                Summary
              </h2>
              <div className={styles.summaryTagsHorizontalPair}>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Name:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      Name of tour
                    </span>
                  </div>
                </div>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Duration:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      3 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.summaryTagsHorizontalPair}>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Difficulty:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      Easy
                    </span>
                  </div>
                </div>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Languages:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      English
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.summaryTagsHorizontalPair}>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Available:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      Oct.-Apr.
                    </span>
                  </div>
                </div>
                <div className={styles.summaryTag}>
                  <img
                    src={flagRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Minimum age::
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      8 years old
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className={styles.includedActivities}>
            <div className={styles.included}>
              <h2 className={styles.includedActivitiesTitle}>
                Included
              </h2>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={checkboxAccepted}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Crampons (if conditions call for such equipment)
                </span>
              </div>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={checkboxAccepted}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Helmet
                </span>
              </div>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={checkboxAccepted}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Local, English speaking guide
                </span>
              </div>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={checkboxAccepted}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Transportation
                </span>
              </div>
            </div>

            <div className={styles.activities}>
              <h2 className={styles.includedActivitiesTitle}>
                Included
              </h2>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={photoRoundBlue}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Caving
                </span>
              </div>
              <div className={styles.oneIncludedActivity}>
                <img
                  src={photoRoundBlue}
                  alt="flag icon"
                  loading="lazy"
                  className={styles.includedImg}
                />
                <span className={styles.includedDescription}>
                  Sight Seeing
                </span>
              </div>
            </div>
          </div>

          <hr />

          <div className={styles.schedule}>
            <h2 className={styles.scheduleTitle}>
              Schedule
            </h2>

            <Accordion
              items={getScheduleAccordionItems(tour)}
              type={accordionTypes.MULTIPLE}
              className={styles.accordion}
            />
          </div>

          {/* <div className={styles.grid}>
            <div className={styles.main}>
              <div className={styles.meta}>
                {tour.durationDays && (
                  <div className={styles.metaItem}>
                    <b>
                      Duration:
                    </b>
                    {" "}
                    {tour.durationDays}
                    {" "}
                    days
                  </div>
                )}
                {tour.difficulty && (
                  <div className={styles.metaItem}>
                    <b>
                      Difficulty:
                    </b>
                    {" "}
                    {tour.difficulty}
                  </div>
                )}
                {tour.startLocation && (
                  <div className={styles.metaItem}>
                    <b>
                      Start:
                    </b>
                    {" "}
                    {tour.startLocation}
                  </div>
                )}
                {tour.endLocation && (
                  <div className={styles.metaItem}>
                    <b>
                      End:
                    </b>
                    {" "}
                    {tour.endLocation}
                  </div>
                )}
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Description
                </h3>
              </div>

              {!!tour.activities?.length && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    Activities
                  </h3>
                  <ul className={styles.bullets}>
                    {tour.activities.map((a, i) => (
                      <li key={`act-${i + ONE}`}>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!!tour.included?.length && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    Included
                  </h3>
                  <ul className={styles.bullets}>
                    {tour.included.map((a, i) => (
                      <li key={`inc-${i + ONE}`}>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tour.photos && tour.photos.length > 0 && (
                <div className={styles.gallery}>
                  {tour.photos.map((photo: string | { url?: string }, i) => {
                    const index = i + ONE;

                    let src = "";
                    if (typeof photo === "string") {
                      src = photo;
                    } else if (photo && typeof photo === "object") {

                      src = photo.url ?? "";
                    }

                    if (!src) {
                      return null;
                    }

                    return (
                      <img
                        key={`${tour.id}-photo-${index}`}
                        className={styles.image}
                        src={src}
                        alt={`${tour.title || "Tour"} ${index}`}
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              )}

            </div>

            <aside className={styles.sidebar}>
              <div className={styles.priceBox}>
                <span className={styles.priceFrom}>
                  From
                </span>
                <span className={styles.priceValue}>
                  {priceText}
                </span>
                <span className={styles.priceCurrency}>
                  USD
                </span>
              </div>

              {!!tour.dates?.length && (
                <div className={styles.selectBox}>
                  <Select
                    className={styles.select}
                    label="Select date"
                    placeholder="Choose a date"
                    options={tour.dates.map(d => ({value: d, label: d}))}
                  />
                </div>
              )}

              <button className={styles.cta}>
                Continue Now
              </button>
            </aside>
          </div> */}
        </div>

        <div className={styles.calcBackStub}>
          <div className={styles.buyTravelBlock}>
            {buyTravelContent}
          </div>
        </div>

        <BuyTravelModal
          isOpen={isBuyTravelModalOpen}
          onClose={() => setIsBuyTravelModalOpen(false)}
          showHeader={false}
        >
          {buyTravelContent}
        </BuyTravelModal>

        <button
          className={styles.floatingBookButton}
          onClick={() => setIsBuyTravelModalOpen(true)}
        >
          Book now
        </button>
      </section>

      <div className={styles.whyLove}>
        <div className={styles.whyLovePlaceholder} />
        <h2 className={styles.whyLoveTitle}>
          Why travelers love this
        </h2>

        <ReviewsSection />
      </div>

      <div className={styles.faq}>
        <h2 className={styles.faqTitle}>
          FAQ
        </h2>

        <Accordion
          items={faqAccordionItems}
          type={accordionTypes.MULTIPLE}
          className={styles.accordion}
        />
      </div>

      <div className={styles.toursSlider}>
        <div className={styles.toursSliderPlaceholder} />

        <button
          type="button"
          aria-label="Previous"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => swiperExtraToursRef.current?.slidePrev()}
        >
          <span>
            <img
              src={blueArrowCircleRight}
              alt="right slider button"
              loading="lazy"
            />
          </span>
        </button>
        <button
          type="button"
          aria-label="Next"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => swiperExtraToursRef.current?.slideNext()}
        >
          <span>
            <img
              src={blueArrowCircleRight}
              alt="right slider button"
              loading="lazy"
            />
          </span>
        </button>
        <Swiper
          modules={[Keyboard, A11y]}
          onSwiper={(s) => (swiperExtraToursRef.current = s)}
          loop={slidesForExtraTours.length > LARGE_DESKTOP_SLIDES_PER_VIEW}
          loopAdditionalSlides={6}
          slidesPerView={MOBILE_SLIDES_PER_VIEW}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          keyboard={{enabled: true}}
          className={styles.swiper}
          breakpoints={{
            [MOBILE_BREAKPOINT]: {
              slidesPerView: TABLET_SLIDES_PER_VIEW,
              loop: slidesForExtraTours.length > TABLET_SLIDES_PER_VIEW,
            },
            [TABLET_BREAKPOINT]: {
              slidesPerView: DESKTOP_SLIDES_PER_VIEW,
              loop: slidesForExtraTours.length > DESKTOP_SLIDES_PER_VIEW,
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: LARGE_DESKTOP_SLIDES_PER_VIEW,
              loop: slidesForExtraTours.length > LARGE_DESKTOP_SLIDES_PER_VIEW,
            },
          }}
        >
          {slidesForExtraTours.concat(slidesForExtraTours).map((s, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
            >
              <TourCardExtended
                key={s.id}
                tour={tour}
                className={styles.tourCard}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FeedbackBlock />
    </div>
  );
}
