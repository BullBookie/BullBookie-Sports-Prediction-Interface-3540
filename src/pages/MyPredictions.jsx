import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import BBWINDisplay from '../components/BBWINDisplay';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiCheck, FiX, FiTrendingUp } = FiIcons;

const mockPredictions = [
  {
    id: 1,
    sport: 'Football',
    match: 'Manchester City vs Arsenal',
    prediction: 'Home Win',
    stake: 100.00,
    status: 'pending',
    odds: '2.1',
    potentialWin: 210.00,
    date: '2024-04-15'
  },
  {
    id: 2,
    sport: 'Fighting',
    match: 'Jon Jones vs Stipe Miocic',
    prediction: 'Jon Jones by KO/TKO',
    stake: 50.00,
    status: 'won',
    odds: '1.8',
    potentialWin: 90.00,
    date: '2024-04-13'
  },
  {
    id: 3,
    sport: 'Basketball',
    match: 'Lakers vs Warriors',
    prediction: 'Warriors Win',
    stake: 75.00,
    status: 'lost',
    odds: '1.9',
    potentialWin: 142.50,
    date: '2024-04-12'
  }
];

const MyPredictions = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <SafeIcon icon={FiClock} className="w-5 h-5 text-yellow-500" />;
      case 'won': return <SafeIcon icon={FiCheck} className="w-5 h-5 text-bull-yellow" />;
      case 'lost': return <SafeIcon icon={FiX} className="w-5 h-5 text-bull-red" />;
      default: return <SafeIcon icon={FiClock} className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-500 bg-yellow-500/10';
      case 'won': return 'text-bull-yellow bg-bull-yellow/10';
      case 'lost': return 'text-bull-red bg-bull-red/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const totalStaked = mockPredictions.reduce((sum, pred) => sum + pred.stake, 0);
  const totalWon = mockPredictions
    .filter(pred => pred.status === 'won')
    .reduce((sum, pred) => sum + pred.potentialWin, 0);
  const winRate = (mockPredictions.filter(pred => pred.status === 'won').length / 
                   mockPredictions.filter(pred => pred.status !== 'pending').length * 100) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="font-caprasimo text-3xl font-bold text-bull-red">
            BullBookie
          </h1>
          <h2 className="font-heading text-3xl font-bold text-white">
            My Predictions
          </h2>
        </div>
        <p className="text-gray-400">
          Track your betting history and performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Staked</p>
              <BBWINDisplay amount={totalStaked} size="xl" />
            </div>
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-bull-red" />
          </div>
        </motion.div>

        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Won</p>
              <BBWINDisplay amount={totalWon} size="xl" />
            </div>
            <SafeIcon icon={FiCheck} className="w-8 h-8 text-bull-yellow" />
          </div>
        </motion.div>

        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Win Rate</p>
              <p className="text-2xl font-bold text-white">{winRate.toFixed(1)}%</p>
              <p className="text-xs text-gray-400">Success Rate</p>
            </div>
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-bull-red" />
          </div>
        </motion.div>
      </div>

      {/* Predictions List */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl font-semibold text-white">
          Recent Predictions
        </h2>
        
        {mockPredictions.map((prediction, index) => (
          <motion.div
            key={prediction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-bull-red text-sm font-medium uppercase tracking-wide">
                    {prediction.sport}
                  </span>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-bull text-xs font-medium ${getStatusColor(prediction.status)}`}>
                    {getStatusIcon(prediction.status)}
                    <span className="capitalize">{prediction.status}</span>
                  </div>
                </div>
                
                <h3 className="font-medium text-white text-lg mb-1">
                  {prediction.match}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {prediction.prediction}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Stake:</span>
                    <div className="mt-1">
                      <BBWINDisplay amount={prediction.stake} size="sm" />
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Odds:</span>
                    <span className="text-white ml-2 font-medium">{prediction.odds}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Potential Win:</span>
                    <div className="mt-1">
                      <BBWINDisplay amount={prediction.potentialWin} size="sm" />
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white ml-2 font-medium">{prediction.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {mockPredictions.length === 0 && (
        <div className="text-center py-12">
          <SafeIcon icon={FiTrendingUp} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-400 mb-2">
            No predictions yet
          </h3>
          <p className="text-gray-500">
            Start making predictions to see them here
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MyPredictions;