import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import styles from './ArtsPage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { artData } from '../data/artData'; 

const ArtsPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Header colors={{ primary: '#1a113c', secondary: '#ffffff' }} />
      <div className={styles.artsPage}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}>
          {artData.map((art) => (
            <Link 
              key={art.id} 
              to={`/arts/${art.id}`}
              className={styles.artLink}
            >
              <img src={art.image} alt={art.title} />
              <div className={styles.overlay}>
                <h3>{art.title}</h3>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
      <Footer colors={{ primary: '#1a113c', secondary: '#ffffff' }} />
      <Outlet context={{ arts: artData }} /> 
    </>
  );
};

export default ArtsPage;