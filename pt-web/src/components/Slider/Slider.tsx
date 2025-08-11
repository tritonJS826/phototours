import {useState} from "react";
import {Link} from "react-router-dom";
import {Container} from "src/components/Container/Container";
import styles from "src/components/Slider/Slider.module.scss";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const FIRST_SLIDE_INDEX = 0;
const SLIDE_STEP = 1;

const slides: Slide[] = [
  {
    image: "https://via.placeholder.com/1200x600?text=Tour+1",
    title: "Worldwide Tours",
    subtitle: "Discover new destinations with us!",
    buttonText: "View all tours",
  },
  {
    image: "https://via.placeholder.com/1200x600?text=Tour+2",
    title: "New Destinations",
    subtitle: "Explore the hidden corners of the world!",
    buttonText: "Learn more",
  },
];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(FIRST_SLIDE_INDEX);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - SLIDE_STEP ? FIRST_SLIDE_INDEX : prev + SLIDE_STEP,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === FIRST_SLIDE_INDEX ? slides.length - SLIDE_STEP : prev - SLIDE_STEP,
    );
  };

  return (
    <div className={styles.slider}>
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className={styles.slideImage}
      />
      <Container className={styles.content}>
        <h1>
          {slides[currentSlide].title}
        </h1>
        <p>
          {slides[currentSlide].subtitle}
        </p>
        <Link to="/tours">
          {slides[currentSlide].buttonText}
        </Link>
      </Container>
      <button
        className={styles.prevButton}
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className={styles.nextButton}
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
}
