import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {CircleUser, Search, ShoppingCart} from "lucide-react";
import logo from "src/assets/icons/logo.png";
import styles from "src/components/Header/Header.module.scss";

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (langRef.current && !langRef.current.contains(target)) {
        setIsLangOpen(false);
      }

      if (currencyRef.current && !currencyRef.current.contains(target)) {
        setIsCurrencyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__item}>
              <Link to="/tours">
                Book Photo Tours
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/articles">
                Explore Articles
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.topbar__right}>
          <div className={styles.topbar__search_wrapper}>
            <input
              type="text"
              className={styles.topbar__search}
              placeholder="Search..."
            />
            <Search
              size={18}
              className={styles.topbar__search_icon}
            />
          </div>

          <div className={styles.topbar__locale_switcher}>
            <div
              className={styles.topbar__dropdown_wrapper}
              ref={langRef}
            >
              <button
                className={styles.topbar__btn}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                ENG
              </button>
              {isLangOpen && (
                <ul className={styles.topbar__dropdown}>
                  <li>
                    English
                  </li>
                  <li>
                    Deutsch
                  </li>
                </ul>
              )}
            </div>

            <div
              className={styles.topbar__dropdown_wrapper}
              ref={currencyRef}
            >
              <button
                className={styles.topbar__btn}
                onClick={() => setIsCurrencyOpen((prev) => !prev)}
              >
                USD
              </button>
              {isCurrencyOpen && (
                <ul className={styles.topbar__dropdown}>
                  <li>
                    USD
                  </li>
                  <li>
                    EUR
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={styles.topbar__user_actions}>
            <Link
              to="/cart"
              className={styles.topbar__btn}
            >
              <ShoppingCart size={18} />
            </Link>
            <Link
              to="/profile"
              className={styles.topbar__btn}
            >
              <CircleUser size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
