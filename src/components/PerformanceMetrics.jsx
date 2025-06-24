import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiTrendingDown, FiTarget, FiDollarSign, FiPercent, FiCalendar } = FiIcons;

const PerformanceMetrics = ({ metrics }) => {
  const metricCards = [
    {
      title: 'Total Profit/Loss',
      value: `${metrics.totalPnL >= 0 ? '+' : ''}${metrics.totalPnL.toFixed(2)}`,
      icon: metrics.totalPnL >= 0 ? FiTrendingUp : FiTrendingDown,
      color: metrics.totalPnL >= 0 ? 'text-bull-yellow' : 'text-bull-red',
      bgColor: metrics.totalPnL >= 0 ? 'bg-bull-yellow/10' : 'bg-bull-red/10',
      borderColor: metrics.totalPnL >= 0 ? 'border-bull-yellow/20' : 'border-bull-red/20',
      unit: 'BBWIN',
      change: metrics.pnlChange
    },
    {
      title: 'Win Rate',
      value: `${metrics.winRate.toFixed(1)}%`,
      icon: FiTarget,
      color: 'text-bull-red',
      bgColor: 'bg-bull-red/10',
      borderColor: 'border-bull-red/20',
      change: metrics.winRateChange
    },
    {
      title: 'Average Stake',
      value: metrics.avgStake.toFixed(2),
      icon: FiDollarSign,
      color: 'text-bull-yellow',
      bgColor: 'bg-bull-yellow/10',
      borderColor: 'border-bull-yellow/20',
      unit: 'BBWIN',
      change: metrics.avgStakeChange
    },
    {
      title: 'ROI',
      value: `${metrics.roi >= 0 ? '+' : ''}${metrics.roi.toFixed(1)}%`,
      icon: FiPercent,
      color: metrics.roi >= 0 ? 'text-bull-yellow' : 'text-bull-red',
      bgColor: metrics.roi >= 0 ? 'bg-bull-yellow/10' : 'bg-bull-red/10',
      borderColor: metrics.roi >= 0 ? 'border-bull-yellow/20' : 'border-bull-red/20',
      change: metrics.roiChange
    },
    {
      title: 'Longest Win Streak',
      value: metrics.longestWinStreak,
      icon: FiTrendingUp,
      color: 'text-bull-red',
      bgColor: 'bg-bull-red/10',
      borderColor: 'border-bull-red/20',
      change: metrics.streakChange
    },
    {
      title: 'Active Days',
      value: metrics.activeDays,
      icon: FiCalendar,
      color: 'text-bull-yellow',
      bgColor: 'bg-bull-yellow/10',
      borderColor: 'border-bull-yellow/20',
      unit: 'days',
      change: metrics.activeDaysChange
    }
  ];

  const getChangeColor = (change) => {
    if (change > 0) return 'text-bull-yellow';
    if (change < 0) return 'text-bull-red';
    return 'text-bull-light-gray';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return FiTrendingUp;
    if (change < 0) return FiTrendingDown;
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metricCards.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-bull-gray rounded-bull p-6 border ${metric.borderColor} hover:border-bull-red/40 transition-all duration-300 shadow-bull`}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212, 9, 52, 0.3)' }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-bull ${metric.bgColor}`}>
              <SafeIcon icon={metric.icon} className={`w-6 h-6 ${metric.color}`} />
            </div>
            {metric.change !== undefined && (
              <div className={`flex items-center gap-1 text-sm ${getChangeColor(metric.change)}`}>
                {getChangeIcon(metric.change) && (
                  <SafeIcon icon={getChangeIcon(metric.change)} className="w-3 h-3" />
                )}
                <span className="font-semibold">{Math.abs(metric.change).toFixed(1)}%</span>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-bull-light-gray text-sm font-medium mb-2">
              {metric.title}
            </h3>
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-bold ${metric.color}`}>
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-bull-light-gray text-sm font-medium">
                  {metric.unit}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;