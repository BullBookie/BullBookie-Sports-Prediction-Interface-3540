import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo } = FiIcons;

const f1Races = [
  {
    id: 1,
    race: 'Monaco Grand Prix',
    drivers: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Lando Norris', 'George Russell']
  },
  {
    id: 2,
    race: 'British Grand Prix',
    drivers: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Lando Norris', 'Carlos Sainz']
  },
];

const FormulaOneCard = ({ onStake }) => {
  const [predictions, setPredictions] = useState({});

  const handlePrediction = (raceId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [raceId]: prediction
    }));
  };

  const handleStake = (race) => {
    const prediction = predictions[race.id];
    if (prediction) {
      onStake({
        type: 'formula1',
        race: race,
        prediction: prediction,
        sport: 'Formula One'
      });
    }
  };

  return (
    <div className="space-y-10">
      {/* Instructions */}
      <motion.div 
        className="bg-gradient-to-r from-bull-red/10 to-bull-yellow/10 border border-bull-red/20 rounded-bull p-6 shadow-bull-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start gap-4">
          <SafeIcon icon={FiInfo} className="w-6 h-6 text-bull-yellow flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-heading text-lg font-bold text-bull-white mb-3">
              How to Submit Formula One Predictions
            </h3>
            <div className="space-y-2 text-bull-light-gray">
              <p>• <strong className="text-bull-white">Select Race Winner:</strong> Choose which driver you think will win the Grand Prix</p>
              <p>• <strong className="text-bull-white">Top Drivers Listed:</strong> Pick from the championship contenders for each race</p>
              <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Once you've selected a driver, click "Stake BBWIN" to submit your prediction</p>
            </div>
          </div>
        </div>
      </motion.div>

      {f1Races.map((race, index) => (
        <motion.div
          key={race.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
          whileHover={{ scale: 1.01, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
        >
          <div className="mb-6">
            <h3 className="font-heading font-bold text-bull-red text-xl uppercase tracking-wide">
              {race.race}
            </h3>
          </div>

          <div className="mb-8">
            <div className="text-center mb-6 text-bull-light-gray">
              <span className="font-bold text-xl">Race Winner</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {race.drivers.map((driver) => {
                const isSelected = predictions[race.id] === driver;
                return (
                  <motion.button
                    key={driver}
                    className={`p-6 rounded-bull border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-bull-red bg-bull-red/20 text-bull-red shadow-bull-lg'
                        : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                    }`}
                    onClick={() => handlePrediction(race.id, driver)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-bold text-lg">{driver}</div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
              predictions[race.id] 
                ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white' 
                : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
            }`}
            onClick={() => handleStake(race)}
            disabled={!predictions[race.id]}
            whileHover={predictions[race.id] ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
            whileTap={predictions[race.id] ? { scale: 0.98 } : {}}
          >
            {predictions[race.id] ? 'Stake BBWIN' : 'Select Driver First'}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default FormulaOneCard;