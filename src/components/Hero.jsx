import React from 'react';
import { MousePointer2 } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textAlign}>
        <h1 className={styles.title}>RAMD</h1>
        <p className={styles.subtitle}>Artista Digital & Cosplayer</p>
      </div>
      <div className={styles.scrollPrompt}>
        <MousePointer2 size={20} />
        <span>Role para explorar</span>
      </div>
    </section>
  );
};

export default Hero;