import React from "react";
import styles from "./services.module.css";
import dietImg from "../../../assets/images/dietimage.png";
import bodyImg from "../../../assets/images/bodyimage.png";
import wellnessImg from "../../../assets/images/wellnessimage.png";
import message from "../../../assets/images/massage.png";

import { Link } from "react-router-dom";

const services = [
  {
    image: dietImg,
    tag: "Beslenme",
    title: "Bireysel Diyet Desteği",
    description:
      "Metabolik analizinize dayanan, yaşam tarzınıza uygun kişisel beslenme programları.",
    points: [
      "İnsülin direnci & metabolik sağlık",
      "Kilo yönetimi",
      "Klinik beslenme",
    ],
    link: "/hizmetler/diyet",
  },
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
    image: wellnessImg,
    tag: "Wellness",
    title: "Wellness Uygulamaları",
    description:
      "Zihin, beden ve ruh dengesini destekleyen bütünsel wellness çözümleri.",
    points: ["Stres yönetimi", "Detoks programları", "Yaşam tarzı koçluğu"],
    link: "/hizmetler/wellness",
  },

  {
    image: message,
    tag: "Masaj",
    title: "Masaj Uygulamaları",
    description:
      "Ağrı yönetimi, dolaşım iyileştirmesi sağlama, ödem giderilmesi, dolaşım desteklenmesi ",
    points: [" Lenfödem masajı ", "Lipödem masajı", "Selülit masajı "],
    link: "/hizmetler/massage",
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
          Dört temel alanda uzman kadromuzla yanınızdayız.
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
