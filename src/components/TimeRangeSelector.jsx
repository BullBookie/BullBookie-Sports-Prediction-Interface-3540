import React from 'react';
import { motion } from 'framer-motion';

const TimeRangeSelector = ({ selectedRange, onRangeChange }) => {
  const ranges = [
    { key: '7d', label: '7 Days' },
    { key: '30d', label: '30 Days' },
    { key: '90d', label: '3 Months' },
    { key: '1y', label: '1 Year' },
    { key: 'all', label: 'All Time' }
  ];

  return (
    <div className="flex bg-bull-charcoal rounded-bull p-1 w-fit border border-bull-gray">
      {ranges.map((range) => (
        <motion.button
          key={range.key}
          className={`px-4 py-2 rounded-bull font-medium transition-all duration-300 text-sm ${
            selectedRange === range.key
              ? 'bg-bull-red text-bull-white shadow-bull'
              : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
          }`}
          onClick={() => onRangeChange(range.key)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {range.label}
        </motion.button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;