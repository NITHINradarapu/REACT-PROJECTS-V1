import { useState } from "react";
import styles from "./Navigation.module.css";
import { HiMenu, HiX } from "react-icons/hi";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.logo_container}>
          <a href="/" className={styles.logo_link}>
            <img src="/images/logo.png" alt="Do Some Coding Logo" />
          </a>
        </div>

        <ul className={`${styles.nav_links} ${mobileMenuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" className={styles.nav_link}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.nav_link}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className={styles.nav_link}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.nav_link} ${styles.active}`}>
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.nav_actions}>
          <a href="tel:+18005550199" className={styles.cta_phone}>
            <span>Support:</span> (800) 555-0199
          </a>
          <button
            className={styles.menu_toggle}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
