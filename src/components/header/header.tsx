import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/icon.png";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Anasayfa" },
  { to: "/about", label: "Hakkımızda" },
  { to: "/article", label: "Makaleler" },
  { to: "/contact", label: "İletişim" },
];

const MOBILE_BREAKPOINT = 768;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const shouldShowSolidHeader = isMobile || !isHome || scrolled || menuOpen;

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      return mobile;
    };

    const handleScroll = () => {
      const mobile = checkMobile();

      if (mobile) {
        setScrolled(false);
      } else {
        setScrolled(window.scrollY > 60);
      }
    };

    checkMobile();
    handleScroll();

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        shouldShowSolidHeader ? styles.scrolled : ""
      }`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logoWrap} onClick={closeMenu}>
          <img src={logo} alt="Sanethica" className={styles.logo} />
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${
                location.pathname === link.to ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className={styles.navCta}>
            Randevu Al
          </Link>
        </nav>

        {menuOpen && (
          <div
            className={styles.mobileOverlay}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Menüyü kapat"
            type="button"
          >
            ✕
          </button>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.mobileLink} ${
                location.pathname === link.to ? styles.active : ""
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/contact" className={styles.mobileCta} onClick={closeMenu}>
            Randevu Al
          </Link>
        </nav>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
