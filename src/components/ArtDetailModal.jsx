import React from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import styles from './ArtDetailModal.module.css';

import { X, ChevronLeft, ChevronRight, Share2, Twitter, Instagram, Linkedin } from 'lucide-react';

import behanceIconPng from '../assets/icons/behance-icon.png';

import { socialLinks } from '../data/socialLinks';



const hexToRgba = (hex, alpha) => {
  if (!hex || hex.length < 7) return `rgba(0,0,0,${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ArtDetailModal = () => {
  const { arts } = useOutletContext();
  const { artId } = useParams();
  const navigate = useNavigate();

  const currentIndex = arts.findIndex(art => art.id === artId);
  if (currentIndex === -1) {
    navigate('/arts');
    return null;
  }
  const art = arts[currentIndex];

  const goBack = () => navigate('/arts');

  const goToNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % arts.length;
    navigate(`/arts/${arts[nextIndex].id}`);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + arts.length) % arts.length;
    navigate(`/arts/${arts[prevIndex].id}`);
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = { title: art.title, text: art.description, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('A função de compartilhar não é suportada neste navegador.');
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  };

  return (
    <div 
      className={styles.modalBackdrop} 
      onClick={goBack}
      style={{ backgroundColor: hexToRgba(art.primaryColor, 0.85) }}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={{ color: art.secondaryColor }}>
        <div className={styles.modalHeader}>
          <div className={styles.socialIcons}>
          <button onClick={handleShare} className={styles.iconButton}><Share2 size={24} /></button>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.iconButton}><Instagram size={24} /></a>
          <a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' className={styles.iconButton}><Linkedin size={24}/></a>
          <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <img src={behanceIconPng} alt="Behance Icon" className={styles.pngIcon} />
          </a>
        </div>
          <button className={styles.closeButton} onClick={goBack}><X size={32} /></button>
        </div>

        <div className={styles.imageContainer}>
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrev}><ChevronLeft size={48} /></button>
          <img src={art.image} alt={art.title} className={styles.mainImage} />
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext}><ChevronRight size={48} /></button>
        </div>

        <div className={styles.modalFooter}>
          <h3>{art.title}</h3>
          <p>{art.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtDetailModal;