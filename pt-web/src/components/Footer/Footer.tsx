import {HTMLAttributes, JSX} from "react";
import clsx from "clsx";
import {format} from "date-fns";
import {Container} from "src/components/Container/Container";
import styles from "src/components/Footer/Footer.module.scss";

interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer
      className={clsx(className, styles.footer)}
      {...props}
    >
      <Container>
        <div className={styles.grid}>
          {/* Left column — navigation menu */}
          <ul className={styles.menu}>
            <li>
              <a href="/bookTours">
                Book Photo Tours
              </a>
            </li>
            <li>
              <a href="/exploreArticles">
                Explore Articles
              </a>
            </li>
            <li>
              <a href="/aboutUs">
                About Us
              </a>
            </li>
            <li>
              <a href="/contactUs">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right column — existing content */}
          <div className={styles.rightContent}>
            Tuscany Photo Tours –
            {" "}
            {format(new Date(), "yyyy")}
            {" "}
          </div>
        </div>
      </Container>
    </footer>
  );
};
