import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo } = FiIcons;

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
              How to Submit Fighting Predictions
            </h3>
            <div className="space-y-2 text-bull-light-gray">
              <p>• <strong className="text-bull-white">Choose Mode:</strong> Select "Event Predictions" to bet on entire events or "Fight Predictions" for individual fights</p>
              <p>• <strong className="text-bull-white">Pick Winner:</strong> Select which fighter you think will win</p>
              <p>• <strong className="text-bull-white">Method & Round:</strong> Choose how the fight will end (KO/TKO, Submission, Decision) and which round</p>
              <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Once your prediction is complete, click "Stake BBWIN" to submit</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Tab Selector */}
      <div className="flex bg-gradient-to-r from-bull-charcoal to-bull-gray rounded-bull p-2 border border-bull-light-gray shadow-bull">
        <motion.button
          className={`flex-1 py-4 px-6 rounded-bull font-bold text-lg transition-all duration-300 ${
            cardType === 'event' 
              ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-white shadow-bull-lg' 
              : 'text-bull-light-gray hover:text-white hover:bg-bull-gray'
          }`}
          onClick={() => setCardType('event')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Event Predictions
        </motion.button>
        <motion.button
          className={`flex-1 py-4 px-6 rounded-bull font-bold text-lg transition-all duration-300 ${
            cardType === 'fight' 
              ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-white shadow-bull-lg' 
              : 'text-bull-light-gray hover:text-white hover:bg-bull-gray'
          }`}
          onClick={() => setCardType('fight')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
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
            className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
            whileHover={{ scale: 1.01, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
          >
            <div className="mb-6">
              <h3 className="font-heading font-bold text-bull-red text-2xl mb-2">
                {event.title}
              </h3>
              <p className="text-bull-light-gray text-lg">{event.date}</p>
            </div>

            <div className="space-y-4 mb-8">
              {event.fights.map((fight) => (
                <div key={fight.id} className="text-center bg-bull-charcoal rounded-bull p-4 border border-bull-gray">
                  <span className="font-bold text-bull-white text-lg">
                    {fight.fighterA} <span className="text-bull-light-gray">vs</span> {fight.fighterB}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              className="w-full py-6 bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white rounded-bull font-bold text-xl transition-all shadow-bull"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' }}
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
              className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
              whileHover={{ scale: 1.01, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
            >
              <div className="mb-8">
                <div className="text-center mb-6">
                  <span className="text-bull-white font-bold text-2xl">
                    {fight.fighterA} <span className="text-bull-light-gray">vs</span> {fight.fighterB}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Enhanced Fighter Selection */}
                  <div>
                    <label className="block text-bull-light-gray text-lg font-bold mb-4">
                      Winner
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[fight.fighterA, fight.fighterB].map((fighter) => (
                        <motion.button
                          key={fighter}
                          className={`p-6 rounded-bull border-2 transition-all duration-300 ${
                            predictions[fight.id]?.fighter === fighter
                              ? 'border-bull-red bg-bull-red/20 text-bull-red shadow-bull-lg'
                              : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                          }`}
                          onClick={() => handlePrediction(fight.id, 'fighter', fighter)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="font-bold text-lg">{fighter}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Method Selection */}
                  <div>
                    <label className="block text-bull-light-gray text-lg font-bold mb-4">
                      Method
                    </label>
                    <select
                      className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 text-white text-lg focus:border-bull-red focus:outline-none shadow-bull"
                      value={predictions[fight.id]?.method || ''}
                      onChange={(e) => handlePrediction(fight.id, 'method', e.target.value)}
                    >
                      <option value="">Select Method</option>
                      <option value="KO/TKO">KO/TKO</option>
                      <option value="Submission">Submission</option>
                      <option value="Decision">Decision</option>
                    </select>
                  </div>

                  {/* Enhanced Round Selection */}
                  {predictions[fight.id]?.method && predictions[fight.id]?.method !== 'Decision' && (
                    <div>
                      <label className="block text-bull-light-gray text-lg font-bold mb-4">
                        Round
                      </label>
                      <select
                        className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 text-white text-lg focus:border-bull-red focus:outline-none shadow-bull"
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

                  {/* Enhanced Decision Type */}
                  {predictions[fight.id]?.method === 'Decision' && (
                    <div>
                      <label className="block text-bull-light-gray text-lg font-bold mb-4">
                        Decision Type
                      </label>
                      <select
                        className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 text-white text-lg focus:border-bull-red focus:outline-none shadow-bull"
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
                className={`w-full py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
                  predictions[fight.id]?.fighter 
                    ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white' 
                    : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => handleStake(fight, event)}
                disabled={!predictions[fight.id]?.fighter}
                whileHover={predictions[fight.id]?.fighter ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
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