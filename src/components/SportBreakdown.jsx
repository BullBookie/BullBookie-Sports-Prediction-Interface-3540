import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SportIcons from './SportIcons';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiTrendingDown } = FiIcons;

const SportBreakdown = ({ sportData }) => {
  const getSportIcon = (sport) => {
    const iconMap = {
      'Football': SportIcons.Football,
      'Basketball': SportIcons.Basketball,
      'Fighting': SportIcons.Fighting,
      'Tennis': SportIcons.Tennis,
      'Racing Sports': SportIcons.Racing
    };
    return iconMap[sport] || SportIcons.Football;
  };

  const getPerformanceColor = (winRate) => {
    if (winRate >= 70) return 'text-bull-yellow';
    if (winRate >= 50) return 'text-bull-red';
    return 'text-bull-light-gray';
  };

  const getPerformanceIcon = (winRate) => {
    return winRate >= 50 ? FiTrendingUp : FiTrendingDown;
  };

  return (
    <div className="bg-bull-gray rounded-bull p-6 border border-bull-charcoal shadow-bull">
      <h3 className="font-heading text-xl font-semibold text-bull-white mb-6">
        Performance by Sport
      </h3>
      <div className="space-y-4">
        {sportData.map((sport, index) => {
          const SportIconComponent = getSportIcon(sport.name);
          return (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-bull-charcoal rounded-bull hover:bg-bull-dark-black transition-all duration-300 border border-transparent hover:border-bull-red/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <SportIconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-bull-white">
                    {sport.name}
                  </h4>
                  <p className="text-bull-light-gray text-sm">
                    {sport.totalPredictions} predictions • {sport.totalStaked.toFixed(2)} BBWIN staked
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <SafeIcon
                    icon={getPerformanceIcon(sport.winRate)}
                    className={`w-4 h-4 ${getPerformanceColor(sport.winRate)}`}
                  />
                  <span className={`font-bold ${getPerformanceColor(sport.winRate)}`}>
                    {sport.winRate.toFixed(1)}%
                  </span>
                </div>
                <p className={`text-sm font-medium ${sport.profit >= 0 ? 'text-bull-yellow' : 'text-bull-red'}`}>
                  {sport.profit >= 0 ? '+' : ''}{sport.profit.toFixed(2)} BBWIN
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {sportData.length === 0 && (
        <div className="text-center py-8">
          <p className="text-bull-light-gray">
            No prediction data available yet
          </p>
        </div>
      )}
    </div>
  );
};

export default SportBreakdown;