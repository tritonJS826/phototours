import {useEffect, useRef, useState} from "react";
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

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const {user, isAuthenticated, logout} = useAuth();

  const REFRESH_DELAY = 100;
  const navigate = useNavigate();
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
  }, []); // Возвращаем пустые зависимости

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      // Если пользователь авторизован, переходим в профиль
      navigate(PATHS.PROFILE);
    } else {
      // Если не авторизован, показываем модальное окно входа
      setAuthMode("login");
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);

    // Перенаправляем на профиль пользователя
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

          <div className={styles.topbarItem}>
            <div
              className={styles.dropdown}
              ref={currencyRef}
            >
              <button
                className={styles.dropdownBtnCurrency}
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
            {isAuthenticated
              ? (
                <div className={styles.profileDropdown}>
                  <Link
                    to="/profile"
                    className={styles.iconBtn}
                    aria-label="Profile"
                  >
                    <CircleUser className="icon" />
                  </Link>
                  <div className={styles.profileMenu}>
                    <div className={styles.profileUserInfo}>
                      {user?.firstName}
                      {" "}
                      {user?.lastName}
                    </div>
                    <Link
                      to="/profile"
                      className={styles.profileMenuItem}
                    >
                      Profile
                    </Link>
                    <button
                      className={styles.profileMenuItem}
                      onClick={() => {
                        logout();
                        // Перенаправляем на главную страницу
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
                    aria-label="Profile"
                    onClick={handleProfileClick}
                  >
                    <CircleUser className="icon" />
                  </button>
                  <div className={styles.profileMenu}>
                    <button
                      className={styles.profileMenuItem}
                      onClick={() => {
                        setAuthMode("login");
                        setIsAuthModalOpen(true);
                      }}
                    >
                      Login
                    </button>
                    <button
                      className={styles.profileMenuItem}
                      onClick={() => {
                        setAuthMode("register");
                        setIsAuthModalOpen(true);
                      }}
                    >
                      Register
                    </button>
                  </div>
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
