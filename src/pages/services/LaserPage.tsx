import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./detail.module.css";
import laserImg from "../../assets/images/lazer.png";

const LaserPage = () => {
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
      icon: "🤖",
      title: "Yapay Zeka Destekli Analiz",
      desc: "Alby Pro Diode Laser, cilt tonu ve kıl yapısına göre enerji, atım süresi ve soğutma ayarlarının kişiye özel planlanmasını destekler.",
    },
    {
      icon: "⚡",
      title: "808 nm Diode Lazer Teknolojisi",
      desc: "808 nm diode lazer teknolojisiyle kıl köklerine odaklanan güçlü, hızlı ve konforlu bir epilasyon deneyimi sunar.",
    },
    {
      icon: "❄️",
      title: "-21°C Gelişmiş Soğutma",
      desc: "Gelişmiş soğutma sistemi sayesinde uygulama sırasında konfor artırılır ve cilt hassasiyeti azaltılmaya destek olunur.",
    },
    {
      icon: "🎯",
      title: "Geniş Spot Başlık",
      desc: "12x20 mm geniş spot başlık ile büyük bölgelerde daha hızlı, 12x12 mm başlık ile hassas bölgelerde kontrollü uygulama yapılabilir.",
    },
    {
      icon: "💪",
      title: "Profesyonel Cihaz Gücü",
      desc: "5000 Watt cihaz gücü ve 1600 Watt Amerikan bar desteğiyle profesyonel merkez standartlarında güçlü uygulama imkanı sağlar.",
    },
    {
      icon: "📋",
      title: "Seans Geçmişi Takibi",
      desc: "Danışan kayıtları ve seans geçmişi takip edilerek lazer epilasyon süreci daha kontrollü ve kişiye özel şekilde ilerletilir.",
    },
  ];

  const areas = [
    { name: "Yüz", icon: "😊" },
    { name: "Koltuk Altı", icon: "✨" },
    { name: "Kol", icon: "💪" },
    { name: "Bacak", icon: "🦵" },
    { name: "Sırt & Ense", icon: "🔹" },
    { name: "Bikini Bölgesi", icon: "💎" },
  ];

  const process = [
    {
      step: "1",
      title: "Cilt & Kıl Analizi",
      desc: "Cilt tonu, kıl yoğunluğu, kıl yapısı ve uygulama yapılacak bölge değerlendirilir.",
    },
    {
      step: "2",
      title: "Kişiye Özel Planlama",
      desc: "Alby Pro Diode Laser teknolojisiyle bölgeye ve ihtiyaca uygun seans planı oluşturulur.",
    },
    {
      step: "3",
      title: "Konforlu Uygulama",
      desc: "Gelişmiş soğutma sistemi eşliğinde hijyenik ve profesyonel ortamda uygulama yapılır.",
    },
    {
      step: "4",
      title: "Düzenli Takip",
      desc: "Seans aralıkları, cilt tepkisi ve gelişim süreci takip edilerek uygulama planı güncellenir.",
    },
  ];

  const benefits = [
    {
      title: "Teknolojik Güç",
      items: [
        "Alby Pro Diode Laser cihazı",
        "Yapay zeka destekli analiz",
        "808 nm diode lazer teknolojisi",
      ],
    },
    {
      title: "Konforlu Deneyim",
      items: [
        "-21°C gelişmiş soğutma desteği",
        "Hızlı ve kontrollü uygulama",
        "Cilt hassasiyetini azaltmaya destek sistem",
      ],
    },
    {
      title: "Kişiye Özel Süreç",
      items: [
        "Cilt ve kıl yapısına göre planlama",
        "Düzenli seans takibi",
        "Yüksek verim hedefleyen profesyonel uygulama",
      ],
    },
  ];

  const deviceSpecs = [
    { name: "808 nm Diode", icon: "⚡" },
    { name: "Yapay Zeka", icon: "🤖" },
    { name: "-21°C Soğutma", icon: "❄️" },
    { name: "12x20 mm Spot", icon: "🎯" },
    { name: "5000W Güç", icon: "💪" },
    { name: "Seans Takibi", icon: "📋" },
  ];

  return (
    <>
      <Helmet>
        <title>Alby Pro Diode Lazer Epilasyon | Sanethica</title>
        <meta
          name="description"
          content="Sanethica’da Alby Pro Diode Laser ile yapay zeka destekli, konforlu ve kişiye özel lazer epilasyon uygulamaları."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>Alby Pro Diode Laser</span>

            <h1 className={styles.heroTitle}>
              Lazer <em>Epilasyon</em>
            </h1>

            <p className={styles.heroSub}>
              Yapay zeka destekli Alby Pro Diode Laser teknolojisiyle hızlı,
              konforlu ve kişiye özel epilasyon deneyimi
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
            src={laserImg}
            alt="Alby Pro Diode Lazer Epilasyon"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Yeni Nesil Teknoloji</span>

            <h2>Alby Pro Diode Laser ile Profesyonel Epilasyon</h2>

            <p>
              Sanethica’da lazer epilasyon uygulamaları, Alby Pro Diode Laser
              cihazı ile gerçekleştirilir. Yapay zeka destekli analiz sistemi;
              cilt tonu, kıl yapısı ve uygulama bölgesine göre kişiye özel
              planlama yapılmasını destekler.
            </p>

            <p>
              808 nm diode lazer teknolojisi, -21°C gelişmiş soğutma sistemi ve
              geniş spot başlık desteğiyle daha hızlı, konforlu ve kontrollü bir
              epilasyon süreci hedeflenir.
            </p>
          </div>
        </section>

        {/* DEVICE SPECS */}
        <section className={styles.areas} data-reveal>
          <div className={styles.areasWrap}>
            <span className={styles.tag}>Cihaz Özellikleri</span>
            <h2>Alby Pro Diode Laser Öne Çıkanlar</h2>

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
              <span className={styles.tag}>Teknoloji</span>
              <h2>Lazer Epilasyonda Güçlü Cihaz Deneyimi</h2>
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

        {/* AREAS */}
        <section className={styles.areas} data-reveal>
          <div className={styles.areasWrap}>
            <span className={styles.tag}>Uygulama Alanları</span>
            <h2>Hangi Bölgelere Uygulanabilir?</h2>

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

        {/* BENEFITS */}
        <section className={styles.benefits} data-reveal>
          <div className={styles.benefitsWrap}>
            <span className={styles.tag}>Avantajlar</span>
            <h2>Alby Pro Diode Laser Avantajları</h2>

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
            <h2>Seans Süreci Nasıl İlerler?</h2>

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
            <h2>Alby Pro Diode Laser ile Tanışın</h2>

            <p>
              Yeni nesil yapay zeka destekli lazer teknolojisiyle cilt tipinize
              uygun, konforlu ve profesyonel epilasyon sürecinizi birlikte
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

export default LaserPage;
