import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Helmet>
        <title>Hakkımızda | Sanethica</title>
        <meta
          name="description"
          content="Sanethica, sağlıklı yaşam, diyet ve wellness alanlarında danışmanlık hizmeti sunar."
        />
        <meta name="keywords" content="Sanethica, hakkında, sağlıklı yaşam, wellness, diyetisyen" />
      </Helmet>

      <h1>About Sanethica</h1>
      <p>We are dedicated to promoting health and wellness through personalized diet and lifestyle solutions.</p>
    </div>
  );
};

export default About;
