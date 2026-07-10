import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./section/Hero";
import Campaigns from "./campaigns/Campaigns";
import Services from "./services/Services";
import Footer from "./footer/footer";
import About from "./about/About";
import Blog from "./blog/Blog";
import Devices from "./device/device";
import Reviews from "components/reviews/reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sanethica Beauty | Güzellik Salonu Ataşehir</title>
        <meta
          name="description"
          content="Sanethica’da bölgesel incelme, lazer epilasyon, profesyonel cilt bakımı ve masaj uygulamalarıyla kişiye özel güzellik deneyimi."
        />
        <meta
          name="keywords"
          content="Sanethica, güzellik salonu, bölgesel incelme, lazer epilasyon, cilt bakımı, masaj, EmShape, G5, lenf drenaj, ozon sauna, Ataşehir"
        />
      </Helmet>

      <Hero />
      <Campaigns />
      <About />
      <Devices />
      <Services />
      <Blog />
      <Footer />
      <Reviews />
    </>
  );
};

export default Home;
