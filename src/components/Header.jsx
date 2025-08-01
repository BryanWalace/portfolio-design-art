import React from 'react';
import styles from './Header.module.css';

const Header = ({ colors, scrollToSection }) => {
  return (
    <header className={styles.header} style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection(0)}>
          RAMD
        </div>
        <nav className={styles.nav}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection(0); }}>Main</a>
          <a href="#arts" onClick={(e) => { e.preventDefault(); scrollToSection(1); }}>Arts</a>
          <a href="#cosplay" onClick={(e) => { e.preventDefault(); scrollToSection(2); }}>Cosplay</a>
          <a href="#contact">Contato</a>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;