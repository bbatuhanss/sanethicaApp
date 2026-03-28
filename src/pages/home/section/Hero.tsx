import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./hero.module.css";
import logo from "../../../assets/images/main_logo.png";

const stats = [
  { val: "1000+", label: "Mutlu Danışan" },
  { val: "3", label: "Hizmet Alanı" },
  { val: "%98", label: "Başarı Oranı" },
];

const Hero = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.noise} />
      <div className={styles.grid} />

      <div className={styles.orbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.orb4} />
      </div>

      <div className={styles.inner}>
        <img src={logo} alt="Sanethica" className={styles.logo} />

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Klinik Beslenme · Wellness · Bölgesel İncelme
        </div>

        <h1 className={styles.title}>
          Yeni bir yaşam
          <br />
          <em>Sanethica ile başlıyor</em>
        </h1>

        <p className={styles.sub}>
          Uzman diyetisyen kadrosu ve bilimsel yaklaşımımızla bedeninizi,
          zihninizi ve ruhunuzu bir bütün olarak ele alıyoruz.
        </p>

        <div className={styles.ctas}>
          <a href="/contact" className={styles.ctaPrimary}>
            Ücretsiz Görüşme Al
          </a>
          <a href="/about" className={styles.ctaSecondary}>
            Bizi Tanıyın
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className={styles.stat}>
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className={styles.statLine} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Keşfet</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  </>
);

export default Hero;
