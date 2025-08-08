import {useState} from "react";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import styles from "src/components/Slider/Slider.module.scss";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

// Константы для логики слайдера
const FIRST_SLIDE_INDEX = 0;
const SLIDE_STEP = 1;

const slides: Slide[] = [
  {
    image: "https://via.placeholder.com/1200x600?text=Tour+1",
    title: "Туры по всему миру",
    subtitle: "Откройте для себя новые направления с нами!",
    buttonText: "Посмотреть все туры",
  },
  {
    image: "https://via.placeholder.com/1200x600?text=Tour+2",
    title: "Новые направления",
    subtitle: "Исследуйте неизведанные уголки планеты!",
    buttonText: "Узнать больше",
  },
];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(FIRST_SLIDE_INDEX);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - SLIDE_STEP ? FIRST_SLIDE_INDEX : prev + SLIDE_STEP));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === FIRST_SLIDE_INDEX ? slides.length - SLIDE_STEP : prev - SLIDE_STEP));
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
        <Button
          href="/tours"
          variant="primary"
        >
          {slides[currentSlide].buttonText}
        </Button>
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
