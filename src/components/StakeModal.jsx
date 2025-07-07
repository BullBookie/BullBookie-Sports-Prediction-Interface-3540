import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import BBWINDisplay from './BBWINDisplay';
import WalletModal from './WalletModal';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiInfo, FiTarget, FiShield, FiMail, FiCheck } = FiIcons;

const StakeModal = ({ prediction, onClose }) => {
  const [stakeAmount, setStakeAmount] = useState('1000'); // Default to 1000 BBWIN
  const [leverage, setLeverage] = useState(1.0);
  const [email, setEmail] = useState('');
  const [emailOptIn, setEmailOptIn] = useState(false);
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
      fees,
      email: emailOptIn ? email : null
    });
    
    // Simulate sending email summary if opted in
    if (emailOptIn && email) {
      console.log('Email summary sent to:', email);
      // Here you would integrate with your email service
    }
    
    setShowWalletModal(false);
    onClose();
  };

  const handleLeverageChange = (e) => {
    setLeverage(parseFloat(e.target.value));
  };

  const getSportIcon = (sport) => {
    const icons = {
      'Football': '⚽',
      'Basketball': '🏀',
      'Fighting': '🥊',
      'Tennis': '🎾',
      'Formula One': '🏎️'
    };
    return icons[sport] || '🏆';
  };

  const renderMinimalisticSummary = () => {
    return (
      <div className="bg-bull-charcoal rounded-bull p-4 mb-6 border border-bull-red/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">
            {getSportIcon(prediction.sport)}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-bull-red font-bold text-lg">
              {prediction.sport} Prediction
            </h3>
            <div className="text-bull-light-gray text-sm">
              {prediction.type && (
                <span className="capitalize">{prediction.type.replace('-', ' ')}</span>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Prediction Type */}
        <div className="space-y-3 text-sm">
          {/* Football Predictions */}
          {prediction.type === 'football-matchweek' && (
            <>
              <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                <span className="text-bull-light-gray">Event:</span>
                <span className="text-bull-white font-medium">{prediction.league} - {prediction.matchweek}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                <span className="text-bull-light-gray">Matches:</span>
                <span className="text-bull-yellow font-bold">{prediction.totalMatches} predictions</span>
              </div>
              <div className="bg-bull-gray rounded p-3 max-h-60 overflow-y-auto">
                <div className="text-xs text-bull-light-gray mb-2">All Predictions:</div>
                {prediction.matches && prediction.matches.map((match, index) => {
                  const pred = prediction.predictions[match.id];
                  const predictionText = pred === '1' ? 'Home' : pred === 'X' ? 'Draw' : pred === '2' ? 'Away' : pred;
                  return (
                    <div key={match.id} className="flex justify-between items-center text-xs py-1">
                      <span className="text-bull-light-gray truncate flex-1">
                        {match.home} vs {match.away}
                      </span>
                      <span className="text-bull-red font-medium ml-2">{predictionText}</span>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Basketball Predictions */}
          {prediction.type === 'basketball-week' && (
            <>
              <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                <span className="text-bull-light-gray">Event:</span>
                <span className="text-bull-white font-medium">{prediction.conference} - {prediction.week}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                <span className="text-bull-light-gray">Matches:</span>
                <span className="text-bull-yellow font-bold">{prediction.totalMatches} predictions</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-bull-light-gray">Player of Week:</span>
                <span className="text-bull-white font-medium">{prediction.playerOfWeek}</span>
              </div>
            </>
          )}

          {/* Fighting Predictions */}
          {(prediction.type === 'fighting-event' || prediction.type === 'fighting-individual') && (
            <>
              {prediction.type === 'fighting-event' ? (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Event:</span>
                    <span className="text-bull-white font-medium">{prediction.event.title}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-bull-light-gray">Total Fights:</span>
                    <span className="text-bull-yellow font-bold">{prediction.totalFights} predictions</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Fight:</span>
                    <span className="text-bull-white font-medium">
                      {prediction.fight.fighterA} vs {prediction.fight.fighterB}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Result:</span>
                    <span className="text-bull-red font-medium">
                      {prediction.prediction.result === 'Draw/Cancelled/NC' ? 'Draw/Cancelled/NC' : `${prediction.prediction.winner} wins`}
                    </span>
                  </div>
                  {prediction.prediction.method && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-bull-light-gray">Method:</span>
                      <span className="text-bull-white font-medium">
                        {prediction.prediction.method}
                        {prediction.prediction.koRound && ` - ${prediction.prediction.koRound}`}
                        {prediction.prediction.decisionType && ` - ${prediction.prediction.decisionType}`}
                      </span>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* Tennis Predictions */}
          {(prediction.type === 'tennis-match' || prediction.type === 'tennis-tournament') && (
            <>
              {prediction.type === 'tennis-match' ? (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Match:</span>
                    <span className="text-bull-white font-medium">
                      {prediction.match.playerA.name} vs {prediction.match.playerB.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Tournament:</span>
                    <span className="text-bull-white font-medium">{prediction.match.tournament}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Winner:</span>
                    <span className="text-bull-red font-medium">{prediction.prediction.winner}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-bull-light-gray">Format:</span>
                    <span className="text-bull-white font-medium">
                      {prediction.prediction.setsFormat?.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                    <span className="text-bull-light-gray">Tournament:</span>
                    <span className="text-bull-white font-medium">{prediction.tournament.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-bull-light-gray">Categories:</span>
                    <span className="text-bull-yellow font-bold">
                      {prediction.tournament.categories.length} complete predictions
                    </span>
                  </div>
                </>
              )}
            </>
          )}

          {/* Formula One Predictions */}
          {prediction.type === 'formula1' && (
            <>
              <div className="flex justify-between items-center py-2 border-b border-bull-gray">
                <span className="text-bull-light-gray">Race:</span>
                <span className="text-bull-white font-medium">{prediction.race.race}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-bull-light-gray">Winner:</span>
                <span className="text-bull-red font-medium">{prediction.prediction}</span>
              </div>
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
          className="bg-bull-gray rounded-bull p-4 sm:p-6 w-full max-w-sm sm:max-w-md border border-bull-charcoal shadow-bull-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-heading text-bull-yellow font-bold text-base sm:text-lg">
                BBWIN
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-bull-white">
                Stake
              </h2>
            </div>
            <motion.button
              className="text-bull-light-gray hover:text-bull-white"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiX} className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* Minimalistic Prediction Summary */}
          {renderMinimalisticSummary()}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-bull-light-gray text-xs sm:text-sm font-medium mb-2">
                Stake Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-bull-charcoal border border-bull-gray rounded-bull px-3 py-2 pr-16 sm:pr-20 text-bull-white focus:border-bull-red focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter amount"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 font-heading text-bull-yellow text-xs sm:text-sm font-bold">
                  BBWIN
                </span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label className="block text-bull-light-gray text-xs sm:text-sm font-medium">
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
                  <div className="bg-bull-charcoal rounded-bull px-3 sm:px-4 py-1 sm:py-2 border border-bull-red/50">
                    <span className="text-bull-red font-bold text-lg sm:text-xl">
                      {leverage.toFixed(1)}x
                    </span>
                  </div>
                  <span className="text-xs text-bull-light-gray">3.0x</span>
                </div>

                {/* Quick Select Buttons */}
                <div className="grid grid-cols-5 gap-1 sm:gap-2 mt-3">
                  {[1.0, 1.5, 2.0, 2.5, 3.0].map((value) => (
                    <motion.button
                      key={value}
                      type="button"
                      className={`py-1 sm:py-2 px-1 sm:px-2 rounded-bull text-xs font-medium transition-all ${
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

            {/* Email Notification Section */}
            <div className="bg-bull-charcoal rounded-bull p-3 sm:p-4 space-y-3 border border-bull-gray">
              <div className="flex items-start gap-3">
                <motion.button
                  type="button"
                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                    emailOptIn
                      ? 'bg-bull-yellow border-bull-yellow'
                      : 'border-bull-light-gray hover:border-bull-yellow'
                  }`}
                  onClick={() => setEmailOptIn(!emailOptIn)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {emailOptIn && (
                    <SafeIcon icon={FiCheck} className="w-3 h-3 text-bull-black" />
                  )}
                </motion.button>
                <div className="flex-1">
                  <label className="text-bull-light-gray text-xs sm:text-sm font-medium cursor-pointer">
                    Email prediction summary after staking
                  </label>
                  <p className="text-bull-light-gray text-xs mt-1">
                    Get a detailed summary of your prediction and stake sent to your email
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {emailOptIn && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <div className="relative">
                      <SafeIcon
                        icon={FiMail}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-bull-light-gray"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-bull-gray border border-bull-light-gray rounded-bull pl-10 pr-3 py-2 text-bull-white focus:border-bull-yellow focus:outline-none transition-colors text-sm"
                        placeholder="your@email.com"
                        required={emailOptIn}
                      />
                    </div>
                    <p className="text-xs text-bull-light-gray">
                      We'll only use this email for your prediction summary. No spam, ever.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-bull-charcoal rounded-bull p-3 sm:p-4 space-y-2 border border-bull-gray">
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={FiInfo} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-yellow" />
                <span className="text-xs sm:text-sm font-medium text-bull-light-gray">Fee Breakdown</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
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
                <SafeIcon
                  icon={FiShield}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-bull-yellow mt-0.5 flex-shrink-0"
                />
                <div className="text-xs text-bull-yellow">
                  <p className="font-medium">Our Principal Protection Guarantee.</p>
                  <p>No matter the outcome for the event, you will always receive your Net Principal back to your wallet.</p>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-bull-red hover:bg-bull-red-light text-bull-white font-medium py-3 sm:py-4 rounded-bull transition-colors shadow-bull flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0 || (emailOptIn && !email)}
            >
              <span className="font-heading text-xs sm:text-sm font-bold">BBWIN</span> CONNECT WALLET AND STAKE
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