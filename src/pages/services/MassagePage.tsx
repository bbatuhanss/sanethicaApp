import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import massageImg from "../../assets/images/massageimage.png";
import styles from "./detail.module.css";

const MassagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const treatments = [
    {
      icon: "💆",
      title: "Lenfödem Masajı",
      desc: "Lenfatik sistem drenajı ile ödem azaltma, dolaşım iyileştirme ve ağrı giderme",
    },
    {
      icon: "💧",
      title: "Lipödem Masajı",
      desc: "Yağ dokusu hastalığında spesifik masaj teknikleriyle ağrı azaltma ve sirkülasyon destekleme",
    },
    {
      icon: "✨",
      title: "Selülit Masajı",
      desc: "Bağ dokularını gevşetme, kan akışını artırma ve selülit görünümü azaltma",
    },
    {
      icon: "🧘",
      title: "Terapötik Masaj",
      desc: "Kas gerginliği, kronik ağrılar ve postüral sorunları tedavi etme",
    },
    {
      icon: "🏃",
      title: "Spor Masajı",
      desc: "Atletik performans, yaralanma iyileştirme ve kasıt kaynakları iyileştirme",
    },
    {
      icon: "🌿",
      title: "Aromaterapi Masajı",
      desc: "Doğal yağlarla terapötik masaj, relaksasyon ve duygusal dengeleme",
    },
  ];

  const benefits = [
    {
      title: "Ağrı & Rahatlık",
      items: [
        "Kronik ağrı yönetimi",
        "Kas gerginliği azaltma",
        "Postüral sorunları düzeltme",
      ],
    },
    {
      title: "Dolaşım & Detoks",
      items: [
        "Kan dolaşımı iyileştirme",
        "Lenfatik sistem aktivasyonu",
        "Ödem ve şişkinlik azaltma",
      ],
    },
    {
      title: "Estetik & Wellness",
      items: [
        "Cilt elastikiyeti artırma",
        "Selülit görünümü azaltma",
        "Genel rahatlık ve huzur",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Başlangıç Değerlendirmesi",
      desc: "Vücut alanlarını analiz ederek masaj ihtiyaçlarını belirleme",
    },
    {
      step: "2",
      title: "Masaj Planı",
      desc: "Soruna uygun masaj tekniği ve sıkılığının belirlenmesi",
    },
    {
      step: "3",
      title: "Seans",
      desc: "Profesyonel terapist tarafından 45-60 dakika masaj uygulaması",
    },
    {
      step: "4",
      title: "Takip",
      desc: "Düzenli seanslarla iyileştirme ve ön kurtarma sağlama",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Masaj Uygulamaları | Sanethica</title>
        <meta
          name="description"
          content="Terapötik masaj, lenfödem, lipödem ve spor masajı uygulamaları ile ağrı yönetimi ve rahatlık."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>Terapötik Masaj</span>
            <h1 className={styles.heroTitle}>
              Masaj <em>Uygulamaları</em>
            </h1>
            <p className={styles.heroSub}>
              Ağrı yönetimi, dolaşım iyileştirmesi ve bütünsel wellness için
              profesyonel masaj
            </p>
            <button
              className={styles.heroCta}
              onClick={() => navigate("/contact")}
            >
              Seans Rezerv Et →
            </button>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section className={styles.imageSection} data-reveal>
          <img
            src={massageImg}
            alt="Masaj Uygulamaları"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Nedir Masaj?</span>
            <h2>Terapötik Dokunuş</h2>
            <p>
              Masaj, sadece rahatlık değil; terapötik bir yöntemdir. Kas
              gerginliğini azaltır, kan dolaşımını iyileştirir, ödem giderir ve
              mental stresı hafifletir.
            </p>
            <p>
              Lenfödem, lipödem, kronik ağrılar ve postüral sorunlara karşı
              bilimsel ve etkili bir yaklaşım sunuyoruz.
            </p>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className={styles.features} data-reveal>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresHead}>
              <span className={styles.tag}>Hizmetlerimiz</span>
              <h2>Masaj Türleri</h2>
            </div>

            <div className={styles.featuresGrid}>
              {treatments.map((treatment, i) => (
                <div
                  key={treatment.title}
                  className={styles.featureCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.featureIcon}>{treatment.icon}</div>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits} data-reveal>
          <div className={styles.benefitsWrap}>
            <span className={styles.tag}>Faydalar</span>
            <h2>Masajın Etkileri</h2>

            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className={styles.benefitCard}
                  data-reveal
                >
                  <h3>{benefit.title}</h3>
                  <ul className={styles.benefitList}>
                    {benefit.items.map((item) => (
                      <li key={item}>
                        <span className={styles.dot}>●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.process} data-reveal>
          <div className={styles.processWrap}>
            <span className={styles.tag}>Süreç</span>
            <h2>Masaj Seansı Nasıl İlerlediğini</h2>

            <div className={styles.processSteps}>
              {process.map((item, i) => (
                <div
                  key={item.step}
                  className={styles.processStep}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.stepNum}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.cta} data-reveal>
          <div className={styles.ctaInner}>
            <h2>Ağrısız Yaşamı Bulun</h2>
            <p>
              Profesyonel masaj terapistlerimiz, kronik ağrılarınızı azaltmak ve
              wellness yolculuğunuzu desteklemek için buradayız.
            </p>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/contact")}
              >
                İlk Seans Al
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => navigate("/about")}
              >
                Uzmanlarımızı Tanıyın
              </button>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className={styles.navigation}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            ← Geri Dön
          </button>
        </section>
      </div>
    </>
  );
};

export default MassagePage;
