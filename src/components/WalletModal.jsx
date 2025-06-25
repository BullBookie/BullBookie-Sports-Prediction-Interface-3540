import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiWallet } = FiIcons;

const WalletModal = ({ onClose, onConnect }) => {
  const wallets = [
    { name: 'MetaMask', icon: '🦊', description: 'Connect with MetaMask wallet', type: 'metamask', network: 'Ethereum' },
    { name: 'WalletConnect', icon: '🔗', description: 'Connect with WalletConnect', type: 'walletconnect', network: 'Multi-chain' },
    { name: 'Coinbase Wallet', icon: '🔵', description: 'Connect with Coinbase Wallet', type: 'coinbase', network: 'Ethereum' },
    { name: 'Trust Wallet', icon: '🛡️', description: 'Connect with Trust Wallet', type: 'trust', network: 'Multi-chain' },
    { name: 'Phantom', icon: '👻', description: 'Connect with Phantom wallet', type: 'phantom', network: 'Solana' },
    { name: 'Rainbow', icon: '🌈', description: 'Connect with Rainbow wallet', type: 'rainbow', network: 'Ethereum' },
    { name: 'LACE', icon: '🎴', description: 'Connect with LACE wallet', type: 'lace', network: 'Cardano' },
    { name: 'Nami', icon: '🌊', description: 'Connect with Nami wallet', type: 'nami', network: 'Cardano' },
    { name: 'Eternl', icon: '♾️', description: 'Connect with Eternl wallet', type: 'eternl', network: 'Cardano' },
    { name: 'Flint', icon: '🔥', description: 'Connect with Flint wallet', type: 'flint', network: 'Cardano' },
    { name: 'Yoroi', icon: '🏛️', description: 'Connect with Yoroi wallet', type: 'yoroi', network: 'Cardano' },
    { name: 'Typhon', icon: '🌪️', description: 'Connect with Typhon wallet', type: 'typhon', network: 'Cardano' }
  ];

  const getNetworkColor = (network) => {
    switch (network) {
      case 'Ethereum': return 'text-blue-400';
      case 'Solana': return 'text-purple-400';
      case 'Cardano': return 'text-bull-red';
      case 'Multi-chain': return 'text-bull-yellow';
      default: return 'text-bull-light-gray';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-bull-black/80 flex items-center justify-center p-4 z-[60]"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-bull-gray rounded-bull p-6 w-full max-w-2xl border border-bull-charcoal shadow-bull-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <SafeIcon icon={FiWallet} className="w-6 h-6 text-bull-yellow" />
              <h2 className="font-heading text-xl font-bold text-bull-white">
                Connect Wallet
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {wallets.map((wallet, index) => (
              <motion.button
                key={wallet.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                className="w-full bg-bull-charcoal hover:bg-bull-light-gray border border-bull-gray rounded-bull p-4 text-left transition-all duration-200 group"
                onClick={() => onConnect(wallet.type)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {wallet.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-bull-white group-hover:text-bull-yellow transition-colors truncate">
                        {wallet.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-bull bg-bull-gray ${getNetworkColor(wallet.network)} font-medium`}>
                        {wallet.network}
                      </span>
                    </div>
                    <p className="text-bull-light-gray text-sm truncate">
                      {wallet.description}
                    </p>
                  </div>
                  <div className="text-bull-light-gray group-hover:text-bull-white transition-colors flex-shrink-0">
                    →
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-6 p-3 bg-bull-charcoal rounded-bull border border-bull-gray">
            <p className="text-xs text-bull-light-gray text-center">
              By connecting a wallet, you agree to BullBookie's Terms of Service and Privacy Policy
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WalletModal;