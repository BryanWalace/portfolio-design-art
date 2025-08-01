import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Arts.module.css';

import xiaoImg from '../assets/arts/xiao.png';
import dilucImg from '../assets/arts/diluc.png';
import rosaImg from '../assets/arts/rosa.png';
import ventiImg from '../assets/arts/venti.png';
import raidenImg from '../assets/arts/raiden.png';

const artData = [
  { id: 1, 
    title: 'xiao', 
    description: 'Ilustração digital.', 
    image: xiaoImg,
    primaryColor: '#A4EFCE', 
    secondaryColor: '#000000ff' 
  },
  { id: 2, 
    title: 'Diluc', 
    description: 'Estudo de cores quentes.', 
    image: dilucImg,
    primaryColor: '#E1BCB9', 
    secondaryColor: '#000000ff'
  },
  { 
    id: 3, 
    title: 'Sussurros da Floresta', 
    description: 'Criação de ambiente fantástico.', 
    image: rosaImg,
    primaryColor: '#99EAE9',
    secondaryColor: '#050505ff' 
  },
  {
    id: 4,
    title: 'Venti',
    description: 'Estudo de cores frias.',
    image: ventiImg,
    primaryColor: '#9FE6C3',
    secondaryColor: '#000000ff'
  },
  {
    id: 5,
    title: 'Raiden Shogun',
    description: 'Ilustração digital.',
    image: raidenImg,
    primaryColor: '#C8B9DA',
    secondaryColor: '#000000ff'
  }
  
];

const Arts = ({ onColorChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeColors, setActiveColors] = useState(artData[0]);

  useEffect(() => {
    const newColors = artData[currentIndex];
    setActiveColors(newColors);
    onColorChange(newColors);
  }, [currentIndex, onColorChange]);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? artData.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === artData.length - 1 ? 0 : prev + 1));
  
  return (
    <section 
      className={styles.artsSection}
      style={{ backgroundColor: activeColors.primaryColor }}
    >
      <div className={styles.carouselContainer}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
          <ChevronLeft size={32} style={{ color: activeColors.secondaryColor }} />
        </button>
        <div className={styles.imageWrapper}>
          {artData.map((art, index) => (
            <img 
              key={art.id} 
              src={art.image} 
              alt={art.title} 
              className={`${styles.artImage} ${index === currentIndex ? styles.active : styles.inactive}`}
            />
          ))}
        </div>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
          <ChevronRight size={32} style={{ color: activeColors.secondaryColor }} />
        </button>
      </div>
      <div key={activeColors.id} className={styles.infoCard} style={{ color: activeColors.secondaryColor }}>
        <h2>{activeColors.title}</h2>
        <p>{activeColors.description}</p>
      </div>
    </section>
  );
};

export default Arts;