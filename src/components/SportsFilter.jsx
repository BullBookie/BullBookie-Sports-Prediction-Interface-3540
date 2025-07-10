import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SportIcons from './SportIcons';
import * as FiIcons from 'react-icons/fi';

const {FiChevronDown} = FiIcons;

const sportsOptions = [
  {id: 'football', label: 'Football', icon: SportIcons.Football},
  {id: 'basketball', label: 'Basketball', icon: SportIcons.Basketball},
  {id: 'fighting', label: 'Fighting Sports', icon: SportIcons.Fighting},
  {id: 'tennis', label: 'Tennis', icon: SportIcons.Tennis},
  {id: 'racing', label: 'Racing Sports', icon: SportIcons.Racing},
];

const SportsFilter = ({selectedSport, onSportChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = sportsOptions.find(sport => sport.id === selectedSport);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <motion.button
        className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)'}}
        whileTap={{scale: 0.98}}
      >
        <div className="flex items-center space-x-3">
          {selectedOption?.icon && (
            <selectedOption.icon className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" />
          )}
          <span className="font-heading font-bold text-sm sm:text-lg truncate">
            {selectedOption?.label}
          </span>
        </div>
        <motion.div
          animate={{rotate: isOpen ? 180 : 0}}
          transition={{duration: 0.2}}
        >
          <SafeIcon icon={FiChevronDown} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-light-gray flex-shrink-0" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.2}}
            className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
          >
            {sportsOptions.map((sport) => (
              <motion.button
                key={sport.id}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center space-x-3 hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                onClick={() => {
                  onSportChange(sport.id);
                  setIsOpen(false);
                }}
                whileHover={{backgroundColor: '#212121'}}
              >
                <sport.icon className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" />
                <span className="text-white font-heading font-bold text-sm sm:text-lg">
                  {sport.label}
                </span>
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