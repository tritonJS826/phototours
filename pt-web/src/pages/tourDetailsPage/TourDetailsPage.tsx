import {useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet-async";
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
import {
  type BookingRequest,
  createBooking,
} from "src/services/bookingService";
import {getTourBySlag as getTourBySlug} from "src/services/toursService";
import type {TourView} from "src/types/tour";
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
      {props.image && <img
        src={props.image}
        alt="dayImage"
                      />}
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

const MOBILE_BREAKPOINT_GALLERY_SLIDER = 1020;
const TABLET_BREAKPOINT_GALLERY_SLIDER = 1250;
const DESKTOP_BREAKPOINT_GALLERY_SLIDER = 1500;

const MOBILE_SLIDES_PER_VIEW_GALLERY_SLIDER = 4;
const TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER = 4;
const DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 6;
const LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 8;

export function TourDetailsPage() {
  const {slug} = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [tour, setTour] = useState<TourView | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBuyTravelModalOpen, setIsBuyTravelModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '1 traveler'
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

      const request: BookingRequest = {
        tourId: tour.id,
        name: name,
        email: formData.email,
        phone: phone,
        travelDate: formData.date,
        travelers: parseInt(formData.travelers.split(" ")[0] ?? "1") || 1,
      };
      await createBooking(request);
    } catch (error) {
      console.error("Booking failed:", error);
      alert(error instanceof Error ? error.message : "Booking failed, please fill the form");
    } finally {
      setBookingLoading(false);
    }
  };

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
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        autoComplete="off"
      />
      <p className={styles.buyTravelLabel}>
        Your Email
      </p>
      <input
        type="text"
        className={styles.buyTravelInput}
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        autoComplete="off"
      />
      <p className={styles.buyTravelLabel}>
        Your Phone
      </p>
      <input
        type="text"
        className={styles.buyTravelInput}
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
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
                isPreventDefaultUsed: true,
                value: <div className={styles.dropdownItem}>
                  {date}
                </div>,
                isVisible: true,
onClick: () => {
                setFormData(prev => ({ ...prev, date }));
              },
              },
            ],
          })) ?? []
        }
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
              value={formData.travelers}
              placeholder="1 traveler"
              className={clsx(styles.locationInput, styles.readOnlyInput)}
              autoComplete="off"
              readOnly
            />
          </div>
        }
        dropdownMenuItems={[1, 2, 3, 4, 5].map((n) => ({
          dropdownSubMenuItems: [
            {
              id: `traveler-${n}`,
              isPreventDefaultUsed: true,
              value: (
                <div className={styles.dropdownItem}>
                  {n}
                  {" "}
                  traveler
                  {n > 1 ? "s" : ""}
                </div>
              ),
              isVisible: true,
              onClick: () => {
                setFormData(prev => ({ ...prev, travelers: `${n} traveler${n > 1 ? "s" : ""}` }));
              },
            },
          ],
        }))}
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
  const cover = photos[selectedPhotoIndex] || tour?.coverUrl || photos[0];

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
            <Swiper
              modules={[Keyboard, A11y]}
              onSwiper={(s) => {
                swiperMainRef.current = s;
                s.slideTo(selectedPhotoIndex, 0);
              }}
              loop={photos.length > 1}
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
                    alt={`${tour.title} - image ${i + 1}`}
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
            <div className={styles.galleryMobileControls}>
              <button
                className={styles.galleryFullscreenButton}
                onClick={() => setIsFullscreenOpen(true)}
              >
                photo
              </button>
              <span className={styles.galleryImageCounter}>
                {selectedPhotoIndex + 1}/{photos.length}
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
                        alt={`gallery image ${i + 1}`}
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
                {selectedPhotoIndex + 1}/{photos.length}
              </div>
              <Swiper
                modules={[Keyboard, A11y]}
                onSwiper={(s) => {
                  swiperFullscreenRef.current = s;
                  s.slideTo(selectedPhotoIndex, 0);
                }}
                loop={photos.length > 1}
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
                    key={i}
                    className={styles.swiperSlide}
                  >
                    <img
                      className={styles.fullscreenImage}
                      src={photo}
                      alt={`gallery image ${i + 1}`}
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
                      {/* TODO */}
                      {/* {tour.groupSize} */}
                      9
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
                      Tour starts:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      {tour.startLocation}
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
      <FeedbackBlock
        title="Reserve Your Spot for the Tuscany Photo Tour"
        // eslint-disable-next-line max-len
        subtitle="Portfolio-ready shots • Expert light & composition coaching • Cinematic routes • Hidden gems & off-path spots • Total immersion • Small group exclusivity"
        buttonText="Book Now"
      />
    </div>
  );
}
