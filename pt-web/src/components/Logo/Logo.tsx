import logo from "/logo.png";
import styles from "src/components/Logo/Logo.module.scss";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo = function Logo({className = "", showTagline = false}: LogoProps) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <div className={styles.logoIcon}>
        <img
          src={logo}
          alt="Tuscany Photo Tours Logo"
          className={styles.logoImage}
        />
      </div>
      {showTagline && (
        <div className={styles.logoText}>
          <div className={styles.tagline}>
            Unforgettable photography tours around the world
          </div>
        </div>
      )}
    </div>
  );
};
