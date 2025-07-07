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

  // Truncate team names for mobile
  const truncateTeam = (teamName) => {
    const shortNames = {
      'Manchester City': 'Man City',
      'Manchester United': 'Man Utd',
      'West Ham United': 'West Ham',
      'Newcastle United': 'Newcastle',
      'Nottingham Forest': 'Nott Forest',
      'Crystal Palace': 'Crystal P.',
      'Sheffield United': 'Sheffield',
      'Wolverhampton': 'Wolves',
      'Real Madrid': 'Real M.',
      'Atletico Madrid': 'Atletico',
      'Athletic Bilbao': 'Athletic',
      'Real Sociedad': 'Real Soc.',
      'Real Mallorca': 'Mallorca',
      'Rayo Vallecano': 'Rayo'
    };
    return shortNames[teamName] || teamName;
  };

  const getButtonStyles = (option, isSelected) => {
    if (isSelected) {
      if (option === 'X') {
        return 'bg-bull-yellow border-bull-yellow text-bull-black shadow-lg transform scale-105';
      } else {
        return 'bg-bull-red border-bull-red text-bull-white shadow-lg transform scale-105';
      }
    }
    return 'bg-bull-charcoal border-bull-light-gray text-bull-light-gray hover:bg-bull-gray hover:border-bull-red hover:text-bull-white hover:shadow-md';
  };

  const matchweeksToShow = getMatchweeksToShow();

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      {/* Instructions */}
      <motion.div
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-3 sm:p-4 shadow-bull"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <SafeIcon icon={FiInfo} className="w-5 h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-sm font-bold text-bull-white mb-1">
              Football Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              Select <span className="text-bull-red font-semibold">1</span> (Home), <span className="text-bull-yellow font-semibold">X</span> (Draw), or <span className="text-bull-red font-semibold">2</span> (Away) for each match. Complete all matches to stake.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* League Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
            onClick={() => setIsLeagueDropdownOpen(!isLeagueDropdownOpen)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 text-bull-orange flex-shrink-0" />
              <span className="font-medium text-sm truncate">
                {leagues.find(l => l.key === selectedLeague)?.name || 'All Leagues'}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isLeagueDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <SafeIcon icon={FiChevronDown} className="w-4 h-4 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isLeagueDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
            >
              {leagues.map((league) => (
                <motion.button
                  key={league.key}
                  className="w-full px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                  onClick={() => {
                    setSelectedLeague(league.key);
                    setSelectedMatchweek('all');
                    setIsLeagueDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#2A3132' }}
                >
                  <div className="font-medium text-white text-sm">{league.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Matchweek Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
            onClick={() => setIsMatchweekDropdownOpen(!isMatchweekDropdownOpen)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 text-bull-orange flex-shrink-0" />
              <span className="font-medium text-sm truncate">
                {getAvailableMatchweeks().find(m => m.key === selectedMatchweek)?.name || 'All Matchweeks'}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isMatchweekDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <SafeIcon icon={FiChevronDown} className="w-4 h-4 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isMatchweekDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
            >
              {getAvailableMatchweeks().map((matchweek) => (
                <motion.button
                  key={matchweek.key}
                  className="w-full px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                  onClick={() => {
                    setSelectedMatchweek(matchweek.key);
                    setIsMatchweekDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#2A3132' }}
                >
                  <div className="font-medium text-white text-sm">{matchweek.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Matchweek Cards */}
      <div className="space-y-6">
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
              className="bg-bull-charcoal rounded-bull p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-bull-red text-lg">
                    {matchweekData.league}
                  </h3>
                  <p className="text-bull-light-gray text-sm">{matchweekData.matchweek}</p>
                </div>
                <div className="text-right">
                  <div className="text-bull-yellow font-bold text-lg">
                    {predictedMatches}/{totalMatches}
                  </div>
                  <div className="text-bull-light-gray text-xs">PREDICTED</div>
                </div>
              </div>

              {/* Enhanced Matches Grid with Compact Mobile Design */}
              <div className="space-y-1.5 sm:space-y-2 mb-4">
                {matchweekData.matches.map((match, matchIndex) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: matchIndex * 0.02 }}
                    className="bg-bull-gray rounded-bull p-2 sm:p-3 border border-bull-charcoal hover:border-bull-red/20 transition-all duration-300"
                  >
                    {/* Compact Mobile Layout (sm and below) */}
                    <div className="block sm:hidden">
                      {/* Row 1: Teams - More compact */}
                      <div className="flex items-center justify-center mb-1.5">
                        <div className="flex items-center justify-between w-full max-w-xs mx-auto">
                          <div className="text-bull-white font-medium text-xs text-center flex-1 truncate">
                            {truncateTeam(match.home)}
                          </div>
                          <div className="text-bull-light-gray text-xs mx-2 flex-shrink-0">
                            vs
                          </div>
                          <div className="text-bull-white font-medium text-xs text-center flex-1 truncate">
                            {truncateTeam(match.away)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Row 2: Date & Time - More subtle */}
                      <div className="text-center mb-2">
                        <div className="text-bull-light-gray text-xs">
                          {formatDate(match.date)} • {match.time}
                        </div>
                      </div>
                      
                      {/* Row 3: 1 X 2 Buttons - More compact */}
                      <div className="flex justify-center gap-2">
                        {['1', 'X', '2'].map((option) => {
                          const isSelected = predictions[match.id] === option;
                          return (
                            <motion.button
                              key={option}
                              className={`px-3 py-1.5 rounded-bull text-xs font-bold border transition-all duration-300 min-w-[40px] ${getButtonStyles(option, isSelected)}`}
                              onClick={() => handlePrediction(match.id, option)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ scale: 1 }}
                              animate={{ scale: isSelected ? 1.05 : 1 }}
                            >
                              {option}
                            </motion.button>
                          );
                        })}
                      </div>
                      
                      {/* Match number indicator - subtle */}
                      <div className="absolute top-1 left-1">
                        <div className="w-4 h-4 bg-bull-red rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold leading-none">
                            {matchIndex + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout (sm and above) - Preserved Original */}
                    <div className="hidden sm:block">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <div className="text-bull-light-gray text-xs font-bold w-5 flex-shrink-0">
                            {matchIndex + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-bull-white font-medium text-sm">
                              {match.home} <span className="text-bull-light-gray mx-1">v</span> {match.away}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-bull-light-gray text-xs mr-4">
                          {formatDate(match.date)} {match.time}
                        </div>
                        
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          {['1', 'X', '2'].map((option) => {
                            const isSelected = predictions[match.id] === option;
                            return (
                              <motion.button
                                key={option}
                                className={`px-3 py-2 rounded-bull text-xs font-bold border-2 transition-all duration-300 min-w-[32px] ${getButtonStyles(option, isSelected)}`}
                                onClick={() => handlePrediction(match.id, option)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ scale: 1 }}
                                animate={{ scale: isSelected ? 1.05 : 1 }}
                              >
                                {option}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-bull-light-gray">Progress</span>
                  <span className="text-bull-yellow font-bold">
                    {Math.round((predictedMatches / totalMatches) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-bull-gray rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-bull-red to-bull-orange h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(predictedMatches / totalMatches) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Stake Button */}
              <motion.button
                className={`w-full py-3 rounded-bull font-bold text-sm transition-all duration-300 ${
                  allPredicted
                    ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-bull-white'
                    : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => handleStakePrediction(matchweekData)}
                disabled={!allPredicted}
                whileHover={allPredicted ? { scale: 1.02 } : {}}
                whileTap={allPredicted ? { scale: 0.98 } : {}}
              >
                {allPredicted ? 'STAKE PREDICTION' : `${totalMatches - predictedMatches} LEFT`}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {matchweeksToShow.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">⚽</div>
          <h3 className="text-xl font-bold text-bull-white mb-2">No Matches Available</h3>
          <p className="text-bull-light-gray">No matchweeks available for the selected filters</p>
        </div>
      )}
    </div>
  );
};

export default FootballCard;