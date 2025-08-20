import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CircleUser, Search, ShoppingCart} from "lucide-react";
import logo from "src/assets/icons/logo.png";
import {AuthModal} from "src/components/Auth";
import {PATHS} from "src/constants/routes";
import {useAuth} from "src/hooks/useAuth";
import {handleClickOutside} from "src/utils/useOutsideClick";
import styles from "src/components/Header/Header.module.scss";

const LANGUAGES = ["English", "Deutsch"];
const CURRENCIES = ["USD", "EUR"];
const REFRESH_DELAY = 100;

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const {user, isAuthenticated, logout} = useAuth();

  const navigate = useNavigate();
  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = handleClickOutside(
      [langRef, currencyRef, profileDropdownRef],
      [() => setIsLangOpen(false), () => setIsCurrencyOpen(false), () => undefined],
    );
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate(PATHS.PROFILE);
    } else {
      setAuthMode("login");
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);

    setTimeout(() => {
      navigate(PATHS.PROFILE);
    }, REFRESH_DELAY);
  };

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
            to={PATHS.HOME}
            aria-label="Homepage"
          >
            <img
              src={logo}
              alt="Photo Tour Logo"
              className={styles.icon}
            />
          </Link>
        </div>

        <div className={styles.topbarRight}>
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

          <div className={styles.headerDivider} />

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

          <div className={styles.topbarItem}>
            <div
              className={styles.dropdown}
              ref={langRef}
            >
              <button
                className={styles.dropdownBtnLanguage}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((p) => !p)}
              >
                {selectedLang}
              </button>
              {renderDropdown(isLangOpen, LANGUAGES, (val) => {
                setSelectedLang(val.toUpperCase());
                setIsLangOpen(false);
              })}
            </div>
          </div>

          <div className={styles.topbarItem}>
            <div
              className={styles.dropdown}
              ref={currencyRef}
            >
              <button
                className={styles.dropdownBtnCurrency}
                aria-haspopup="listbox"
                aria-expanded={isCurrencyOpen}
                onClick={() => setIsCurrencyOpen((p) => !p)}
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
              to={PATHS.CART}
              className={styles.iconBtn}
              aria-label="Cart"
            >
              <ShoppingCart className="icon" />
            </Link>
          </div>

          <div className={styles.topbarProfile}>
            {isAuthenticated
              ? (
                <div
                  className={styles.profileDropdown}
                  ref={profileDropdownRef}
                >
                  <button
                    className={styles.iconBtn}
                    onClick={handleProfileClick}
                    aria-label="Profile"
                  >
                    <CircleUser className="icon" />
                  </button>
                  <div className={styles.profileMenu}>
                    <div className={styles.profileUserInfo}>
                      {user?.firstName}
                      {" "}
                      {user?.lastName}
                    </div>
                    <Link
                      to={PATHS.PROFILE}
                      className={styles.profileMenuItem}
                    >
                      Profile
                    </Link>
                    <button
                      className={styles.profileMenuItem}
                      onClick={() => {
                        logout();
                        setTimeout(() => {
                          navigate(PATHS.HOME);
                        }, REFRESH_DELAY);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )
              : (
                <div className={styles.profileDropdown}>
                  <button
                    className={styles.iconBtn}
                    onClick={handleProfileClick}
                    aria-label="Login"
                  >
                    <CircleUser className="icon" />
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </header>
  );
}
