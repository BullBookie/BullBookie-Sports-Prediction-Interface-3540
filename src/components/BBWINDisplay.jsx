import React from 'react';
import { motion } from 'framer-motion';

const BBWINDisplay = ({ amount, size = 'md', showIcon = true, className = '' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg', 
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const tokenSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && (
        <span className={`font-heading text-bull-yellow font-bold ${tokenSizes[size]}`}>
          BBWIN
        </span>
      )}
      <span className={`font-bold text-bull-yellow ${sizeClasses[size]}`}>
        {typeof amount === 'number' ? amount.toFixed(2) : amount}
      </span>
    </div>
  );
};

export default BBWINDisplay;