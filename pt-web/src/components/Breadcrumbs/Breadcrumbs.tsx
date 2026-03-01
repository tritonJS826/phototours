import {Link} from "react-router-dom";
import {ChevronRight} from "lucide-react";
import styles from "src/components/Breadcrumbs/Breadcrumbs.module.scss";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const INDEX_DECREMENT = 1;

export function Breadcrumbs({items}: Props) {
  return (
    <nav
      className={styles.breadcrumbs}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - INDEX_DECREMENT;

        return (
          <span
            key={index}
            className={styles.item}
          >
            {item.href && !isLast
              ? (
                <Link
                  to={item.href}
                  className={styles.link}
                >
                  {item.label}
                </Link>
              )
              : (
                <span className={styles.current}>
                  {item.label}
                </span>
              )}
            {!isLast && <ChevronRight
              size={16}
              className={styles.separator}
            />}
          </span>
        );
      })}
    </nav>
  );
}
