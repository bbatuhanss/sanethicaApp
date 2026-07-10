import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./detail.module.css";
import skinCareImg from "../../assets/images/bakim.png";

const SkinCarePage = () => {
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

  const deviceSpecs = [
    { name: "Kameralı Cilt Analizi", icon: "📷" },
    { name: "Hydradermabrazyon", icon: "💧" },
    { name: "RF Eye", icon: "👁️" },
    { name: "RF Face", icon: "✨" },
    { name: "Serum Destekli Bakım", icon: "🧴" },
    { name: "Kişiye Özel Protokol", icon: "📋" },
  ];

  const treatments = [
    {
      icon: "📷",
      title: "Kameralı Cilt Analizi",
      desc: "Cildin nem, gözenek, leke, yağ dengesi ve genel görünümü analiz edilerek bakım süreci kişiye özel planlanır.",
    },
    {
      icon: "💧",
      title: "Hydradermabrazyon",
      desc: "Özel solüsyon ve vakum destekli sistem ile cildin arındırılması, temizlenmesi ve nemlendirilmesi hedeflenir.",
    },
    {
      icon: "👁️",
      title: "RF Eye Göz Çevresi Bakımı",
      desc: "Göz çevresindeki ince çizgi, yorgun görünüm ve hassasiyet için destekleyici bakım uygulaması sunar.",
    },
    {
      icon: "✨",
      title: "RF Face Cilt Bakımı",
      desc: "Cilt görünümünü toparlamaya, daha canlı ve dengeli bir görünüm kazandırmaya yardımcı profesyonel bakım adımıdır.",
    },
    {
      icon: "🧴",
      title: "Serum Destekli Nem Bakımı",
      desc: "Cildin ihtiyacına uygun serumlarla nem dengesini destekleyen daha parlak ve taze bir görünüm hedeflenir.",
    },
    {
      icon: "🌿",
      title: "Gözenek & Siyah Nokta Bakımı",
      desc: "Cilt yüzeyinde biriken kir, yağ ve siyah nokta görünümünü azaltmaya yönelik arındırıcı bakım yapılır.",
    },
  ];

  const benefits = [
    {
      title: "Temiz & Arınmış Cilt",
      items: [
        "Derinlemesine temizlik desteği",
        "Gözenek görünümünde azalma hedefi",
        "Siyah nokta ve yağlanma kontrolü",
      ],
    },
    {
      title: "Nem & Canlılık",
      items: [
        "Nem dengesini destekleme",
        "Daha aydınlık cilt görünümü",
        "Mat ve yorgun görünümü azaltmaya destek",
      ],
    },
    {
      title: "Kişiye Özel Bakım",
      items: [
        "Kameralı analiz ile değerlendirme",
        "Cilt tipine uygun protokol",
        "İhtiyaca göre bakım planı",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Kameralı Cilt Analizi",
      desc: "Cilt tipi, nem dengesi, gözenek yapısı ve bakım ihtiyacı değerlendirilir.",
    },
    {
      step: "2",
      title: "Kişiye Özel Protokol",
      desc: "Analiz sonucuna göre cilde uygun bakım adımları ve ürünler belirlenir.",
    },
    {
      step: "3",
      title: "Hydrafacial Uygulaması",
      desc: "Temizleme, arındırma, serum ve nemlendirme adımları profesyonel cihaz desteğiyle uygulanır.",
    },
    {
      step: "4",
      title: "Bakım Önerisi",
      desc: "Seans sonrası cilt tipinize uygun ev bakım önerileri paylaşılır.",
    },
  ];

  const skinTypes = [
    { name: "Kuru Cilt", icon: "💧" },
    { name: "Yağlı Cilt", icon: "✨" },
    { name: "Karma Cilt", icon: "🌿" },
    { name: "Hassas Cilt", icon: "🤍" },
    { name: "Leke Eğilimli Cilt", icon: "☀️" },
    { name: "Akneye Eğilimli Cilt", icon: "🔬" },
  ];

  return (
    <>
      <Helmet>
        <title>Hydrafacial Sunshine With Camera | Sanethica</title>
        <meta
          name="description"
          content="Sanethica’da Hydrafacial Sunshine With Camera cihazı ile kameralı cilt analizi, hydradermabrazyon ve kişiye özel profesyonel cilt bakımı."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>
              Hydrafacial Sunshine With Camera
            </span>

            <h1 className={styles.heroTitle}>
              Profesyonel <em>Cilt Bakımı</em>
            </h1>

            <p className={styles.heroSub}>
              Kameralı cilt analizi, hydradermabrazyon ve serum destekli bakım
              adımlarıyla cildinize özel profesyonel bakım deneyimi
            </p>

            <button
              className={styles.heroCta}
              onClick={() => navigate("/contact")}
            >
              Randevu Al →
            </button>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section className={styles.imageSection} data-reveal>
          <img
            src={skinCareImg}
            alt="Hydrafacial Sunshine With Camera Cilt Bakımı"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Yeni Nesil Cilt Bakımı</span>

            <h2>Hydrafacial Sunshine With Camera ile Cilt Analizi</h2>

            <p>
              Sanethica’da profesyonel cilt bakımı, Hydrafacial Sunshine With
              Camera cihazı ile gerçekleştirilir. Kameralı analiz sistemi
              sayesinde cildin ihtiyacı daha net değerlendirilir ve bakım süreci
              kişiye özel planlanır.
            </p>

            <p>
              Hydradermabrazyon, RF Eye, RF Face ve serum destekli bakım
              adımlarıyla cildin temizlenmesi, nemlendirilmesi ve daha canlı bir
              görünüm kazanması hedeflenir.
            </p>
          </div>
        </section>

        {/* DEVICE SPECS */}
        <section className={styles.areas} data-reveal>
          <div className={styles.areasWrap}>
            <span className={styles.tag}>Cihaz Özellikleri</span>
            <h2>Hydrafacial Sunshine Öne Çıkanlar</h2>

            <div className={styles.areasGrid}>
              {deviceSpecs.map((item) => (
                <div key={item.name} className={styles.areaCard}>
                  <div className={styles.areaIcon}>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className={styles.features} data-reveal>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresHead}>
              <span className={styles.tag}>Uygulamalar</span>
              <h2>Cilt Bakımı Hizmetleri</h2>
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

        {/* SKIN TYPES */}
        <section className={styles.areas} data-reveal>
          <div className={styles.areasWrap}>
            <span className={styles.tag}>Cilt Tipleri</span>
            <h2>Hangi Cilt Tipleri İçin Uygundur?</h2>

            <div className={styles.areasGrid}>
              {skinTypes.map((item) => (
                <div key={item.name} className={styles.areaCard}>
                  <div className={styles.areaIcon}>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits} data-reveal>
          <div className={styles.benefitsWrap}>
            <span className={styles.tag}>Faydalar</span>
            <h2>Hydrafacial Bakımın Etkileri</h2>

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
            <h2>Cilt Bakımı Nasıl İlerler?</h2>

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

        {/* CTA */}
        <section className={styles.cta} data-reveal>
          <div className={styles.ctaInner}>
            <h2>Cildinizin Işıltısını Ortaya Çıkarın</h2>

            <p>
              Hydrafacial Sunshine With Camera teknolojisiyle cildinizi analiz
              edelim, ihtiyacınıza uygun profesyonel bakım sürecinizi birlikte
              planlayalım.
            </p>

            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/contact")}
              >
                Randevu Al
              </button>

              <button
                className={styles.secondaryBtn}
                onClick={() => navigate("/about")}
              >
                Merkezimizi Tanıyın
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

export default SkinCarePage;
