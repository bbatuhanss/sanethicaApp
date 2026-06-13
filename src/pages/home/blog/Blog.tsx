import React from "react";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Bölgesel İncelme Nasıl Çalışır?",
    desc: "EmShape, G5 ve lenf drenaj teknolojileriyle hedef bölgede kalıcı sonuçlar.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    slug: "bolgesel-incelme-nasil-calisir",
    tag: "Estetik",
  },
  {
    title: "EmShape Nedir? Kimler İçin Uygundur?",
    desc: "Elektromanyetik kas stimülasyonu ile yağ yakımı ve kas gelişimi.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    slug: "emshape-nedir",
    tag: "Cihaz Teknolojisi",
  },
  {
    title: "Lenf Drenaj Masajının Faydaları",
    desc: "Ödem, yorgunluk ve selülit için masaj yöntemi.",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80",
    slug: "lenf-drenaj-faydalari",
    tag: "Masaj",
  },
  {
    title: "Wellness Nedir? Neden Önemlidir?",
    desc: "Bütünsel yaklaşımla beden, zihin ve ruh dengesi.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80",
    slug: "wellness-nedir",
    tag: "Wellness",
  },
  {
    desc: "Ödem, yorgunluk ve selülit için etkili masaj yöntemi.",
    title: "Selülitle Baş Etmenin Etkili Yolları",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    slug: "selulit-ile-bas-etme",
    tag: "Estetik",
  },
  {
    title: "Ozon Sauna: Detoks ve Dolaşım Desteği",
    desc: "Ozon terapisinin vücuda etkileri ve uygulama süreci.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
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
          Uzmanlarımızdan estetik, cihaz teknolojisi ve wellness içerikleri.
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
