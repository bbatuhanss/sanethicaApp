import React from "react";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

import bolgeselImg from "../../../assets/images/blog/bolgesel-incelme.png";
import emshapeImg from "../../../assets/images/blog/emshape.png";
import lenfImg from "../../../assets/images/blog/lenf-drenaj.png";
import selulitImg from "../../../assets/images/blog/selulit.png";
import ozonImg from "../../../assets/images/blog/ozon-sauna.png";

const articles = [
  {
    title: "Bölgesel İncelme Nasıl Çalışır?",
    desc: "EmShape, G5 ve lenf drenaj uygulamalarıyla hedef bölgede şekillenme ve sıkılaşma desteği.",
    image: bolgeselImg,
    slug: "bolgesel-incelme-nasil-calisir",
    tag: "Estetik",
  },
  {
    title: "EmShape Nedir? Kimler İçin Uygundur?",
    desc: "Elektromanyetik kas stimülasyonu ile kas aktivasyonu ve bölgesel şekillendirme desteği.",
    image: emshapeImg,
    slug: "emshape-nedir",
    tag: "Cihaz Teknolojisi",
  },
  {
    title: "Lenf Drenaj Masajının Faydaları",
    desc: "Ödem, dolaşım desteği ve hafifleme hissi için profesyonel lenf drenaj uygulaması.",
    image: lenfImg,
    slug: "lenf-drenaj-faydalari",
    tag: "Masaj",
  },
  {
    title: "Selülitle Baş Etmenin Etkili Yolları",
    desc: "G5, lenf drenaj, EmShape ve ozon sauna ile selülit görünümüne karşı destekleyici bakım.",
    image: selulitImg,
    slug: "selulit-ile-bas-etme",
    tag: "Estetik",
  },
  {
    title: "Ozon Sauna: Detoks ve Dolaşım Desteği",
    desc: "Ozon sauna ile arınma, rahatlama ve dolaşım desteği sağlayan wellness deneyimi.",
    image: ozonImg,
    slug: "ozon-sauna-nedir",
    tag: "Wellness",
  },
];

const Blog = () => (
  <section className={styles.blog} id="blog">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.tag}>Blog</span>
        <h2 className={styles.title}>
          Beauty & Wellness <em>rehberi</em>
        </h2>
        <p className={styles.subtitle}>
          Profesyonellerimizden estetik, cihaz teknolojisi ve wellness
          içerikleri.
        </p>
      </div>

      <div className={styles.grid}>
        {articles.map((a, i) => (
          <Link
            to={`/blog/${a.slug}`}
            key={i}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className={styles.cardImg}>
              <img src={a.image} alt={a.title} />
              <span className={styles.cardTag}>{a.tag}</span>
            </div>

            <div className={styles.cardBody}>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <span className={styles.readMore}>Devamını Oku →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
