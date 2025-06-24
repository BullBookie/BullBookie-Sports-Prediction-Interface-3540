import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import BBWINDisplay from '../components/BBWINDisplay';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiWallet, FiSettings, FiBarChart3, FiClock } = FiIcons;

const Account = () => {
  const accountData = {
    username: 'BullTrader2024',
    email: 'trader@bullbookie.com',
    memberSince: 'March 2024',
    bbwinBalance: 1250.50,
    totalStaked: 5420.00,
    totalWon: 6180.75,
    winRate: '68.5',
    activePredictions: 3
  };

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
            Account
          </h2>
        </div>
        <p className="text-gray-400">
          Manage your profile and view account statistics
        </p>
      </div>

      {/* Profile Card */}
      <motion.div 
        className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-bull-red rounded-full flex items-center justify-center">
            <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-white">
              {accountData.username}
            </h2>
            <p className="text-gray-400">{accountData.email}</p>
            <p className="text-gray-500 text-sm">Member since {accountData.memberSince}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-white mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Username</label>
                <input
                  type="text"
                  value={accountData.username}
                  className="w-full bg-bull-light-gray border border-bull-light-gray rounded-bull px-3 py-2 text-white focus:border-bull-red focus:outline-none"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={accountData.email}
                  className="w-full bg-bull-light-gray border border-bull-light-gray rounded-bull px-3 py-2 text-white focus:border-bull-red focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-white mb-3">Quick Actions</h3>
            <div className="space-y-3">
              <motion.button
                className="w-full bg-bull-red hover:bg-bull-red-light text-white font-medium py-2 rounded-bull transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSettings} className="w-4 h-4 inline mr-2" />
                Edit Profile
              </motion.button>
              <motion.button
                className="w-full bg-bull-light-gray hover:bg-gray-600 text-white font-medium py-2 rounded-bull transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiWallet} className="w-4 h-4 inline mr-2" />
                Manage Wallet
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Account Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiWallet} className="w-8 h-8 text-bull-yellow" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">Balance</span>
          </div>
          <BBWINDisplay amount={accountData.bbwinBalance} size="xl" />
        </motion.div>

        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiBarChart3} className="w-8 h-8 text-blue-500" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">Total Staked</span>
          </div>
          <BBWINDisplay amount={accountData.totalStaked} size="xl" />
        </motion.div>

        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiBarChart3} className="w-8 h-8 text-bull-yellow" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">Total Won</span>
          </div>
          <BBWINDisplay amount={accountData.totalWon} size="xl" />
        </motion.div>

        <motion.div 
          className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <SafeIcon icon={FiBarChart3} className="w-8 h-8 text-purple-500" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">Win Rate</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{accountData.winRate}%</p>
            <p className="text-xs text-gray-400">Success Rate</p>
          </div>
        </motion.div>
      </div>

      {/* Active Predictions Summary */}
      <motion.div 
        className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold text-white">
            Active Predictions
          </h3>
          <SafeIcon icon={FiClock} className="w-6 h-6 text-bull-red" />
        </div>
        <div className="text-center py-8">
          <div className="text-3xl font-bold text-bull-red mb-2">
            {accountData.activePredictions}
          </div>
          <p className="text-gray-400">
            Predictions awaiting results
          </p>
          <motion.button
            className="mt-4 bg-bull-red hover:bg-bull-red-light text-white px-6 py-2 rounded-bull font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Predictions
          </motion.button>
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div 
        className="bg-bull-gray rounded-bull p-6 border border-bull-light-gray"
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="font-heading text-lg font-semibold text-white mb-4">
          Security Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Two-Factor Authentication</p>
              <p className="text-gray-400 text-sm">Add an extra layer of security</p>
            </div>
            <motion.button
              className="bg-bull-light-gray hover:bg-gray-600 text-white px-4 py-2 rounded-bull font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enable
            </motion.button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Change Password</p>
              <p className="text-gray-400 text-sm">Update your account password</p>
            </div>
            <motion.button
              className="bg-bull-light-gray hover:bg-gray-600 text-white px-4 py-2 rounded-bull font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Change
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Account;