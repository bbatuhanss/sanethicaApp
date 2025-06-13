import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';
import Hero from './section/Hero';
import Services from './services/Services';
import Article from 'pages/article/article';
import Footer from './footer/footer';
import About from './about/About';
import Blog from './blog/Blog';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sanethica | Sağlıklı Yaşam & Beslenme</title>
        <meta
          name="description"
          content="Sanethica ile sağlıklı yaşama adım atın. Diyet, şekillenme ve wellness alanlarında uzman kadro ile yanınızdayız."
        />
        <meta name="keywords" content="Sanethica, diyet, beslenme, sağlıklı yaşam, wellness" />
      </Helmet>

    <Hero />
    <About />
    <Services />
    <Blog />
    <Footer />
  </>
  );
};

export default Home;
