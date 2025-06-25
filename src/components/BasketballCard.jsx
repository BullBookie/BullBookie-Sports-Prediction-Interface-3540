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
          { id: 1, home: { name: 'Boston Celtics', logo: '🍀' }, away: { name: 'Miami Heat', logo: '🔥' }, date: '2024-11-04', time: '19:30', stadium: 'TD Garden' },
          { id: 2, home: { name: 'Philadelphia 76ers', logo: '🔔' }, away: { name: 'Milwaukee Bucks', logo: '🦌' }, date: '2024-11-04', time: '20:00', stadium: 'Wells Fargo Center' },
          { id: 3, home: { name: 'Atlanta Hawks', logo: '🦅' }, away: { name: 'Charlotte Hornets', logo: '🐝' }, date: '2024-11-05', time: '19:00', stadium: 'State Farm Arena' },
          { id: 4, home: { name: 'Brooklyn Nets', logo: '🏀' }, away: { name: 'Orlando Magic', logo: '✨' }, date: '2024-11-05', time: '19:30', stadium: 'Barclays Center' },
          { id: 5, home: { name: 'Chicago Bulls', logo: '🐂' }, away: { name: 'Detroit Pistons', logo: '⚙️' }, date: '2024-11-06', time: '20:00', stadium: 'United Center' },
          { id: 6, home: { name: 'Cleveland Cavaliers', logo: '⚔️' }, away: { name: 'Indiana Pacers', logo: '🏁' }, date: '2024-11-06', time: '19:00', stadium: 'Rocket Mortgage FieldHouse' },
          { id: 7, home: { name: 'New York Knicks', logo: '🗽' }, away: { name: 'Toronto Raptors', logo: '🦖' }, date: '2024-11-07', time: '19:30', stadium: 'Madison Square Garden' },
          { id: 8, home: { name: 'Washington Wizards', logo: '🧙' }, away: { name: 'Boston Celtics', logo: '🍀' }, date: '2024-11-07', time: '20:00', stadium: 'Capital One Arena' },
          { id: 9, home: { name: 'Miami Heat', logo: '🔥' }, away: { name: 'Philadelphia 76ers', logo: '🔔' }, date: '2024-11-08', time: '20:30', stadium: 'Kaseya Center' },
          { id: 10, home: { name: 'Milwaukee Bucks', logo: '🦌' }, away: { name: 'Atlanta Hawks', logo: '🦅' }, date: '2024-11-08', time: '20:00', stadium: 'Fiserv Forum' },
          { id: 11, home: { name: 'Charlotte Hornets', logo: '🐝' }, away: { name: 'Brooklyn Nets', logo: '🏀' }, date: '2024-11-09', time: '19:00', stadium: 'Spectrum Center' },
          { id: 12, home: { name: 'Orlando Magic', logo: '✨' }, away: { name: 'Chicago Bulls', logo: '🐂' }, date: '2024-11-09', time: '19:00', stadium: 'Kia Center' },
          { id: 13, home: { name: 'Detroit Pistons', logo: '⚙️' }, away: { name: 'Cleveland Cavaliers', logo: '⚔️' }, date: '2024-11-10', time: '18:00', stadium: 'Little Caesars Arena' },
          { id: 14, home: { name: 'Indiana Pacers', logo: '🏁' }, away: { name: 'New York Knicks', logo: '🗽' }, date: '2024-11-10', time: '19:00', stadium: 'Gainbridge Fieldhouse' }
        ],
        playerOfWeek: [
          'Jayson Tatum', 'Jimmy Butler', 'Joel Embiid', 'Giannis Antetokounmpo', 'Trae Young', 'Paolo Banchero',
          'Mikal Bridges', 'Scottie Barnes', 'DeMar DeRozan', 'Donovan Mitchell', 'Jalen Brunson', 'Bradley Beal',
          'Tyler Herro', 'Damian Lillard', 'LaMelo Ball', 'Franz Wagner', 'Cade Cunningham', 'Tyrese Haliburton'
        ]
      },
      2: {
        name: 'Week 2 (Nov 11-17)',
        matches: [
          { id: 21, home: { name: 'Boston Celtics', logo: '🍀' }, away: { name: 'Milwaukee Bucks', logo: '🦌' }, date: '2024-11-11', time: '19:30', stadium: 'TD Garden' },
          { id: 22, home: { name: 'Miami Heat', logo: '🔥' }, away: { name: 'Atlanta Hawks', logo: '🦅' }, date: '2024-11-11', time: '20:00', stadium: 'Kaseya Center' },
          { id: 23, home: { name: 'Philadelphia 76ers', logo: '🔔' }, away: { name: 'Orlando Magic', logo: '✨' }, date: '2024-11-12', time: '19:00', stadium: 'Wells Fargo Center' },
          { id: 24, home: { name: 'Brooklyn Nets', logo: '🏀' }, away: { name: 'Chicago Bulls', logo: '🐂' }, date: '2024-11-12', time: '19:30', stadium: 'Barclays Center' },
          { id: 25, home: { name: 'Charlotte Hornets', logo: '🐝' }, away: { name: 'Detroit Pistons', logo: '⚙️' }, date: '2024-11-13', time: '19:00', stadium: 'Spectrum Center' },
          { id: 26, home: { name: 'Cleveland Cavaliers', logo: '⚔️' }, away: { name: 'New York Knicks', logo: '🗽' }, date: '2024-11-13', time: '20:00', stadium: 'Rocket Mortgage FieldHouse' },
          { id: 27, home: { name: 'Toronto Raptors', logo: '🦖' }, away: { name: 'Washington Wizards', logo: '🧙' }, date: '2024-11-14', time: '19:30', stadium: 'Scotiabank Arena' },
          { id: 28, home: { name: 'Indiana Pacers', logo: '🏁' }, away: { name: 'Boston Celtics', logo: '🍀' }, date: '2024-11-14', time: '20:00', stadium: 'Gainbridge Fieldhouse' },
          { id: 29, home: { name: 'Miami Heat', logo: '🔥' }, away: { name: 'Philadelphia 76ers', logo: '🔔' }, date: '2024-11-15', time: '20:30', stadium: 'Kaseya Center' },
          { id: 30, home: { name: 'Milwaukee Bucks', logo: '🦌' }, away: { name: 'Atlanta Hawks', logo: '🦅' }, date: '2024-11-15', time: '20:00', stadium: 'Fiserv Forum' },
          { id: 31, home: { name: 'Orlando Magic', logo: '✨' }, away: { name: 'Brooklyn Nets', logo: '🏀' }, date: '2024-11-16', time: '19:00', stadium: 'Kia Center' },
          { id: 32, home: { name: 'Chicago Bulls', logo: '🐂' }, away: { name: 'Charlotte Hornets', logo: '🐝' }, date: '2024-11-16', time: '20:00', stadium: 'United Center' },
          { id: 33, home: { name: 'Detroit Pistons', logo: '⚙️' }, away: { name: 'Cleveland Cavaliers', logo: '⚔️' }, date: '2024-11-17', time: '18:00', stadium: 'Little Caesars Arena' },
          { id: 34, home: { name: 'New York Knicks', logo: '🗽' }, away: { name: 'Toronto Raptors', logo: '🦖' }, date: '2024-11-17', time: '19:30', stadium: 'Madison Square Garden' },
          { id: 35, home: { name: 'Washington Wizards', logo: '🧙' }, away: { name: 'Indiana Pacers', logo: '🏁' }, date: '2024-11-17', time: '19:00', stadium: 'Capital One Arena' }
        ],
        playerOfWeek: [
          'Jayson Tatum', 'Jimmy Butler', 'Joel Embiid', 'Giannis Antetokounmpo', 'Trae Young', 'Paolo Banchero',
          'Mikal Bridges', 'Scottie Barnes', 'DeMar DeRozan', 'Donovan Mitchell', 'Jalen Brunson', 'Bradley Beal',
          'Tyler Herro', 'Damian Lillard', 'LaMelo Ball', 'Franz Wagner', 'Cade Cunningham', 'Tyrese Haliburton',
          'Alperen Sengun', 'Myles Turner', 'Jarrett Allen', 'Kristaps Porzingis', 'OG Anunoby', 'RJ Barrett'
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
          { id: 41, home: { name: 'Golden State Warriors', logo: '⚡' }, away: { name: 'Los Angeles Lakers', logo: '💜' }, date: '2024-11-04', time: '22:00', stadium: 'Chase Center' },
          { id: 42, home: { name: 'Phoenix Suns', logo: '☀️' }, away: { name: 'Denver Nuggets', logo: '⛰️' }, date: '2024-11-04', time: '21:00', stadium: 'Footprint Center' },
          { id: 43, home: { name: 'Dallas Mavericks', logo: '🐴' }, away: { name: 'San Antonio Spurs', logo: '⚡' }, date: '2024-11-05', time: '20:30', stadium: 'American Airlines Center' },
          { id: 44, home: { name: 'Memphis Grizzlies', logo: '🐻' }, away: { name: 'New Orleans Pelicans', logo: '🐦' }, date: '2024-11-05', time: '20:00', stadium: 'FedExForum' },
          { id: 45, home: { name: 'Houston Rockets', logo: '🚀' }, away: { name: 'Oklahoma City Thunder', logo: '⚡' }, date: '2024-11-06', time: '20:00', stadium: 'Toyota Center' },
          { id: 46, home: { name: 'Utah Jazz', logo: '🎵' }, away: { name: 'Portland Trail Blazers', logo: '🌲' }, date: '2024-11-06', time: '21:00', stadium: 'Delta Center' },
          { id: 47, home: { name: 'Los Angeles Clippers', logo: '📎' }, away: { name: 'Sacramento Kings', logo: '👑' }, date: '2024-11-07', time: '22:30', stadium: 'Crypto.com Arena' },
          { id: 48, home: { name: 'Minnesota Timberwolves', logo: '🐺' }, away: { name: 'Golden State Warriors', logo: '⚡' }, date: '2024-11-07', time: '20:00', stadium: 'Target Center' },
          { id: 49, home: { name: 'Los Angeles Lakers', logo: '💜' }, away: { name: 'Phoenix Suns', logo: '☀️' }, date: '2024-11-08', time: '22:30', stadium: 'Crypto.com Arena' },
          { id: 50, home: { name: 'Denver Nuggets', logo: '⛰️' }, away: { name: 'Dallas Mavericks', logo: '🐴' }, date: '2024-11-08', time: '21:00', stadium: 'Ball Arena' },
          { id: 51, home: { name: 'San Antonio Spurs', logo: '⚡' }, away: { name: 'Memphis Grizzlies', logo: '🐻' }, date: '2024-11-09', time: '20:00', stadium: 'Frost Bank Center' },
          { id: 52, home: { name: 'New Orleans Pelicans', logo: '🐦' }, away: { name: 'Houston Rockets', logo: '🚀' }, date: '2024-11-09', time: '20:00', stadium: 'Smoothie King Center' },
          { id: 53, home: { name: 'Oklahoma City Thunder', logo: '⚡' }, away: { name: 'Utah Jazz', logo: '🎵' }, date: '2024-11-10', time: '20:00', stadium: 'Paycom Center' },
          { id: 54, home: { name: 'Portland Trail Blazers', logo: '🌲' }, away: { name: 'Los Angeles Clippers', logo: '📎' }, date: '2024-11-10', time: '22:00', stadium: 'Moda Center' }
        ],
        playerOfWeek: [
          'Stephen Curry', 'LeBron James', 'Luka Dončić', 'Nikola Jokić', 'Shai Gilgeous-Alexander', 'Anthony Edwards',
          'Devin Booker', 'Kawhi Leonard', 'Ja Morant', 'Victor Wembanyama', 'Alperen Sengun', 'Lauri Markkanen',
          'Damian Lillard', 'De\'Aaron Fox', 'Paul George', 'Jalen Green', 'Anfernee Simons', 'Draymond Green'
        ]
      },
      2: {
        name: 'Week 2 (Nov 11-17)',
        matches: [
          { id: 61, home: { name: 'Golden State Warriors', logo: '⚡' }, away: { name: 'Denver Nuggets', logo: '⛰️' }, date: '2024-11-11', time: '22:00', stadium: 'Chase Center' },
          { id: 62, home: { name: 'Los Angeles Lakers', logo: '💜' }, away: { name: 'Phoenix Suns', logo: '☀️' }, date: '2024-11-11', time: '22:30', stadium: 'Crypto.com Arena' },
          { id: 63, home: { name: 'Dallas Mavericks', logo: '🐴' }, away: { name: 'Memphis Grizzlies', logo: '🐻' }, date: '2024-11-12', time: '20:30', stadium: 'American Airlines Center' },
          { id: 64, home: { name: 'San Antonio Spurs', logo: '⚡' }, away: { name: 'New Orleans Pelicans', logo: '🐦' }, date: '2024-11-12', time: '20:00', stadium: 'Frost Bank Center' },
          { id: 65, home: { name: 'Houston Rockets', logo: '🚀' }, away: { name: 'Utah Jazz', logo: '🎵' }, date: '2024-11-13', time: '20:00', stadium: 'Toyota Center' },
          { id: 66, home: { name: 'Oklahoma City Thunder', logo: '⚡' }, away: { name: 'Portland Trail Blazers', logo: '🌲' }, date: '2024-11-13', time: '20:00', stadium: 'Paycom Center' },
          { id: 67, home: { name: 'Los Angeles Clippers', logo: '📎' }, away: { name: 'Sacramento Kings', logo: '👑' }, date: '2024-11-14', time: '22:30', stadium: 'Crypto.com Arena' },
          { id: 68, home: { name: 'Minnesota Timberwolves', logo: '🐺' }, away: { name: 'Golden State Warriors', logo: '⚡' }, date: '2024-11-14', time: '20:00', stadium: 'Target Center' },
          { id: 69, home: { name: 'Phoenix Suns', logo: '☀️' }, away: { name: 'Los Angeles Lakers', logo: '💜' }, date: '2024-11-15', time: '21:00', stadium: 'Footprint Center' },
          { id: 70, home: { name: 'Denver Nuggets', logo: '⛰️' }, away: { name: 'Dallas Mavericks', logo: '🐴' }, date: '2024-11-15', time: '21:00', stadium: 'Ball Arena' },
          { id: 71, home: { name: 'Memphis Grizzlies', logo: '🐻' }, away: { name: 'San Antonio Spurs', logo: '⚡' }, date: '2024-11-16', time: '20:00', stadium: 'FedExForum' },
          { id: 72, home: { name: 'New Orleans Pelicans', logo: '🐦' }, away: { name: 'Houston Rockets', logo: '🚀' }, date: '2024-11-16', time: '20:00', stadium: 'Smoothie King Center' },
          { id: 73, home: { name: 'Utah Jazz', logo: '🎵' }, away: { name: 'Oklahoma City Thunder', logo: '⚡' }, date: '2024-11-17', time: '21:00', stadium: 'Delta Center' },
          { id: 74, home: { name: 'Portland Trail Blazers', logo: '🌲' }, away: { name: 'Los Angeles Clippers', logo: '📎' }, date: '2024-11-17', time: '22:00', stadium: 'Moda Center' },
          { id: 75, home: { name: 'Sacramento Kings', logo: '👑' }, away: { name: 'Minnesota Timberwolves', logo: '🐺' }, date: '2024-11-17', time: '22:00', stadium: 'Golden 1 Center' }
        ],
        playerOfWeek: [
          'Stephen Curry', 'LeBron James', 'Luka Dončić', 'Nikola Jokić', 'Shai Gilgeous-Alexander', 'Anthony Edwards',
          'Devin Booker', 'Kawhi Leonard', 'Ja Morant', 'Victor Wembanyama', 'Alperen Sengun', 'Lauri Markkanen',
          'Damian Lillard', 'De\'Aaron Fox', 'Paul George', 'Jalen Green', 'Anfernee Simons', 'Draymond Green',
          'Russell Westbrook', 'Zion Williamson', 'CJ McCollum', 'Rudy Gobert', 'Domantas Sabonis', 'Jaden McDaniels'
        ]
      }
    }
  }
};

// Function to ensure minimum 12 games per week
const ensureMinimumGames = (conferenceMatches, otherConferenceData, weekNum) => {
  if (conferenceMatches.length >= 12) {
    return conferenceMatches.slice(0, 16); // Cap at 16 games
  }
  
  const needed = 12 - conferenceMatches.length;
  const otherWeek = otherConferenceData.weeks[weekNum];
  
  if (otherWeek && otherWeek.matches) {
    const additionalMatches = otherWeek.matches.slice(0, needed).map(match => ({
      ...match,
      id: match.id + 1000, // Offset IDs to avoid conflicts
      isFromOtherConference: true
    }));
    return [...conferenceMatches, ...additionalMatches];
  }
  
  return conferenceMatches;
};

// Function to combine player lists from both conferences
const getCombinedPlayerList = (weekData, selectedConference) => {
  if (selectedConference === 'all') {
    const easternPlayers = nbaConferenceData.eastern.weeks[1]?.playerOfWeek || [];
    const westernPlayers = nbaConferenceData.western.weeks[1]?.playerOfWeek || [];
    return [...new Set([...easternPlayers, ...westernPlayers])].sort();
  }
  
  return weekData.playerOfWeek || [];
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
            const otherConf = confKey === 'eastern' ? nbaConferenceData.western : nbaConferenceData.eastern;
            const enhancedMatches = ensureMinimumGames(week.matches, otherConf, weekNum);
            const combinedPlayers = getCombinedPlayerList(week, 'all');
            
            allWeeks.push({
              key: `${confKey}-${weekNum}`,
              conference: conference.name,
              week: week.name,
              matches: enhancedMatches,
              playerOfWeek: combinedPlayers,
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
        
        return Object.entries(conference.weeks).map(([weekNum, week]) => {
          const otherConf = selectedConference === 'eastern' ? nbaConferenceData.western : nbaConferenceData.eastern;
          const enhancedMatches = ensureMinimumGames(week.matches, otherConf, weekNum);
          const combinedPlayers = getCombinedPlayerList(week, selectedConference);
          
          return {
            key: `${selectedConference}-${weekNum}`,
            conference: conference.name,
            week: week.name,
            matches: enhancedMatches,
            playerOfWeek: combinedPlayers,
            conferenceKey: selectedConference,
            weekNum
          };
        });
      } else if (selectedWeek !== 'all') {
        // Show specific week
        const [confKey, weekNum] = selectedWeek.split('-');
        const conference = nbaConferenceData[confKey];
        const week = conference?.weeks[weekNum];
        if (!week) return [];
        
        const otherConf = confKey === 'eastern' ? nbaConferenceData.western : nbaConferenceData.eastern;
        const enhancedMatches = ensureMinimumGames(week.matches, otherConf, weekNum);
        const combinedPlayers = getCombinedPlayerList(week, confKey);
        
        return [{
          key: selectedWeek,
          conference: conference.name,
          week: week.name,
          matches: enhancedMatches,
          playerOfWeek: combinedPlayers,
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
      <div className="space-y-10">
        {/* Instructions */}
        <motion.div 
          className="bg-gradient-to-r from-bull-red/10 to-bull-yellow/10 border border-bull-red/20 rounded-bull p-6 shadow-bull-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-4">
            <SafeIcon icon={FiInfo} className="w-6 h-6 text-bull-yellow flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-bold text-bull-white mb-3">
                How to Submit Basketball Predictions
              </h3>
              <div className="space-y-2 text-bull-light-gray">
                <p>• <strong className="text-bull-white">Select League & Conference:</strong> Choose NBA conference or other leagues from the filters</p>
                <p>• <strong className="text-bull-white">Pick Winners:</strong> Click on team names to predict match winners</p>
                <p>• <strong className="text-bull-white">Player of the Week:</strong> Select your predicted standout player from all available players</p>
                <p>• <strong className="text-bull-white">Complete All Predictions:</strong> You must predict ALL 12-16 matches + player of the week to stake</p>
                <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Once complete, click "STAKE PREDICTION" to submit with BBWIN tokens</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* League Selector */}
          <div className="relative">
            <motion.button
              className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull min-h-[4rem]"
              onClick={() => setIsLeagueDropdownOpen(!isLeagueDropdownOpen)}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-bull-orange flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="font-bold text-base truncate">
                    {leagues.find(l => l.key === selectedLeague)?.name || 'NBA'}
                  </div>
                  <div className="text-bull-light-gray text-sm">League</div>
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
                className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
              >
                {leagues.map((league) => (
                  <motion.button
                    key={league.key}
                    className="w-full px-6 py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                    onClick={() => {
                      setSelectedLeague(league.key);
                      setSelectedConference('all');
                      setSelectedWeek('all');
                      setIsLeagueDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#212121' }}
                  >
                    <div className="font-bold text-white">{league.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Conference Selector */}
          {selectedLeague === 'nba' && (
            <div className="relative">
              <motion.button
                className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull min-h-[4rem]"
                onClick={() => setIsConferenceDropdownOpen(!isConferenceDropdownOpen)}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  <SafeIcon icon={FiCalendar} className="w-6 h-6 text-bull-orange flex-shrink-0" />
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-base truncate">
                      {getConferences().find(c => c.key === selectedConference)?.name || 'All Conferences'}
                    </div>
                    <div className="text-bull-light-gray text-sm">Conference</div>
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
                  className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
                >
                  {getConferences().map((conference) => (
                    <motion.button
                      key={conference.key}
                      className="w-full px-6 py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                      onClick={() => {
                        setSelectedConference(conference.key);
                        setSelectedWeek('all');
                        setIsConferenceDropdownOpen(false);
                        setPredictions({});
                      }}
                      whileHover={{ backgroundColor: '#212121' }}
                    >
                      <div className="font-bold text-white">{conference.name}</div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Week Selector */}
          <div className="relative">
            <motion.button
              className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull min-h-[4rem]"
              onClick={() => setIsWeekDropdownOpen(!isWeekDropdownOpen)}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-bull-orange flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="font-bold text-base truncate">
                    {getAvailableWeeks().find(w => w.key === selectedWeek)?.name || 'All Weeks'}
                  </div>
                  <div className="text-bull-light-gray text-sm">Week</div>
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
                className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
              >
                {getAvailableWeeks().map((week) => (
                  <motion.button
                    key={week.key}
                    className="w-full px-6 py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                    onClick={() => {
                      setSelectedWeek(week.key);
                      setIsWeekDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#212121' }}
                  >
                    <div className="font-bold text-white">{week.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Week Cards - Full Screen Layout */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-10 w-full max-w-7xl mx-auto">
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
                  className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300 w-full"
                  whileHover={{ scale: 1.005, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
                >
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-bull-gray">
                    <div>
                      <h3 className="font-heading font-bold text-bull-red text-2xl mb-2">
                        {weekData.conference}
                      </h3>
                      <p className="text-bull-light-gray text-lg">{weekData.week}</p>
                      <p className="text-bull-yellow text-sm mt-1">{totalMatches} Games • Player of the Week</p>
                    </div>
                    <div className="text-right">
                      <div className="text-bull-yellow font-bold text-2xl">
                        {predictedMatches}/{totalMatches}
                      </div>
                      <div className="text-bull-light-gray text-sm uppercase tracking-wide">GAMES PREDICTED</div>
                      <div className="text-bull-yellow text-sm mt-1">
                        {playerOfWeekPredicted ? '✓' : '○'} Player Selected
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Matches Grid - 2 Columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                    {weekData.matches.map((match, matchIndex) => (
                      <motion.div
                        key={match.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: matchIndex * 0.02 }}
                        className="bg-bull-charcoal rounded-bull p-4 border-2 border-bull-gray hover:border-bull-red/30 transition-all duration-300 shadow-bull"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <div className="text-bull-light-gray text-sm font-bold w-6 flex-shrink-0">
                              {matchIndex + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-bull-white font-bold text-sm truncate mb-1">
                                {match.home.logo} {match.home.name} <span className="text-bull-light-gray font-normal text-xs">vs</span> {match.away.logo} {match.away.name}
                              </div>
                              <div className="text-bull-light-gray text-xs">
                                {formatDate(match.date)} {match.time}
                              </div>
                              {match.isFromOtherConference && (
                                <div className="text-bull-yellow text-xs">Cross-Conference</div>
                              )}
                            </div>
                          </div>

                          {/* Team Selection Buttons */}
                          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
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
                      </motion.div>
                    ))}
                  </div>

                  {/* Player of the Week Selector */}
                  <div className="mb-8">
                    <label className="block text-bull-light-gray text-lg font-bold mb-4">
                      Player of the Week ({weekData.playerOfWeek.length} Players Available)
                    </label>
                    <select
                      className="w-full bg-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 text-white focus:border-bull-orange focus:outline-none transition-all text-lg shadow-bull"
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
                  <div className="mb-8">
                    <div className="flex justify-between text-lg mb-4">
                      <span className="text-bull-light-gray font-medium">Progress</span>
                      <span className="text-bull-yellow font-bold">
                        {Math.round(((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-bull-charcoal rounded-full h-4 shadow-inner">
                      <motion.div
                        className="bg-gradient-to-r from-bull-red to-bull-orange h-4 rounded-full shadow-bull"
                        initial={{ width: 0 }}
                        animate={{ width: `${((predictedMatches + (playerOfWeekPredicted ? 1 : 0)) / (totalMatches + 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Stake Button */}
                  <motion.button
                    className={`w-full py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
                      allPredicted
                        ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-bull-white cursor-pointer'
                        : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
                    }`}
                    onClick={() => handleStakePrediction(weekData)}
                    disabled={!allPredicted}
                    whileHover={allPredicted ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
                    whileTap={allPredicted ? { scale: 0.98 } : {}}
                  >
                    {allPredicted 
                      ? 'STAKE PREDICTION' 
                      : `COMPLETE ALL PREDICTIONS (${totalMatches + 1 - predictedMatches - (playerOfWeekPredicted ? 1 : 0)} LEFT)`
                    }
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {weeksToShow.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏀</div>
            <h3 className="text-2xl font-bold text-bull-white mb-2">No Games Available</h3>
            <p className="text-bull-light-gray text-lg">No weeks available for the selected filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketballCard;