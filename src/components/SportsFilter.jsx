import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

const sportsOptions = [
  { id: 'football', label: 'Football', emoji: '⚽' },
  { id: 'basketball', label: 'Basketball', emoji: '🏀' },
  { id: 'fighting', label: 'Fighting Sports', emoji: '🥊' },
  { id: 'tennis', label: 'Tennis', emoji: '🎾' },
  { id: 'formula1', label: 'Formula One', emoji: '🏎️' },
];

const SportsFilter = ({ selectedSport, onSportChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = sportsOptions.find(sport => sport.id === selectedSport);

  return (
    <div className="relative max-w-xs mx-auto">
      <motion.button
        className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-light-gray transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-3">
          <span className="text-xl">{selectedOption?.emoji}</span>
          <span className="font-medium">{selectedOption?.label}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border border-bull-light-gray rounded-bull shadow-bull-lg z-50"
          >
            {sportsOptions.map((sport) => (
              <motion.button
                key={sport.id}
                className="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-bull-light-gray transition-colors first:rounded-t-bull last:rounded-b-bull"
                onClick={() => {
                  onSportChange(sport.id);
                  setIsOpen(false);
                }}
                whileHover={{ backgroundColor: '#2A2A2A' }}
              >
                <span className="text-xl">{sport.emoji}</span>
                <span className="text-white font-medium">{sport.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SportsFilter;