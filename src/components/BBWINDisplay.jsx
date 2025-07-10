import React from 'react';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

const BBWINDisplay = ({ amount, size = 'md', showIcon = true, showTokenLogo = false, className = '' }) => {
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

  const logoSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showTokenLogo && (
        <BrandLogo.BBWINToken className={logoSizes[size]} />
      )}
      {showIcon && !showTokenLogo && (
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