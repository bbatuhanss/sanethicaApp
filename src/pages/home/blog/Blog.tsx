import React from "react";
import styles from "./blog.module.css";
import blog1 from "../../../assets/images/one.png";
import blog2 from "../../../assets/images/two.png";
import blog3 from "../../../assets/images/three1.png";
import blog4 from "../../../assets/images/four.png";
import blog5 from "../../../assets/images/five.png";
import blog6 from "../../../assets/images/six.png";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Glutensiz Beslenme Rehberi",
    desc: "Glutensiz yaşam tarzına geçerken dikkat edilmesi gerekenler.",
    image: blog1,
    slug: "glutensiz-beslenme-rehberi",
    tag: "Beslenme",
  },
  {
    title: "Bölgesel İncelme Nedir?",
    desc: "Smash, lenf drenaj, G5 ve diğer incelme yöntemleri hakkında.",
    image: blog2,
    slug: "bolgesel-incelme-nedir",
    tag: "Estetik",
  },
  {
    title: "Aralıklı Oruç: Faydaları ve Dikkat Edilmesi Gerekenler",
    desc: "Intermittent fasting modelinin vücuda etkileri ve doğru uygulama.",
    image: blog3,
    slug: "aralikli-oruc-nedir",
    tag: "Wellness",
  },
  {
    title: "Bağışıklık Sistemi İçin Beslenme",
    desc: "Hastalıklara karşı koruyucu gücü artıran vitamin ve mineraller.",
    image: blog4,
    slug: "bagisiklik-icin-beslenme",
    tag: "Beslenme",
  },
  {
    title: "Duygusal Yeme ve Stresle Başa Çıkma",
    desc: "Stres anında kontrolsüz yeme isteğinin nedenleri ve çözüm yolları.",
    image: blog5,
    slug: "duygusal-yeme-ve-stres",
    tag: "Wellness",
  },
  {
    title: "Vejetaryen Beslenmede Protein Kaynakları",
    desc: "Yeterli protein alımı için bitkisel besin alternatifleri.",
    image: blog6,
    slug: "vejetaryen-protein-kaynaklari",
    tag: "Beslenme",
  },
];

const Blog = () => (
  <section className={styles.blog} id="blog">
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.tag}>Blog</span>
        <h2 className={styles.title}>
          Sağlıklı yaşam <em>rehberi</em>
        </h2>
        <p className={styles.subtitle}>
          Uzmanlarımızdan güncel beslenme ve wellness içerikleri.
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
