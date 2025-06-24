import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SportsFilter from '../components/SportsFilter';
import FootballCard from '../components/FootballCard';
import FightingCard from '../components/FightingCard';
import BasketballCard from '../components/BasketballCard';
import TennisCard from '../components/TennisCard';
import FormulaOneCard from '../components/FormulaOneCard';

const MainPage = ({ onStake }) => {
  const [selectedSport, setSelectedSport] = useState('football');

  const renderSportCards = () => {
    switch (selectedSport) {
      case 'football':
        return <FootballCard onStake={onStake} />;
      case 'basketball':
        return <BasketballCard onStake={onStake} />;
      case 'fighting':
        return <FightingCard onStake={onStake} />;
      case 'tennis':
        return <TennisCard onStake={onStake} />;
      case 'formula1':
        return <FormulaOneCard onStake={onStake} />;
      default:
        return <FootballCard onStake={onStake} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h1 className="font-heading text-3xl font-bold text-white mb-2">
          Predict. Stake. Win.
        </h1>
        <p className="text-gray-400">
          Make your predictions and stake BBWIN tokens
        </p>
      </div>

      <SportsFilter 
        selectedSport={selectedSport} 
        onSportChange={setSelectedSport} 
      />

      <div className="w-full max-w-none">
        {selectedSport === 'football' ? (
          renderSportCards()
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {renderSportCards()}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MainPage;