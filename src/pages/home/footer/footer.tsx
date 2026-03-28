import React from "react";
import styles from "./footer.module.css";
import logo from "../../../assets/images/main_logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brand}>
        <img src={logo} alt="Sanethica" className={styles.logo} />
        <p className={styles.tagline}>
          Sağlıklı yaşamı bilim, etik ve bütünsel yaklaşımla sunuyoruz.
        </p>

        <a
          href="https://www.instagram.com/sanethica/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ig}
        >
          <span>📸</span> @sanethica
        </a>
      </div>

      <div className={styles.col}>
        <h4>Hizmetler</h4>
        <Link to="/hizmetler/diyet">Bireysel Diyet</Link>
        <Link to="/hizmetler/incelme">Bölgesel İncelme</Link>
        <Link to="/hizmetler/wellness">Wellness</Link>
        <Link to="/article">Blog & Makaleler</Link>
      </div>

      <div className={styles.col}>
        <h4>Bağlantılar</h4>
        <Link to="/">Anasayfa</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>

      <div className={styles.col}>
        <h4>İletişim</h4>
        <span>Metropol A Blok D:38</span>
        <span>Ataşehir / İstanbul</span>
        <a href="tel:+905384100034">+90 538 410 00 34</a>
        <a href="mailto:info@sanethica.co">info@sanethica.co</a>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.bottomLine} />
      <div className={styles.bottomRow}>
        <span>
          © {new Date().getFullYear()} Sanethica. Tüm hakları saklıdır.
        </span>
        <span className={styles.bottomRight}>İstanbul · Türkiye</span>
      </div>
    </div>
  </footer>
);

export default Footer;
