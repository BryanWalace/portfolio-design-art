import React from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import styles from './ArtDetailModal.module.css';
import { X, ChevronLeft, ChevronRight, Share2, Twitter, Instagram, Linkedin } from 'lucide-react';

import behanceIconPng from '../assets/icons/behance-icon-white.png';
import { socialLinks } from '../data/socialLinks';

const CosplayDetailModal = () => {
  const { cosplays } = useOutletContext();
  const { cosplayId } = useParams();
  const navigate = useNavigate();

  const currentIndex = cosplays.findIndex(c => c.id === cosplayId);
  if (currentIndex === -1) {
    navigate('/cosplay');
    return null;
  }
  const cosplay = cosplays[currentIndex];

  const goBack = () => navigate('/cosplay');

  const goToNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % cosplays.length;
    navigate(`/cosplay/${cosplays[nextIndex].id}`);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + cosplays.length) % cosplays.length;
    navigate(`/cosplay/${cosplays[prevIndex].id}`);
  };
  
  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = { title: cosplay.title, text: cosplay.description, url: window.location.href };
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
    <div className={styles.modalBackdrop} onClick={goBack}>
      <div 
        className={styles.modalContent} 
        onClick={e => e.stopPropagation()}
        style={{ backgroundColor: 'rgba(26, 17, 60, 0.9)' }} 
      >
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
          <img src={cosplay.image} alt={cosplay.title} className={styles.mainImage} />
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext}><ChevronRight size={48} /></button>
        </div>

        <div className={styles.modalFooter}>
          <h3>{cosplay.title}</h3>
          <p>{cosplay.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CosplayDetailModal;