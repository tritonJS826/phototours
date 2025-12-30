import {Link} from "react-router-dom";
import logoBlack from "/images/logoBlack.svg";
import mastercardLogo from "/images/mastercardLogo.svg";
import stripeLogo from "/images/stripeLogo.svg";
import visaLogo from "/images/visaLogo.svg";
import {NewsletterForm} from "src/components/NewsletterForm/NewsletterForm";
import {PATHS} from "src/routes/routes";
import styles from "src/components/Footer/Footer.module.scss";

interface FooterLink {
  id: string;
  text: string;
  href: string;
}

interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  img: string;
  href: string;
  title: string;
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "pages",
    title: "Pages",
    links: [
      {id: "explore-tours", text: "Explore Tours", href: "/tours"},
      {id: "about", text: "About Us", href: "/about"},
      {id: "blog", text: "Blog", href: "/articles"},
      {id: "contacts", text: "Contacts", href: "/contact"},
    ],
  },
  {
    id: "contacts",
    title: "Contacts",
    links: [
      {id: "email-us", text: "Email us", href: "/contact"},
      {id: "getInTouch", text: "Get in touch", href: "/contact"},
      {id: "workWithUs", text: "Work with us", href: "/contact"},
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      {id: "privacy", text: "Privacy Policy", href: "/privacy"},
      {id: "terms", text: "Terms & Conditions", href: "/terms"},
      {id: "refund", text: "Refund Policy", href: "/privacy"},
      {id: "cookies", text: "Cookies Policy", href: "/privacy"},
    ],

  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "mastercardLogo",
    img: mastercardLogo,
    href: "#",
    title: "Visit Instagram",
  },
  {
    id: "stripeLogo",
    img: stripeLogo,
    href: "#",
    title: "Visit Facebook",
  },
  {
    id: "visaLogo",
    img: visaLogo,
    href: "#",
    title: "Visit YouTube",
  },
];

export const Footer = function Footer() {
  const renderFooterLink = (link: FooterLink) => (
    <li key={link.id}>
      <Link
        to={link.href}
        className={styles.footerLink}
        aria-label={link.text}
      >
        {link.text}
      </Link>
    </li>
  );

  const renderSocialIcon = (social: SocialLink) => {

    return (
      <a
        key={social.id}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
        title={social.title}
        aria-label={social.title}
      >
        <img
          src={social.img}
          alt={social.title}
          className={styles.icon}
        />
      </a>
    );
  };

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      <section className={styles.mainSection}>
        <div className={styles.mainContent}>
          <div className={styles.logoColumn}>
            {/* <Logo showTagline={false} /> */}
            <Link
              to={PATHS.HOME}
              aria-label="Homepage"
            >
              <img
                src={logoBlack}
                alt="Photo Tour Logo"
              />
            </Link>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div
              key={column.id}
              className={styles.footerColumn}
            >
              <h3 className={styles.columnTitle}>
                {column.title}
              </h3>
              <ul className={styles.footerLinks}>
                {column.links.map(renderFooterLink)}
              </ul>
            </div>
          ))}

          <div className={styles.subscribeColumn}>
            <h3 className={styles.columnTitle}>
              Join Our Newsletter
            </h3>
            <div className={styles.subscribeForm}>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.copyrightSection}>
        <div className={styles.copyrightContent}>
          <p className={styles.copyrightText}>
            © 2026 Tuscany Photo Tours. All rights reserved.
          </p>
          <div className={styles.socialIcons}>
            {SOCIAL_LINKS.map(renderSocialIcon)}
          </div>
        </div>
      </section>
    </footer>
  );
};

