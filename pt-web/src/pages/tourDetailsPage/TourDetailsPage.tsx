import {useEffect, useRef, useState} from "react";
// Import {Helmet} from "react-helmet-async";
import {useParams} from "react-router-dom";
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
import {NumberInput} from "src/components/NumberInput/NumberInput";
import {ReviewsSection} from "src/components/ReviewsSection/ReviewsSection";
import {TourCardExtended} from "src/components/Tour/TourCardExtended/TourCardExtended";
import {FeedbackBlock} from "src/pages/homePage/HomePage";
import {NotFoundPage} from "src/pages/notFound/notFoundPage";
import {BuyTravelModal} from "src/pages/tourDetailsPage/BuyTravelModal";
import {PATHS} from "src/routes/routes";
import {
  type BookingRequest,
  createBooking,
} from "src/services/bookingService";
import {getTourBySlag as getTourBySlug} from "src/services/toursService";
import type {TourView} from "src/types/tour";
import {formatMonthsToDateRange} from "src/utils/dateUtils";
import {renderMultilineDouble} from "src/utils/textUtils";
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
    link: PATHS.getTour("tuscany-spring-photo-tour"),
    title: "Chianti Hills & Vineyards",
    subtitle:
      "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "2",
    image: blogAndPhotography2,
    link: PATHS.getTour("morocco-photo-tour"),
    title: "Your Guide to Iconic Tuscany Shots",

    subtitle:
      // eslint-disable-next-line max-len
      "Explore essential techniques and hidden locations for creating cinematic images in Tuscany. Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "3",
    image: blogAndPhotography3,
    link: PATHS.getTour("venice-carnival-photo-tour"),
    title: "Inspiration for Your Next Photo Adventure",
    subtitle:
      "A curated blend of tips, stories, and expert advice for photographing Tuscany at its best.",
  },
  {
    id: "4",
    image: blogAndPhotography1,
    link: PATHS.getTour("new-zealand-photo-tour"),
    title: "Chianti Hills & Vineyards",
    subtitle:
      "Capture golden vineyards, rustic hilltop villages, and soft evening light across the legendary rolling hills of Chianti.",
  },
  {
    id: "5",
    image: blogAndPhotography2,
    link: PATHS.getTour("japan-cherry-blossom-tour"),
    title: "Your Guide to Iconic Tuscany Shots",

    subtitle:
      // eslint-disable-next-line max-len
      "Explore essential techniques and hidden locations for creating cinematic images in Tuscany. Explore essential techniques and hidden locations for creating cinematic images in Tuscany.",
  },
  {
    id: "6",
    image: blogAndPhotography3,
    link: PATHS.getTour("cyclades-sailing-tour"),
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

const MOBILE_BREAKPOINT_GALLERY_SLIDER = 700;
const TABLET_BREAKPOINT_GALLERY_SLIDER = 1250;
const DESKTOP_BREAKPOINT_GALLERY_SLIDER = 1500;

const MOBILE_SLIDES_PER_VIEW_GALLERY_SLIDER = 3;
const TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER = 4;
const DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 5;
const LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 6;

export function TourDetailsPage() {
  const {slug} = useParams<{ slug: string }>();

  const [tour, setTour] = useState<TourView | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBuyTravelModalOpen, setIsBuyTravelModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: 1,
    rooms: 0,
  });

  const handleBookNow = async () => {
    if (!tour) {
      return;
    }
    setBookingLoading(true);
    try {
      const name = formData.name.trim();
      const phone = formData.phone.trim();

      if (!name || !phone) {
        alert("Please fill in your name and phone number");
        setBookingLoading(false);

        return;
      }

      const DEFAULT_TRAVELERS_AMOUNT = 1;

      const request: BookingRequest = {
        tourId: tour.id,
        name: name,
        email: formData.email,
        phone: phone,
        travelDate: formData.date,
        travelers: formData.travelers,
        rooms: formData.rooms,
      };
      await createBooking(request);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Booking failed:", err);
      alert(err instanceof Error ? err.message : "Booking failed, please fill the form");
    } finally {
      setBookingLoading(false);
    }
  };

  const ONE_TRAVELER_AMOUNT = 1;

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
        className={styles.buyTravelInput}
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        autoComplete="off"
      />
      <p className={styles.buyTravelLabel}>
        Your Email
      </p>
      <input
        type="text"
        className={styles.buyTravelInput}
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        autoComplete="off"
      />
      <p className={styles.buyTravelLabel}>
        Your Phone
      </p>
      <input
        type="text"
        className={styles.buyTravelInput}
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
        autoComplete="off"
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
              value={formData.date}
              placeholder="Select date"
              className={clsx(styles.locationInput, styles.readOnlyInput)}
              autoComplete="off"
              readOnly
            />
          </div>
        }
        dropdownMenuItems={
          tour?.dates?.map((date, i) => ({
            dropdownSubMenuItems: [
              {
                id: `date-${i}`,
                isPreventDefaultUsed: false,
                value: <div className={styles.dropdownItem}>
                  {date}
                </div>,
                isVisible: true,
                onClick: () => {
                  setFormData(prev => ({...prev, date}));
                },
              },
            ],
          })) ?? []
        }
      />
      <NumberInput
        value={formData.travelers}
        onChange={(value) => setFormData(prev => ({...prev, travelers: value}))}
        min={1}
        max={10}
        description="Travelers"
        icon={people}
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

      <NumberInput
        value={formData.rooms}
        onChange={(value) => setFormData(prev => ({...prev, rooms: value}))}
        min={0}
        max={10}
        description="Number of rooms"
        icon={people}
      />

      <div className={styles.buyTravelFooter}>
        <div className={styles.buyTravelFooterLeft}>
          <span className={styles.buyTravelFooterLeftTop}>
            Total
            {" "}
            <b className={styles.boldPrice}>
              {tour?.price ?? "2000"}
            </b>
            {" "}
            USD
          </span>
          <span className={styles.buyTravelFooterLeftBottom}>
            Price for 1 traveler
          </span>
        </div>
        <Button
          className={styles.primaryButton}
          size="md"
          variant="primary"
          onClick={handleBookNow}
          disabled={bookingLoading}
        >
          {bookingLoading ? "Processing..." : "Book now"}
        </Button>
      </div>
    </>
  );

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

        // Preload images for accordion
        // for (const day of t.dailyItinerary ?? []) {
        //   if (!day.imgUrl) {
        //     continue;
        //   }
        //   console.log("loaded", day.imgUrl);
        //   const img = new Image();
        //   img.src = day.imgUrl;
        // }
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

  const swiperExtraToursRef = useRef<SwiperType | null>(null);
  const swiperGalleryRef = useRef<SwiperType | null>(null);
  const swiperFullscreenRef = useRef<SwiperType | null>(null);
  const swiperMainRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperGalleryRef.current && tour?.photos) {
      swiperGalleryRef.current.slideTo(selectedPhotoIndex);
    }
    if (swiperFullscreenRef.current && tour?.photos) {
      swiperFullscreenRef.current.slideTo(selectedPhotoIndex);
    }
    if (swiperMainRef.current && tour?.photos) {
      swiperMainRef.current.slideTo(selectedPhotoIndex);
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
      <section>
        <NotFoundPage />
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

  const SWIPER_LOOP_MIN_SLIDES = 1;
  const INCREMENT_1 = 1;

  return (
    <div>
      <section className={styles.wrap}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            {tour.title}
          </h1>

          <div className={styles.gallery}>
            <Swiper
              modules={[Keyboard, A11y]}
              onSwiper={(s) => {
                swiperMainRef.current = s;
                s.slideTo(selectedPhotoIndex, 0);
              }}
              loop={photos.length > SWIPER_LOOP_MIN_SLIDES}
              slidesPerView={1}
              spaceBetween={0}
              speed={500}
              allowTouchMove
              keyboard={{enabled: true}}
              className={styles.mainGallerySwiper}
              onSlideChange={(swiper) => setSelectedPhotoIndex(swiper.activeIndex)}
            >
              {photos.map((photo, i) => (
                <SwiperSlide key={i}>
                  <img
                    className={styles.galleryImage}
                    src={photo}
                    alt={`${tour.title} - image ${i + INCREMENT_1}`}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous"
              className={clsx(styles.galleryArrow, styles.galleryArrowLeft)}
              onClick={() => {
                if (photos.length === 0) {
                  return;
                }
                setSelectedPhotoIndex((prev) =>
                  prev === 0 ? photos.length - INCREMENT_1 : prev - INCREMENT_1,
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
                  prev === photos.length - INCREMENT_1 ? 0 : prev + INCREMENT_1,
                );
              }}
            >
              <img
                src={grayArrowRightCircle}
                alt="right slider button"
                loading="lazy"
              />
            </button>
            <div className={styles.galleryMobileControls}>
              <button
                className={styles.galleryFullscreenButton}
                onClick={() => setIsFullscreenOpen(true)}
              >
                photo
              </button>
              <span className={styles.galleryImageCounter}>
                {selectedPhotoIndex + INCREMENT_1}
                /
                {photos.length}
              </span>
            </div>
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
                        alt={`gallery image ${i + INCREMENT_1}`}
                        loading="lazy"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {isFullscreenOpen && (
            <div className={styles.fullscreenSwiper}>
              <button
                className={styles.fullscreenClose}
                onClick={() => setIsFullscreenOpen(false)}
              >
                ×
              </button>
              <div className={styles.fullscreenCounter}>
                {selectedPhotoIndex + INCREMENT_1}
                /
                {photos.length}
              </div>
              <Swiper
                modules={[Keyboard, A11y]}
                onSwiper={(s) => {
                  swiperFullscreenRef.current = s;
                  s.slideTo(selectedPhotoIndex, 0);
                }}
                loop={photos.length > INCREMENT_1}
                slidesPerView={1}
                spaceBetween={0}
                speed={500}
                allowTouchMove
                keyboard={{enabled: true}}
                className={styles.swiper}
                onSlideChange={(swiper) => setSelectedPhotoIndex(swiper.activeIndex)}
              >
                {photos.map((photo, i) => (
                  <SwiperSlide
                    key={photo}
                    className={styles.swiperSlide}
                  >
                    <img
                      className={styles.fullscreenImage}
                      src={photo}
                      alt={`gallery image ${i + INCREMENT_1}`}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className={styles.reviewsBlock}>
            <div className={styles.reviewsBlockLeft}>
              <div className={styles.reviewsTag}>
                <img
                  src={spotsLeft}
                  alt="spots left"
                  className={styles.tagIcon}
                  loading="lazy"
                />
                <span>
                  {tour.spotsLeft}
&nbsp;spots&nbsp;left
                </span>
              </div>

              <div className={styles.reviewsTag}>
                <img
                  src={reviews}
                  alt="reviews"
                  className={styles.tagIcon}
                  loading="lazy"
                />
                <span>
                  {tour.reviewAmount}
&nbsp;reviews
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
                {tour.subtitle}
              </h2>
              <p className={styles.tourDescriptionDescription}>
                {renderMultilineDouble(tour.description)}
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
                      Group size:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      {tour.groupSize}
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
                      {tour.durationDays}
                      {" "}
                      days
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
                      {tour.difficulty}
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
                      {tour.languages?.join(", ") ?? "English"}
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
                      {formatMonthsToDateRange(tour.availableMonths ?? tour.dates ?? [])}
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
                      Ending place:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      {tour.endLocation}
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
              {tour.included?.map((included, i) =>
                (
                  <div
                    className={styles.oneIncludedActivity}
                    key={i}
                  >
                    <img
                      src={checkboxAccepted}
                      alt="flag icon"
                      loading="lazy"
                      className={styles.includedImg}
                    />
                    <span className={styles.includedDescription}>
                      {included}
                    </span>
                  </div>
                ),
              )}
            </div>

            <div className={styles.activities}>
              <h2 className={styles.includedActivitiesTitle}>
                Activities
              </h2>
              {tour.activities?.map((activity, i) => (
                <div
                  className={styles.oneIncludedActivity}
                  key={i}
                >
                  <img
                    src={photoRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.includedImg}
                  />
                  <span className={styles.includedDescription}>
                    {activity}
                  </span>
                </div>
              ))}
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
        <div className={styles.mobileFixedFooter}>
          <div className={styles.buyTravelFooterLeft}>
            <span className={styles.buyTravelFooterLeftTop}>
              Total
              {" "}
              <b className={styles.boldPrice}>
                {tour?.price ?? "2000"}
              </b>
              {" "}
              USD
            </span>
            <span className={styles.buyTravelFooterLeftBottom}>
              Price for 1 traveler
            </span>
          </div>
          <Button
            className={styles.bookButton}
            onClick={() => setIsBuyTravelModalOpen(true)}
          >
            Book now
          </Button>
        </div>
      </section>

      <div className={styles.whyLove}>
        <div className={styles.whyLoveContent}>
          <h2 className={styles.whyLoveTitle}>
            Why travelers love this
          </h2>

          <ReviewsSection />
        </div>
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

      <h2 className={styles.similarToursTitle}>
        Similar tours
      </h2>

      <div className={styles.toursSlider}>
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
          {slidesForExtraTours.map((s) => (
            <SwiperSlide
              key={s.id}
              className={styles.slide}
            >
              <TourCardExtended
                tour={tour}
                className={styles.tourCard}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FeedbackBlock
        title="Reserve Your Spot for the Tuscany Photo Tour"
        // eslint-disable-next-line max-len
        subtitle="Portfolio-ready shots • Expert light & composition coaching • Cinematic routes • Hidden gems & off-path spots • Total immersion • Small group exclusivity"
        buttonText="Book Now"
      />
    </div>
  );
}
