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
          <div className={styles.topbar__item__search}>
            <div className={styles.search}>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search..."
              />
              <Search
                size={22}
                className={styles.search__icon}
              />
            </div>
          </div>

          <div className={styles.topbar__item__language}>
            <div
              className={styles.dropdown}
              ref={langRef}
            >
              <button
                className={styles.dropdown__btn}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                ENG
              </button>
              {isLangOpen && (
                <ul className={styles.dropdown__menu}>
                  <li>
                    English
                  </li>
                  <li>
                    Deutsch
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={styles.topbar__item__currency}>
            <div
              className={styles.dropdown}
              ref={currencyRef}
            >
              <button
                className={styles.dropdown__btn}
                onClick={() => setIsCurrencyOpen((prev) => !prev)}
              >
                USD
              </button>
              {isCurrencyOpen && (
                <ul className={styles.dropdown__menu}>
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

          <div className={styles.topbar__cart}>
            <Link
              to="/cart"
              className={styles.iconBtn}
            >
              <ShoppingCart size={22} />
            </Link>
          </div>
          `
          <div className={styles.topbar__profile}>
            <Link
              to="/profile"
              className={styles.iconBtn}
            >
              <CircleUser size={22} />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
