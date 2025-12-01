import "swiper/css/navigation";
import clsx from "clsx";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

type Slide = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  link: string;
}

interface CarouselProps {
  slides: Slide[];
  className?: string;
}

export function Carousel(props: CarouselProps) {
  return (
    <div className={clsx("carousel-container", props.className)}>
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
        {props.slides.map((slide) => (
          <SwiperSlide key={slide.id}>
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
