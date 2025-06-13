import React from 'react';
import styles from './about.module.css';
import aboutImg from '../../../assets/images/main_logo.png';

const AboutSection = () => {
  return (
    <section className={styles.about} data-aos="fade-up">
      <div className={styles.imageWrapper}>
        <img src={aboutImg} alt="Hakkımızda" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>Hakkımızda</h2>
        <p>
          Sanethica, sağlıklı yaşamın beden, zihin ve ruh bütünlüğüyle mümkün olduğuna inanan bir yaşam merkezidir.
          Diyetisyen desteği, bölgesel incelme çözümleri ve wellness uygulamalarıyla hayatınıza denge katmayı hedefliyoruz.
        </p>
        <a href="/about" className={styles.cta}>Daha Fazla Bilgi</a>
      </div>
    </section>
  );
};

export default AboutSection;
