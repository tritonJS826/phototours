import {memo} from "react";
import {Facebook, Instagram, Youtube} from "lucide-react";
import {Container} from "src/components/Container/Container";
import {Logo} from "src/components/Logo/Logo";
import {NewsletterForm} from "src/components/NewsletterForm/NewsletterForm";
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
  icon: React.ComponentType<{className?: string}>;
  href: string;
  title: string;
}

// Constants
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "information",
    title: "Information",
    links: [
      {id: "about", text: "About Us", href: "/about"},
      {id: "terms", text: "Terms & Conditions", href: "/terms"},
      {id: "privacy", text: "Privacy Policy", href: "/privacy"},
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      {id: "faq", text: "FAQ", href: "/faq"},
      {id: "contact", text: "Contact Us", href: "/contact"},
    ],
  },
  {
    id: "explore",
    title: "Explore",
    links: [
      {id: "book-tours", text: "Book Photo Tours", href: "/tours"},
      {id: "articles", text: "Explore Articles", href: "/articles"},
    ],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    icon: Instagram,
    href: "https://instagram.com",
    title: "Visit Instagram",
  },
  {
    id: "facebook",
    icon: Facebook,
    href: "https://facebook.com",
    title: "Visit Facebook",
  },
  {
    id: "youtube",
    icon: Youtube,
    href: "https://youtube.com",
    title: "Visit YouTube",
  },
];

export const Footer = memo(function Footer() {
  const renderFooterLink = (link: FooterLink) => (
    <li key={link.id}>
      <a
        href={link.href}
        className={styles.footerLink}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={link.text}
      >
        {link.text}
      </a>
    </li>
  );

  const renderSocialIcon = (social: SocialLink) => {
    const IconComponent = social.icon;

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
        <IconComponent className={styles.icon} />
      </a>
    );
  };

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <section className={styles.mainSection}>
        <Container>
          <div className={styles.mainContent}>
            {/* Logo Column */}
            <div className={styles.logoColumn}>
              <Logo showTagline={false} />
            </div>

            {/* Navigation Columns */}
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

            {/* Subscribe Column */}
            <div className={styles.subscribeColumn}>
              <h3 className={styles.columnTitle}>
                Subscribe
              </h3>
              <div className={styles.subscribeForm}>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Copyright Section */}
      <section className={styles.copyrightSection}>
        <Container>
          <div className={styles.copyrightContent}>
            <p className={styles.copyrightText}>
              © 2005 Tuscany Photo Tours. All rights reserved.
            </p>
            <div className={styles.socialIcons}>
              {SOCIAL_LINKS.map(renderSocialIcon)}
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
});

