import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiCalendar } = FiIcons;

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
      },
      38: {
        name: 'Matchweek 38',
        matches: [
          { id: 21, home: 'Manchester City', away: 'West Ham United', date: '2024-05-19', time: '16:00' },
          { id: 22, home: 'Arsenal', away: 'Everton', date: '2024-05-19', time: '16:00' },
          { id: 23, home: 'Brentford', away: 'Newcastle United', date: '2024-05-19', time: '16:00' },
          { id: 24, home: 'Brighton', away: 'Manchester United', date: '2024-05-19', time: '16:00' },
          { id: 25, home: 'Burnley', away: 'Nottingham Forest', date: '2024-05-19', time: '16:00' },
          { id: 26, home: 'Chelsea', away: 'Bournemouth', date: '2024-05-19', time: '16:00' },
          { id: 27, home: 'Crystal Palace', away: 'Aston Villa', date: '2024-05-19', time: '16:00' },
          { id: 28, home: 'Liverpool', away: 'Wolverhampton', date: '2024-05-19', time: '16:00' },
          { id: 29, home: 'Luton Town', away: 'Fulham', date: '2024-05-19', time: '16:00' },
          { id: 30, home: 'Tottenham', away: 'Sheffield United', date: '2024-05-19', time: '16:00' }
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
      },
      35: {
        name: 'Matchweek 35',
        matches: [
          { id: 41, home: 'Barcelona', away: 'Real Madrid', date: '2024-04-21', time: '21:00' },
          { id: 42, home: 'Sevilla', away: 'Atletico Madrid', date: '2024-04-21', time: '19:00' },
          { id: 43, home: 'Athletic Bilbao', away: 'Valencia', date: '2024-04-21', time: '17:00' },
          { id: 44, home: 'Villarreal', away: 'Real Sociedad', date: '2024-04-21', time: '19:00' },
          { id: 45, home: 'Real Mallorca', away: 'Betis', date: '2024-04-21', time: '17:00' },
          { id: 46, home: 'Osasuna', away: 'Getafe', date: '2024-04-21', time: '15:00' },
          { id: 47, home: 'Alaves', away: 'Cadiz', date: '2024-04-21', time: '15:00' },
          { id: 48, home: 'Las Palmas', away: 'Rayo Vallecano', date: '2024-04-21', time: '17:00' },
          { id: 49, home: 'Girona', away: 'Celta Vigo', date: '2024-04-21', time: '19:00' },
          { id: 50, home: 'Granada', away: 'Almeria', date: '2024-04-21', time: '21:00' }
        ]
      }
    }
  },
  'serie-a': {
    name: 'Serie A',
    matchweeks: {
      32: {
        name: 'Matchweek 32',
        matches: [
          { id: 51, home: 'Juventus', away: 'AC Milan', date: '2024-04-07', time: '20:45' },
          { id: 52, home: 'Inter Milan', away: 'Napoli', date: '2024-04-07', time: '18:00' },
          { id: 53, home: 'AS Roma', away: 'Lazio', date: '2024-04-07', time: '20:45' },
          { id: 54, home: 'Atalanta', away: 'Fiorentina', date: '2024-04-07', time: '15:00' },
          { id: 55, home: 'Bologna', away: 'Torino', date: '2024-04-07', time: '15:00' },
          { id: 56, home: 'Genoa', away: 'Cagliari', date: '2024-04-07', time: '18:00' },
          { id: 57, home: 'Hellas Verona', away: 'Udinese', date: '2024-04-07', time: '15:00' },
          { id: 58, home: 'Lecce', away: 'Empoli', date: '2024-04-07', time: '15:00' },
          { id: 59, home: 'Monza', away: 'Frosinone', date: '2024-04-07', time: '18:00' },
          { id: 60, home: 'Salernitana', away: 'Sassuolo', date: '2024-04-07', time: '20:45' }
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
    { key: 'la-liga', name: 'La Liga' },
    { key: 'serie-a', name: 'Serie A' }
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
      // Show all matchweeks from all leagues
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
      // Show all matchweeks from selected league
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
      // Show specific matchweek
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
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  };

  const getButtonStyles = (option, isSelected) => {
    if (isSelected) {
      if (option === 'X') {
        return 'border-bull-yellow bg-bull-yellow text-bull-black shadow-bull';
      } else {
        return 'border-bull-red bg-bull-red text-bull-white shadow-bull';
      }
    }
    return 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red';
  };

  const matchweeksToShow = getMatchweeksToShow();

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* League Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-charcoal transition-colors"
            onClick={() => setIsLeagueDropdownOpen(!isLeagueDropdownOpen)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-red" />
              <div className="text-left">
                <div className="font-semibold">
                  {leagues.find(l => l.key === selectedLeague)?.name || 'All Leagues'}
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isLeagueDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isLeagueDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border border-bull-light-gray rounded-bull shadow-bull-lg z-50"
            >
              {leagues.map((league) => (
                <motion.button
                  key={league.key}
                  className="w-full px-4 py-3 text-left hover:bg-bull-charcoal transition-colors first:rounded-t-bull last:rounded-b-bull border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedLeague(league.key);
                    setSelectedMatchweek('all');
                    setIsLeagueDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-medium text-white">{league.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Matchweek Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-charcoal transition-colors"
            onClick={() => setIsMatchweekDropdownOpen(!isMatchweekDropdownOpen)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-red" />
              <div className="text-left">
                <div className="font-semibold">
                  {getAvailableMatchweeks().find(m => m.key === selectedMatchweek)?.name || 'All Matchweeks'}
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isMatchweekDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isMatchweekDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
            >
              {getAvailableMatchweeks().map((matchweek) => (
                <motion.button
                  key={matchweek.key}
                  className="w-full px-4 py-3 text-left hover:bg-bull-charcoal transition-colors first:rounded-t-bull last:rounded-b-bull border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedMatchweek(matchweek.key);
                    setIsMatchweekDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-medium text-white">{matchweek.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Matchweek Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-charcoal"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
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
                  <div className="text-bull-light-gray text-xs">MATCHES PREDICTED</div>
                </div>
              </div>

              {/* Matches Grid */}
              <div className="space-y-3 mb-6">
                {matchweekData.matches.map((match, matchIndex) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: matchIndex * 0.05 }}
                    className="bg-bull-charcoal rounded-bull p-4 border border-bull-gray"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="text-bull-light-gray text-sm font-medium w-8">
                          {matchIndex + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-bull-white font-medium text-sm">
                            {match.home} <span className="text-bull-light-gray">vs</span> {match.away}
                          </div>
                          <div className="text-bull-light-gray text-xs">
                            {formatDate(match.date)} {match.time}
                          </div>
                        </div>
                      </div>
                      {/* Prediction Buttons */}
                      <div className="flex items-center space-x-1">
                        {['1', 'X', '2'].map((option) => {
                          const isSelected = predictions[match.id] === option;
                          return (
                            <motion.button
                              key={option}
                              className={`w-8 h-8 rounded-bull border-2 text-sm font-bold transition-all ${getButtonStyles(option, isSelected)}`}
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
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-bull-light-gray">Progress</span>
                  <span className="text-bull-yellow font-medium">
                    {Math.round((predictedMatches / totalMatches) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-bull-charcoal rounded-full h-2">
                  <motion.div
                    className="bg-bull-red h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(predictedMatches / totalMatches) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Stake Button */}
              <motion.button
                className={`w-full py-4 rounded-bull font-bold text-lg transition-all duration-300 ${
                  allPredicted
                    ? 'bg-bull-red hover:bg-bull-red-light text-bull-white shadow-bull cursor-pointer'
                    : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => handleStakePrediction(matchweekData)}
                disabled={!allPredicted}
                whileHover={allPredicted ? { scale: 1.02 } : {}}
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
        <div className="text-center py-12">
          <p className="text-bull-light-gray">No matchweeks available for the selected filters</p>
        </div>
      )}

      {/* Legend */}
      <div className="flex justify-center space-x-6 text-xs text-bull-light-gray">
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 border-2 border-bull-light-gray rounded-bull text-xs flex items-center justify-center font-bold">1</div>
          <span>Home Win</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 border-2 border-bull-yellow bg-bull-yellow text-bull-black rounded-bull text-xs flex items-center justify-center font-bold">X</div>
          <span>Draw</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 border-2 border-bull-light-gray rounded-bull text-xs flex items-center justify-center font-bold">2</div>
          <span>Away Win</span>
        </div>
      </div>
    </div>
  );
};

export default FootballCard;