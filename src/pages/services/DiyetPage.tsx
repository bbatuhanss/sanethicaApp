import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import dietImg from "../../assets/images/dietimage.png";
import styles from "./detail.module.css";

const DiyetPage = () => {
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

  const features = [
    {
      icon: "📊",
      title: "Detaylı Vücut Analizi",
      desc: "InBody veya DEXA cihazlarıyla beden bileşimi, kas kütlesi, yağ oranı ve su dengesinin ölçümü",
    },
    {
      icon: "🎯",
      title: "Kişiye Özel Beslenme Planı",
      desc: "Yaşam tarzı, tercihler ve sağlık durumunuza göre kişiselleştirilmiş, sürdürülebilir diyetler",
    },
    {
      icon: "📈",
      title: "Haftalık Takip & Destek",
      desc: "Düzenli kontrollerle ilerlemenizi izleme ve gerekirse planı dinamik olarak ayarlama",
    },
    {
      icon: "🧠",
      title: "Duygusal Yeme Danışmanlığı",
      desc: "Stress, anksiyete ve duygularla tetiklenen yeme davranışlarıyla başa çıkma",
    },
    {
      icon: "💪",
      title: "Spor Beslenme Desteği",
      desc: "Egzersiz rutininize uygun enerji, protein ve makro/mikro beslenme planlaması",
    },
    {
      icon: "📚",
      title: "Beslenme Eğitimi",
      desc: "Etiketteme okuma, market alışverişi ve ev yemeği pişirme teknikleri",
    },
  ];

  const process = [
    {
      step: "1",
      title: "İlk Konsültasyon",
      desc: "Sağlık öyküsü, beslenme alışkanlıkları, hedefler ve yaşam tarzı hakkında detaylı görüşme",
    },
    {
      step: "2",
      title: "Vücut Analizi",
      desc: "Profesyonel cihazlarla beden bileşimi ölçümü, metabolik profil belirleme",
    },
    {
      step: "3",
      title: "Plan Tasarımı",
      desc: "Tüm veriler doğrultusunda kişiye özel, deneyebileceğiniz bir beslenme programı",
    },
    {
      step: "4",
      title: "Düzenli Takip",
      desc: "E-mail, WhatsApp veya face-to-face seanslarla ilerleme takibi ve destek",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bireysel Diyet Desteği | Sanethica</title>
        <meta
          name="description"
          content="Kişiye özel beslenme programları, vücut analizi ve haftalık takip ile sağlıklı yaşam yolculuğuna başlayın."
        />
      </Helmet>

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent} data-reveal>
            <span className={styles.heroTag}>Beslenme Danışmanlığı</span>
            <h1 className={styles.heroTitle}>
              Bireysel <em>Diyet Desteği</em>
            </h1>
            <p className={styles.heroSub}>
              Kişiye özel, bilimsel temelli beslenme programları ile sağlıklı ve
              sürdürülebilir dönüşüm
            </p>
            <button
              className={styles.heroCta}
              onClick={() => navigate("/contact")}
            >
              Danışmanlık Al →
            </button>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section className={styles.imageSection} data-reveal>
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Bireysel Diyet Desteği"
            className={styles.mainImage}
            loading="lazy"
          />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro} data-reveal>
          <div className={styles.introContent}>
            <span className={styles.tag}>Neden Gerekli?</span>
            <h2>Sağlıklı Beslenme, Sağlıklı Yaşam</h2>
            <p>
              Günümüzün yoğun yaşam temposu ve yanlış beslenme alışkanlıkları,
              vücut ve zihinsel sağlığımızı olumsuz etkiliyor. Hızlı tüketilen
              fast food, yetersiz uyku ve hidratasyon eksikliği; giderek artan
              metabolik hastalıklar ve kilo problemlerine yol açmaktadır.
            </p>
            <p>
              Tıkla geçme diyetler veya internet formulaları işe yaramaz. Her
              vücut farklı, her yaşam ritmi benzersiz, her hedef özel...
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.features} data-reveal>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresHead}>
              <span className={styles.tag}>Neler Sunuyoruz?</span>
              <h2>Kapsamlı Diyet Desteği</h2>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={styles.featureCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.process} data-reveal>
          <div className={styles.processWrap}>
            <span className={styles.tag}>Adım Adım</span>
            <h2>Danışmanlık Süreci</h2>

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
            <h2>Sağlıklı Dönüşüme Başlayın</h2>
            <p>
              500+ memnun danışanımız hayatlarında olumlu değişim yaşadı. Siz de
              bu başarı hikayesinin bir parçası olabilirsiniz.
            </p>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/contact")}
              >
                Ücretsiz Danışmanlık Al
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

export default DiyetPage;
