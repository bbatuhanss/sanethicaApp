import React from 'react';
import styles from './articlecard.module.css';

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, image, url }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
        Devamını Oku
      </a>
    </div>
  </div>
);

export default ArticleCard;
