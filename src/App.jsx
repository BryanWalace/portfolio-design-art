import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ArtsPage from './pages/ArtsPage';
import ArtDetailModal from './components/ArtDetailModal';
import CosplayPage from './pages/CosplayPage';
import CosplayDetailModal from './components/CosplayDetailModal';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/arts') || location.pathname.startsWith('/cosplay')) {
      document.body.classList.add('gallery-view');
    } else {
      document.body.classList.remove('gallery-view');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/arts" element={<ArtsPage />}>
        <Route path=":artId" element={<ArtDetailModal />} />
      </Route>

      <Route path="/cosplay" element={<CosplayPage />}>
        <Route path=":cosplayId" element={<CosplayDetailModal />} />
      </Route>
    </Routes>
  );
};

export default App;