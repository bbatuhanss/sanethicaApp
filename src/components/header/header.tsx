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
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
