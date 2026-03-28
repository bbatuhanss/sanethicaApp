import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./detail.module.css";

const IncelmePage = () => {
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
      title: "G5 Masajı",
      desc: "Vibratör teknolojisi ile yağ hücrelerini kırmak ve lenfatik sistemi aktive etmek",
    },
    {
      icon: "💧",
      title: "Lenf Drenajı",
      desc: "Manuel veya cihaz destekli tekniklerle vücuda biriken sıvı ve ödemi uzaklaştırma",
    },
    {
      icon: "⚡",
      title: "EMShape",
      desc: "Elektromanyetik yüksek şiddetli odaklanmış ultrason ile kas gelişimi ve yağ yakımı",
    },
    {
      icon: "🔥",
      title: "Ozon Sauna",
      desc: "Ozonlu sıcak buhar ile detoks, metabolizm artırma ve bağışıklık güçlendirme",
    },
    {
      icon: "💪",
      title: "Crush Tedavisi",
      desc: "Mekanik basınç ile hücre revitalizasyonu, selülit azaltma ve sıkılaştırma",
    },
    {
      icon: "🎯",
      title: "Smash Cihazı",
      desc: "Titreşimli masaj teknolojisi ile bölgesel yağ azaltma ve vücut tonlaştırma",
    },
  ];

  const areas = [
    { name: "Karın & Yan", icon: "⭕" },
    { name: "Kalça & Bacaklar", icon: "🍑" },
    { name: "Kol & Omuz", icon: "💪" },
    { name: "Gögüs", icon: "💎" },
    { name: "Sırt & Bel", icon: "🔐" },
    { name: "Çene Altı", icon: "✨" },
  ];

  const process = [
    {
      step: "1",
      title: "Bölgesel Değerlendirme",
      desc: "Problem alanlarını tanımlamak, cilt kalitesini ve yağ dağılımını analiz etme",
    },
    {
      step: "2",
      title: "Tedavi Planı",
      desc: "Soruna uygun cihaz ve uygulama kombinasyonunun belirlenmesi",
    },
    {
      step: "3",
      title: "Seans Uygulaması",
      desc: "Profesyonel terapist tarafından 30-60 dakika tedavi seansı",
    },
    {
      step: "4",
      title: "Sonuçları Gözleme",
      desc: "6-8 seansla görülecek ilk sonuçlar, 12 seansla köklü değişim",
    },
  ];

  const results = [
    {
      title: "İlk Haftalar",
      time: "1-2 Hafta",
      desc: "Şişkinlik azalması, enerji artışı, cilt iyileştirmesi",
    },
    {
      title: "Ay",
      time: "4-6 Hafta",
      desc: "Görünür selülit azalması, bölgesel incelme, cilt sıkılaşması",
    },
    {
      title: "Aylar",
      time: "3 Ay",
      desc: "Köklü değişim, vücut şekillenmesi, uzun vadeli sonuçlar",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bölgesel İncelme | Sanethica</title>
        <meta
          name="description"
          content="G5, EMShape, Ozon Sauna ve modern cihazlarla bölgesel yağ azaltma ve vücut şekillendirme."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>Cihaz & Tedaviler</span>
            <h1 className={styles.heroTitle}>
              Bölgesel <em>İncelme</em>
            </h1>
            <p className={styles.heroSub}>
              Modern teknoloji ile inatçı yağları azaltın, vücut hatlarınızı
              şekillendirin
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
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            alt="Bölgesel İncelme"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Sorun Nedir?</span>
            <h2>Inatçı Yağlar & Selülit</h2>
            <p>
              Bazı vücut bölgelerindeki yağ birikintileri, ne kadar diyet
              yapsanız ne kadar antrenman yapsanız, genetik yapı ve hormonel
              faktörler nedeniyle uzaklaşmayabilir.
            </p>
            <p>
              Çözümü: Bilimsel teknoloji ve profesyonel tedavilerle inatçı
              yağlardan kurtulun.
            </p>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className={styles.features} data-reveal>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresHead}>
              <span className={styles.tag}>Teknolojiler</span>
              <h2>İleri Teknoloji Cihazlar</h2>
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

        {/* TREATMENT AREAS */}
        <section className={styles.areas} data-reveal>
          <div className={styles.areasWrap}>
            <span className={styles.tag}>Tedavi Alanları</span>
            <h2>Hangi Bölgeleri Tedavi Edebiliriz?</h2>

            <div className={styles.areasGrid}>
              {areas.map((area) => (
                <div key={area.name} className={styles.areaCard}>
                  <div className={styles.areaIcon}>{area.icon}</div>
                  <p>{area.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.process} data-reveal>
          <div className={styles.processWrap}>
            <span className={styles.tag}>Süreç</span>
            <h2>Tedavi Nasıl İşliyor?</h2>

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

        {/* RESULTS TIMELINE */}
        <section className={styles.results} data-reveal>
          <div className={styles.resultsWrap}>
            <span className={styles.tag}>Sonuçlar</span>
            <h2>Zaman İçinde Neler Beklenir?</h2>

            <div className={styles.resultsGrid}>
              {results.map((result) => (
                <div
                  key={result.time}
                  className={styles.resultCard}
                  data-reveal
                >
                  <div className={styles.resultTime}>{result.time}</div>
                  <h3>{result.title}</h3>
                  <p>{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.cta} data-reveal>
          <div className={styles.ctaInner}>
            <h2>Kendinize Güven Kazandırın</h2>
            <p>
              Bölgesel incelme tedavileri ile problem alanlarınızdan kurtulun ve
              kendinizde hissettiğiniz rahatlığı dış görünüşünüze yansıtın.
            </p>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/contact")}
              >
                Seans Başlat
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

export default IncelmePage;
