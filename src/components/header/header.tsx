import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/images/icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="Sanethica" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Anasayfa</Link>
        <Link to="/about" className={styles.link}>Hakkımızda</Link>
        <Link to="/article" className={styles.link}>Makaleler</Link>
         <Link to="/contact" className={styles.link}>İletişim</Link>
      </nav>
    </header>
  );
};

export default Header;
