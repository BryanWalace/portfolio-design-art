import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './CosplayPage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cosplayData } from '../data/cosplayData';

const INITIAL_LOAD = 15;
const LOAD_MORE_COUNT = 5;

const CosplayPage = () => {
  const [visibleCosplays, setVisibleCosplays] = useState(cosplayData.slice(0, INITIAL_LOAD));
  const [hasMore, setHasMore] = useState(cosplayData.length > INITIAL_LOAD);

  const loadMoreCosplays = () => {
    setTimeout(() => {
      const currentLength = visibleCosplays.length;
      const newItems = cosplayData.slice(currentLength, currentLength + LOAD_MORE_COUNT);
      setVisibleCosplays([...visibleCosplays, ...newItems]);
      if (currentLength + LOAD_MORE_COUNT >= cosplayData.length) {
        setHasMore(false);
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 200 || !hasMore) {
        return;
      }
      loadMoreCosplays();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCosplays, hasMore]);

  return (
    <>
      <Header isHomePage={false} />
      <div className={styles.cosplayPage}>
        <div className={styles.cosplayGrid}>
          {visibleCosplays.map((cosplay) => (
            <Link
              key={cosplay.id}
              to={`/cosplay/${cosplay.id}`}
              className={`${styles.gridItem} ${styles[cosplay.gridClass]}`}
            >
              <img src={cosplay.image} alt={cosplay.title} />
              <div className={styles.overlay}>
                <h3>{cosplay.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        {hasMore && <div className={styles.loading}>Carregando mais...</div>}
      </div>
      <Footer />
      <Outlet context={{ cosplays: cosplayData }} />
    </>
  );
};

export default CosplayPage;