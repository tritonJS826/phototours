import {Link} from "react-router-dom";
import clsx from "clsx";
import {PATHS} from "src/routes/routes";
import styles from "src/components/PopularDestinations/PoplarDestinations.module.scss";

type PopularWorkshopsProps = {
  className?: string;
};

const slides = [
  {
    image:
    "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392145/mainPageTop1TuscanyFall_iqyoek.avif",
    title: "Misty Tuscan Harvest",
    href: PATHS.getTour("tuscany-autumn-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392146/mainPageTop2Iceland_wakqlk.avif",
    title: "Iceland Off-Road Adventure",
    href: PATHS.getTour("iceland-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392148/mainPageTop3NewZealand_qvbblq.avif",
    title: "Epic New Zealand",
    href: PATHS.getTour("new-zealand-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392149/mainPageTop4Venice_wskajb.avif",
    title: "Mystical Venice Masquerade",
    href: PATHS.getTour("venice-carnival-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392150/mainPageTop5Czech_mha71k.avif",
    title: "Golden Prague & Moravia",
    href: PATHS.getTour("czechia-autumn-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1771392152/mainPageTop6TuscanySpring_gfaqm9.avif",
    title: "Dreamy\nTuscan Fog",
    href: PATHS.getTour("tuscany-spring-photo-tour"),
  },
];

function renderPopularDestination(params: {image: string; title: string; href: string}) {
  return (
    <Link
      to={params.href}
      className={styles.popularDestinationCard}
      key={params.image}
    >
      <div
        className={styles.imageWrapper}
        style={{backgroundImage: `url(${params.image})`}}
        aria-label={params.title}
      >
        <span className={styles.overlayText}>
          {params.title}
        </span>
      </div>
    </Link>
  );

}

export function PopularDestinations({className = ""}: PopularWorkshopsProps) {
  return (
    <section className={clsx(styles.wrap, className)}>
      {slides.map(renderPopularDestination)}
    </section>
  );
}
