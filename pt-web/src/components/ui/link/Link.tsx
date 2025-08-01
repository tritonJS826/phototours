import {Link as RouterLink} from "react-router-dom";
import styles from "src/components/ui/link/Link.module.scss";

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

const Link: React.FC<Props> = ({
  to,
  href,
  children,
  className = "",
  target,
  rel,
}) => {
  if (to) {
    return (
      <RouterLink
        to={to}
        className={`${styles.link} ${className}`}
      >
        {children}
      </RouterLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={`${styles.link} ${className}`}
      >
        {children}
      </a>
    );
  }

  return null;
};

export {Link};
