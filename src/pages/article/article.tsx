import React from 'react';
import styles from './article.module.css';
import glutenFreeImage from '../../assets/images/one.png';
import altProteinImage from '../../assets/images/two.png';
import altGluten from '../../assets/images/three.png';
import ArticleCard from '../../components/article/articlecard';

const articles = [
  {
    title: 'Glutensiz Beslenme: Tercihler ve Alternatifler',
    description: 'Glutensiz beslenme tercihlerini etkileyen faktörler ve alternatif tahıllar üzerine yapılan araştırmalar hakkında bilgi edinin.',
    image: glutenFreeImage,
    url: 'https://dergipark.org.tr/tr/download/article-file/3468024'
  },
  {
    title: 'Glutensiz Diyet İçin Alternatif Hammaddeler',
    description: 'Baklagiller ve tohumlar gibi yüksek proteinli, glutensiz içeriklerle beslenme çeşitliliğini artırın.',
    image: altProteinImage,
    url: 'https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.17626'
  },
    {
    title: 'Glutensiz Ürünlerde Kullanılan Alternatif Protein Kaynakları',
    description: 'Glutensiz ürünlerde tercih edilen baklagil, tohum ve benzeri alternatif protein kaynakları hakkında bilgi edinin.',
    image: altGluten,
    url: 'https://dergipark.org.tr/en/download/article-file/2155021'
  }   
  
];


const Article: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.header}>Sanethica Makaleleri</h2>
    <div className={styles.grid}>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  </div>
);

export default Article;
