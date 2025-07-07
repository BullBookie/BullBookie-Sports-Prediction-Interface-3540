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
    <div className="space-y-6">
      {/* Compact Instructions */}
      <motion.div
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-4 shadow-bull"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <SafeIcon icon={FiInfo} className="w-5 h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-sm font-bold text-bull-white mb-1">
              Formula One Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              Select race winner from championship contenders to stake your prediction.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Compact Race Cards */}
      {f1Races.map((race, index) => (
        <motion.div
          key={race.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-bull-charcoal rounded-bull p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
          whileHover={{ scale: 1.01 }}
        >
          <div className="mb-4">
            <h3 className="font-heading font-bold text-bull-red text-lg uppercase tracking-wide">
              {race.race}
            </h3>
          </div>

          <div className="mb-4">
            <div className="text-center mb-3 text-bull-light-gray">
              <span className="font-bold text-sm">Race Winner</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {race.drivers.map((driver) => {
                const isSelected = predictions[race.id] === driver;
                return (
                  <motion.button
                    key={driver}
                    className={`p-3 rounded-bull border transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-bull-red bg-bull-red/20 text-bull-red'
                        : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                    }`}
                    onClick={() => handlePrediction(race.id, driver)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-bold text-sm">{driver}</div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-3 rounded-bull font-bold text-sm transition-all duration-300 ${
              predictions[race.id]
                ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white'
                : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
            }`}
            onClick={() => handleStake(race)}
            disabled={!predictions[race.id]}
            whileHover={predictions[race.id] ? { scale: 1.02 } : {}}
            whileTap={predictions[race.id] ? { scale: 0.98 } : {}}
          >
            {predictions[race.id] ? 'STAKE PREDICTION' : 'SELECT DRIVER FIRST'}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default FormulaOneCard;