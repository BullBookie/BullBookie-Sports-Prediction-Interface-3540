import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiCalendar } = FiIcons;

// NBA Conference and Week Data
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
            home: { name: 'Orlando Magic', logo: '✨' },
            away: { name: 'Charlotte Hornets', logo: '🐝' },
            date: '2024-11-09',
            time: '19:00',
            stadium: 'Amway Center'
          },
          {
            id: 12,
            home: { name: 'Detroit Pistons', logo: '⚙️' },
            away: { name: 'Brooklyn Nets', logo: '🏀' },
            date: '2024-11-09',
            time: '19:00',
            stadium: 'Little Caesars Arena'
          }
        ],
        playerOfWeek: [
          'Jayson Tatum',
          'Jimmy Butler', 
          'Joel Embiid',
          'Giannis Antetokounmpo',
          'Trae Young',
          'Paolo Banchero'
        ]
      },
      2: {
        name: 'Week 2 (Nov 11-17)',
        matches: [
          {
            id: 13,
            home: { name: 'Boston Celtics', logo: '🍀' },
            away: { name: 'Milwaukee Bucks', logo: '🦌' },
            date: '2024-11-11',
            time: '19:30',
            stadium: 'TD Garden'
          },
          {
            id: 14,
            home: { name: 'Miami Heat', logo: '🔥' },
            away: { name: 'Atlanta Hawks', logo: '🦅' },
            date: '2024-11-11',
            time: '20:00',
            stadium: 'Kaseya Center'
          },
          {
            id: 15,
            home: { name: 'Philadelphia 76ers', logo: '🔔' },
            away: { name: 'Orlando Magic', logo: '✨' },
            date: '2024-11-12',
            time: '19:00',
            stadium: 'Wells Fargo Center'
          },
          {
            id: 16,
            home: { name: 'Brooklyn Nets', logo: '🏀' },
            away: { name: 'Chicago Bulls', logo: '🐂' },
            date: '2024-11-12',
            time: '19:30',
            stadium: 'Barclays Center'
          },
          {
            id: 17,
            home: { name: 'Charlotte Hornets', logo: '🐝' },
            away: { name: 'Detroit Pistons', logo: '⚙️' },
            date: '2024-11-13',
            time: '19:00',
            stadium: 'Spectrum Center'
          },
          {
            id: 18,
            home: { name: 'Cleveland Cavaliers', logo: '⚔️' },
            away: { name: 'New York Knicks', logo: '🗽' },
            date: '2024-11-13',
            time: '20:00',
            stadium: 'Rocket Mortgage FieldHouse'
          },
          {
            id: 19,
            home: { name: 'Indiana Pacers', logo: '🏁' },
            away: { name: 'Toronto Raptors', logo: '🦖' },
            date: '2024-11-14',
            time: '19:00',
            stadium: 'Gainbridge Fieldhouse'
          },
          {
            id: 20,
            home: { name: 'Washington Wizards', logo: '🧙' },
            away: { name: 'Boston Celtics', logo: '🍀' },
            date: '2024-11-14',
            time: '20:00',
            stadium: 'Capital One Arena'
          },
          {
            id: 21,
            home: { name: 'Milwaukee Bucks', logo: '🦌' },
            away: { name: 'Miami Heat', logo: '🔥' },
            date: '2024-11-15',
            time: '20:30',
            stadium: 'Fiserv Forum'
          },
          {
            id: 22,
            home: { name: 'Atlanta Hawks', logo: '🦅' },
            away: { name: 'Philadelphia 76ers', logo: '🔔' },
            date: '2024-11-15',
            time: '19:30',
            stadium: 'State Farm Arena'
          },
          {
            id: 23,
            home: { name: 'Orlando Magic', logo: '✨' },
            away: { name: 'Brooklyn Nets', logo: '🏀' },
            date: '2024-11-16',
            time: '19:00',
            stadium: 'Amway Center'
          },
          {
            id: 24,
            home: { name: 'Chicago Bulls', logo: '🐂' },
            away: { name: 'Charlotte Hornets', logo: '🐝' },
            date: '2024-11-16',
            time: '20:00',
            stadium: 'United Center'
          },
          {
            id: 25,
            home: { name: 'Detroit Pistons', logo: '⚙️' },
            away: { name: 'Cleveland Cavaliers', logo: '⚔️' },
            date: '2024-11-17',
            time: '18:00',
            stadium: 'Little Caesars Arena'
          }
        ],
        playerOfWeek: [
          'Jayson Tatum',
          'Jimmy Butler',
          'Joel Embiid', 
          'Giannis Antetokounmpo',
          'Donovan Mitchell',
          'Paolo Banchero'
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
            id: 26,
            home: { name: 'Golden State Warriors', logo: '⚡' },
            away: { name: 'Los Angeles Lakers', logo: '💜' },
            date: '2024-11-04',
            time: '22:00',
            stadium: 'Chase Center'
          },
          {
            id: 27,
            home: { name: 'Phoenix Suns', logo: '☀️' },
            away: { name: 'Denver Nuggets', logo: '⛰️' },
            date: '2024-11-04',
            time: '21:00',
            stadium: 'Footprint Center'
          },
          {
            id: 28,
            home: { name: 'Dallas Mavericks', logo: '🐴' },
            away: { name: 'San Antonio Spurs', logo: '⚡' },
            date: '2024-11-05',
            time: '20:30',
            stadium: 'American Airlines Center'
          },
          {
            id: 29,
            home: { name: 'Memphis Grizzlies', logo: '🐻' },
            away: { name: 'New Orleans Pelicans', logo: '🐦' },
            date: '2024-11-05',
            time: '20:00',
            stadium: 'FedExForum'
          },
          {
            id: 30,
            home: { name: 'Houston Rockets', logo: '🚀' },
            away: { name: 'Oklahoma City Thunder', logo: '⚡' },
            date: '2024-11-06',
            time: '20:00',
            stadium: 'Toyota Center'
          },
          {
            id: 31,
            home: { name: 'Utah Jazz', logo: '🎵' },
            away: { name: 'Portland Trail Blazers', logo: '🌲' },
            date: '2024-11-06',
            time: '21:00',
            stadium: 'Delta Center'
          },
          {
            id: 32,
            home: { name: 'Los Angeles Clippers', logo: '🔴' },
            away: { name: 'Sacramento Kings', logo: '👑' },
            date: '2024-11-07',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 33,
            home: { name: 'Minnesota Timberwolves', logo: '🐺' },
            away: { name: 'Golden State Warriors', logo: '⚡' },
            date: '2024-11-07',
            time: '20:00',
            stadium: 'Target Center'
          },
          {
            id: 34,
            home: { name: 'Denver Nuggets', logo: '⛰️' },
            away: { name: 'Phoenix Suns', logo: '☀️' },
            date: '2024-11-08',
            time: '21:00',
            stadium: 'Ball Arena'
          },
          {
            id: 35,
            home: { name: 'Los Angeles Lakers', logo: '💜' },
            away: { name: 'Dallas Mavericks', logo: '🐴' },
            date: '2024-11-08',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 36,
            home: { name: 'San Antonio Spurs', logo: '⚡' },
            away: { name: 'Memphis Grizzlies', logo: '🐻' },
            date: '2024-11-09',
            time: '20:30',
            stadium: 'Frost Bank Center'
          },
          {
            id: 37,
            home: { name: 'Oklahoma City Thunder', logo: '⚡' },
            away: { name: 'Houston Rockets', logo: '🚀' },
            date: '2024-11-09',
            time: '20:00',
            stadium: 'Paycom Center'
          },
          {
            id: 38,
            home: { name: 'Portland Trail Blazers', logo: '🌲' },
            away: { name: 'Utah Jazz', logo: '🎵' },
            date: '2024-11-10',
            time: '22:00',
            stadium: 'Moda Center'
          }
        ],
        playerOfWeek: [
          'Stephen Curry',
          'LeBron James',
          'Luka Dončić',
          'Nikola Jokić',
          'Shai Gilgeous-Alexander',
          'Anthony Edwards'
        ]
      },
      2: {
        name: 'Week 2 (Nov 11-17)',
        matches: [
          {
            id: 39,
            home: { name: 'Golden State Warriors', logo: '⚡' },
            away: { name: 'Denver Nuggets', logo: '⛰️' },
            date: '2024-11-11',
            time: '22:00',
            stadium: 'Chase Center'
          },
          {
            id: 40,
            home: { name: 'Los Angeles Lakers', logo: '💜' },
            away: { name: 'Phoenix Suns', logo: '☀️' },
            date: '2024-11-11',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 41,
            home: { name: 'Dallas Mavericks', logo: '🐴' },
            away: { name: 'Memphis Grizzlies', logo: '🐻' },
            date: '2024-11-12',
            time: '20:30',
            stadium: 'American Airlines Center'
          },
          {
            id: 42,
            home: { name: 'San Antonio Spurs', logo: '⚡' },
            away: { name: 'New Orleans Pelicans', logo: '🐦' },
            date: '2024-11-12',
            time: '20:00',
            stadium: 'Frost Bank Center'
          },
          {
            id: 43,
            home: { name: 'Houston Rockets', logo: '🚀' },
            away: { name: 'Utah Jazz', logo: '🎵' },
            date: '2024-11-13',
            time: '20:00',
            stadium: 'Toyota Center'
          },
          {
            id: 44,
            home: { name: 'Oklahoma City Thunder', logo: '⚡' },
            away: { name: 'Portland Trail Blazers', logo: '🌲' },
            date: '2024-11-13',
            time: '20:00',
            stadium: 'Paycom Center'
          },
          {
            id: 45,
            home: { name: 'Los Angeles Clippers', logo: '🔴' },
            away: { name: 'Minnesota Timberwolves', logo: '🐺' },
            date: '2024-11-14',
            time: '22:30',
            stadium: 'Crypto.com Arena'
          },
          {
            id: 46,
            home: { name: 'Sacramento Kings', logo: '👑' },
            away: { name: 'Golden State Warriors', logo: '⚡' },
            date: '2024-11-14',
            time: '22:00',
            stadium: 'Golden 1 Center'
          },
          {
            id: 47,
            home: { name: 'Phoenix Suns', logo: '☀️' },
            away: { name: 'Los Angeles Lakers', logo: '💜' },
            date: '2024-11-15',
            time: '21:00',
            stadium: 'Footprint Center'
          },
          {
            id: 48,
            home: { name: 'Denver Nuggets', logo: '⛰️' },
            away: { name: 'Dallas Mavericks', logo: '🐴' },
            date: '2024-11-15',
            time: '21:00',
            stadium: 'Ball Arena'
          },
          {
            id: 49,
            home: { name: 'Memphis Grizzlies', logo: '🐻' },
            away: { name: 'San Antonio Spurs', logo: '⚡' },
            date: '2024-11-16',
            time: '20:00',
            stadium: 'FedExForum'
          },
          {
            id: 50,
            home: { name: 'New Orleans Pelicans', logo: '🐦' },
            away: { name: 'Houston Rockets', logo: '🚀' },
            date: '2024-11-16',
            time: '20:00',
            stadium: 'Smoothie King Center'
          },
          {
            id: 51,
            home: { name: 'Utah Jazz', logo: '🎵' },
            away: { name: 'Oklahoma City Thunder', logo: '⚡' },
            date: '2024-11-17',
            time: '21:00',
            stadium: 'Delta Center'
          }
        ],
        playerOfWeek: [
          'Stephen Curry',
          'LeBron James',
          'Luka Dončić',
          'Nikola Jokić',
          'Ja Morant',
          'Victor Wembanyama'
        ]
      }
    }
  }
};

// Other Basketball Leagues
const otherLeagues = {
  'euroleague': {
    name: 'EuroLeague',
    weeks: {
      1: {
        name: 'Round 1',
        matches: [
          {
            id: 100,
            home: { name: 'Real Madrid', logo: '👑' },
            away: { name: 'Barcelona', logo: '🔵' },
            date: '2024-11-04',
            time: '20:45',
            stadium: 'WiZink Center'
          },
          {
            id: 101,
            home: { name: 'Panathinaikos', logo: '🟢' },
            away: { name: 'Olympiacos', logo: '🔴' },
            date: '2024-11-05',
            time: '19:00',
            stadium: 'OAKA'
          }
        ],
        playerOfWeek: [
          'Sergio Llull',
          'Nikola Mirotic',
          'Mathias Lessort',
          'Kostas Sloukas'
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
        // Show weeks from both conferences
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
    } else if (otherLeagues[selectedLeague]) {
      Object.entries(otherLeagues[selectedLeague].weeks).forEach(([weekNum, week]) => {
        weeks.push({
          key: `${selectedLeague}-${weekNum}`,
          name: week.name,
          league: selectedLeague,
          week: weekNum
        });
      });
    }
    
    return weeks;
  };

  const getWeeksToShow = () => {
    if (selectedLeague === 'nba') {
      if (selectedConference === 'all' && selectedWeek === 'all') {
        // Show all weeks from both conferences
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
        // Show all weeks from selected conference
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
        // Show specific week
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

    // Check match predictions
    weekData.matches.forEach(match => {
      if (predictions[match.id]) {
        weekPredictions[match.id] = predictions[match.id];
        predictedMatches++;
      }
    });

    // Check player of the week prediction
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
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  };

  const weeksToShow = getWeeksToShow();

  return (
    <div className="w-full max-w-none">
      <div className="space-y-6">
        {/* Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* League Selector */}
          <div className="relative">
            <motion.button
              className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-charcoal transition-colors min-h-[3rem]"
              onClick={() => setIsLeagueDropdownOpen(!isLeagueDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-orange flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {leagues.find(l => l.key === selectedLeague)?.name || 'NBA'}
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isLeagueDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 ml-2"
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
                      setSelectedConference('all');
                      setSelectedWeek('all');
                      setIsLeagueDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#212121' }}
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
                className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-charcoal transition-colors min-h-[3rem]"
                onClick={() => setIsConferenceDropdownOpen(!isConferenceDropdownOpen)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-orange flex-shrink-0" />
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">
                      {getConferences().find(c => c.key === selectedConference)?.name || 'All Conferences'}
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isConferenceDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-2"
                >
                  <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
                </motion.div>
              </motion.button>

              {isConferenceDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border border-bull-light-gray rounded-bull shadow-bull-lg z-50"
                >
                  {getConferences().map((conference) => (
                    <motion.button
                      key={conference.key}
                      className="w-full px-4 py-3 text-left hover:bg-bull-charcoal transition-colors first:rounded-t-bull last:rounded-b-bull border-b border-bull-charcoal last:border-b-0"
                      onClick={() => {
                        setSelectedConference(conference.key);
                        setSelectedWeek('all');
                        setIsConferenceDropdownOpen(false);
                        setPredictions({});
                      }}
                      whileHover={{ backgroundColor: '#212121' }}
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
              className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-4 py-3 flex items-center justify-between text-white hover:bg-bull-charcoal transition-colors min-h-[3rem]"
              onClick={() => setIsWeekDropdownOpen(!isWeekDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-orange flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">
                    {getAvailableWeeks().find(w => w.key === selectedWeek)?.name || 'All Weeks'}
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isWeekDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 ml-2"
              >
                <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isWeekDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
              >
                {getAvailableWeeks().map((week) => (
                  <motion.button
                    key={week.key}
                    className="w-full px-4 py-3 text-left hover:bg-bull-charcoal transition-colors first:rounded-t-bull last:rounded-b-bull border-b border-bull-charcoal last:border-b-0"
                    onClick={() => {
                      setSelectedWeek(week.key);
                      setIsWeekDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#212121' }}
                  >
                    <div className="font-medium text-white text-sm">{week.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Week Cards - Full Width Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
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
                  className="bg-bull-gray rounded-bull p-6 shadow-bull border border-bull-charcoal w-full min-h-fit"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-heading font-bold text-bull-orange text-lg">
                        {weekData.conference}
                      </h3>
                      <p className="text-bull-light-gray text-sm">{weekData.week}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-bull-yellow font-bold text-lg">
                        {predictedMatches}/{totalMatches}
                      </div>
                      <div className="text-bull-light-gray text-xs">GAMES PREDICTED</div>
                    </div>
                  </div>

                  {/* Matches Grid */}
                  <div className="space-y-3 mb-6">
                    {weekData.matches.map((match, matchIndex) => (
                      <motion.div
                        key={match.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: matchIndex * 0.05 }}
                        className="bg-bull-charcoal rounded-bull p-4 border border-bull-gray"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-bull-light-gray text-xs">
                            {formatDate(match.date)} {match.time} • {match.stadium}
                          </div>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                          {/* Home Team */}
                          <motion.button
                            className={`flex-1 p-3 rounded-bull border-2 transition-all ${
                              predictions[match.id] === match.home.name
                                ? 'border-bull-red bg-bull-red/10 text-bull-red'
                                : 'border-bull-light-gray hover:border-bull-red/50 text-gray-300 hover:text-white'
                            }`}
                            onClick={() => handlePrediction(match.id, match.home.name)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-center space-x-2">
                              <span className="text-2xl">{match.home.logo}</span>
                              <span className="font-medium text-sm text-center">{match.home.name}</span>
                            </div>
                          </motion.button>

                          {/* VS */}
                          <div className="text-bull-light-gray font-bold text-sm">VS</div>

                          {/* Away Team */}
                          <motion.button
                            className={`flex-1 p-3 rounded-bull border-2 transition-all ${
                              predictions[match.id] === match.away.name
                                ? 'border-bull-red bg-bull-red/10 text-bull-red'
                                : 'border-bull-light-gray hover:border-bull-red/50 text-gray-300 hover:text-white'
                            }`}
                            onClick={() => handlePrediction(match.id, match.away.name)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-center space-x-2">
                              <span className="text-2xl">{match.away.logo}</span>
                              <span className="font-medium text-sm text-center">{match.away.name}</span>
                            </div>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Player of the Week Selector */}
                  <div className="mb-6">
                    <label className="block text-bull-light-gray text-sm font-medium mb-3">
                      Player of the Week
                    </label>
                    <select
                      className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 py-3 text-white focus:border-bull-orange focus:outline-none"
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
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-bull-light-gray">Progress</span>
                      <span className="text-bull-yellow font-medium">
                        {Math.round(((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-bull-charcoal rounded-full h-2">
                      <motion.div
                        className="bg-bull-orange h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100}%` }}
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
                    onClick={() => handleStakePrediction(weekData)}
                    disabled={!allPredicted}
                    whileHover={allPredicted ? { scale: 1.02 } : {}}
                    whileTap={allPredicted ? { scale: 0.98 } : {}}
                  >
                    {allPredicted
                      ? 'STAKE PREDICTION'
                      : `COMPLETE ALL PREDICTIONS (${totalMatches + 1 - predictedMatches - (playerOfWeekPredicted ? 1 : 0)} LEFT)`}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {weeksToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-bull-light-gray">No weeks available for the selected filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketballCard;