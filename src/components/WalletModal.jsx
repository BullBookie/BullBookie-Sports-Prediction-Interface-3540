import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiWallet } = FiIcons;

const WalletModal = ({ onClose, onConnect }) => {
  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect with MetaMask wallet',
      type: 'metamask'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Connect with WalletConnect',
      type: 'walletconnect'
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect with Coinbase Wallet',
      type: 'coinbase'
    },
    {
      name: 'Trust Wallet',
      icon: '🛡️',
      description: 'Connect with Trust Wallet',
      type: 'trust'
    },
    {
      name: 'Phantom',
      icon: '👻',
      description: 'Connect with Phantom wallet',
      type: 'phantom'
    },
    {
      name: 'Rainbow',
      icon: '🌈',
      description: 'Connect with Rainbow wallet',
      type: 'rainbow'
    }
  ];

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
          className="bg-bull-gray rounded-bull p-6 w-full max-w-md border border-bull-charcoal shadow-bull-lg"
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

          <div className="space-y-3">
            {wallets.map((wallet, index) => (
              <motion.button
                key={wallet.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="w-full bg-bull-charcoal hover:bg-bull-light-gray border border-bull-gray rounded-bull p-4 text-left transition-all duration-200 group"
                onClick={() => onConnect(wallet.type)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {wallet.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-bull-white group-hover:text-bull-yellow transition-colors">
                      {wallet.name}
                    </h3>
                    <p className="text-bull-light-gray text-sm">
                      {wallet.description}
                    </p>
                  </div>
                  <div className="text-bull-light-gray group-hover:text-bull-white transition-colors">
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