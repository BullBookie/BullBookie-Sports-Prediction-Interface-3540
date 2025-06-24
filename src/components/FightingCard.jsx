import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fightingEvents = [
  {
    id: 1,
    title: 'UFC 300: Main Event',
    date: '2024-04-13',
    fights: [
      { id: 1, fighterA: 'Jon Jones', fighterB: 'Stipe Miocic' },
      { id: 2, fighterA: 'Alex Pereira', fighterB: 'Jamahal Hill' },
    ]
  },
  {
    id: 2,
    title: 'Boxing: Heavyweight Championship',
    date: '2024-04-20',
    fights: [
      { id: 3, fighterA: 'Tyson Fury', fighterB: 'Oleksandr Usyk' },
    ]
  }
];

const FightingCard = ({ onStake }) => {
  const [cardType, setCardType] = useState('event');
  const [predictions, setPredictions] = useState({});

  const handlePrediction = (fightId, field, value) => {
    setPredictions(prev => ({
      ...prev,
      [fightId]: {
        ...prev[fightId],
        [field]: value
      }
    }));
  };

  const handleStake = (fight, event) => {
    const prediction = predictions[fight.id];
    if (prediction?.fighter) {
      onStake({
        type: 'fighting',
        fight: fight,
        event: event,
        prediction: prediction,
        sport: 'Fighting'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex bg-bull-light-gray rounded-bull p-1">
        <motion.button
          className={`flex-1 py-2 px-4 rounded-bull font-medium transition-all ${
            cardType === 'event' ? 'bg-bull-red text-white' : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setCardType('event')}
          whileHover={{ scale: 1.02 }}
        >
          Event Predictions
        </motion.button>
        <motion.button
          className={`flex-1 py-2 px-4 rounded-bull font-medium transition-all ${
            cardType === 'fight' ? 'bg-bull-red text-white' : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setCardType('fight')}
          whileHover={{ scale: 1.02 }}
        >
          Fight Predictions
        </motion.button>
      </div>

      {cardType === 'event' ? (
        fightingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-light-gray"
          >
            <div className="mb-4">
              <h3 className="font-heading font-semibold text-bull-red text-lg">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm">{event.date}</p>
            </div>

            <div className="space-y-3 mb-6">
              {event.fights.map((fight) => (
                <div key={fight.id} className="text-center text-white">
                  <span className="font-medium">
                    {fight.fighterA} <span className="text-gray-400">vs</span> {fight.fighterB}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              className="w-full py-3 bg-bull-red hover:bg-bull-red-light text-white rounded-bull font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Predict All Fights
            </motion.button>
          </motion.div>
        ))
      ) : (
        fightingEvents.flatMap(event =>
          event.fights.map((fight, index) => (
            <motion.div
              key={fight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-light-gray"
            >
              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-white font-medium text-lg">
                    {fight.fighterA} <span className="text-gray-400">vs</span> {fight.fighterB}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Fighter Selection */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Winner
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[fight.fighterA, fight.fighterB].map((fighter) => (
                        <motion.button
                          key={fighter}
                          className={`p-3 rounded-bull border-2 transition-all ${
                            predictions[fight.id]?.fighter === fighter
                              ? 'border-bull-red bg-bull-red/10 text-bull-red'
                              : 'border-bull-light-gray hover:border-bull-red/50 text-gray-300 hover:text-white'
                          }`}
                          onClick={() => handlePrediction(fight.id, 'fighter', fighter)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {fighter}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Method Selection */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Method
                    </label>
                    <select
                      className="w-full bg-bull-light-gray border border-bull-light-gray rounded-bull px-3 py-2 text-white"
                      value={predictions[fight.id]?.method || ''}
                      onChange={(e) => handlePrediction(fight.id, 'method', e.target.value)}
                    >
                      <option value="">Select Method</option>
                      <option value="KO/TKO">KO/TKO</option>
                      <option value="Submission">Submission</option>
                      <option value="Decision">Decision</option>
                    </select>
                  </div>

                  {/* Round Selection */}
                  {predictions[fight.id]?.method && predictions[fight.id]?.method !== 'Decision' && (
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Round
                      </label>
                      <select
                        className="w-full bg-bull-light-gray border border-bull-light-gray rounded-bull px-3 py-2 text-white"
                        value={predictions[fight.id]?.round || ''}
                        onChange={(e) => handlePrediction(fight.id, 'round', e.target.value)}
                      >
                        <option value="">Select Round</option>
                        {[1, 2, 3, 4, 5].map(round => (
                          <option key={round} value={round}>Round {round}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Decision Type */}
                  {predictions[fight.id]?.method === 'Decision' && (
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Decision Type
                      </label>
                      <select
                        className="w-full bg-bull-light-gray border border-bull-light-gray rounded-bull px-3 py-2 text-white"
                        value={predictions[fight.id]?.decisionType || ''}
                        onChange={(e) => handlePrediction(fight.id, 'decisionType', e.target.value)}
                      >
                        <option value="">Select Decision Type</option>
                        <option value="Unanimous">Unanimous Decision</option>
                        <option value="Split">Split Decision</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              <motion.button
                className={`w-full py-3 rounded-bull font-medium transition-all ${
                  predictions[fight.id]?.fighter
                    ? 'bg-bull-red hover:bg-bull-red-light text-white'
                    : 'bg-bull-light-gray text-gray-400 cursor-not-allowed'
                }`}
                onClick={() => handleStake(fight, event)}
                disabled={!predictions[fight.id]?.fighter}
                whileHover={predictions[fight.id]?.fighter ? { scale: 1.02 } : {}}
                whileTap={predictions[fight.id]?.fighter ? { scale: 0.98 } : {}}
              >
                {predictions[fight.id]?.fighter ? 'Stake BBWIN' : 'Select Fighter First'}
              </motion.button>
            </motion.div>
          ))
        )
      )}
    </div>
  );
};

export default FightingCard;