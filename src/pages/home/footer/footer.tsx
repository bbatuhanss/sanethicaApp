import React from "react";
import styles from "./footer.module.css";
import logo from "../../../assets/images/main_logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.column}>
          <img src={logo} alt="Sanethica Logo" className={styles.logo} />
        </div>
        <div className={styles.column}>
          <h4>İletişim</h4>
          <p>Metropol A Blok D:38 Ataşehir / İstanbul</p>
          <a href="tel:+905555555555">+90 538 410 00 34</a>
          <a href="mailto:info@sanethica.co">info@sanethica.com</a>
        </div>
        <div className={styles.column}>
          <h4>Bizi Takip Edin</h4>
          <a
            href="https://www.instagram.com/sanethica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <hr />
        <p>© {new Date().getFullYear()} Sanethica. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
