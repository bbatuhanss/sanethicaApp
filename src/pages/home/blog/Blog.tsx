import React from 'react';
import styles from './blog.module.css';
import blog1 from '../../../assets/images/one.png';
import blog2 from '../../../assets/images/two.png';

const articles = [
  {
    title: 'Glutensiz Beslenme Rehberi',
    description: 'Glutensiz yaşam tarzına geçerken dikkat edilmesi gerekenler ve alternatif içerikler.',
    image: blog1,
    url: '/blog',
  },
  {
    title: 'Bölgesel İncelme Nedir?',
    description: 'Smash, lenf drenaj, G5 ve diğer incelme yöntemleri hakkında merak edilenler.',
    image: blog2,
    url: '/blog',
  },
];

const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <h2 className={styles.heading}>Sanethica Blog</h2>
      <div className={styles.grid}>
        {articles.map((article, i) => (
          <div className={styles.card} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
            <img src={article.image} alt={article.title} className={styles.image} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} className={styles.link}>Devamını Oku</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
