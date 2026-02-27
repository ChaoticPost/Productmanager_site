import React from 'react';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <span className={styles.text}>Product Manager Portfolio</span>
      <span className={styles.text}>&copy; {currentYear}</span>
    </div>
  </footer>
);

export default Footer;
