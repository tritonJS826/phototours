import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

type Slide = {
  image: string;
  title: string;
  subtitle?: string;
}

interface CarouselProps {
  slides: Slide[];
}

export function Carousel({slides}: CarouselProps) {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1024: {slidesPerView: 4},
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={slide.image}
                alt={slide.title}
              />
              <h3>
                {slide.title}
              </h3>
              {slide.subtitle && <p>
                {slide.subtitle}
              </p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
