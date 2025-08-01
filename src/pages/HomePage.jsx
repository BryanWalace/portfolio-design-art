import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Arts from '../components/Arts';
import Cosplay from '../components/Cosplay';
import styles from '../App.module.css';

const cosplayData = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ];
const defaultColors = { primary: '#1a113c', secondary: '#ffffff' };

const HomePage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [cosplayActiveIndex, setCosplayActiveIndex] = useState(0);
  const [colors, setColors] = useState(defaultColors);
  
  const isScrolling = useRef(false);
  const containerRef = useRef(null);
  const sections = 3;
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'cosplay') {
      scrollToSection(2);
    }
  }, [location.state]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;
      const scrollDown = event.deltaY > 0;
      if (currentSectionIndex === 2) {
        if (scrollDown) {
          setCosplayActiveIndex(prev => (prev + 1) % cosplayData.length);
        } else {
          if (cosplayActiveIndex === 0) { setCurrentSectionIndex(1); } 
          else { setCosplayActiveIndex(prev => (prev - 1 + cosplayData.length) % cosplayData.length); }
        }
      } else {
        if (scrollDown) { setCurrentSectionIndex(prev => Math.min(prev + 1, sections - 1)); } 
        else { setCurrentSectionIndex(prev => Math.max(prev - 1, 0)); }
      }
      setTimeout(() => { isScrolling.current = false; }, 1200);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, cosplayActiveIndex]);

  useEffect(() => {
    if (currentSectionIndex !== 1) {
      setColors(defaultColors);
    }
  }, [currentSectionIndex]);

  const scrollToSection = (index) => {
    if (isScrolling.current) return;
    setCurrentSectionIndex(index);
    setTimeout(() => { isScrolling.current = false; }, 1200);
  };
  
  const handleColorChange = (artColors) => {
    if (currentSectionIndex === 1) {
      setColors({ primary: artColors.primaryColor, secondary: artColors.secondaryColor });
    }
  };

  return (
    <div ref={containerRef} className={styles.mainContainer}>
      <Header colors={colors} scrollToSection={scrollToSection} isHomePage={true} />
      <main className={styles.sectionsWrapper} style={{ transform: `translateY(-${currentSectionIndex * 100}vh)` }}>
        <div className={styles.section}><Hero /></div>
        <div className={styles.section}><Arts onColorChange={handleColorChange} /></div>
        <div className={styles.section}><Cosplay activeIndex={cosplayActiveIndex} /></div>
      </main>
      <Footer colors={colors} />
    </div>
  );
}

export default HomePage;