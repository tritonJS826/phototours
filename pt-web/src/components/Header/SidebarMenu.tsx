import React from "react";
import {Link} from "react-router-dom";
import email from "/images/email.svg";
import instagram from "/images/instagram.svg";
import phone from "/images/phone.svg";
import telegram from "/images/telegram.svg";
import whatsapp from "/images/whatsapp.svg";
import {X} from "lucide-react";
import {PATHS} from "src/routes/routes";
import styles from "src/components/Header/Header.module.scss";

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  {to: PATHS.HOME, label: "Home"},
  {to: PATHS.TOURS, label: "Book Photo Tours"},
  {to: PATHS.ARTICLES, label: "Explore Articles"},
  {to: PATHS.ABOUT, label: "About Us"},
  {to: PATHS.CONTACT, label: "Contact Us"},
];

export function SidebarMenu({isOpen, onClose}: SidebarMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileMenu}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <nav className={styles.mobileMenuNav}>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileMenuFooter}>
          <Link
            to={PATHS.TOURS}
            className={styles.exploreToursBtn}
            onClick={onClose}
          >
            Explore Tours
          </Link>
          <div className={styles.socialContacts}>
            <a
              href="tel:+1234567890"
              className={styles.socialContactItem}
            >
              <img
                src={phone}
                alt="Phone"
              />
              <span>
                Phone
              </span>
            </a>
            <a
              href="https://t.me/phototours"
              className={styles.socialContactItem}
            >
              <img
                src={telegram}
                alt="Telegram"
              />
              <span>
                Telegram
              </span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className={styles.socialContactItem}
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
              />
              <span>
                WhatsApp
              </span>
            </a>
            <a
              href="mailto:info@phototours.com"
              className={styles.socialContactItem}
            >
              <img
                src={email}
                alt="Email"
              />
              <span>
                Email
              </span>
            </a>
            <a
              href="https://instagram.com/phototours"
              className={styles.socialContactItem}
            >
              <img
                src={instagram}
                alt="Instagram"
              />
              <span>
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
