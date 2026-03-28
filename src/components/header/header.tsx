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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const shouldShowSolidHeader = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`${styles.header} ${shouldShowSolidHeader ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logoWrap}>
          <img src={logo} alt="Sanethica" className={styles.logo} />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.link} ${
                location.pathname === l.to ? styles.active : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className={styles.navCta}>
            Randevu Al
          </Link>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menü"
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
