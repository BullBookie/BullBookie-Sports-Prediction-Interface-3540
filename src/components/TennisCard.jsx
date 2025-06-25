import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo } = FiIcons;

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
              How to Submit Tennis Predictions
            </h3>
            <div className="space-y-2 text-bull-light-gray">
              <p>• <strong className="text-bull-white">Select Winner:</strong> Click on the player you think will win the match</p>
              <p>• <strong className="text-bull-white">Tournament Info:</strong> Each match shows the tournament and round details</p>
              <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Once you've selected a winner, click "Stake BBWIN" to submit your prediction</p>
            </div>
          </div>
        </div>
      </motion.div>

      {tennisMatches.map((match, index) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
          whileHover={{ scale: 1.01, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
        >
          <div className="mb-6">
            <h3 className="font-heading font-bold text-bull-red text-xl mb-2 uppercase tracking-wide">
              {match.tournament}
            </h3>
          </div>

          <div className="mb-8">
            <div className="text-center mb-6">
              <span className="text-white font-bold text-2xl">
                {match.playerA} <span className="text-bull-light-gray">vs</span> {match.playerB}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[match.playerA, match.playerB].map((player) => {
                const isSelected = predictions[match.id] === player;
                return (
                  <motion.button
                    key={player}
                    className={`p-8 rounded-bull border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-bull-red bg-bull-red/20 text-bull-red shadow-bull-lg'
                        : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                    }`}
                    onClick={() => handlePrediction(match.id, player)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-xl mb-2">{player}</div>
                      <div className="text-sm opacity-75">Winner</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
              predictions[match.id] 
                ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white' 
                : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
            }`}
            onClick={() => handleStake(match)}
            disabled={!predictions[match.id]}
            whileHover={predictions[match.id] ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
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