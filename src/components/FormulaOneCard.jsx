import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      {f1Races.map((race, index) => (
        <motion.div
          key={race.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-light-gray"
        >
          <div className="mb-4">
            <h3 className="font-heading font-semibold text-bull-orange text-sm uppercase tracking-wide">
              {race.race}
            </h3>
          </div>

          <div className="mb-6">
            <div className="text-center mb-4 text-gray-300">
              <span className="font-medium">Race Winner</span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {race.drivers.map((driver) => {
                const isSelected = predictions[race.id] === driver;
                
                return (
                  <motion.button
                    key={driver}
                    className={`p-3 rounded-bull border-2 transition-all text-left ${
                      isSelected
                        ? 'border-bull-orange bg-bull-orange/10 text-bull-orange'
                        : 'border-bull-light-gray hover:border-bull-orange/50 text-gray-300 hover:text-white'
                    }`}
                    onClick={() => handlePrediction(race.id, driver)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium">{driver}</div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-3 rounded-bull font-medium transition-all ${
              predictions[race.id]
                ? 'bg-bull-orange hover:bg-bull-accent text-white'
                : 'bg-bull-light-gray text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => handleStake(race)}
            disabled={!predictions[race.id]}
            whileHover={predictions[race.id] ? { scale: 1.02 } : {}}
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