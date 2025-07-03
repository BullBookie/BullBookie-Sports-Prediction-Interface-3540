import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiCalendar, FiInfo } = FiIcons;

const matchweekData = {
  'premier-league': {
    name: 'Premier League',
    matchweeks: {
      36: {
        name: 'Matchweek 36',
        matches: [
          { id: 1, home: 'Manchester City', away: 'West Ham United', date: '2024-05-12', time: '16:00' },
          { id: 2, home: 'Arsenal', away: 'Everton', date: '2024-05-12', time: '16:00' },
          { id: 3, home: 'Brentford', away: 'Newcastle United', date: '2024-05-12', time: '16:00' },
          { id: 4, home: 'Brighton', away: 'Manchester United', date: '2024-05-12', time: '16:00' },
          { id: 5, home: 'Burnley', away: 'Nottingham Forest', date: '2024-05-12', time: '16:00' },
          { id: 6, home: 'Chelsea', away: 'Bournemouth', date: '2024-05-12', time: '16:00' },
          { id: 7, home: 'Crystal Palace', away: 'Aston Villa', date: '2024-05-12', time: '16:00' },
          { id: 8, home: 'Liverpool', away: 'Wolverhampton', date: '2024-05-12', time: '16:00' },
          { id: 9, home: 'Luton Town', away: 'Fulham', date: '2024-05-12', time: '16:00' },
          { id: 10, home: 'Tottenham', away: 'Sheffield United', date: '2024-05-12', time: '16:00' }
        ]
      },
      37: {
        name: 'Matchweek 37',
        matches: [
          { id: 11, home: 'West Ham United', away: 'Manchester City', date: '2024-05-15', time: '19:00' },
          { id: 12, home: 'Everton', away: 'Arsenal', date: '2024-05-15', time: '19:00' },
          { id: 13, home: 'Newcastle United', away: 'Brentford', date: '2024-05-15', time: '19:00' },
          { id: 14, home: 'Manchester United', away: 'Brighton', date: '2024-05-15', time: '19:00' },
          { id: 15, home: 'Nottingham Forest', away: 'Burnley', date: '2024-05-15', time: '19:00' },
          { id: 16, home: 'Bournemouth', away: 'Chelsea', date: '2024-05-15', time: '19:00' },
          { id: 17, home: 'Aston Villa', away: 'Crystal Palace', date: '2024-05-15', time: '19:00' },
          { id: 18, home: 'Wolverhampton', away: 'Liverpool', date: '2024-05-15', time: '19:00' },
          { id: 19, home: 'Fulham', away: 'Luton Town', date: '2024-05-15', time: '19:00' },
          { id: 20, home: 'Sheffield United', away: 'Tottenham', date: '2024-05-15', time: '19:00' }
        ]
      }
    }
  },
  'la-liga': {
    name: 'La Liga',
    matchweeks: {
      34: {
        name: 'Matchweek 34',
        matches: [
          { id: 31, home: 'Real Madrid', away: 'Barcelona', date: '2024-04-18', time: '21:00' },
          { id: 32, home: 'Atletico Madrid', away: 'Sevilla', date: '2024-04-18', time: '19:00' },
          { id: 33, home: 'Valencia', away: 'Athletic Bilbao', date: '2024-04-18', time: '17:00' },
          { id: 34, home: 'Real Sociedad', away: 'Villarreal', date: '2024-04-18', time: '19:00' },
          { id: 35, home: 'Betis', away: 'Real Mallorca', date: '2024-04-18', time: '17:00' },
          { id: 36, home: 'Getafe', away: 'Osasuna', date: '2024-04-18', time: '15:00' },
          { id: 37, home: 'Cadiz', away: 'Alaves', date: '2024-04-18', time: '15:00' },
          { id: 38, home: 'Rayo Vallecano', away: 'Las Palmas', date: '2024-04-18', time: '17:00' },
          { id: 39, home: 'Celta Vigo', away: 'Girona', date: '2024-04-18', time: '19:00' },
          { id: 40, home: 'Almeria', away: 'Granada', date: '2024-04-18', time: '21:00' }
        ]
      }
    }
  }
};

const FootballCard = ({ onStake }) => {
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [selectedMatchweek, setSelectedMatchweek] = useState('all');
  const [isLeagueDropdownOpen, setIsLeagueDropdownOpen] = useState(false);
  const [isMatchweekDropdownOpen, setIsMatchweekDropdownOpen] = useState(false);
  const [predictions, setPredictions] = useState({});

  const leagues = [
    { key: 'all', name: 'All Leagues' },
    { key: 'premier-league', name: 'Premier League' },
    { key: 'la-liga', name: 'La Liga' }
  ];

  const getAvailableMatchweeks = () => {
    if (selectedLeague === 'all') {
      const allMatchweeks = [];
      Object.entries(matchweekData).forEach(([leagueKey, league]) => {
        Object.entries(league.matchweeks).forEach(([weekNum, week]) => {
          allMatchweeks.push({
            key: `${leagueKey}-${weekNum}`,
            name: `${league.name} - ${week.name}`,
            league: leagueKey,
            week: weekNum
          });
        });
      });
      return [{ key: 'all', name: 'All Matchweeks' }, ...allMatchweeks];
    } else {
      const league = matchweekData[selectedLeague];
      if (!league) return [{ key: 'all', name: 'All Matchweeks' }];
      
      const matchweeks = Object.entries(league.matchweeks).map(([weekNum, week]) => ({
        key: `${selectedLeague}-${weekNum}`,
        name: week.name,
        league: selectedLeague,
        week: weekNum
      }));
      return [{ key: 'all', name: 'All Matchweeks' }, ...matchweeks];
    }
  };

  const getMatchweeksToShow = () => {
    if (selectedLeague === 'all' && selectedMatchweek === 'all') {
      const allMatchweeks = [];
      Object.entries(matchweekData).forEach(([leagueKey, league]) => {
        Object.entries(league.matchweeks).forEach(([weekNum, week]) => {
          allMatchweeks.push({
            key: `${leagueKey}-${weekNum}`,
            league: league.name,
            matchweek: week.name,
            matches: week.matches,
            leagueKey,
            weekNum
          });
        });
      });
      return allMatchweeks;
    }
    
    if (selectedLeague !== 'all' && selectedMatchweek === 'all') {
      const league = matchweekData[selectedLeague];
      if (!league) return [];
      
      return Object.entries(league.matchweeks).map(([weekNum, week]) => ({
        key: `${selectedLeague}-${weekNum}`,
        league: league.name,
        matchweek: week.name,
        matches: week.matches,
        leagueKey: selectedLeague,
        weekNum
      }));
    }
    
    if (selectedMatchweek !== 'all') {
      const [leagueKey, weekNum] = selectedMatchweek.split('-');
      const league = matchweekData[leagueKey];
      const week = league?.matchweeks[weekNum];
      if (!week) return [];
      
      return [{
        key: selectedMatchweek,
        league: league.name,
        matchweek: week.name,
        matches: week.matches,
        leagueKey,
        weekNum
      }];
    }
    
    return [];
  };

  const handlePrediction = (matchId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }));
  };

  const handleStakePrediction = (matchweekData) => {
    const matchweekPredictions = {};
    let totalMatches = 0;
    let predictedMatches = 0;

    matchweekData.matches.forEach(match => {
      totalMatches++;
      if (predictions[match.id]) {
        matchweekPredictions[match.id] = predictions[match.id];
        predictedMatches++;
      }
    });

    if (predictedMatches === totalMatches) {
      onStake({
        type: 'football-matchweek',
        league: matchweekData.league,
        matchweek: matchweekData.matchweek,
        predictions: matchweekPredictions,
        matches: matchweekData.matches,
        totalMatches: totalMatches,
        sport: 'Football'
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  const getButtonStyles = (option, isSelected) => {
    if (isSelected) {
      if (option === 'X') {
        return 'border-bull-yellow bg-bull-yellow/20 text-bull-yellow shadow-bull-lg';
      } else {
        return 'border-bull-red bg-bull-red/20 text-bull-red shadow-bull-lg';
      }
    }
    return 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red hover:bg-bull-red/10';
  };

  const matchweeksToShow = getMatchweeksToShow();

  return (
    <div className="w-full space-y-6 sm:space-y-10">
      {/* Instructions */}
      <motion.div
        className="bg-gradient-to-r from-bull-red/10 to-bull-yellow/10 border border-bull-red/20 rounded-bull p-4 sm:p-6 shadow-bull-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <SafeIcon icon={FiInfo} className="w-5 h-5 sm:w-6 sm:h-6 text-bull-yellow flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-heading text-base sm:text-lg font-bold text-bull-white mb-2 sm:mb-3">
              How to Submit Football Predictions
            </h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-bull-light-gray">
              <p>• <strong className="text-bull-white">Select League & Matchweek:</strong> Choose from Premier League, La Liga, or view all</p>
              <p>• <strong className="text-bull-white">Predict Match Results:</strong> Click <span className="bg-bull-red text-white px-1 py-0.5 rounded text-xs">1</span> for Home Win, <span className="bg-bull-yellow text-black px-1 py-0.5 rounded text-xs">X</span> for Draw, <span className="bg-bull-red text-white px-1 py-0.5 rounded text-xs">2</span> for Away Win</p>
              <p>• <strong className="text-bull-white">Complete All Matches:</strong> You must predict ALL matches in a matchweek to proceed</p>
              <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Once all matches are predicted, click "STAKE PREDICTION" to submit</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* League Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull"
            onClick={() => setIsLeagueDropdownOpen(!isLeagueDropdownOpen)}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 sm:w-6 sm:h-6 text-bull-red flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="font-bold text-sm sm:text-base truncate">
                  {leagues.find(l => l.key === selectedLeague)?.name || 'All Leagues'}
                </div>
                <div className="text-bull-light-gray text-xs sm:text-sm">League</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isLeagueDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-2"
            >
              <SafeIcon icon={FiChevronDown} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isLeagueDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
            >
              {leagues.map((league) => (
                <motion.button
                  key={league.key}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedLeague(league.key);
                    setSelectedMatchweek('all');
                    setIsLeagueDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-bold text-white text-sm sm:text-base">{league.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Matchweek Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull"
            onClick={() => setIsMatchweekDropdownOpen(!isMatchweekDropdownOpen)}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 sm:w-6 sm:h-6 text-bull-red flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="font-bold text-sm sm:text-base truncate">
                  {getAvailableMatchweeks().find(m => m.key === selectedMatchweek)?.name || 'All Matchweeks'}
                </div>
                <div className="text-bull-light-gray text-xs sm:text-sm">Matchweek</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isMatchweekDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-2"
            >
              <SafeIcon icon={FiChevronDown} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isMatchweekDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
            >
              {getAvailableMatchweeks().map((matchweek) => (
                <motion.button
                  key={matchweek.key}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedMatchweek(matchweek.key);
                    setIsMatchweekDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-bold text-white text-sm sm:text-base">{matchweek.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Matchweek Cards */}
      <div className="space-y-6 sm:space-y-10">
        {matchweeksToShow.map((matchweekData, index) => {
          const totalMatches = matchweekData.matches.length;
          const predictedMatches = matchweekData.matches.filter(match => predictions[match.id]).length;
          const allPredicted = predictedMatches === totalMatches;

          return (
            <motion.div
              key={matchweekData.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-4 sm:p-6 lg:p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
              whileHover={{ scale: 1.005, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div>
                  <h3 className="font-heading font-bold text-bull-red text-xl sm:text-2xl mb-1 sm:mb-2">
                    {matchweekData.league}
                  </h3>
                  <p className="text-bull-light-gray text-base sm:text-lg">{matchweekData.matchweek}</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-bull-yellow font-bold text-xl sm:text-2xl">
                    {predictedMatches}/{totalMatches}
                  </div>
                  <div className="text-bull-light-gray text-xs sm:text-sm uppercase tracking-wide">
                    MATCHES PREDICTED
                  </div>
                </div>
              </div>

              {/* Matches Grid */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {matchweekData.matches.map((match, matchIndex) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: matchIndex * 0.03 }}
                    className="bg-bull-charcoal rounded-bull p-3 sm:p-4 lg:p-6 border-2 border-bull-gray hover:border-bull-red/30 transition-all duration-300 shadow-bull"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                        <div className="text-bull-light-gray text-sm sm:text-base lg:text-lg font-bold w-6 sm:w-8 flex-shrink-0">
                          {matchIndex + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-bull-white font-bold text-sm sm:text-base lg:text-lg">
                            <span className="block sm:inline">{match.home}</span>
                            <span className="text-bull-light-gray font-normal text-xs sm:text-sm mx-1">vs</span>
                            <span className="block sm:inline">{match.away}</span>
                          </div>
                          <div className="text-bull-light-gray text-xs sm:text-sm mt-1">
                            {formatDate(match.date)} {match.time}
                          </div>
                        </div>
                      </div>

                      {/* Prediction Buttons */}
                      <div className="flex items-center justify-center sm:justify-end space-x-2 flex-shrink-0">
                        {['1', 'X', '2'].map((option) => {
                          const isSelected = predictions[match.id] === option;
                          return (
                            <motion.button
                              key={option}
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-bull border-2 text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 ${getButtonStyles(option, isSelected)}`}
                              onClick={() => handlePrediction(match.id, option)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {option}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between text-base sm:text-lg mb-3 sm:mb-4">
                  <span className="text-bull-light-gray font-medium">Progress</span>
                  <span className="text-bull-yellow font-bold">
                    {Math.round((predictedMatches / totalMatches) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-bull-charcoal rounded-full h-3 sm:h-4 shadow-inner">
                  <motion.div
                    className="bg-gradient-to-r from-bull-red to-bull-yellow h-3 sm:h-4 rounded-full shadow-bull"
                    initial={{ width: 0 }}
                    animate={{ width: `${(predictedMatches / totalMatches) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Stake Button */}
              <motion.button
                className={`w-full py-4 sm:py-5 lg:py-6 rounded-bull font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-bull ${
                  allPredicted
                    ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-bull-white cursor-pointer'
                    : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => handleStakePrediction(matchweekData)}
                disabled={!allPredicted}
                whileHover={allPredicted ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
                whileTap={allPredicted ? { scale: 0.98 } : {}}
              >
                {allPredicted 
                  ? 'STAKE PREDICTION' 
                  : `PREDICT ALL MATCHES (${totalMatches - predictedMatches} LEFT)`
                }
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {matchweeksToShow.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="text-4xl sm:text-6xl mb-4">⚽</div>
          <h3 className="text-xl sm:text-2xl font-bold text-bull-white mb-2">No Matches Available</h3>
          <p className="text-bull-light-gray text-base sm:text-lg">No matchweeks available for the selected filters</p>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm sm:text-base lg:text-lg text-bull-light-gray bg-bull-gray rounded-bull p-4 sm:p-6 border border-bull-charcoal">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-bull-red bg-bull-red/20 text-bull-red rounded-bull text-xs sm:text-sm flex items-center justify-center font-bold">1</div>
          <span className="font-medium">Home Win</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-bull-yellow bg-bull-yellow/20 text-bull-yellow rounded-bull text-xs sm:text-sm flex items-center justify-center font-bold">X</div>
          <span className="font-medium">Draw</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-bull-red bg-bull-red/20 text-bull-red rounded-bull text-xs sm:text-sm flex items-center justify-center font-bold">2</div>
          <span className="font-medium">Away Win</span>
        </div>
      </div>
    </div>
  );
};

export default FootballCard;