import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import styles from './ArtsPage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { artData } from '../data/artData';

const INITIAL_LOAD = 15;
const LOAD_MORE_COUNT = 5;

const ArtsPage = () => {
  const [visibleArts, setVisibleArts] = useState(artData.slice(0, INITIAL_LOAD));
  const [hasMore, setHasMore] = useState(artData.length > INITIAL_LOAD);

  const loadMoreArts = () => {
    setTimeout(() => {
      const currentLength = visibleArts.length;
      const newItems = artData.slice(currentLength, currentLength + LOAD_MORE_COUNT);
      setVisibleArts([...visibleArts, ...newItems]);
      if (currentLength + LOAD_MORE_COUNT >= artData.length) {
        setHasMore(false);
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 200 || !hasMore) {
        return;
      }
      loadMoreArts();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleArts, hasMore]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Header isHomePage={false} />
      <div className={styles.artsPage}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}>
          {visibleArts.map((art) => (
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
        {hasMore && <div className={styles.loading}>Carregando mais...</div>}
      </div>
      <Footer />
      <Outlet context={{ arts: artData }} />
    </>
  );
};

export default ArtsPage;