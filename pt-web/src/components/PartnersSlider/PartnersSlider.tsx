import "swiper/css/autoplay";
import clsx from "clsx";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/components/PartnersSlider/PartnersSlider.module.scss";

interface Partner {
  id: string;
  src: string;
  alt: string;
}

interface PartnersSliderProps {
  partners: Partner[];
  className?: string;
}

export function PartnersSlider(props: PartnersSliderProps) {
  return (
    <div className={clsx(styles.partnersSlider, props.className)}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        freeMode
        spaceBetween={55}
        slidesPerView={4}
        speed={3000}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 55,
          },
        }}
      >
        {props.partners.map((partner) => (
          <SwiperSlide
            key={partner.id}
            className={styles.slide}
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className={styles.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
