import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SportsFilter from '../components/SportsFilter';
import FootballCard from '../components/FootballCard';
import FightingCard from '../components/FightingCard';
import BasketballCard from '../components/BasketballCard';
import TennisCard from '../components/TennisCard';
import RacingSportsCard from '../components/FormulaOneCard';

const MainPage = ({onStake}) => {
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
      case 'racing':
        return <RacingSportsCard onStake={onStake} />;
      default:
        return <FootballCard onStake={onStake} />;
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center px-4">
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Predict. Stake. Win.
        </h1>
        <p className="text-bull-light-gray text-sm sm:text-base lg:text-lg">
          Make your predictions and stake BBWIN tokens
        </p>
      </div>

      <div className="px-4">
        <SportsFilter 
          selectedSport={selectedSport} 
          onSportChange={setSelectedSport} 
        />
      </div>

      {/* Full Width Container for All Sports */}
      <div className="w-full px-4">
        {renderSportCards()}
      </div>
    </motion.div>
  );
};

export default MainPage;