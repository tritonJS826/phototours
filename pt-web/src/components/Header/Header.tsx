import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {CircleUser, Search, ShoppingCart} from "lucide-react";
import logo from "src/assets/icons/logo.png";
import {PATHS} from "src/constants/routes";
import {handleClickOutside} from "src/utils/useOutsideClick";
import styles from "src/components/Header/Header.module.scss";

const LANGUAGES = ["English", "Deutsch"];
const CURRENCIES = ["USD", "EUR"];

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = handleClickOutside(
      [langRef, currencyRef],
      [() => setIsLangOpen(false), () => setIsCurrencyOpen(false)],
    );

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  const renderDropdown = (
    isOpen: boolean,
    items: string[],
    onSelect: (value: string) => void,
  ) =>
    isOpen && (
      <ul
        className={styles.dropdownMenu}
        role="listbox"
      >
        {items.map((item) => (
          <li
            key={item}
            className={styles.dropdownOption}
            role="option"
            tabIndex={0}
            onClick={() => onSelect(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSelect(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link
            to="/"
            aria-label="Homepage"
          >
            <img
              src={logo}
              alt="Photo Tour Logo"
              className={styles.icon}
            />
          </Link>
        </div>

        <nav
          className={styles.headerNav}
          aria-label="Main Navigation"
        >
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link to={PATHS.TOURS}>
                Book Photo Tours
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={PATHS.ARTICLES}>
                Explore Articles
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={PATHS.ABOUT}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={PATHS.CONTACT}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.topbarRight}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Search
                className={styles.searchIcon}
                onClick={() => searchInputRef.current?.focus()}
              />
              <input
                ref={searchInputRef}
                type="text"
                id="search-input"
                className={styles.searchInput}
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>

          <div className={styles.topbarItemLanguage}>
            <div
              className={styles.dropdown}
              ref={langRef}
            >
              <button
                className={styles.dropdownBtn}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                {selectedLang}
              </button>
              {renderDropdown(isLangOpen, LANGUAGES, (val) => {
                setSelectedLang(val.toUpperCase());
                setIsLangOpen(false);
              })}
            </div>
          </div>

          <div className={styles.topbarItemCurrency}>
            <div
              className={styles.dropdown}
              ref={currencyRef}
            >
              <button
                className={styles.dropdownBtn}
                aria-haspopup="listbox"
                aria-expanded={isCurrencyOpen}
                onClick={() => setIsCurrencyOpen((prev) => !prev)}
              >
                {selectedCurrency}
              </button>
              {renderDropdown(isCurrencyOpen, CURRENCIES, (val) => {
                setSelectedCurrency(val);
                setIsCurrencyOpen(false);
              })}
            </div>
          </div>

          <div className={styles.topbarCart}>
            <Link
              to="/cart"
              className={styles.iconBtn}
              aria-label="Cart"
            >
              <ShoppingCart className="icon" />
            </Link>
          </div>
          <div className={styles.topbarProfile}>
            <Link
              to="/profile"
              className={styles.iconBtn}
              aria-label="Profile"
            >
              <CircleUser className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
