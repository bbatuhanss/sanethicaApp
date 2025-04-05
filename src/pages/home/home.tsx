import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';
import logo from '../../assets/images/main_logo.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Sanethica | Sağlıklı Yaşam & Beslenme</title>
        <meta
          name="description"
          content="Sanethica ile sağlıklı yaşama adım atın. Diyet, şekillenme ve wellness alanlarında uzman kadro ile yanınızdayız."
        />
        <meta name="keywords" content="Sanethica, diyet, beslenme, sağlıklı yaşam, wellness" />
      </Helmet>

      <img src={logo} alt="Sanethica Logo" width={480} />
      <h1>Welcome to Sanethica</h1>
      <p>Your journey to a healthier life starts here.</p>
    </div>
  );
};

export default Home;
