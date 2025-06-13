import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './hero.module.css';
import logo from '../../../assets/images/main_logo.png';

const Home = () => {
  return (
    <div className={styles.hero} data-aos="fade-up">
      <img src={logo} alt="Sanethica Logo" className={styles.logo} />
      <h1 className={styles.title}>Yeni Bir Yaşam Sanethica ile Başlıyor</h1>
      <p className={styles.subtitle}>Diyetisyen desteği, bölgesel incelme, wellness ve sağlıklı alışkanlıklar bir arada.</p>
      <a href="/about" className={styles.cta}>🌿 Hemen Tanışın</a>
    </div>
  );
};

export default Home;
