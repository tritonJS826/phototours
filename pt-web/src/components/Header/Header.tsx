import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "/images/logo.svg";
import {
  Bell,
  CircleUser,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import {AuthModal} from "src/components/Auth";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/components/Header/Header.module.scss";

const REFRESH_DELAY = 100;

export function Header() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {user, isAuthenticated, logout, refreshFromStorage} = useAuth();
  const navigate = useNavigate();

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

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <button
          className={styles.burgerBtn}
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          <Menu />
        </button>
        <div className={styles.headerLogo}>
          <Link
            to={PATHS.HOME}
            aria-label="Homepage"
          >
            <img
              className={styles["header-logo-img"]}
              src={logo}
              alt="Photo Tour Logo"
            />
          </Link>
        </div>

        <nav
          className={styles.headerNav}
          aria-label="Main Navigation"
        >
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link
                to={PATHS.TOURS}
                className="header-link"
              >
                Book Photo Tours
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to={PATHS.ARTICLES}
                className="header-link"
              >
                Explore Articles
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to={PATHS.ABOUT}
                className="header-link"
              >
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to={PATHS.CONTACT}
                className="header-link"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.topbarRight}>
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
                className={styles.searchInput}
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>

          <Link
            to={PATHS.CART}
            className={styles.iconBtn}
            aria-label="Cart"
          >
            <ShoppingCart className="icon" />
          </Link>

          {isAuthenticated
            ? (
              <div
                className={styles.profileDropdown}
                ref={profileDropdownRef}
              >
                <button
                  className={styles.profileBtn}
                  onClick={handleProfileClick}
                  aria-haspopup="menu"
                  aria-expanded={isProfileDropdownOpen}
                >
                  <img
                    src={getProfileImageUrl(user?.profilePicUrl)}
                    alt={`${user?.firstName} ${user?.lastName}`}
                    className={styles.avatarImage}
                  />
                  <span>
                    {user?.firstName}
                  </span>
                </button>

                {isProfileDropdownOpen && (
                  <div
                    className={styles.profileMenu}
                    role="menu"
                  >
                    <div className={styles.profileMenuHead}>
                      <span>
                        {user?.firstName}
                        {" "}
                        {user?.lastName}
                      </span>
                    </div>

                    <div className={styles.profileActions}>
                      <Link
                        to={PATHS.DASHBOARD}
                        className={styles.profileAction}
                        role="menuitem"
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
                        role="menuitem"
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
                      role="menuitem"
                      onClick={() => {
                        logout();
                        setIsProfileDropdownOpen(false);
                        setTimeout(() => navigate(PATHS.HOME), REFRESH_DELAY);
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
              <button
                className={styles.iconBtn}
                onClick={handleProfileClick}
                aria-label="Login"
              >
                <CircleUser className="icon" />
              </button>
            )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <ul>
            <li>
              <Link to={PATHS.TOURS}>
                Book Photo Tours
              </Link>
            </li>
            <li>
              <Link to={PATHS.ARTICLES}>
                Explore Articles
              </Link>
            </li>
            <li>
              <Link to={PATHS.ABOUT}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={PATHS.CONTACT}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </header>
  );
}
