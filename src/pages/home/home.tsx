import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./section/Hero";
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
        <title>Sanethica Beauty</title>
        <meta
          name="description"
          content="Sanethica ile güzelliğinizi keşfedin. Bölgesel incelme, masaj alanlarında profesyonel kadro ile yanınızdayız."
        />
        <meta
          name="keywords"
          content="Sanethica, beauty, bölgesel incelme, masaj, estetik, İstanbul, Ataşehir"
        />
      </Helmet>

      <Hero />
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
