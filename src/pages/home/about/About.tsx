import React from "react";
import styles from "./about.module.css";

const AboutSection = () => (
  <section className={styles.about}>
    <div className={styles.inner}>
      <div
        className={styles.left}
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <div className={styles.card}>
          <div className={styles.cardGrid} />
          <span className={styles.cardLeaf}>🌿</span>
          <blockquote className={styles.quote}>
            "Sağlık; kilo değil,
            <br />
            denge ve huzurdur."
          </blockquote>
          <span className={styles.quoteBy}>— Sanethica Felsefesi</span>

          <div className={styles.cardStats}>
            {[
              { v: "1000+", l: "Danışan" },
              { v: "%98", l: "Başarı" },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div className={styles.cStat}>
                  <strong>{s.v}</strong>
                  <span>{s.l}</span>
                </div>
                {i < 2 && <div className={styles.cStatDiv} />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.cardShadow} />
        <div className={styles.floatBadge}>
          <span className={styles.floatDot} />
          İstanbul · Ataşehir
        </div>
      </div>

      <div
        className={styles.right}
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="100"
      >
        <span className={styles.tag}>Hakkımızda</span>
        <h2 className={styles.title}>
          Sağlığınız için
          <br />
          <em>doğru adres</em>
        </h2>
        <p className={styles.desc}>
          Sanethica, 2025 yılında sağlıklı yaşamı yalnızca kilo vermekle değil;
          beden, zihin ve ruh bütünlüğüyle mümkün olan bir denge olarak
          tanımlayan bir vizyon etrafında kuruldu. Uzman kadromuz ve etik
          yaklaşımımızla her danışanımıza özel program sunuyoruz.
        </p>

        <div className={styles.feats}>
          {[
            {
              icon: "🎓",
              t: "Uzman Kadro",
              d: "Köklü üniversite mezunu diyetisyenler ve alanında profesyonel güzellik uzmanları",
            },
            {
              icon: "🔬",
              t: "Bilimsel Yaklaşım",
              d: "Kanıta dayalı, güncel beslenme bilimi",
            },
            {
              icon: "💚",
              t: "Kişiye Özel",
              d: "Sizin için hazırlanan, sürdürülebilir plan",
            },
          ].map((h, i) => (
            <div key={i} className={styles.feat}>
              <div className={styles.featIcon}>{h.icon}</div>
              <div className={styles.featText}>
                <strong>{h.t}</strong>
                <span>{h.d}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="/about" className={styles.cta}>
          Bizi Daha İyi Tanıyın →
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
