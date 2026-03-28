import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./about.module.css";
import Footer from "components/footer/footer";

const team = [
  {
    name: "Uzm.Dyt. Ayyüce Keskinler Sevinç",
    title: "Klinik Diyetisyen & Kurucu Ortağı",
    desc: "Medipol Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. 8+ yıl klinik beslenme deneyimi. Metabolik sendrom, tip 2 diyabet yönetimi, spor beslenmesi ve kişiye özel beslenme programları konularında uzman. Danışanlarının yaşam tarzını kalıcı şekilde dönüştürmede odaklanmış.",
    emoji: "🌿",
    tags: ["Metabolik Sağlık", "Diyabet Yönetimi", "Klinik Beslenme"],
    edu: "Medipol Üniversitesi",
    exp: "8+ Yıl",
  },
  {
    name: "Uzm.Dyt. Sevgi Deren Yağdı Çelik",
    title: "Klinik Diyetisyen & Kurucu Ortağı",
    desc: "Acıbadem Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Fonksiyonel tıp beslenme uzmanı, bağırsak mikrobiyomu ve yaşam tarzı tıbbı alanında sertifikalı. Wellness ve bölgesel incelme programlarında 8+ yıl deneyim.",
    emoji: "✨",
    tags: ["Fonksiyonel Tıp Beslenme", "Wellness", "Mikrobiyom"],
    edu: "Acıbadem Üniversitesi",
    exp: "8+ Yıl",
  },
];

const values = [
  {
    icon: "◎",
    label: "Bütünsel Yaklaşım",
    desc: "Beden, zihin ve ruhu bir bütün olarak ele alıyor, süreci yalnızca kilo odaklı değil yaşam kalitesi odaklı kurguluyoruz.",
  },
  {
    icon: "◈",
    label: "Bilimsel Temeller",
    desc: "Tüm önerilerimiz kanıta dayalı beslenme bilimi ve güncel klinik yaklaşımlar doğrultusunda hazırlanır.",
  },
  {
    icon: "◇",
    label: "Kişisel Odak",
    desc: "Her danışanın yaşam ritmi, sağlık öyküsü ve hedefi farklıdır; planlarımız da buna göre şekillenir.",
  },
  {
    icon: "◉",
    label: "Sürdürülebilirlik",
    desc: "Geçici listeler değil, günlük hayata uyum sağlayan sürdürülebilir alışkanlıklar kazandırmayı hedefleriz.",
  },
];

const stats = [
  { v: "1000+", l: "Mutlu Danışan" },
  { v: "%98", l: "Danışan Memnuniyeti" },
];

const storyMeta = [
  ["Ataşehir", "İstanbul"],
  ["2", "Kurucusu"],
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
        <title>Hakkımızda | Sanethica</title>
        <meta
          name="description"
          content="Sanethica uzman diyetisyen kadrosu ile klinik beslenme, wellness ve kişiye özel sağlıklı yaşam danışmanlığı sunar."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className={styles.page}>
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
              Sağlıklı yaşam
              <br />
              <em>bilim ile başlar</em>
            </h1>

            <p className={styles.heroSub}>
              Uzman diyetisyen kadromuzla klinik beslenme, bölgesel incelme ve
              wellness hizmetlerini estetik, etik ve bilimsel bir yaklaşımla
              sunuyoruz.
            </p>

            <div className={styles.heroActions}>
              <a href="/contact" className={styles.heroPrimaryBtn}>
                Randevu Al
              </a>
              <a href="/services" className={styles.heroSecondaryBtn}>
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

        <section className={styles.story}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCard} data-reveal>
              <div className={styles.scNoise} />
              <span className={styles.scLeaf}>🌱</span>

              <p className={styles.scQuote}>
                "Sağlık; sadece kilo değil,
                <br />
                denge, güç ve huzurdur."
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
              <span className={styles.tag}>Hakkımızda</span>

              <h2 className={styles.h2}>
                Neden <em>Sanethica</em>?
              </h2>

              <p>
                Sanethica, 2025 yılında kurucuları Uzm.Dyt. Ayyüce Keskinler
                Sevinç ve Uzm.Dyt. Sevgi Deren Yağdı Çelik tarafından sağlıklı
                yaşamı yalnızca kilo vermekle sınırlamayan; beden, zihin ve
                yaşam düzenini birlikte ele alan bütünsel bir yaklaşımla
                kuruldu.
              </p>

              <p>
                "Sante" sağlık, "Ethica" ise etik yaklaşımı temsil eder.
                Ataşehir'de yer alan kliniğimizde, biz danışanlarımıza katı
                listeler değil; sürdürülebilir, gerçek hayatla uyumlu bir yaşam
                biçimi sunmayı hedefliyoruz.
              </p>

              <a href="/contact" className={styles.btn}>
                Ücretsiz Ön Görüşme →
              </a>
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <div className={styles.teamWrap}>
            <div className={styles.teamHead} data-reveal>
              <span className={styles.tag}>Uzman Kadromuz</span>

              <h2 className={styles.h2}>
                Alanında kanıtlanmış <em>diyetisyenler</em>
              </h2>

              <p className={styles.teamSub}>
                Güçlü akademik altyapı, klinik deneyim ve danışan odaklı
                yaklaşım ile sağlıklı dönüşüm sürecinizi güvenle planlıyoruz.
              </p>
            </div>

            <div className={styles.mainTeamGrid}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={styles.mainTeamCard}
                  data-reveal
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className={styles.mtCardGlow} />

                  <div className={styles.mtTop}>
                    <div className={styles.mtAvatarWrap}>
                      <div className={styles.mtAvatar}>{member.emoji}</div>
                    </div>

                    <div className={styles.mtMeta}>
                      <span className={styles.mtTitle}>{member.title}</span>
                      <h3 className={styles.mtName}>{member.name}</h3>
                    </div>
                  </div>

                  <p className={styles.mtDesc}>{member.desc}</p>

                  <div className={styles.mtStats}>
                    <div className={styles.mtStat}>
                      <strong>{member.exp}</strong>
                      <span>Deneyim</span>
                    </div>

                    <div className={styles.mtStatDiv} />

                    <div className={styles.mtStatDiv} />

                    <div className={styles.mtStat}>
                      <strong>🎓</strong>
                      <span>{member.edu.split(" ")[0]}</span>
                    </div>
                  </div>

                  <div className={styles.mtTags}>
                    {member.tags.map((tag) => (
                      <span key={tag} className={styles.mtTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="/contact" className={styles.mtCta}>
                    Bu Uzmanla Görüş →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className={styles.cta} data-reveal>
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaWrap}>
            <span className={styles.ctaEyebrow}>Hemen Başlayın</span>

            <h2>
              Değişim için <em>doğru adres</em>
            </h2>

            <p>
              İlk görüşme ile sürecinizi birlikte değerlendirelim, size en uygun
              beslenme ve wellness planını oluşturalım.
            </p>

            <div className={styles.ctaBtns}>
              <a href="/contact" className={styles.ctaPrimary}>
                Ücretsiz Görüşme Al
              </a>
            </div>

            <p className={styles.ctaNote}>
              1000+ danışan deneyimi, etik yaklaşım ve kişiye özel planlama.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
