import React from "react";
import styles from "./services.module.css";
import bodyImg from "../../../assets/images/bodyimage.png";
import message from "../../../assets/images/massage.png";
import laserImg from "../../../assets/images/laser.png";
import skinCareImg from "../../../assets/images/cilt.png";
import { Link } from "react-router-dom";

const services = [
  {
    image: bodyImg,
    tag: "Estetik",
    title: "Bölgesel İncelme",
    description:
      "Cihaz destekli teknolojilerle hedef bölgede incelme, sıkılaşma ve şekillendirme.",
    points: ["EmShape & G5 uygulamaları", "Lenf drenaj", "Ozon sauna"],
    link: "/hizmetler/incelme",
  },

  {
    image: message,
    tag: "Masaj",
    title: "Masaj Uygulamaları",
    description:
      "Ağrı yönetimi, ödem giderilmesi ve dolaşımın desteklenmesine yönelik profesyonel masaj uygulamaları.",
    points: ["Lenfödem masajı", "Lipödem masajı", "Selülit masajı"],
    link: "/hizmetler/massage",
  },
  {
    image: laserImg,
    tag: "Lazer",
    title: "Lazer Epilasyon",
    description:
      "İstenmeyen tüylerde cilt tipine uygun planlama ile konforlu ve etkili lazer epilasyon uygulamaları.",
    points: [
      "Bölgeye özel uygulama",
      "Cilt tipine uygun planlama",
      "Konforlu seans süreci",
    ],
    link: "/hizmetler/lazer",
  },
  {
    image: skinCareImg,
    tag: "Cilt Bakımı",
    title: "Profesyonel Cilt Bakımı",
    description:
      "Cilt analizine göre nem, leke, akne ve yaşlanma karşıtı destek sağlayan profesyonel bakım uygulamaları.",
    points: ["Cilt analizi", "Nem & leke bakımı", "Anti-aging destek"],
    link: "/hizmetler/cilt-bakimi",
  },
];

const Services = () => (
  <section className={styles.services} id="services">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.tag}>Hizmetlerimiz</span>
        <h2 className={styles.title}>
          Size özel <em>çözümler</em>
        </h2>
        <p className={styles.subtitle}>
          Estetik, masaj, lazer ve cilt bakımı alanlarında profesyonel
          kadromuzla yanınızdayız.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            className={styles.card}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className={styles.cardImg}>
              <img src={s.image} alt={s.title} />
              <span className={styles.cardTag}>{s.tag}</span>
            </div>

            <div className={styles.cardBody}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>

              <ul className={styles.cardPoints}>
                {s.points.map((p, j) => (
                  <li key={j}>
                    <span className={styles.dot} />
                    {p}
                  </li>
                ))}
              </ul>

              <Link to={s.link} className={styles.cardBtn}>
                Detaylı İncele →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
