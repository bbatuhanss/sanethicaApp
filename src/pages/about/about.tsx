import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./about.module.css";
import Footer from "components/footer/footer";

const values = [
  {
    icon: "◎",
    label: "Bütünsel Yaklaşım",
    desc: "Beden, zihin ve ruhu bir bütün olarak ele alıyor; süreci yalnızca görünüş odaklı değil, yaşam kalitesi odaklı kurguluyoruz.",
  },
  {
    icon: "◈",
    label: "Profesyonel Dokunuş",
    desc: "Tüm uygulamalarımız alanında deneyimli profesyoneller tarafından, güncel yöntemlerle yürütülür.",
  },
  {
    icon: "◇",
    label: "Kişisel Odak",
    desc: "Her müşteri vücut yapısı, yaşam ritmi ve hedefi farklıdır; programlarımız da buna göre şekillenir.",
  },
  {
    icon: "◉",
    label: "Kalıcı Sonuçlar",
    desc: "Geçici çözümler değil, düzenli bakım ve doğru uygulama ile kalıcı dönüşüm hedefliyoruz.",
  },
];

const services = [
  {
    icon: "✦",
    label: "Bölgesel İncelme",
    desc: "EmShape, G5 ve ozon sauna teknolojileriyle hedef bölgede sıkılaşma ve şekillendirme.",
  },
  {
    icon: "✦",
    label: "Masaj Terapisi",
    desc: "Lenf drenaj, lipödem ve selülit masajıyla ödem giderme, dolaşım desteği ve derin rahatlama.",
  },
  {
    icon: "✦",
    label: "Lazer Epilasyon",
    desc: "Cilt tipine uygun planlama ile istenmeyen tüylerde konforlu ve etkili lazer epilasyon uygulamaları.",
  },
  {
    icon: "✦",
    label: "Cilt Bakımı",
    desc: "Cilt analizine göre nem, leke, akne ve yaşlanma karşıtı destek sağlayan profesyonel bakım uygulamaları.",
  },
];

const stats = [
  { v: "1000+", l: "Mutlu Müşteri" },
  { v: "%98", l: "Müşteri Memnuniyeti" },
];

const storyMeta = [
  ["Ataşehir", "İstanbul"],
  ["2025", "Kuruluş"],
];

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => obs.observe(el));

    return () => {
      elements.forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Hakkımızda | Sanethica Beauty</title>
        <meta
          name="description"
          content="Sanethica profesyonel kadrosu ile bölgesel incelme, masaj programları sunar. Ataşehir, İstanbul."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroNoise} />
          <div className={styles.heroGradient} />

          <div className={styles.heroOrbs}>
            <div className={styles.o1} />
            <div className={styles.o2} />
            <div className={styles.o3} />
          </div>

          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Kendinize en güzel
              <br />
              <em>yatırımı yapın</em>
            </h1>

            <p className={styles.heroSub}>
              Profesyonel kadromuzla bölgesel incelme, masaj hizmetlerini
              estetik, etik ve özenli bir yaklaşımla sunuyoruz.
            </p>

            <div className={styles.heroActions}>
              <a href="/contact" className={styles.heroPrimaryBtn}>
                Randevu Al
              </a>
              <a href="/contact" className={styles.heroSecondaryBtn}>
                Hizmetleri İncele
              </a>
            </div>

            <div className={styles.heroRule} />

            <div className={styles.heroStats}>
              {stats.map((item, i) => (
                <React.Fragment key={item.l}>
                  <div className={styles.heroStat}>
                    <strong>{item.v}</strong>
                    <span>{item.l}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className={styles.heroStatLine} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* HİKAYEMİZ */}
        <section className={styles.story}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCard} data-reveal>
              <div className={styles.scNoise} />
              <span className={styles.scLeaf}>✨</span>

              <p className={styles.scQuote}>
                "Güzellik; dışarıdan değil,
                <br />
                içeriden gelir."
              </p>

              <span className={styles.scBy}>— Sanethica Felsefesi</span>

              <div className={styles.scMeta}>
                {storyMeta.map(([value, label], i) => (
                  <React.Fragment key={label}>
                    <div className={styles.scMetaItem}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                    {i < storyMeta.length - 1 && (
                      <div className={styles.scMetaDiv} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className={styles.scBorder} />
            </div>

            <div className={styles.storyText} data-reveal>
              <span className={styles.tag}>Hikayemiz</span>

              <h2 className={styles.h2}>
                Neden <em>Sanethica</em>?
              </h2>

              <p>
                Sanethica, 2025 yılında güzelliği yalnızca görünüşle değil;
                beden, zihin ve özgüven bütünlüğüyle tanımlayan bir vizyon
                etrafında kuruldu. Her müşterinin kendini en iyi hissedebileceği
                bir alan yaratmak için yola çıktık.
              </p>

              <p>
                "Sante" sağlık, "Ethica" ise etik yaklaşımı temsil eder.
                Ataşehir'deki merkezimizde son teknoloji cihazlar ve profesyonel
                dokunuşla her müşterimize özel bir dönüşüm deneyimi sunuyoruz.
              </p>

              <a href="/contact" className={styles.btn}>
                Ücretsiz Ön Görüşme →
              </a>
            </div>
          </div>
        </section>

        {/* HİZMETLERİMİZ */}
        <section className={styles.team}>
          <div className={styles.teamWrap}>
            <div className={styles.teamHead} data-reveal>
              <span className={styles.tag}>Ne Sunuyoruz?</span>

              <h2 className={styles.h2}>
                Üç alanda <em>profesyonel hizmet</em>
              </h2>

              <p className={styles.teamSub}>
                Son teknoloji cihazlar ve deneyimli kadromuzla bedeninizi en iyi
                hâline kavuşturuyoruz.
              </p>
            </div>

            <div className={styles.mainTeamGrid}>
              {services.map((service, i) => (
                <div
                  key={service.label}
                  className={styles.mainTeamCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className={styles.mtCardGlow} />

                  <div className={styles.mtTop}>
                    <div className={styles.mtAvatarWrap}>
                      <div className={styles.mtAvatar}>{service.icon}</div>
                    </div>
                    <div className={styles.mtMeta}>
                      <h3 className={styles.mtName}>{service.label}</h3>
                    </div>
                  </div>

                  <p className={styles.mtDesc}>{service.desc}</p>

                  <a href="/contact" className={styles.mtCta}>
                    Randevu Al →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İLKELERİMİZ */}
        <section className={styles.values}>
          <div className={styles.valuesWrap}>
            <div className={styles.valuesHead} data-reveal>
              <span className={styles.tagLight}>İlkelerimiz</span>
              <h2 className={styles.h2Light}>Bizi farklı kılan</h2>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value, i) => (
                <div
                  key={value.label}
                  className={styles.valueCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className={styles.vIcon}>{value.icon}</span>
                  <h3>{value.label}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta} data-reveal>
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaWrap}>
            <span className={styles.ctaEyebrow}>Hemen Başlayın</span>

            <h2>
              Dönüşüm için <em>doğru adres</em>
            </h2>

            <p>
              İİlk görüşmede ihtiyaçlarınızı birlikte analiz edelim, size özel
              bakım ve güzellik sürecinizi planlayalım.
            </p>

            <div className={styles.ctaBtns}>
              <a href="/contact" className={styles.ctaPrimary}>
                Ücretsiz Görüşme Al
              </a>
            </div>

            <p className={styles.ctaNote}>
              1000+ müşteri deneyimi, etik yaklaşım ve kişiye özel planlama.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
