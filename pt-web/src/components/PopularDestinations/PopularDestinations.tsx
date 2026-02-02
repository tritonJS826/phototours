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
    "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif",
    title: "Chianti Hills & Vineyards",
    href: PATHS.getTour("tuscany-spring-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429914/morocco___A8B2183_90x63-topaz-denoiseraw-sharpen-color_copy_d6h1s7.avif",
    title: "Val d’Orcia Sunrise Spots",
    href: PATHS.getTour("morocco-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430346/venice__FUJI4667_Dehancer_ovjl23.avif",
    title: "Tuscan Medieval Towns",
    href: PATHS.getTour("venice-carnival-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429985/new-zealand___IGP8438-Pano-Dehancer_copy_3_ymdyii.avif",
    title: "Rolling Hills Panorama",
    href: PATHS.getTour("new-zealand-photo-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429835/japan-spring__P1040001-Edit_imq7un.avif",
    title: "Cypress Roads & Scenic Drives",
    href: PATHS.getTour("japan-cherry-blossom-tour"),
  },
  {
    image:
     "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429871/cyclades__IMG_8808-Pano_copy_jkdqjj.avif",
    title: "Sunset Tuscany Views",
    href: PATHS.getTour("cyclades-sailing-tour"),
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
