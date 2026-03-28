import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./detail.module.css";

const WellnessPage = () => {
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

  const services = [
    {
      icon: "🧘",
      title: "Meditasyon & Nefes Terapileri",
      desc: "Stres azaltma, zihinsel berraklık ve duygusal dengeyi hedefleyen rehberli meditasyon seansları",
    },
    {
      icon: "🌿",
      title: "Mindfulness Çalışmaları",
      desc: "Anı yaşama, farkındalık ve benlik kabulu çalışmalarıyla yaşam kalitesini yükseltme",
    },
    {
      icon: "🌱",
      title: "Bitkisel Detokslar",
      desc: "Organik bitkilerin doğal temizleme etkisiyle vücut atıklarının zararsız uzaklaştırılması",
    },
    {
      icon: "💧",
      title: "İyonik Ayak Detoksu",
      desc: "İyonik teknoloji ile lenfatik sistem aktivasyonu, ödemi azaltma ve enerji iyileştirme",
    },
    {
      icon: "⚡",
      title: "EMShape & Cihaz Terapileri",
      desc: "Elektromanyetik teknoloji ile metabolizm hızlandırma ve selülit azaltma",
    },
    {
      icon: "🔥",
      title: "Infrared Sauna Seansları",
      desc: "Derinlemesine ısıtma, detoks, ağrı azaltma ve iyileştirme",
    },
  ];

  const benefits = [
    {
      title: "Psikiyatrik Fayda",
      items: [
        "Stres ve anksiyete azaltma",
        "Uyku kalitesi iyileştirme",
        "Duygudurum düzenlemesi",
      ],
    },
    {
      title: "Fizyolojik Fayda",
      items: [
        "Bağışıklık sistem güçlendirme",
        "Enerji seviyesi artırma",
        "Ağrı ve inflamasyonu azaltma",
      ],
    },
    {
      title: "Estetik Fayda",
      items: [
        "Cilt sağlığı ve parlaklığı",
        "Selülit görünümü azaltma",
        "Vücut sağlığı iyileştirmesi",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Wellness Uygulamaları | Sanethica</title>
        <meta
          name="description"
          content="Meditasyon, detoks, sauna ve cihaz terapileri ile beden-zihin-ruh dengesini sağlayın."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>Holistik Sağlık</span>
            <h1 className={styles.heroTitle}>
              Wellness <em>Uygulamaları</em>
            </h1>
            <p className={styles.heroSub}>
              Bedenin, zihnin ve ruhun dengesini kuran bütünsel wellness
              deneyimi
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
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            alt="Wellness Uygulamaları"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Wellness Nedir?</span>
            <h2>Beden, Zihin & Ruh Sinerji</h2>
            <p>
              Wellness, sadece hastalık olmamaktan fazlasıdır. Fiziksel güç,
              duygusal istikrar, zihinsel açıklık ve ruhsal bağlantının harmonik
              bir kombinasyonudur.
            </p>
            <p>
              Modern stres, uyku problemleri, çevresel toksinler ve duygusal
              yük, bu dengeyi bozarak kronik hastalıklara ve tükenmişliğe yol
              açmaktadır.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.features} data-reveal>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresHead}>
              <span className={styles.tag}>Hizmetlerimiz</span>
              <h2>Wellness Uygulamaları</h2>
            </div>

            <div className={styles.featuresGrid}>
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={styles.featureCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.featureIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits} data-reveal>
          <div className={styles.benefitsWrap}>
            <span className={styles.tag}>Faydalar</span>
            <h2>Wellness'ın Etkileri</h2>

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

        {/* CTA SECTION */}
        <section className={styles.cta} data-reveal>
          <div className={styles.ctaInner}>
            <h2>Sağlıklı Dönüşüme Hazır mısınız?</h2>
            <p>
              Wellness sadece bir tedavi değil, yaşam tarzı değişikliğidir. Bize
              katılarak kendi en iyi versiyonunuzu keşfedin.
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

export default WellnessPage;
