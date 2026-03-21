import {useEffect, useRef, useState} from "react";
// Import {Helmet} from "react-helmet-async";
import {Link, useParams, useSearchParams} from "react-router-dom";
import arrowsToRight from "/images/arrowsToRight.svg";
import calendar from "/images/calendar-blue.svg";
import calendarRoundBlue from "/images/calendarRoundBlue.svg";
import checkboxAccepted from "/images/checkboxAccepted.svg";
import flagRoundBlue from "/images/flagRoundBlue.svg";
import grayArrowRightCircle from "/images/grayArrowRightCircle.svg";
import notificationError from "/images/notificationError.svg";
import people from "/images/people.svg";
import reviews from "/images/reviews.svg";
import spotsLeft from "/images/spotsLeft.svg";
import starYellow from "/images/star-yellow.png";
import telegramBlue from "/images/telegram-blue.svg";
import timerRoundBlue from "/images/timerRoundBlue.svg";
import whatsappGreen from "/images/whatsapp-green.svg";
import clsx from "clsx";
import {Accordion, accordionTypes} from "src/components/Accordion/Accordion";
import {Button} from "src/components/Button/Button";
import {CentralNotification} from "src/components/CentralNotification/CentralNotification";
import {Container} from "src/components/Container/Container";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {InputPhone} from "src/components/InputPhone/InputPhone";
import {Loader} from "src/components/Loader/Loader";
import {NumberInput} from "src/components/NumberInput/NumberInput";
import {ReviewsSection} from "src/components/ReviewsSection/ReviewsSection";
import {TimeoutPopup} from "src/components/TimeoutPopup/TimeoutPopup";
import {TourCardExtended} from "src/components/Tour/TourCardExtended/TourCardExtended";
import {FeedbackBlock} from "src/pages/homePage/HomePage";
import {NotFoundPage} from "src/pages/notFound/notFoundPage";
import {BuyTravelModal} from "src/pages/tourDetailsPage/BuyTravelModal";
import {PATHS} from "src/routes/routes";
import {
  type BookingRequest,
  createBooking,
} from "src/services/bookingService";
import {
  getSimilarToursByTourId,
  getTourBySlug,
} from "src/services/toursService";
import type {TourView} from "src/types/tour";
import {getActivityIcon} from "src/utils/activityIcons";
import {formatMonthsToDateRange} from "src/utils/dateUtils";
import {renderMultilineDouble} from "src/utils/textUtils";
import {getUserInfo} from "src/utils/userInfo";
import type {Swiper as SwiperType} from "swiper";
import {A11y, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/pages/tourDetailsPage/TourDetailsPage.module.scss";

const ANCHOR_SCHEDULE = "schedule";
const ANCHOR_REVIEWS = "reviews";

const ONE_TRAVELER = 1;
const ONE_ROOM = 1;
const ONE_ROOM_PRICE = 100;

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

// Const MOBILE_BREAKPOINT = 640;
// const TABLET_BREAKPOINT = 920;
// const DESKTOP_BREAKPOINT = 1224;

// const MOBILE_SLIDES_PER_VIEW = 1.2;
// const TABLET_SLIDES_PER_VIEW = 2.2;
// const DESKTOP_SLIDES_PER_VIEW = 3.2;
// const LARGE_DESKTOP_SLIDES_PER_VIEW = 4.2;

const MOBILE_BREAKPOINT_GALLERY_SLIDER = 700;
const TABLET_BREAKPOINT_GALLERY_SLIDER = 1250;
const DESKTOP_BREAKPOINT_GALLERY_SLIDER = 1500;

const MOBILE_SLIDES_PER_VIEW_GALLERY_SLIDER = 3;
const TABLET_SLIDES_PER_VIEW_GALLERY_SLIDER = 4;
const DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 5;
const LARGE_DESKTOP_SLIDES_PER_VIEW_GALLERY_SLIDER = 6;

const SIMILAR_TOURS_MOBILE_SMALL_BREAKPOINT = 330;
const SIMILAR_TOURS_MOBILE_MID_BREAKPOINT = 520;
const SIMILAR_TOURS_MOBILE_BREAKPOINT = 730;
const SIMILAR_TOURS_TABLET_SMALL = 900;
const SIMILAR_TOURS_TABLET = 910;
const SIMILAR_TOURS_TABLET_LG = 1000;
const SIMILAR_TOURS_DESKTOP_SMALL = 1130;
const SIMILAR_TOURS_DESKTOP = 1350;

const SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE = 1.01;
const SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_MID = 1.2;
const SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_LG = 1.7;
const SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_SMALL = 2.2;
const SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET = 2.3;
const SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_LG = 2.8;
const SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP_SMALL = 3.2;
const SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP = 4;

const WIDTH_FOR_ACTIVE_BUY_FORM_OPEN = 1210;

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
  const [similarTours, setSimilarTours] = useState<TourView[]>([]);
  const [searchParams] = useSearchParams();
  const [isErrorNotificationOpen, setIsErrorNotificationOpen] = useState(false);
  const [formValidError, setFormValidError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToMarketing, setAgreedToMarketing] = useState(false);

  const [isFirstPopUpVisible, setIsFirstPopUpVisible] = useState(false);

  const singleRoomSupplementPrice = tour?.singleRoomSupplement ?? ONE_ROOM_PRICE;
  const totalPrice = tour
    ? (tour.price * formData.travelers) +
      (singleRoomSupplementPrice * formData.rooms)
    : 0;

  const isActionBuyFormOpenEnabled = () => {
    return window.innerWidth < WIDTH_FOR_ACTIVE_BUY_FORM_OPEN;
  };

  useEffect(() => {
    const isBuyFormOpen = searchParams.get("isBuyFormOpen") === "true";
    if (isBuyFormOpen && isActionBuyFormOpenEnabled()) {
      setIsBuyTravelModalOpen(true);
    }
  }, [searchParams]);

  const handleBookNow = async () => {
    if (!tour) {
      return;
    }
    setBookingLoading(true);
    try {
      const name = formData.name.trim();
      const phone = formData.phone.trim();

      if (!name || !phone) {
        setFormValidError(true);
        if (!name) {
          setNameError(true);
        }
        if (!formData.email.trim()) {
          setEmailError(true);
        }
        const MIN_PHONE_NUMBER_LENGTH = 7;
        if (phone.length < MIN_PHONE_NUMBER_LENGTH) {
          setPhoneError(true);
        }
        setBookingLoading(false);

        return;
      }

      const userInfo = await getUserInfo();

      const request: BookingRequest = {
        tourId: tour.id,
        name: name,
        email: formData.email,
        phone: phone,
        travelDate: formData.date,
        travelers: formData.travelers,
        rooms: formData.rooms,
        language: userInfo.language,
        timezone: userInfo.timezone,
        city: userInfo.location?.city,
        country: userInfo.location?.country_name,
        lastContactPage: window.location.href,
        subscriptionType: agreedToMarketing ? "Marketing" : "None",
      };
      await createBooking(request);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Booking failed:", err);
      setIsErrorNotificationOpen(true);
    } finally {
      setBookingLoading(false);
    }
  };

  const buyTravelContent = (
    <div className={styles.buyTravelBlockContent}>
      <div className={styles.buyTravelBlockTitle}>
        Travel details
      </div>

      <p className={styles.buyTravelLabel}>
        Your Name
      </p>
      <input
        type="text"
        className={clsx(styles.buyTravelInput, nameError && styles.inputError)}
        value={formData.name}
        onChange={(e) => {
          setFormData((prev) => ({...prev, name: e.target.value}));
          setNameError(false);
        }}
        autoComplete="on"
      />
      <p className={styles.buyTravelLabel}>
        Your Email
      </p>
      <input
        type="text"
        className={clsx(styles.buyTravelInput, emailError && styles.inputError)}
        value={formData.email}
        onChange={(e) => {
          setFormData((prev) => ({...prev, email: e.target.value}));
          setEmailError(false);
        }}
        autoComplete="on"
      />
      <p className={styles.buyTravelLabel}>
        Your Phone
      </p>
      <InputPhone
        defaultCountry="us"
        value={formData.phone}
        className={clsx(styles.phoneInput, phoneError && styles.inputError)}
        onChange={(phone) => {
          setFormData((prev) => ({...prev, phone}));
          setPhoneError(false);
        }}
      />
      <p className={styles.buyTravelLabel}>
        Travel dates
      </p>
      <Dropdown
        contentClassName={styles.buyTravelDropdownContent}
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
                  setFormData((prev) => ({...prev, date}));
                },
              },
            ],
          })) ?? []
        }
      />

      <p className={styles.buyTravelLabel}>
        Travelers
      </p>
      <NumberInput
        className={styles.travelersAmountInput}
        value={formData.travelers}
        onChange={(value) =>
          setFormData((prev) => ({...prev, travelers: value}))
        }
        min={1}
        max={20}
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
          Single room supplement
        </span>
        <span>
          From
          {" "}
          <span className={styles.blueText}>
            {singleRoomSupplementPrice}
            $
          </span>
        </span>
      </div>

      <NumberInput
        className={styles.roomsSupplement}
        value={formData.rooms}
        onChange={(value) => setFormData((prev) => ({...prev, rooms: value}))}
        min={0}
        max={formData.travelers}
        description="Single room supplement"
        icon={people}
      />

      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          />
          <span>
            I agree to the
            {" "}
            <a
              href="/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            {" "}
            and
            {" "}
            <a
              href="/terms-of-service"
              target="_blank"
            >
              Terms of Service
            </a>
          </span>
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={agreedToMarketing}
            onChange={(e) => setAgreedToMarketing(e.target.checked)}
          />
          <span>
            I agree to receive updates about new tours and special offers
          </span>
        </label>
      </div>

      <div className={styles.buyTravelFooter}>
        <div className={styles.buyTravelFooterLeft}>
          <span className={styles.buyTravelFooterLeftTop}>
            Total
            {" "}
            <b className={styles.boldPrice}>
              {totalPrice}
            </b>
            {" "}
            USD
          </span>
          <span className={styles.buyTravelFooterLeftBottom}>
            {formData.travelers}
            {" "}
            traveler
            {formData.travelers > ONE_TRAVELER ? "s" : ""}
            {formData.rooms > 0
              ? ` + ${formData.rooms} room${formData.rooms > ONE_ROOM ? "s" : ""}`
              : ""}
          </span>
        </div>
        <Button
          className={styles.primaryButton}
          size="md"
          variant="primary"
          onClick={handleBookNow}
          disabled={bookingLoading || !agreedToTerms}
        >
          {bookingLoading ? "Processing..." : "Book now"}
        </Button>
      </div>
    </div>
  );

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      travelers: 1,
      rooms: 0,
    });
    setFormValidError(false);
    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setAgreedToTerms(false);
    setAgreedToMarketing(false);
  };

  useEffect(() => {
    if (!slug) {
      setError("Missing tour id");
      setLoading(false);

      return;
    }
    let alive = true;

    resetForm();

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
        document.title = t.title;

        const similar = await getSimilarToursByTourId(String(t.id));
        if (alive) {
          setSimilarTours(similar);
        }
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
    return <Loader />;
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
    <div className={styles.divWrap}>
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
              onSlideChange={(swiper) =>
                setSelectedPhotoIndex(swiper.activeIndex)
              }
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
                onSlideChange={(swiper) =>
                  setSelectedPhotoIndex(swiper.activeIndex)
                }
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

          <hr className={styles.desktopSeparator} />
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
                    src={timerRoundBlue}
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
                    src={calendarRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Available:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      {formatMonthsToDateRange(
                        tour.availableMonths ?? tour.dates ?? [],
                      )}
                    </span>
                  </div>
                </div>
                <div className={styles.summaryTag}>
                  <img
                    src={timerRoundBlue}
                    alt="flag icon"
                    loading="lazy"
                    className={styles.summaryTagImg}
                  />
                  <div className={styles.summaryTagRightPart}>
                    <span className={styles.summaryTagRightPartTitle}>
                      Starting place:
                    </span>
                    <span className={styles.summaryTagRightPartDescription}>
                      {tour.startLocation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={styles.desktopSeparator} />
          <hr className={styles.mobileSeparator} />

          <div className={styles.includedActivities}>
            <div className={styles.included}>
              <h2 className={styles.includedActivitiesTitle}>
                Included
              </h2>
              {tour.included?.map((included, i) => (
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
              ))}
            </div>

            <hr className={styles.mobileSeparator} />

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
                    src={getActivityIcon(activity.iconName)}
                    alt="activity icon"
                    loading="lazy"
                    className={styles.includedImg}
                  />
                  <span className={styles.includedDescription}>
                    {activity.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <hr className={styles.desktopSeparator} />
          <hr className={styles.mobileSeparator} />

          <div
            id={ANCHOR_SCHEDULE}
            className={styles.schedule}
          >
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
          showHeader={true}
        >
          {buyTravelContent}
        </BuyTravelModal>
        <div className={styles.mobileFixedFooter}>
          <div className={styles.buyTravelFooterLeft}>
            <span className={styles.buyTravelFooterLeftTop}>
              Total
              {" "}
              <b className={styles.boldPrice}>
                {totalPrice}
              </b>
              {" "}
              USD
            </span>
            <span className={styles.buyTravelFooterLeftBottom}>
              {formData.travelers}
              {" "}
              traveler
              {formData.travelers > ONE_TRAVELER ? "s" : ""}
              {formData.rooms > 0
                ? ` + ${formData.rooms} room${formData.rooms > ONE_ROOM ? "s" : ""}`
                : ""}
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

      <div
        id={ANCHOR_REVIEWS}
        className={styles.whyLove}
      >
        <div className={styles.whyLoveContent}>
          <h2 className={styles.whyLoveTitle}>
            {tour.reviewsSectionName}
          </h2>

          <ReviewsSection />
        </div>
      </div>

      <div className={styles.faq}>
        <h2 className={styles.faqTitle}>
          {tour.title}
          {" "}
          Photo Tour: Frequently Asked Questions
        </h2>

        <Accordion
          items={tour.faq.map((item) => ({
            trigger: {child: item.question},
            content: {
              child: (
                <ScheduleAccordionItem
                  className={styles.scheduleAccordionItem}
                  description={item.answer}
                />
              ),
            },
          }))}
          type={accordionTypes.MULTIPLE}
          className={styles.accordion}
        />
      </div>

      <h2 className={styles.similarToursTitle}>
        Similar tours
        <Link
          to={PATHS.TOURS}
          className={styles.searchAllToursLink}
        >
          Search all
          {" "}
          <span className={styles.searchAllToursArrow}>
            ➙
          </span>
        </Link>
      </h2>

      <div className={styles.toursSlider}>
        <Swiper
          modules={[Keyboard, A11y]}
          onSwiper={(s) => (swiperExtraToursRef.current = s)}
          loop={similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE}
          slidesPerView={SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE}
          spaceBetween={24}
          speed={500}
          allowTouchMove
          keyboard={{enabled: true}}
          className={clsx(styles.swiper, styles.similarToursSwiper)}
          breakpoints={{
            [SIMILAR_TOURS_MOBILE_SMALL_BREAKPOINT]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_MID,
              loop:
                similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_MID,
            },
            [SIMILAR_TOURS_MOBILE_MID_BREAKPOINT]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_LG,
              loop:
                similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_MOBILE_LG,
            },
            [SIMILAR_TOURS_MOBILE_BREAKPOINT]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_SMALL,
              loop:
                similarTours.length >
                SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_SMALL,
            },
            [SIMILAR_TOURS_TABLET_SMALL]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_SMALL,
              loop:
                similarTours.length >
                SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_SMALL,
            },
            [SIMILAR_TOURS_TABLET]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET,
              loop: similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET,
            },
            [SIMILAR_TOURS_TABLET_LG]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_LG,
              loop:
                similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_TABLET_LG,
            },
            [SIMILAR_TOURS_DESKTOP_SMALL]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP_SMALL,
              loop:
                similarTours.length >
                SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP_SMALL,
            },
            [SIMILAR_TOURS_DESKTOP]: {
              slidesPerView: SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP,
              loop: similarTours.length > SIMILAR_TOURS_SLIDES_PER_VIEW_DESKTOP,
            },
          }}
        >
          {similarTours.map((s) => (
            <SwiperSlide
              key={s.id}
              className={styles.slide}
            >
              <TourCardExtended
                tour={s}
                className={styles.tourCard}
                travelers={1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FeedbackBlock
        title={tour.ctaTitle}
        subtitle={tour.ctaDescription}
        buttonText="Contact Me"
        feedBackDescriptionCustomClass={styles.feedBackDescriptionLong}
      />

      <TimeoutPopup
        title={tour.popUp1Title}
        description={tour.popUp1Description}
        imgUrl={tour.popUp1ImageUrl}
        leftBtnCallback={() => {}}
        leftBtn={
          <a
            href="https://t.me/tuscanyphototours_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            Telegram
            <img
              src={telegramBlue}
              alt=""
            />
          </a>
        }
        rightBtnCallback={() => {}}
        rightBtn={
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            WhatsApp
            <img
              src={whatsappGreen}
              alt=""
            />
          </a>
        }
        delay={20}
        onOpen={() => setIsFirstPopUpVisible(true)}
        onClose={() => setIsFirstPopUpVisible(false)}
      />

      <TimeoutPopup
        title={tour.popUp2Title}
        description={tour.popUp2Description}
        imgUrl={tour.popUp2ImageUrl}
        leftBtnCallback={() => {}}
        leftBtn={
          <a
            href="https://t.me/tuscanyphototours_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            Telegram
            <img
              src={telegramBlue}
              alt=""
            />
          </a>
        }
        rightBtnCallback={() => {}}
        rightBtn={
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pupUpButton}
          >
            WhatsApp
            <img
              src={whatsappGreen}
              alt=""
            />
          </a>
        }
        delay={100}
        isDisabled={isFirstPopUpVisible}
      />

      <CentralNotification
        isOpen={isErrorNotificationOpen}
        onClose={() => setIsErrorNotificationOpen(false)}
        imageUrl={notificationError}
        title="Oops! Something went wrong"
        subtitle="Please try again later. If the problem persists, contact us through other means."
      />

      <CentralNotification
        isOpen={formValidError}
        onClose={() => setFormValidError(false)}
        imageUrl={notificationError}
        title="Please fill in all required fields"
        subtitle="Make sure you have provided your name and phone number."
      />
    </div>
  );
}
