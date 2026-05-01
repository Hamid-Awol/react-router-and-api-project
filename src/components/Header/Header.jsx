import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.navWrapper} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <nav className={styles.navbar}>
          {/* Hamburger Menu Button for Mobile */}
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/" onClick={closeMenu}>
              <img src="/src/assets/images/icons/logo-sm.png" alt="Apple" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
          >
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Store
                </Link>
              </li>
              <li>
                <Link to="/mac" onClick={closeMenu}>
                  Mac
                </Link>
              </li>
              <li>
                <Link to="/iphone" onClick={closeMenu}>
                  iPhone
                </Link>
              </li>
              <li>
                <Link to="/ipad" onClick={closeMenu}>
                  iPad
                </Link>
              </li>
              <li>
                <Link to="/watch" onClick={closeMenu}>
                  Watch
                </Link>
              </li>
              <li>
                <Link to="/tv" onClick={closeMenu}>
                  TV
                </Link>
              </li>
              <li>
                <Link to="/music" onClick={closeMenu}>
                  Music
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={closeMenu}>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Icons */}
          <div className={styles.icons}>
            <Link to="/search" className={styles.iconLink} onClick={closeMenu}>
              <img
                src="/src/assets/images/icons/search-icon-sm.png"
                alt="Search"
              />
            </Link>
            <Link to="/cart" className={styles.iconLink} onClick={closeMenu}>
              <img src="/src/assets/images/icons/cart-sm.png" alt="Cart" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
