import React from "react";
import { Helmet } from "react-helmet";
import styles from "./about.module.css";
import Footer from "components/footer/footer";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <Helmet>
          <title>Hakkımızda | Sanethica</title>
          <meta
            name="description"
            content="Sanethica, sağlıklı yaşam, diyet ve wellness alanlarında danışmanlık hizmeti sunar."
          />
          <meta
            name="keywords"
            content="Sanethica, hakkında, sağlıklı yaşam, wellness, diyetisyen"
          />
        </Helmet>

        <h2>Hakkımızda</h2>
        <p>
          Sanethica, sağlıklı yaşamı herkes için erişilebilir kılmak amacıyla
          kurulmuş bir merkezdir. Uzman diyetisyen kadromuz ve bütünsel wellness
          yaklaşımımızla yanınızdayız.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
