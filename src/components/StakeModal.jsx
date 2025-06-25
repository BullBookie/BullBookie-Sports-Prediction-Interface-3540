import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import BBWINDisplay from './BBWINDisplay';
import WalletModal from './WalletModal';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiInfo, FiTarget, FiShield } = FiIcons;

const StakeModal = ({ prediction, onClose }) => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [leverage, setLeverage] = useState(1.0);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const baseFee = 0.05; // 5%
  const leverageFee = 0.10; // 10%

  const calculateFees = () => {
    const amount = parseFloat(stakeAmount) || 0;
    const principalFee = amount * baseFee;
    const leverageAmount = leverage > 1 ? amount * leverageFee * (leverage - 1) : 0;
    const netPrincipal = amount - principalFee - leverageAmount;
    const netStake = netPrincipal * leverage;

    return {
      principalFee,
      leverageFee: leverageAmount,
      netPrincipal,
      netStake
    };
  };

  const fees = calculateFees();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stakeAmount && parseFloat(stakeAmount) > 0) {
      setShowWalletModal(true);
    }
  };

  const handleWalletConnect = (walletType) => {
    console.log('Wallet connected:', walletType);
    console.log('Stake submitted:', {
      prediction,
      amount: stakeAmount,
      leverage,
      fees
    });
    setShowWalletModal(false);
    onClose();
  };

  const handleLeverageChange = (e) => {
    setLeverage(parseFloat(e.target.value));
  };

  const renderPredictionSummary = () => {
    if (prediction.type === 'football-matchweek') {
      return (
        <div className="bg-bull-charcoal rounded-bull p-4 mb-4 border border-bull-red/20">
          <h3 className="font-medium text-bull-red mb-3 flex items-center gap-2">
            <SafeIcon icon={FiTarget} className="w-4 h-4" />
            {prediction.league} - {prediction.matchweek}
          </h3>
          <div className="text-bull-white text-sm space-y-3">
            <div className="flex justify-between items-center">
              <span>Total Matches:</span>
              <span className="font-bold text-bull-yellow">{prediction.totalMatches}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Predictions Made:</span>
              <span className="font-bold text-bull-yellow">{Object.keys(prediction.predictions).length}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-bull-gray">
              <div className="text-xs text-bull-light-gray mb-3">Match Predictions:</div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {prediction.matches && prediction.matches.map((match, index) => {
                  const pred = prediction.predictions[match.id];
                  const predictionText = pred === '1' ? 'Home Win' : pred === 'X' ? 'Draw' : pred === '2' ? 'Away Win' : pred;
                  return (
                    <div key={match.id} className="flex justify-between items-center text-xs">
                      <span className="text-bull-light-gray flex-1">
                        {match.home} vs {match.away}
                      </span>
                      <span className="text-bull-red font-medium ml-2">
                        {predictionText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Original prediction display for other sports
    return (
      <div className="bg-bull-charcoal rounded-bull p-4 mb-4 border border-bull-red/20">
        <h3 className="font-medium text-bull-red mb-2">
          {prediction.sport} Prediction
        </h3>
        <div className="text-bull-white text-sm">
          {prediction.type === 'football' && (
            <>
              {prediction.match.home} vs {prediction.match.away}
              <br />
              Prediction: {prediction.prediction === '1' ? 'Home Win' : prediction.prediction === 'X' ? 'Draw' : 'Away Win'}
            </>
          )}
          {prediction.type === 'fighting' && (
            <>
              {prediction.fight.fighterA} vs {prediction.fight.fighterB}
              <br />
              Winner: {prediction.prediction.fighter}
              {prediction.prediction.method && (
                <>
                  <br />
                  Method: {prediction.prediction.method}
                </>
              )}
            </>
          )}
          {prediction.type === 'basketball' && (
            <>
              {prediction.game.home} vs {prediction.game.away}
              <br />
              Winner: {prediction.prediction}
            </>
          )}
          {prediction.type === 'tennis' && (
            <>
              {prediction.match.playerA} vs {prediction.match.playerB}
              <br />
              Winner: {prediction.prediction}
            </>
          )}
          {prediction.type === 'formula1' && (
            <>
              {prediction.race.race}
              <br />
              Winner: {prediction.prediction}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-bull-black/70 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-bull-gray rounded-bull p-6 w-full max-w-md border border-bull-charcoal shadow-bull-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-heading text-bull-yellow font-bold text-lg">
                BBWIN
              </span>
              <h2 className="font-heading text-xl font-bold text-bull-white">
                Stake
              </h2>
            </div>
            <motion.button
              className="text-bull-light-gray hover:text-bull-white"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiX} className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="mb-6">
            {renderPredictionSummary()}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-bull-light-gray text-sm font-medium mb-2">
                Stake Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-bull-charcoal border border-bull-gray rounded-bull px-3 py-2 pr-20 text-bull-white focus:border-bull-red focus:outline-none transition-colors"
                  placeholder="Enter amount"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 font-heading text-bull-yellow text-sm font-bold">
                  BBWIN
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-bull-light-gray text-sm font-medium">
                Leverage Multiplier
              </label>

              {/* Leverage Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="1.0"
                  max="3.0"
                  step="0.1"
                  value={leverage}
                  onChange={handleLeverageChange}
                  className="w-full h-3 bg-bull-charcoal rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #D40934 0%, #D40934 ${((leverage - 1) / 2) * 100}%, #4A5568 ${((leverage - 1) / 2) * 100}%, #4A5568 100%)`
                  }}
                />

                {/* Leverage Display */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-bull-light-gray">1.0x</span>
                  <div className="bg-bull-charcoal rounded-bull px-4 py-2 border border-bull-red/50">
                    <span className="text-bull-red font-bold text-xl">
                      {leverage.toFixed(1)}x
                    </span>
                  </div>
                  <span className="text-xs text-bull-light-gray">3.0x</span>
                </div>

                {/* Quick Select Buttons */}
                <div className="flex gap-2 mt-3">
                  {[1.0, 1.5, 2.0, 2.5, 3.0].map((value) => (
                    <motion.button
                      key={value}
                      type="button"
                      className={`flex-1 py-2 px-2 rounded-bull text-xs font-medium transition-all ${
                        Math.abs(leverage - value) < 0.05
                          ? 'bg-bull-red text-bull-white'
                          : 'bg-bull-charcoal text-bull-light-gray hover:bg-bull-gray hover:text-bull-white'
                      }`}
                      onClick={() => setLeverage(value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {value.toFixed(1)}x
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-bull-charcoal rounded-bull p-4 space-y-2 border border-bull-gray">
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={FiInfo} className="w-4 h-4 text-bull-yellow" />
                <span className="text-sm font-medium text-bull-light-gray">Fee Breakdown</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-bull-light-gray">
                  <span>Principal Fee (5%)</span>
                  <BBWINDisplay amount={fees.principalFee} size="sm" />
                </div>
                <div className="flex justify-between text-bull-light-gray">
                  <span>Leverage Fee (10%)</span>
                  <BBWINDisplay amount={fees.leverageFee} size="sm" />
                </div>
                <hr className="border-bull-gray" />
                <div className="flex justify-between text-bull-white font-medium">
                  <span>Net Principal</span>
                  <BBWINDisplay amount={fees.netPrincipal} size="sm" />
                </div>
                <div className="flex justify-between text-bull-yellow font-bold">
                  <span>Net Stake</span>
                  <BBWINDisplay amount={fees.netStake} size="md" />
                </div>
              </div>
            </div>

            {/* Principal Protection Guarantee */}
            <div className="bg-bull-yellow/10 border border-bull-yellow/30 rounded-bull p-3">
              <div className="flex items-start gap-2">
                <SafeIcon icon={FiShield} className="w-4 h-4 text-bull-yellow mt-0.5 flex-shrink-0" />
                <div className="text-xs text-bull-yellow">
                  <p className="font-medium">Our Principal Protection Guarantee.</p>
                  <p>No matter the outcome for the event, you will always receive your Net Principal back to your wallet.</p>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-bull-red hover:bg-bull-red-light text-bull-white font-medium py-3 rounded-bull transition-colors shadow-bull flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
            >
              <span className="font-heading text-sm font-bold">BBWIN</span>
              CONNECT WALLET AND STAKE
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {showWalletModal && (
        <WalletModal
          onClose={() => setShowWalletModal(false)}
          onConnect={handleWalletConnect}
        />
      )}
    </AnimatePresence>
  );
};

export default StakeModal;