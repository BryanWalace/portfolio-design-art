import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ colors, scrollToSection, isHomePage }) => {
  return (
    <header className={styles.header} style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">RAMD</Link>
        </div>
        <nav className={styles.nav}>
          {isHomePage ? (
            <>
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection(0); }}>Main</a>
              <Link to="/arts">Arts</Link>
              <a href="#cosplay" onClick={(e) => { e.preventDefault(); scrollToSection(2); }}>Cosplay</a>
            </>
          ) : (
            <>
              <Link to="/">Main</Link>
              <NavLink to="/arts" className={({ isActive }) => (isActive ? styles.activeLink : '')}>Arts</NavLink>
              <NavLink to="/cosplay" className={({isActive}) => isActive ? styles.activeLink : ''}>Cosplay</NavLink>
            </>
          )}
          <a href="#">Contato</a>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;