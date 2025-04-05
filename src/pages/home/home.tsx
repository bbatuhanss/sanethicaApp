import React from "react";
import styles from "./home.module.css";
import logo from "../../assets/images/main_logo.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={logo} alt="Sanethica Logo" className={styles.logo} />
      <h1>Welcome to Sanethica</h1>
      <p>Your journey to a healthier life starts here.</p>
    </div>
  );
};

export default Home;
