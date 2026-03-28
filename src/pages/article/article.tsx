import React from "react";
import styles from "./article.module.css";
import glutenFreeImage from "../../assets/images/one.png";
import altProteinImage from "../../assets/images/two.png";
import altGluten from "../../assets/images/three.png";
import ArticleCard from "../../components/article/articlecard";

const articles = [
  {
    title: "Glutensiz Beslenme: Tercihler ve Alternatifler",
    description:
      "Glutensiz beslenme tercihlerini etkileyen faktörler ve alternatif tahıllar üzerine yapılan araştırmalar.",
    image: glutenFreeImage,
    url: "https://dergipark.org.tr/tr/download/article-file/3468024",
  },
  {
    title: "Glutensiz Diyet İçin Alternatif Hammaddeler",
    description:
      "Baklagiller ve tohumlar gibi yüksek proteinli glutensiz içeriklerle beslenme çeşitliliği.",
    image: altProteinImage,
    url: "https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.17626",
  },
  {
    title: "Glutensiz Ürünlerde Alternatif Protein Kaynakları",
    description:
      "Glutensiz ürünlerde kullanılan baklagil ve tohum bazlı protein kaynakları üzerine inceleme.",
    image: altGluten,
    url: "https://dergipark.org.tr/en/download/article-file/2155021",
  },
];

const Article: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.headerWrap}>
      <span className={styles.tag}>Sanethica Journal</span>

      <h2 className={styles.title}>
        Bilimsel içerikler ve <em>beslenme rehberleri</em>
      </h2>

      <p className={styles.subtitle}>
        Güncel araştırmalar, beslenme yaklaşımları ve sağlıklı yaşam üzerine
        derlenmiş içerikleri keşfedin.
      </p>
    </div>

    <div className={styles.grid}>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  </section>
);

export default Article;
