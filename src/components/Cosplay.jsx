import React from 'react';
import styles from './Cosplay.module.css';

import cosplayPersonagemA from '../assets/cosplays/personagem-a.png';
import cosplayPersonagemB from '../assets/cosplays/personagem-b.png';
import cosplayPersonagemC from '../assets/cosplays/personagem-c.png';
import cosplayPersonagemD from '../assets/cosplays/personagem-d.png';


const cosplayData = [
  { 
    id: 1,
    image: cosplayPersonagemA,
    title: 'Personagem A' 
  },
  { 
    id: 2, 
    image: cosplayPersonagemB,
    title: 'Personagem B' 
  },
  { 
    id: 3, 
    image: cosplayPersonagemC,
    title: 'Personagem C' 
  },
  { 
    id: 4, 
    image: cosplayPersonagemD,
    title: 'Personagem D' 
  },
];

const Cosplay = ({ activeIndex }) => {
  return (
    <section className={styles.cosplaySection}>
      <div className={styles.accordionContainer}>
        {cosplayData.map((cosplay, index) => (
          <div
            key={cosplay.id}
            className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}
          >
            <img src={cosplay.image} alt={cosplay.title} className={styles.panelImage} />
            <div className={styles.titleOverlay}>
              <h3>{cosplay.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cosplay;