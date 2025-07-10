import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import BBWINDisplay from '../components/BBWINDisplay';
import BrandLogo from '../components/BrandLogo';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiCheck, FiX, FiTrendingUp, FiUser, FiSearch, FiWallet, FiInfo } = FiIcons;

const mockPredictions = [
  {
    id: 1,
    sport: 'Football',
    match: 'Manchester City vs Arsenal',
    prediction: 'Home Win',
    stake: 100.00,
    status: 'pending',
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
    potentialWin: 142.50,
    date: '2024-04-12'
  }
];

const MyPredictions = () => {
  const [viewMode, setViewMode] = useState('login'); // 'login', 'wallet', 'predictions'
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      case 'pending': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'won': return 'text-bull-yellow bg-bull-yellow/10 border-bull-yellow/20';
      case 'lost': return 'text-bull-red bg-bull-red/10 border-bull-red/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const totalStaked = mockPredictions.reduce((sum, pred) => sum + pred.stake, 0);
  const totalWon = mockPredictions
    .filter(pred => pred.status === 'won')
    .reduce((sum, pred) => sum + pred.potentialWin, 0);
  const winRate = (mockPredictions.filter(pred => pred.status === 'won').length / 
    mockPredictions.filter(pred => pred.status !== 'pending').length * 100) || 0;

  const handleLogin = () => {
    setIsLoggedIn(true);
    setViewMode('predictions');
  };

  const handleWalletSearch = () => {
    if (walletAddress.trim()) {
      setViewMode('predictions');
    }
  };

  const renderLoginOptions = () => (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login Option */}
        <motion.div
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300 shadow-bull-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
        >
          <div className="text-center mb-6">
            <SafeIcon icon={FiUser} className="w-16 h-16 text-bull-red mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-bull-white mb-2">
              Login to Account
            </h3>
            <p className="text-bull-light-gray">
              Access your personal prediction history and stats
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-red focus:outline-none transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-red focus:outline-none transition-colors"
            />
            <motion.button
              className="w-full bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white font-bold py-4 rounded-bull transition-all shadow-bull"
              onClick={handleLogin}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login & View Predictions
            </motion.button>
          </div>
        </motion.div>

        {/* Wallet Search Option */}
        <motion.div
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal hover:border-bull-yellow/50 transition-all duration-300 shadow-bull-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(250,209,9,0.25)' }}
        >
          <div className="text-center mb-6">
            <SafeIcon icon={FiWallet} className="w-16 h-16 text-bull-yellow mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-bull-white mb-2">
              Search by Wallet
            </h3>
            <p className="text-bull-light-gray">
              Enter wallet address to view current staked predictions
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="0x... Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-yellow focus:outline-none transition-colors font-mono"
            />
            <motion.button
              className="w-full bg-gradient-to-r from-bull-yellow to-bull-yellow-light hover:from-bull-yellow-light hover:to-bull-yellow text-bull-black font-bold py-4 rounded-bull transition-all shadow-bull flex items-center justify-center gap-2"
              onClick={handleWalletSearch}
              disabled={!walletAddress.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiSearch} className="w-5 h-5" />
              Search Predictions
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Information Banner */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-bull-red/10 to-bull-yellow/10 border border-bull-red/20 rounded-bull p-6 shadow-bull-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start gap-4">
          <SafeIcon icon={FiInfo} className="w-6 h-6 text-bull-yellow flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-heading text-lg font-bold text-bull-white mb-2">
              About Your Predictions
            </h4>
            <div className="space-y-1 text-bull-light-gray">
              <p>• <strong className="text-bull-white">Login:</strong> Full access to prediction history, analytics, and account management</p>
              <p>• <strong className="text-bull-white">Wallet Search:</strong> View only current active predictions for any wallet address</p>
              <p>• <strong className="text-bull-white">Privacy:</strong> Your predictions are linked to your wallet - only you can see complete history</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderPredictions = () => (
    <>
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal shadow-bull-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-bull-light-gray text-lg font-medium">Total Staked</p>
              <BBWINDisplay amount={totalStaked} size="xl" showTokenLogo={true} />
            </div>
            <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-bull-red" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal shadow-bull-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(250,209,9,0.25)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-bull-light-gray text-lg font-medium">Total Won</p>
              <BBWINDisplay amount={totalWon} size="xl" showTokenLogo={true} />
            </div>
            <SafeIcon icon={FiCheck} className="w-12 h-12 text-bull-yellow" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal shadow-bull-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-bull-light-gray text-lg font-medium">Win Rate</p>
              <p className="text-3xl font-bold text-white">{winRate.toFixed(1)}%</p>
              <p className="text-sm text-bull-light-gray">Success Rate</p>
            </div>
            <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-bull-red" />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Predictions List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-white">
            Recent Predictions
          </h2>
          {!isLoggedIn && (
            <div className="text-bull-yellow text-sm">
              Showing wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          )}
        </div>

        {mockPredictions.map((prediction, index) => (
          <motion.div
            key={prediction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300 shadow-bull-lg"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-bull-red text-lg font-bold uppercase tracking-wide">
                    {prediction.sport}
                  </span>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-bull text-sm font-medium border ${getStatusColor(prediction.status)}`}>
                    {getStatusIcon(prediction.status)}
                    <span className="capitalize">{prediction.status}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-white text-2xl mb-2">
                  {prediction.match}
                </h3>
                <p className="text-bull-light-gray text-lg mb-6">
                  {prediction.prediction}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
                  <div>
                    <span className="text-bull-light-gray">Stake:</span>
                    <div className="mt-2">
                      <BBWINDisplay amount={prediction.stake} size="md" showTokenLogo={true} />
                    </div>
                  </div>
                  <div>
                    <span className="text-bull-light-gray">Potential Win:</span>
                    <div className="mt-2">
                      <BBWINDisplay amount={prediction.potentialWin} size="md" showTokenLogo={true} />
                    </div>
                  </div>
                  <div>
                    <span className="text-bull-light-gray">Date:</span>
                    <span className="text-white ml-3 font-bold">{prediction.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <BrandLogo.Icon className="w-12 h-12" />
          <h2 className="font-heading text-4xl font-bold text-white">My Predictions</h2>
        </div>
        <p className="text-bull-light-gray text-xl">
          {viewMode === 'predictions' 
            ? 'Track your prediction history and performance' 
            : 'Access your predictions by logging in or searching with wallet address'
          }
        </p>
      </div>

      {viewMode === 'predictions' ? renderPredictions() : renderLoginOptions()}

      {viewMode === 'predictions' && mockPredictions.length === 0 && (
        <div className="text-center py-16">
          <SafeIcon icon={FiTrendingUp} className="w-20 h-20 text-bull-light-gray mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-bull-light-gray mb-4">
            No predictions yet
          </h3>
          <p className="text-bull-light-gray text-lg">
            Start making predictions to see them here
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MyPredictions;