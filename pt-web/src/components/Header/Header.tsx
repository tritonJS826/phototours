import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "/logo.png";
import {Bell, CircleUser, LogOut, Search, ShoppingCart, User} from "lucide-react";
import {AuthModal} from "src/components/Auth";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
import {getProfileImageUrl} from "src/utils/profileImage";
import {handleClickOutside} from "src/utils/useOutsideClick";
import styles from "src/components/Header/Header.module.scss";

interface LanguageOption {
  label: string;
  full: string;
}

const LANGUAGES: LanguageOption[] = [
  {label: "ENG", full: "English"},
  {label: "DEU", full: "Deutsch"},
];

const CURRENCIES = ["USD", "EUR"];
const REFRESH_DELAY = 100;

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const {user, isAuthenticated, logout, refreshFromStorage} = useAuth();

  const navigate = useNavigate();
  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthenticated && isAuthModalOpen) {
      setIsAuthModalOpen(false);
    }
  }, [isAuthenticated, isAuthModalOpen, user]);

  useEffect(() => {
    refreshFromStorage();
  }, [refreshFromStorage]);

  useEffect(() => {
    const listener = handleClickOutside(
      [langRef, currencyRef, profileDropdownRef],
      [() => setIsLangOpen(false), () => setIsCurrencyOpen(false), () => setIsProfileDropdownOpen(false)],
    );
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    } else {
      setAuthMode("login");
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    refreshFromStorage();

    setTimeout(() => {
      navigate(PATHS.DASHBOARD);
    }, REFRESH_DELAY);
  };
  const renderDropdown = (
    isOpen: boolean,
    items: LanguageOption[] | string[],
    onSelect: (value: string) => void,
  ) => isOpen && (
    <ul
      className={styles.dropdownMenu}
      role="listbox"
    >
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const display = typeof item === "string" ? item : item.full;

        return (
          <li
            key={label}
            className={styles.dropdownOption}
            role="option"
            tabIndex={0}
            onClick={() => onSelect(label)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSelect(label);
              }
            }}
          >
            {display}
          </li>
        );
      })}

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
                    <img
                      src={getProfileImageUrl(user?.profilePicUrl)}
                      alt={`${user?.firstName} ${user?.lastName}`}
                      className={styles.avatarImage}
                    />
                  </button>
                  {isProfileDropdownOpen && (
                    <div className={styles.profileMenu}>
                      <div className={styles.profileHeader}>
                        <div className={styles.profileUserInfo}>
                          {user?.firstName}
                          {" "}
                          {user?.lastName}
                        </div>
                        <button
                          className={styles.closeButton}
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          ×
                        </button>
                      </div>
                      <div className={styles.profileActions}>
                        <Link
                          to={PATHS.DASHBOARD}
                          className={styles.profileAction}
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <User className="icon" />
                          <span>
                            Dashboard
                          </span>
                        </Link>
                        <Link
                          to="/notifications"
                          className={styles.profileAction}
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <Bell className="icon" />
                          <span>
                            Notifications
                          </span>
                        </Link>
                      </div>
                      <button
                        className={styles.logoutButton}
                        onClick={() => {
                          logout();
                          setIsProfileDropdownOpen(false);
                          setTimeout(() => {
                            navigate(PATHS.HOME);
                          }, REFRESH_DELAY);
                        }}
                      >
                        <LogOut className="icon" />
                        <span>
                          Logout
                        </span>
                      </button>
                    </div>
                  )}
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
