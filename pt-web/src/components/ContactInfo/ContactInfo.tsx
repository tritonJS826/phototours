import {memo} from "react";
import {Facebook, Instagram, Mail, MapPin, Phone, Youtube} from "lucide-react";
import qrCodePhone from "src/components/ContactInfo/assets/qr.png";
import styles from "src/components/ContactInfo/ContactInfo.module.scss";

interface ContactItem {
  id: string;
  icon: React.ComponentType<{className?: string}>;
  text: string;
  href: string;
  type: "email" | "phone" | "address" | "social";
  title?: string;
  target?: "_blank";
}

interface SocialLink {
  id: string;
  icon: React.ComponentType<{className?: string}>;
  href: string;
  title: string;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "email",
    icon: Mail,
    text: "info@company.com",
    href: "mailto:info@company.com",
    type: "email",
    title: "Send us an email",
  },
  {
    id: "phone",
    icon: Phone,
    text: "+354 123 4567",
    href: "tel:+3541234567",
    type: "phone",
    title: "Call us",
  },
  {
    id: "address",
    icon: MapPin,
    text: "123 Adventure St. Reykjavik, Iceland",
    href: "https://maps.google.com/?q=123+Adventure+St.+Reykjavik,+Iceland",
    type: "address",
    title: "View on Google Maps",
    target: "_blank",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com",
    title: "Visit Facebook",
  },
  {
    id: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com",
    title: "Visit Instagram",
  },
  {
    id: "youtube",
    icon: Youtube,
    href: "https://www.youtube.com",
    title: "Visit YouTube",
  },
];

export const ContactInfo = memo(function ContactInfo() {
  const renderContactItem = (item: ContactItem) => {
    const IconComponent = item.icon;

    return (
      <div
        key={item.id}
        className={styles.contactItem}
      >
        <a
          href={item.href}
          className={styles.contactLink}
          target={item.target}
          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          title={item.title}
          aria-label={item.title}
        >
          <IconComponent
            className={styles.icon}
            aria-hidden="true"
          />
          <span className={styles.contactText}>
            {item.text}
          </span>
        </a>
      </div>
    );
  };

  const renderSocialLink = (social: SocialLink) => {
    const IconComponent = social.icon;

    return (
      <a
        key={social.id}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        title={social.title}
        aria-label={social.title}
      >
        <IconComponent
          className={styles.socialIcon}
          aria-hidden="true"
        />
      </a>
    );
  };

  return (
    <div
      className={styles.contactInfo}
      role="complementary"
      aria-label="Contact information"
    >
      <div className={styles.contactDetails}>
        {CONTACT_ITEMS.map(renderContactItem)}
      </div>
      <div className={styles.socialMedia}>
        <h3>
          Follow us
        </h3>
        <div
          className={styles.socialIcons}
          role="list"
          aria-label="Social media links"
        >
          {SOCIAL_LINKS.map(renderSocialLink)}
        </div>
        <div className={styles.contactImage}>
          <img
            src={qrCodePhone}
            alt="QR code to call +354 123 4567"
            title="Scan to call our support team"
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
});

