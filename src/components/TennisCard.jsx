import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tennisMatches = [
  {
    id: 1,
    playerA: 'Novak Djokovic',
    playerB: 'Carlos Alcaraz',
    tournament: 'Wimbledon Final'
  },
  {
    id: 2,
    playerA: 'Iga Swiatek',
    playerB: 'Aryna Sabalenka',
    tournament: 'French Open Final'
  },
  {
    id: 3,
    playerA: 'Jannik Sinner',
    playerB: 'Daniil Medvedev',
    tournament: 'US Open SF'
  },
];

const TennisCard = ({ onStake }) => {
  const [predictions, setPredictions] = useState({});

  const handlePrediction = (matchId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }));
  };

  const handleStake = (match) => {
    const prediction = predictions[match.id];
    if (prediction) {
      onStake({
        type: 'tennis',
        match: match,
        prediction: prediction,
        sport: 'Tennis'
      });
    }
  };

  return (
    <div className="space-y-6">
      {tennisMatches.map((match, index) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-light-gray"
        >
          <div className="mb-4">
            <h3 className="font-heading font-semibold text-bull-red text-sm uppercase tracking-wide">
              {match.tournament}
            </h3>
          </div>

          <div className="mb-6">
            <div className="text-center mb-4">
              <span className="text-white font-medium text-lg">
                {match.playerA} <span className="text-gray-400">vs</span> {match.playerB}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[match.playerA, match.playerB].map((player) => {
                const isSelected = predictions[match.id] === player;
                return (
                  <motion.button
                    key={player}
                    className={`p-4 rounded-bull border-2 transition-all ${
                      isSelected
                        ? 'border-bull-red bg-bull-red/10 text-bull-red'
                        : 'border-bull-light-gray hover:border-bull-red/50 text-gray-300 hover:text-white'
                    }`}
                    onClick={() => handlePrediction(match.id, player)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-sm">{player}</div>
                      <div className="text-xs mt-1">Winner</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-3 rounded-bull font-medium transition-all ${
              predictions[match.id]
                ? 'bg-bull-red hover:bg-bull-red-light text-white'
                : 'bg-bull-light-gray text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => handleStake(match)}
            disabled={!predictions[match.id]}
            whileHover={predictions[match.id] ? { scale: 1.02 } : {}}
            whileTap={predictions[match.id] ? { scale: 0.98 } : {}}
          >
            {predictions[match.id] ? 'Stake BBWIN' : 'Select Player First'}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default TennisCard;