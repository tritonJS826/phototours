import {Link} from "react-router-dom";
import clsx from "clsx";
import destination1 from "public/images/popularDestination1.avif";
import destination2 from "public/images/popularDestination2.avif";
import destination3 from "public/images/popularDestination3.avif";
import destination4 from "public/images/popularDestination4.avif";
import destination5 from "public/images/popularDestination5.avif";
import destination6 from "public/images/popularDestination6.avif";
import styles from "src/components/PopularDestinations/PoplarDestinations.module.scss";

type PopularWorkshopsProps = {
  className?: string;
};

const slides = [
  {image: destination1, title: "Chianti Hills & Vineyards", href: "/"},
  {image: destination2, title: "Val d’Orcia Sunrise Spots", href: "/"},
  {image: destination3, title: "Tuscan Medieval Towns", href: "/"},
  {image: destination4, title: "Rolling Hills Panorama", href: "/"},
  {image: destination5, title: "Cypress Roads & Scenic Drives", href: "/"},
  {image: destination6, title: "Sunset Tuscany Views", href: "/"},
];

function renderPopularDestination(params: {image: string; title: string; href: string}) {
  return (
    <Link
      to={params.href}
      className={styles.popularDestinationCard}
      key={params.image}
    >
      <div className={styles.imageWrapper}>
        <img
          src={params.image}
          alt="card link"
        />
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
