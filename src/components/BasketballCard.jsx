import React, { useState } from 'react';
import { motion } from 'framer-motion';

const basketballGames = [
  { id: 1, home: 'Lakers', away: 'Warriors', league: 'NBA Regular Season' },
  { id: 2, home: 'Celtics', away: 'Heat', league: 'NBA Regular Season' },
  { id: 3, home: 'Nuggets', away: 'Suns', league: 'NBA Regular Season' },
];

const BasketballCard = ({ onStake }) => {
  const [predictions, setPredictions] = useState({});

  const handlePrediction = (gameId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [gameId]: prediction
    }));
  };

  const handleStake = (game) => {
    const prediction = predictions[game.id];
    if (prediction) {
      onStake({
        type: 'basketball',
        game: game,
        prediction: prediction,
        sport: 'Basketball'
      });
    }
  };

  return (
    <div className="space-y-6">
      {basketballGames.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-light-gray"
        >
          <div className="mb-4">
            <h3 className="font-heading font-semibold text-bull-orange text-sm uppercase tracking-wide">
              {game.league}
            </h3>
          </div>

          <div className="mb-6">
            <div className="text-center mb-4">
              <span className="text-white font-medium text-lg">
                {game.home} <span className="text-gray-400">vs</span> {game.away}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[game.home, game.away].map((team) => {
                const isSelected = predictions[game.id] === team;
                
                return (
                  <motion.button
                    key={team}
                    className={`p-4 rounded-bull border-2 transition-all ${
                      isSelected
                        ? 'border-bull-orange bg-bull-orange/10 text-bull-orange'
                        : 'border-bull-light-gray hover:border-bull-orange/50 text-gray-300 hover:text-white'
                    }`}
                    onClick={() => handlePrediction(game.id, team)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="font-bold">{team}</div>
                      <div className="text-xs mt-1">Winner</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.button
            className={`w-full py-3 rounded-bull font-medium transition-all ${
              predictions[game.id]
                ? 'bg-bull-orange hover:bg-bull-accent text-white'
                : 'bg-bull-light-gray text-gray-400 cursor-not-allowed'
            }`}
            onClick={() => handleStake(game)}
            disabled={!predictions[game.id]}
            whileHover={predictions[game.id] ? { scale: 1.02 } : {}}
            whileTap={predictions[game.id] ? { scale: 0.98 } : {}}
          >
            {predictions[game.id] ? 'Stake BBWIN' : 'Select Team First'}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default BasketballCard;