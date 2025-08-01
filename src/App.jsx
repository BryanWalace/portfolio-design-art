import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtsPage from './pages/ArtsPage';
import ArtDetailModal from './components/ArtDetailModal';

const defaultColors = { primary: '#1a113c', secondary: '#ffffff' };

const MainLayout = () => (
  <>
    <Header colors={defaultColors} />
    <main>
      <Outlet />
    </main>
    <Footer colors={defaultColors} />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arts" element={<ArtsPage />}>
        <Route path=":artId" element={<ArtDetailModal />} />
      </Route>
    </Routes>
  );
};

export default App;