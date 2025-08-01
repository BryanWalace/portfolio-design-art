import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Linkedin } from 'lucide-react';

import behanceIconWhite from '../assets/icons/behance-icon.png';
import behanceIconBlack from '../assets/icons/behance-icon-black.png';
import whatsappIconWhite from '../assets/icons/whatsapp-icon.png';
import whatsappIconBlack from '../assets/icons/whatsapp-icon-black.png';

import { socialLinks } from '../data/socialLinks';

const defaultColors = { primary: '#1a113c', secondary: '#ffffff' };

const Header = ({ colors = defaultColors, scrollToSection, isHomePage = false, currentSectionIndex, isStatic = false }) => {
  const isDarkTextTheme = isHomePage && currentSectionIndex === 1;
  const headerClass = isStatic ? styles.staticHeader : styles.header;

  return (
    <header className={headerClass} style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">RAMD</Link>
        </div>
        <nav className={styles.nav}>
          {isHomePage ? (
            <>
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection(0); }}>Main</a>
              <Link to="/arts">Arts</Link>
              <Link to="/cosplay">Cosplay</Link>
              <NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : ''}>Contato</NavLink>
            </>
          ) : (
            <>
              <Link to="/">Main</Link>
              <NavLink to="/arts" className={({isActive}) => isActive ? styles.activeLink : ''}>Arts</NavLink>
              <NavLink to="/cosplay" className={({isActive}) => isActive ? styles.activeLink : ''}>Cosplay</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : ''}>Contato</NavLink>
            </>
          )}
        </nav>
        <div className={styles.socialIcons}>
          <a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' className={styles.iconButton}><Linkedin size={22}/></a>
          <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <img 
              src={isDarkTextTheme ? behanceIconBlack : behanceIconWhite} 
              alt="Behance Icon" 
              className={styles.pngIcon} 
            />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <img 
              src={isDarkTextTheme ? whatsappIconBlack : whatsappIconWhite} 
              alt="WhatsApp Icon" 
              className={styles.pngIcon} 
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;