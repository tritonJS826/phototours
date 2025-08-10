import "swiper/css/navigation";
import {ArticleCard} from "src/features/articles/ArticleCard";
import {type Article, articles} from "src/features/articles/articles.data";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styles from "src/features/articles/Articles.module.scss";

export function ArticlesCarousel() {
  return (
    <div className={styles.carousel}>
      <button
        className="art-prev"
        aria-label="Prev"
      >
        ‹
      </button>
      <button
        className="art-next"
        aria-label="Next"
      >
        ›
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={24}
        navigation={{prevEl: ".art-prev", nextEl: ".art-next"}}
        grabCursor
      >
        {articles.map((a: Article) => (
          <SwiperSlide
            key={a.id}
            className={styles.slide}
          >
            <ArticleCard a={a} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
