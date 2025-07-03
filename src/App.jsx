import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import MyPredictions from './pages/MyPredictions';
import Analytics from './pages/Analytics';
import Account from './pages/Account';
import StakeModal from './components/StakeModal';

function App() {
  const [stakeModal, setStakeModal] = useState(null);

  const openStakeModal = (prediction) => {
    setStakeModal(prediction);
  };

  const closeStakeModal = () => {
    setStakeModal(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-bull-dark-black text-bull-white">
        <Header />
        <motion.main
          className="container mx-auto py-4 sm:py-6 lg:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<MainPage onStake={openStakeModal} />} />
            <Route path="/predictions" element={<MyPredictions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </motion.main>

        {stakeModal && (
          <StakeModal prediction={stakeModal} onClose={closeStakeModal} />
        )}
      </div>
    </Router>
  );
}

export default App;