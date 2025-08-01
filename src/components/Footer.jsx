import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ colors }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={styles.footer}
      style={{ backgroundColor: colors?.primary, color: colors?.secondary }}
    >
      <p>&copy; {currentYear} Bryan Walace. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;