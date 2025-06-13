import React from "react";
import styles from "./services.module.css";
import dietImg from "../../../assets/images/diet.png";
import bodyImg from "../../../assets/images/body.png";
import wellnessImg from "../../../assets/images/wellness.png";
import { Link } from "react-router-dom";

const services = [
  {
    image: dietImg,
    title: "Bireysel Diyet Desteği",
    description: "Size özel hazırlanan diyet programlarıyla hedefinize ulaşın.",
    link: "/hizmetler/diyet",
  },
  {
    image: bodyImg,
    title: "Bölgesel İncelme",
    description: "Cihaz destekli vücut şekillendirme teknikleri.",
    link: "/hizmetler/incelme",
  },
  {
    image: wellnessImg,
    title: "Wellness Uygulamaları",
    description: "Zihin, beden ve ruh dengesini destekleyen çözümler.",
    link: "/hizmetler/wellness",
  },
];

const Services = () => (
  <section className={styles.services} id="services">
    <h2 className={styles.title}>Hizmetlerimiz</h2>
    <div className={styles.grid}>
      {services.map((s, i) => (
        <div className={styles.card} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
          <img src={s.image} alt={s.title} className={styles.image} />
          <div className={styles.content}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
          <div className={styles.overlay}>
            <Link to={s.link} className={styles.btn}>
              Hizmeti Gör
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
