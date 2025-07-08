import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiCalendar, FiInfo } = FiIcons;

// NBA Conference and Week Data with Extended Game Lists
const nbaConferenceData = {
  'eastern': {
    name: 'Eastern Conference',
    weeks: {
      1: {
        name: 'Week 1 (Nov 4-10)',
        matches: [
          {
            id: 1,
            home: { name: 'Boston Celtics', logo: '🍀' },
            away: { name: 'Miami Heat', logo: '🔥' },
            date: '2024-11-04',
            time: '19:30',
            stadium: 'TD Garden'
          },
          {
            id: 2,
            home: { name: 'Philadelphia 76ers', logo: '🔔' },
            away: { name: 'Milwaukee Bucks', logo: '🦌' },
            date: '2024-11-04',
            time: '20:00',
            stadium: 'Wells Fargo Center'
          },
          {
            id: 3,
            home: { name: 'Atlanta Hawks', logo: '🦅' },
            away: { name: 'Charlotte Hornets', logo: '🐝' },
            date: '2024-11-05',
            time: '19:00',
            stadium: 'State Farm Arena'
          },
          {
            id: 4,
            home: { name: 'Brooklyn Nets', logo: '🏀' },
            away: { name: 'Orlando Magic', logo: '✨' },
            date: '2024-11-05',
            time: '19:30',
            stadium: 'Barclays Center'
          },
          {
            id: 5,
            home: { name: 'Chicago Bulls', logo: '🐂' },
            away: { name: 'Detroit Pistons', logo: '⚙️' },
            date: '2024-11-06',
            time: '20:00',
            stadium: 'United Center'
          },
          {
            id: 6,
            home: { name: 'Cleveland Cavaliers', logo: '⚔️' },
            away: { name: 'Indiana Pacers', logo: '🏁' },
            date: '2024-11-06',
            time: '19:00',
            stadium: 'Rocket Mortgage FieldHouse'
          },
          {
            id: 7,
            home: { name: 'New York Knicks', logo: '🗽' },
            away: { name: 'Toronto Raptors', logo: '🦖' },
            date: '2024-11-07',
            time: '19:30',
            stadium: 'Madison Square Garden'
          },
          {
            id: 8,
            home: { name: 'Washington Wizards', logo: '🧙' },
            away: { name: 'Boston Celtics', logo: '🍀' },
            date: '2024-11-07',
            time: '20:00',
            stadium: 'Capital One Arena'
          },
          {
            id: 9,
            home: { name: 'Miami Heat', logo: '🔥' },
            away: { name: 'Philadelphia 76ers', logo: '🔔' },
            date: '2024-11-08',
            time: '20:30',
            stadium: 'Kaseya Center'
          },
          {
            id: 10,
            home: { name: 'Milwaukee Bucks', logo: '🦌' },
            away: { name: 'Atlanta Hawks', logo: '🦅' },
            date: '2024-11-08',
            time: '20:00',
            stadium: 'Fiserv Forum'
          },
          {
            id: 11,
            home: { name: 'Charlotte Hornets', logo: '🐝' },
            away: { name: 'Brooklyn Nets', logo: '🏀' },
            date: '2024-11-09',
            time: '19:00',
            stadium: 'Spectrum Center'
          },
          {
            id: 12,
            home: { name: 'Orlando Magic', logo: '✨' },
            away: { name: 'Chicago Bulls', logo: '🐂' },
            date: '2024-11-09',
            time: '19:00',
            stadium: 'Kia Center'
          }
        ],
        playerOfWeek: [
          'Jayson Tatum',
          'Jimmy Butler',
          'Joel Embiid',
          'Giannis Antetokounmpo',
          'Trae Young',
          'Paolo Banchero',
          'Mikal Bridges',
          'Scottie Barnes',
          'DeMar DeRozan',
          'Donovan Mitchell',
          'Jalen Brunson',
          'Bradley Beal'
        ]
      }
    }
  },
  'western': {
    name: 'Western Conference',
    weeks: {
      1: {
        name: 'Week 1 (Nov 4-10)',
        matches: [
          {
            id: 41,
            home: { name: 'Golden State Warriors', logo: '⚡' },
            away: { name: 'Los Angeles Lakers', logo: '💜' },
            date: '2024-11-04',
            time: '22:00',
            stadium: 'Chase Center'
          },
          {
            id: 42,
            home: { name: 'Phoenix Suns', logo: '☀️' },
            away: { name: 'Denver Nuggets', logo: '⛰️' },
            date: '2024-11-04',
            time: '21:00',
            stadium: 'Footprint Center'
          },
          {
            id: 43,
            home: { name: 'Dallas Mavericks', logo: '🐴' },
            away: { name: 'San Antonio Spurs', logo: '⚡' },
            date: '2024-11-05',
            time: '20:30',
            stadium: 'American Airlines Center'
          },
          {
            id: 44,
            home: { name: 'Memphis Grizzlies', logo: '🐻' },
            away: { name: 'New Orleans Pelicans', logo: '🐦' },
            date: '2024-11-05',
            time: '20:00',
            stadium: 'FedExForum'
          },
          {
            id: 45,
            home: { name: 'Houston Rockets', logo: '🚀' },
            away: { name: 'Oklahoma City Thunder', logo: '⚡' },
            date: '2024-11-06',
            time: '20:00',
            stadium: 'Toyota Center'
          },
          {
            id: 46,
            home: { name: 'Utah Jazz', logo: '🎵' },
            away: { name: 'Portland Trail Blazers', logo: '🌲' },
            date: '2024-11-06',
            time: '21:00',
            stadium: 'Delta Center'
          },
          {
            id: 47,
            home: { name: 'Los Angeles Clippers', logo: '📎' },
            away: { name: 'Sacramento Kings', logo: '👑' },
            date: '2024-11-07',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 48,
            home: { name: 'Minnesota Timberwolves', logo: '🐺' },
            away: { name: 'Golden State Warriors', logo: '⚡' },
            date: '2024-11-07',
            time: '20:00',
            stadium: 'Target Center'
          },
          {
            id: 49,
            home: { name: 'Los Angeles Lakers', logo: '💜' },
            away: { name: 'Phoenix Suns', logo: '☀️' },
            date: '2024-11-08',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 50,
            home: { name: 'Denver Nuggets', logo: '⛰️' },
            away: { name: 'Dallas Mavericks', logo: '🐴' },
            date: '2024-11-08',
            time: '21:00',
            stadium: 'Ball Arena'
          },
          {
            id: 51,
            home: { name: 'San Antonio Spurs', logo: '⚡' },
            away: { name: 'Memphis Grizzlies', logo: '🐻' },
            date: '2024-11-09',
            time: '20:00',
            stadium: 'Frost Bank Center'
          },
          {
            id: 52,
            home: { name: 'New Orleans Pelicans', logo: '🐦' },
            away: { name: 'Houston Rockets', logo: '🚀' },
            date: '2024-11-09',
            time: '20:00',
            stadium: 'Smoothie King Center'
          }
        ],
        playerOfWeek: [
          'Stephen Curry',
          'LeBron James',
          'Luka Dončić',
          'Nikola Jokić',
          'Shai Gilgeous-Alexander',
          'Anthony Edwards',
          'Devin Booker',
          'Kawhi Leonard',
          'Ja Morant',
          'Victor Wembanyama',
          'Alperen Sengun',
          'Lauri Markkanen'
        ]
      }
    }
  }
};

const BasketballCard = ({ onStake }) => {
  const [selectedLeague, setSelectedLeague] = useState('nba');
  const [selectedConference, setSelectedConference] = useState('all');
  const [selectedWeek, setSelectedWeek] = useState('all');
  const [isLeagueDropdownOpen, setIsLeagueDropdownOpen] = useState(false);
  const [isConferenceDropdownOpen, setIsConferenceDropdownOpen] = useState(false);
  const [isWeekDropdownOpen, setIsWeekDropdownOpen] = useState(false);
  const [predictions, setPredictions] = useState({});

  const leagues = [
    { key: 'nba', name: 'NBA' },
    { key: 'euroleague', name: 'EuroLeague' },
    { key: 'cba', name: 'Chinese Basketball Association' }
  ];

  const getConferences = () => {
    if (selectedLeague === 'nba') {
      return [
        { key: 'all', name: 'All Conferences' },
        { key: 'eastern', name: 'Eastern Conference' },
        { key: 'western', name: 'Western Conference' }
      ];
    }
    return [{ key: 'all', name: 'All Conferences' }];
  };

  const getAvailableWeeks = () => {
    const weeks = [{ key: 'all', name: 'All Weeks' }];
    if (selectedLeague === 'nba') {
      if (selectedConference === 'all') {
        Object.entries(nbaConferenceData.eastern.weeks).forEach(([weekNum, week]) => {
          weeks.push({
            key: `eastern-${weekNum}`,
            name: `Eastern - ${week.name}`,
            conference: 'eastern',
            week: weekNum
          });
        });
        Object.entries(nbaConferenceData.western.weeks).forEach(([weekNum, week]) => {
          weeks.push({
            key: `western-${weekNum}`,
            name: `Western - ${week.name}`,
            conference: 'western',
            week: weekNum
          });
        });
      } else {
        const conference = nbaConferenceData[selectedConference];
        if (conference) {
          Object.entries(conference.weeks).forEach(([weekNum, week]) => {
            weeks.push({
              key: `${selectedConference}-${weekNum}`,
              name: week.name,
              conference: selectedConference,
              week: weekNum
            });
          });
        }
      }
    }
    return weeks;
  };

  const getWeeksToShow = () => {
    if (selectedLeague === 'nba') {
      if (selectedConference === 'all' && selectedWeek === 'all') {
        const allWeeks = [];
        Object.entries(nbaConferenceData).forEach(([confKey, conference]) => {
          Object.entries(conference.weeks).forEach(([weekNum, week]) => {
            allWeeks.push({
              key: `${confKey}-${weekNum}`,
              conference: conference.name,
              week: week.name,
              matches: week.matches,
              playerOfWeek: week.playerOfWeek,
              conferenceKey: confKey,
              weekNum
            });
          });
        });
        return allWeeks;
      } else if (selectedConference !== 'all' && selectedWeek === 'all') {
        const conference = nbaConferenceData[selectedConference];
        if (!conference) return [];
        return Object.entries(conference.weeks).map(([weekNum, week]) => ({
          key: `${selectedConference}-${weekNum}`,
          conference: conference.name,
          week: week.name,
          matches: week.matches,
          playerOfWeek: week.playerOfWeek,
          conferenceKey: selectedConference,
          weekNum
        }));
      } else if (selectedWeek !== 'all') {
        const [confKey, weekNum] = selectedWeek.split('-');
        const conference = nbaConferenceData[confKey];
        const week = conference?.weeks[weekNum];
        if (!week) return [];
        return [{
          key: selectedWeek,
          conference: conference.name,
          week: week.name,
          matches: week.matches,
          playerOfWeek: week.playerOfWeek,
          conferenceKey: confKey,
          weekNum
        }];
      }
    }
    return [];
  };

  const handlePrediction = (matchId, team) => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: team
    }));
  };

  const handlePlayerOfWeekPrediction = (weekKey, player) => {
    setPredictions(prev => ({
      ...prev,
      [`${weekKey}_player`]: player
    }));
  };

  const handleStakePrediction = (weekData) => {
    const weekPredictions = {};
    let totalMatches = weekData.matches.length;
    let predictedMatches = 0;
    let playerOfWeekPredicted = false;

    weekData.matches.forEach(match => {
      if (predictions[match.id]) {
        weekPredictions[match.id] = predictions[match.id];
        predictedMatches++;
      }
    });

    const playerKey = `${weekData.key}_player`;
    if (predictions[playerKey]) {
      weekPredictions[playerKey] = predictions[playerKey];
      playerOfWeekPredicted = true;
    }

    if (predictedMatches === totalMatches && playerOfWeekPredicted) {
      onStake({
        type: 'basketball-week',
        conference: weekData.conference,
        week: weekData.week,
        predictions: weekPredictions,
        matches: weekData.matches,
        playerOfWeek: predictions[playerKey],
        totalMatches: totalMatches,
        sport: 'Basketball'
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

  // Smart team name abbreviations for mobile - REMOVED (now using full names)
  const getTeamAbbr = (teamName) => {
    const abbreviations = {
      'Boston Celtics': 'BOS',
      'Miami Heat': 'MIA',
      'Philadelphia 76ers': 'PHI',
      'Milwaukee Bucks': 'MIL',
      'Atlanta Hawks': 'ATL',
      'Charlotte Hornets': 'CHA',
      'Brooklyn Nets': 'BKN',
      'Orlando Magic': 'ORL',
      'Chicago Bulls': 'CHI',
      'Detroit Pistons': 'DET',
      'Cleveland Cavaliers': 'CLE',
      'Indiana Pacers': 'IND',
      'New York Knicks': 'NYK',
      'Toronto Raptors': 'TOR',
      'Washington Wizards': 'WAS',
      'Golden State Warriors': 'GSW',
      'Los Angeles Lakers': 'LAL',
      'Phoenix Suns': 'PHX',
      'Denver Nuggets': 'DEN',
      'Dallas Mavericks': 'DAL',
      'San Antonio Spurs': 'SAS',
      'Memphis Grizzlies': 'MEM',
      'New Orleans Pelicans': 'NOP',
      'Houston Rockets': 'HOU',
      'Oklahoma City Thunder': 'OKC',
      'Utah Jazz': 'UTA',
      'Portland Trail Blazers': 'POR',
      'Los Angeles Clippers': 'LAC',
      'Sacramento Kings': 'SAC',
      'Minnesota Timberwolves': 'MIN'
    };
    return abbreviations[teamName] || teamName.split(' ').pop().slice(0, 3).toUpperCase();
  };

  const weeksToShow = getWeeksToShow();

  return (
    <div className="w-full space-y-6">
      {/* Compact Instructions */}
      <motion.div
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-4 shadow-bull"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3">
          <SafeIcon icon={FiInfo} className="w-5 h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-sm font-bold text-bull-white mb-1">
              Basketball Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              Predict match winners and player of the week. Complete all predictions to stake.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Compact Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                {leagues.find(l => l.key === selectedLeague)?.name || 'NBA'}
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
                    setSelectedConference('all');
                    setSelectedWeek('all');
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

        {/* Conference Selector */}
        {selectedLeague === 'nba' && (
          <div className="relative">
            <motion.button
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
              onClick={() => setIsConferenceDropdownOpen(!isConferenceDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 text-bull-orange flex-shrink-0" />
                <span className="font-medium text-sm truncate">
                  {getConferences().find(c => c.key === selectedConference)?.name || 'All Conferences'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isConferenceDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isConferenceDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
              >
                {getConferences().map((conference) => (
                  <motion.button
                    key={conference.key}
                    className="w-full px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                    onClick={() => {
                      setSelectedConference(conference.key);
                      setSelectedWeek('all');
                      setIsConferenceDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#2A3132' }}
                  >
                    <div className="font-medium text-white text-sm">{conference.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        )}

        {/* Week Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
            onClick={() => setIsWeekDropdownOpen(!isWeekDropdownOpen)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 text-bull-orange flex-shrink-0" />
              <span className="font-medium text-sm truncate">
                {getAvailableWeeks().find(w => w.key === selectedWeek)?.name || 'All Weeks'}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isWeekDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <SafeIcon icon={FiChevronDown} className="w-4 h-4 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isWeekDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
            >
              {getAvailableWeeks().map((week) => (
                <motion.button
                  key={week.key}
                  className="w-full px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                  onClick={() => {
                    setSelectedWeek(week.key);
                    setIsWeekDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#2A3132' }}
                >
                  <div className="font-medium text-white text-sm">{week.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Week Cards */}
      <div className="space-y-6">
        {weeksToShow.map((weekData, index) => {
          const totalMatches = weekData.matches.length;
          const predictedMatches = weekData.matches.filter(match => predictions[match.id]).length;
          const playerOfWeekPredicted = !!predictions[`${weekData.key}_player`];
          const allPredicted = predictedMatches === totalMatches && playerOfWeekPredicted;

          return (
            <motion.div
              key={weekData.key}
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
                    {weekData.conference}
                  </h3>
                  <p className="text-bull-light-gray text-sm">{weekData.week}</p>
                </div>
                <div className="text-right">
                  <div className="text-bull-yellow font-bold text-lg">
                    {predictedMatches}/{totalMatches}
                  </div>
                  <div className="text-bull-light-gray text-xs">
                    {playerOfWeekPredicted ? '✓' : '○'} PLAYER
                  </div>
                </div>
              </div>

              {/* Enhanced Mobile Matches Grid */}
              <div className="space-y-2 mb-4">
                {weekData.matches.map((match, matchIndex) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: matchIndex * 0.02 }}
                    className="bg-bull-gray rounded-bull p-2 sm:p-3 border border-bull-charcoal hover:border-bull-red/20 transition-all duration-300"
                  >
                    {/* Mobile Layout (sm and below) - Updated with full team names */}
                    <div className="block sm:hidden">
                      {/* Game Number Badge */}
                      <div className="absolute top-1 left-1">
                        <div className="w-5 h-5 bg-bull-red/20 border border-bull-red rounded-full flex items-center justify-center">
                          <span className="text-bull-red text-xs font-bold leading-none">
                            {matchIndex + 1}
                          </span>
                        </div>
                      </div>

                      {/* Teams Row - Clean & Compact with Full Names */}
                      <div className="flex items-center justify-center mb-2 pt-1">
                        <div className="flex items-center justify-between w-full max-w-sm mx-auto">
                          <div className="text-center flex-1 min-w-0">
                            <div className="text-xl mb-0.5">{match.home.logo}</div>
                            <div className="text-bull-white font-bold text-xs truncate px-1">
                              {match.home.name}
                            </div>
                          </div>
                          <div className="mx-3 flex flex-col items-center flex-shrink-0">
                            <div className="text-bull-light-gray text-xs font-medium">VS</div>
                            <div className="text-bull-light-gray text-xs">
                              {formatDate(match.date)}
                            </div>
                          </div>
                          <div className="text-center flex-1 min-w-0">
                            <div className="text-xl mb-0.5">{match.away.logo}</div>
                            <div className="text-bull-white font-bold text-xs truncate px-1">
                              {match.away.name}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prediction Buttons - Sleek Design */}
                      <div className="flex justify-center gap-3 mt-2">
                        {[match.home.name, match.away.name].map((team, teamIndex) => {
                          const isSelected = predictions[match.id] === team;
                          const isHome = teamIndex === 0;
                          return (
                            <motion.button
                              key={team}
                              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 min-w-[60px] border ${
                                isSelected
                                  ? 'bg-bull-red border-bull-red text-bull-white shadow-lg scale-105'
                                  : 'bg-bull-charcoal/50 border-bull-light-gray/30 text-bull-light-gray hover:border-bull-red hover:text-bull-white hover:bg-bull-red/10'
                              }`}
                              onClick={() => handlePrediction(match.id, team)}
                              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isHome ? 'HOME' : 'AWAY'}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Desktop Layout (sm and above) - Keep Original */}
                    <div className="hidden sm:block">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <div className="text-bull-light-gray text-xs font-bold w-5 flex-shrink-0">
                            {matchIndex + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-bull-white font-medium text-sm">
                              {match.home.logo} {match.home.name}
                              <span className="text-bull-light-gray mx-1">v</span>
                              {match.away.logo} {match.away.name}
                            </div>
                            <div className="text-bull-light-gray text-xs">
                              {formatDate(match.date)} {match.time}
                            </div>
                          </div>
                        </div>

                        {/* Team Selection Buttons */}
                        <div className="flex items-center space-x-1 flex-shrink-0">
                          <motion.button
                            className={`px-2 py-1 rounded text-xs font-bold transition-all duration-300 ${
                              predictions[match.id] === match.home.name
                                ? 'border border-bull-red bg-bull-red/20 text-bull-red'
                                : 'border border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red hover:bg-bull-red/10'
                            }`}
                            onClick={() => handlePrediction(match.id, match.home.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            H
                          </motion.button>
                          <motion.button
                            className={`px-2 py-1 rounded text-xs font-bold transition-all duration-300 ${
                              predictions[match.id] === match.away.name
                                ? 'border border-bull-red bg-bull-red/20 text-bull-red'
                                : 'border border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red hover:bg-bull-red/10'
                            }`}
                            onClick={() => handlePrediction(match.id, match.away.name)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            A
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Player of the Week Selector */}
              <div className="mb-4">
                <label className="block text-bull-light-gray text-sm font-medium mb-2">
                  Player of the Week ({weekData.playerOfWeek.length} Available)
                </label>
                <select
                  className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-orange focus:outline-none text-sm"
                  value={predictions[`${weekData.key}_player`] || ''}
                  onChange={(e) => handlePlayerOfWeekPrediction(weekData.key, e.target.value)}
                >
                  <option value="">Select Player of the Week</option>
                  {weekData.playerOfWeek.map((player) => (
                    <option key={player} value={player}>
                      {player}
                    </option>
                  ))}
                </select>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-bull-light-gray">Progress</span>
                  <span className="text-bull-yellow font-bold">
                    {Math.round(((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-bull-gray rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-bull-red to-bull-orange h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100}%` }}
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
                onClick={() => handleStakePrediction(weekData)}
                disabled={!allPredicted}
                whileHover={allPredicted ? { scale: 1.02 } : {}}
                whileTap={allPredicted ? { scale: 0.98 } : {}}
              >
                {allPredicted ? 'STAKE PREDICTION' : `${totalMatches + 1 - predictedMatches - (playerOfWeekPredicted ? 1 : 0)} LEFT`}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {weeksToShow.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🏀</div>
          <h3 className="text-xl font-bold text-bull-white mb-2">No Games Available</h3>
          <p className="text-bull-light-gray">No weeks available for the selected filters</p>
        </div>
      )}
    </div>
  );
};

export default BasketballCard;