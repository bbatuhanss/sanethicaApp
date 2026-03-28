import React from "react";
import styles from "./articlecard.module.css";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  url,
}) => (
  <a
    href={url}
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.imageWrap}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay} />
    </div>

    <div className={styles.content}>
      <span className={styles.tag}>Makale</span>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <span className={styles.link}>Devamını Oku →</span>
    </div>
  </a>
);

export default ArticleCard;
