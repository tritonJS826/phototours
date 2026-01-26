import React, {
  useEffect,
  // UseRef,
  useState,
} from "react";
import {Link, useNavigate} from "react-router-dom";
import email from "/images/email.svg";
import instagram from "/images/instagram.svg";
import logoDark from "/images/logoBlack.svg";
import phone from "/images/phone.svg";
import telegram from "/images/telegram.svg";
import whatsapp from "/images/whatsapp.svg";
import clsx from "clsx";
import {
  // Bell,
  // CircleUser,
  // LogOut,
  Menu,
  // ShoppingCart,
  // User,
} from "lucide-react";
import {AuthModal} from "src/components/Auth";
import {Dropdown} from "src/components/Dropdown/Dropdown";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
// Import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/components/Header/Header.module.scss";

const REFRESH_DELAY = 100;

export function Header() {
  // Const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [
    authMode,
    // SetAuthMode,
  ] = useState<"login" | "register">("login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    user,
    isAuthenticated,
    // Logout,
    refreshFromStorage,
  } = useAuth();
  const navigate = useNavigate();

  // Const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAuthenticated && isAuthModalOpen) {
      setIsAuthModalOpen(false);
    }
  }, [isAuthenticated, isAuthModalOpen, user]);

  useEffect(() => {
    refreshFromStorage();
  }, [refreshFromStorage]);

  // Const handleProfileClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (isAuthenticated) {
  //     setIsProfileDropdownOpen(!isProfileDropdownOpen);
  //   } else {
  //     setAuthMode("login");
  //     setIsAuthModalOpen(true);
  //   }
  // };

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
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
              src={logoDark}
              alt="Photo Tour Logo"
            />
          </Link>
        </div>

        <nav
          className={styles.headerNav}
          aria-label="Main Navigation"
        >
          <div className={styles.rightHeaderBlock}>
            <ul className={styles.leftHeaderLinks}>
              <li>
                <Link
                  to={PATHS.TOURS}
                  className={styles.primaryHeaderLink}
                >
                  Explore&nbsp;Tours
                </Link>
              </li>
              &#9675;
              <li>
                <Link to={PATHS.ARTICLES}>
                  Blog
                </Link>
              </li>
              &#9675;
              <li>
                <Link to={PATHS.ABOUT}>
                  About Us
                </Link>
              </li>
            </ul>
            <div className={styles.rightHeaderLinks}>
              {/* <div className={styles.topbarRight}>
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
              </div> */}

              <Dropdown
                trigger={
                  <button
                    className={styles.contactUsDropdownTrigger}
                    onClick={() => {}}
                  >
                    Contact&nbsp;Us
                  </button>
                }
                dropdownMenuItems={[
                  {
                    dropdownSubMenuItems: [
                      {
                        id: "Phone",
                        isPreventDefaultUsed: false,
                        value: (
                          <div className={styles.contactUsItem}>
                            <img
                              src={phone}
                              alt="user link"
                            />
                            Phone
                          </div>
                        ),
                        isVisible: true,
                      },
                      {
                        id: "Telegram",
                        isPreventDefaultUsed: false,
                        value: (
                          <div className={styles.contactUsItem}>
                            <img
                              src={telegram}
                              alt="user link"
                            />
                            Telegram
                          </div>
                        ),
                        isVisible: true,
                      },
                      {
                        id: "WhatsApp",
                        isPreventDefaultUsed: false,
                        value: (
                          <div className={styles.contactUsItem}>
                            <img
                              src={whatsapp}
                              alt="user link"
                            />
                            WhatsApp
                          </div>
                        ),
                        isVisible: true,
                      },
                      {
                        id: "Email",
                        isPreventDefaultUsed: false,
                        value: (
                          <div className={styles.contactUsItem}>
                            <img
                              src={email}
                              alt="user link"
                            />
                            Email
                          </div>
                        ),
                        isVisible: true,
                      },
                      {
                        id: "Instagram",
                        isPreventDefaultUsed: false,
                        value: (
                          <div className={clsx(
                            styles.contactUsItem,
                            styles.lastChild,
                          )}
                          >
                            <img
                              src={instagram}
                              alt="user link"
                            />
                            Instagram
                          </div>
                        ),
                        isVisible: true,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <ul>
            <li>
              <Link to={PATHS.HOME}>
                Home
              </Link>
            </li>
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
