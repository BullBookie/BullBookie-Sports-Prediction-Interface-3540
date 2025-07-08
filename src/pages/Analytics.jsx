import React,{useState,useMemo} from 'react';
import {motion} from 'framer-motion';
import AnalyticsChart from '../components/AnalyticsChart';
import PerformanceMetrics from '../components/PerformanceMetrics';
import SportBreakdown from '../components/SportBreakdown';
import TimeRangeSelector from '../components/TimeRangeSelector';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiBarChart3,FiTrendingUp,FiPieChart,FiActivity} = FiIcons;

const Analytics = () => {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, this would come from API based on selectedRange
  const mockData = useMemo(() => {
    const generateData = (range) => {
      const baseMetrics = {
        totalPnL: 342.75,
        winRate: 68.5,
        avgStake: 85.25,
        roi: 15.3,
        longestWinStreak: 7,
        activeDays: 45,
        pnlChange: 12.5,
        winRateChange: 5.2,
        avgStakeChange: -2.1,
        roiChange: 8.7,
        streakChange: 0,
        activeDaysChange: 15.8
      };

      const profitData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [125.50, 89.25, 156.75, 342.75]
      };

      const winRateData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [65, 72, 68, 75, 70, 85, 62]
      };

      const sportDistribution = [
        {name: 'Football', value: 45},
        {name: 'Basketball', value: 25},
        {name: 'Fighting', value: 15},
        {name: 'Tennis', value: 10},
        {name: 'Racing Sports', value: 5}
      ];

      const performanceRadar = {
        indicators: [
          {name: 'Win Rate', max: 100},
          {name: 'Profit', max: 100},
          {name: 'Consistency', max: 100},
          {name: 'Risk Management', max: 100},
          {name: 'Sport Knowledge', max: 100}
        ],
        values: [85, 72, 68, 78, 82]
      };

      const sportBreakdown = [
        {name: 'Football', totalBets: 28, totalStaked: 2450.00, winRate: 71.4, profit: 185.25},
        {name: 'Basketball', totalBets: 15, totalStaked: 1275.00, winRate: 66.7, profit: 89.50},
        {name: 'Fighting', totalBets: 8, totalStaked: 680.00, winRate: 62.5, profit: 45.75},
        {name: 'Tennis', totalBets: 12, totalStaked: 1020.00, winRate: 58.3, profit: 22.25},
        {name: 'Racing Sports', totalBets: 5, totalStaked: 425.00, winRate: 80.0, profit: 68.00}
      ];

      return {
        metrics: baseMetrics,
        profitData,
        winRateData,
        sportDistribution,
        performanceRadar,
        sportBreakdown
      };
    };

    return generateData(selectedRange);
  }, [selectedRange]);

  const tabs = [
    {key: 'overview', label: 'Overview', icon: FiBarChart3},
    {key: 'performance', label: 'Performance', icon: FiTrendingUp},
    {key: 'sports', label: 'Sports Analysis', icon: FiPieChart},
    {key: 'trends', label: 'Trends', icon: FiActivity}
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <PerformanceMetrics metrics={mockData.metrics} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnalyticsChart 
                type="line" 
                data={mockData.profitData} 
                title="Profit/Loss Over Time" 
                height={350} 
              />
              <AnalyticsChart 
                type="bar" 
                data={mockData.winRateData} 
                title="Win Rate by Day" 
                height={350} 
              />
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnalyticsChart 
                type="radar" 
                data={mockData.performanceRadar} 
                title="Performance Radar" 
                height={400} 
              />
              <div className="space-y-6">
                <div className="bg-bull-gray rounded-bull p-6 border border-bull-charcoal shadow-bull">
                  <h3 className="font-heading text-lg font-semibold text-bull-white mb-4">
                    Key Insights
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-bull-yellow rounded-full mt-2"></div>
                      <div>
                        <p className="text-bull-white font-medium">Strong Football Performance</p>
                        <p className="text-bull-light-gray text-sm">Your football predictions have a 71.4% win rate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-bull-red rounded-full mt-2"></div>
                      <div>
                        <p className="text-bull-white font-medium">Consistent Profit Growth</p>
                        <p className="text-bull-light-gray text-sm">15.3% ROI with steady upward trend</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-bull-yellow rounded-full mt-2"></div>
                      <div>
                        <p className="text-bull-white font-medium">Risk Management</p>
                        <p className="text-bull-light-gray text-sm">Average stake of 85.25 BBWIN shows good control</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-bull-gray rounded-bull p-6 border border-bull-charcoal shadow-bull">
                  <h3 className="font-heading text-lg font-semibold text-bull-white mb-4">
                    Recommendations
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-bull-charcoal rounded-bull border border-bull-red/20">
                      <p className="text-bull-white text-sm">
                        Consider increasing stakes on football matches where you show expertise
                      </p>
                    </div>
                    <div className="p-3 bg-bull-charcoal rounded-bull border border-bull-yellow/20">
                      <p className="text-bull-white text-sm">
                        Tennis predictions need improvement - consider more research
                      </p>
                    </div>
                    <div className="p-3 bg-bull-charcoal rounded-bull border border-bull-red/20">
                      <p className="text-bull-white text-sm">
                        Your win streak suggests good momentum - maintain current strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sports':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnalyticsChart 
                type="pie" 
                data={mockData.sportDistribution} 
                title="Betting Distribution by Sport" 
                height={400} 
              />
              <SportBreakdown sportData={mockData.sportBreakdown} />
            </div>
          </div>
        );

      case 'trends':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <AnalyticsChart 
                type="line" 
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  values: [45, 52, 48, 61, 55, 67]
                }} 
                title="Monthly Win Rate Trend" 
                height={300} 
              />
              <AnalyticsChart 
                type="bar" 
                data={{
                  labels: ['Football', 'Basketball', 'Fighting', 'Tennis', 'Racing'],
                  values: [185.25, 89.50, 45.75, 22.25, 68.00]
                }} 
                title="Profit by Sport" 
                height={300} 
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-bull-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-bull-light-gray">
            Comprehensive analysis of your betting performance
          </p>
        </div>
        <TimeRangeSelector 
          selectedRange={selectedRange} 
          onRangeChange={setSelectedRange} 
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-bull-charcoal rounded-bull p-1 overflow-x-auto border border-bull-gray">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            className={`flex items-center gap-2 px-4 py-3 rounded-bull font-medium transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.key
                ? 'bg-bull-red text-bull-white shadow-bull'
                : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
            }`}
            onClick={() => setActiveTab(tab.key)}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
          >
            <SafeIcon icon={tab.icon} className="w-4 h-4" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
      >
        {renderTabContent()}
      </motion.div>
    </motion.div>
  );
};

export default Analytics;