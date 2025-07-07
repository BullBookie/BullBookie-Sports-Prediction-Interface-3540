import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo, FiChevronDown, FiCalendar, FiTarget, FiUsers } = FiIcons;

// Fighting Sports Data with Multiple Organizations
const fightingData = {
  'boxing': {
    name: 'Boxing',
    events: [
      {
        id: 1,
        title: 'Heavyweight Championship Unification',
        date: '2024-04-20',
        time: '21:00 EST',
        venue: 'Madison Square Garden, New York',
        description: 'Historic heavyweight unification bout featuring the two best heavyweights in the world.',
        fights: [
          {
            id: 1,
            fighterA: 'Tyson Fury',
            fighterB: 'Oleksandr Usyk',
            weightClass: 'Heavyweight',
            title: 'Main Event - Undisputed Championship',
            scheduledRounds: 12
          },
          {
            id: 2,
            fighterA: 'Anthony Joshua',
            fighterB: 'Deontay Wilder',
            weightClass: 'Heavyweight',
            title: 'Co-Main Event',
            scheduledRounds: 12
          },
          {
            id: 3,
            fighterA: 'Canelo Alvarez',
            fighterB: 'David Benavidez',
            weightClass: 'Super Middleweight',
            title: 'Title Defense',
            scheduledRounds: 12
          },
          {
            id: 4,
            fighterA: 'Gervonta Davis',
            fighterB: 'Ryan Garcia',
            weightClass: 'Lightweight',
            title: 'Unification Bout',
            scheduledRounds: 12
          },
          {
            id: 5,
            fighterA: 'Errol Spence Jr.',
            fighterB: 'Terence Crawford',
            weightClass: 'Welterweight',
            title: 'Undisputed Championship',
            scheduledRounds: 12
          },
          {
            id: 6,
            fighterA: 'Naoya Inoue',
            fighterB: 'Luis Nery',
            weightClass: 'Super Bantamweight',
            title: 'Title Defense',
            scheduledRounds: 12
          },
          {
            id: 7,
            fighterA: 'Shakur Stevenson',
            fighterB: 'Gervonta Davis',
            weightClass: 'Lightweight',
            title: 'Unification',
            scheduledRounds: 12
          },
          {
            id: 8,
            fighterA: 'Jermell Charlo',
            fighterB: 'Tim Tszyu',
            weightClass: 'Super Welterweight',
            title: 'Title Fight',
            scheduledRounds: 12
          },
          {
            id: 9,
            fighterA: 'Dmitry Bivol',
            fighterB: 'Artur Beterbiev',
            weightClass: 'Light Heavyweight',
            title: 'Unification',
            scheduledRounds: 12
          }
        ]
      }
    ],
    individualFights: [
      {
        id: 101,
        fighterA: 'Tyson Fury',
        fighterB: 'Oleksandr Usyk',
        weightClass: 'Heavyweight',
        title: 'Undisputed Championship',
        date: '2024-04-20',
        venue: 'Madison Square Garden',
        scheduledRounds: 12
      },
      {
        id: 102,
        fighterA: 'Canelo Alvarez',
        fighterB: 'David Benavidez',
        weightClass: 'Super Middleweight',
        title: 'Title Defense',
        date: '2024-05-05',
        venue: 'T-Mobile Arena',
        scheduledRounds: 12
      },
      {
        id: 103,
        fighterA: 'Gervonta Davis',
        fighterB: 'Ryan Garcia',
        weightClass: 'Lightweight',
        title: 'Unification',
        date: '2024-05-18',
        venue: 'Barclays Center',
        scheduledRounds: 12
      }
    ]
  },
  'mma': {
    name: 'MMA (UFC, Bellator, etc)',
    events: [
      {
        id: 3,
        title: 'UFC 300: Legendary Battles',
        date: '2024-04-13',
        time: '22:00 EST',
        venue: 'T-Mobile Arena, Las Vegas',
        description: 'Historic UFC milestone event featuring the biggest names in mixed martial arts.',
        fights: [
          {
            id: 19,
            fighterA: 'Jon Jones',
            fighterB: 'Stipe Miocic',
            weightClass: 'Heavyweight',
            title: 'UFC Heavyweight Championship',
            scheduledRounds: 5
          },
          {
            id: 20,
            fighterA: 'Alex Pereira',
            fighterB: 'Jamahal Hill',
            weightClass: 'Light Heavyweight',
            title: 'UFC Light Heavyweight Championship',
            scheduledRounds: 5
          },
          {
            id: 21,
            fighterA: 'Islam Makhachev',
            fighterB: 'Charles Oliveira',
            weightClass: 'Lightweight',
            title: 'UFC Lightweight Championship',
            scheduledRounds: 5
          },
          {
            id: 22,
            fighterA: 'Conor McGregor',
            fighterB: 'Michael Chandler',
            weightClass: 'Lightweight',
            title: 'Main Card Feature',
            scheduledRounds: 3
          },
          {
            id: 23,
            fighterA: 'Sean Strickland',
            fighterB: 'Dricus du Plessis',
            weightClass: 'Middleweight',
            title: 'UFC Middleweight Championship',
            scheduledRounds: 5
          },
          {
            id: 24,
            fighterA: 'Colby Covington',
            fighterB: 'Belal Muhammad',
            weightClass: 'Welterweight',
            title: 'Title Eliminator',
            scheduledRounds: 3
          },
          {
            id: 25,
            fighterA: 'Max Holloway',
            fighterB: 'Josh Emmett',
            weightClass: 'Featherweight',
            title: 'Title Eliminator',
            scheduledRounds: 3
          },
          {
            id: 26,
            fighterA: 'Cory Sandhagen',
            fighterB: 'Merab Dvalishvili',
            weightClass: 'Bantamweight',
            title: 'Title Eliminator',
            scheduledRounds: 3
          },
          {
            id: 27,
            fighterA: 'Brandon Royval',
            fighterB: 'Alexandre Pantoja',
            weightClass: 'Flyweight',
            title: 'UFC Flyweight Championship',
            scheduledRounds: 5
          }
        ]
      }
    ],
    individualFights: [
      {
        id: 201,
        fighterA: 'Jon Jones',
        fighterB: 'Stipe Miocic',
        weightClass: 'Heavyweight',
        title: 'UFC Heavyweight Championship',
        date: '2024-04-13',
        venue: 'T-Mobile Arena',
        scheduledRounds: 5
      },
      {
        id: 202,
        fighterA: 'Islam Makhachev',
        fighterB: 'Charles Oliveira',
        weightClass: 'Lightweight',
        title: 'UFC Lightweight Championship',
        date: '2024-05-25',
        venue: 'Madison Square Garden',
        scheduledRounds: 5
      },
      {
        id: 203,
        fighterA: 'Alex Pereira',
        fighterB: 'Jamahal Hill',
        weightClass: 'Light Heavyweight',
        title: 'UFC Light Heavyweight Championship',
        date: '2024-06-08',
        venue: 'UFC Apex',
        scheduledRounds: 5
      }
    ]
  },
  'kickboxing': {
    name: 'Kickboxing/Muay Thai (ONE, K-1, etc)',
    events: [
      {
        id: 5,
        title: 'ONE Championship: Kings of Combat',
        date: '2024-06-08',
        time: '08:00 EST (Live from Singapore)',
        venue: 'Singapore Indoor Stadium',
        description: 'Premier ONE Championship event showcasing the best in kickboxing and Muay Thai.',
        fights: [
          {
            id: 37,
            fighterA: 'Rodtang Jitmuangnon',
            fighterB: 'Superlek Kiatmuu9',
            weightClass: 'Flyweight',
            title: 'ONE Muay Thai Flyweight Championship',
            scheduledRounds: 3
          },
          {
            id: 38,
            fighterA: 'Tawanchai PK.Saenchai',
            fighterB: 'Jamal Yusupov',
            weightClass: 'Featherweight',
            title: 'ONE Muay Thai Featherweight Championship',
            scheduledRounds: 3
          },
          {
            id: 39,
            fighterA: 'Chingiz Allazov',
            fighterB: 'Sitthichai Sitsongpeenong',
            weightClass: 'Featherweight',
            title: 'ONE Kickboxing Featherweight Championship',
            scheduledRounds: 3
          },
          {
            id: 40,
            fighterA: 'Giorgio Petrosyan',
            fighterB: 'Superbon Singha Mawynn',
            weightClass: 'Lightweight',
            title: 'ONE Kickboxing Lightweight Championship',
            scheduledRounds: 3
          },
          {
            id: 41,
            fighterA: 'Regian Eersel',
            fighterB: 'Sinsamut Klinmee',
            weightClass: 'Lightweight',
            title: 'ONE Muay Thai Lightweight Championship',
            scheduledRounds: 3
          },
          {
            id: 42,
            fighterA: 'Prajanchai PK.Saenchai',
            fighterB: 'Jonathan Haggerty',
            weightClass: 'Strawweight',
            title: 'ONE Muay Thai Strawweight Championship',
            scheduledRounds: 3
          },
          {
            id: 43,
            fighterA: 'Takeru Segawa',
            fighterB: 'Hiroki Akimoto',
            weightClass: 'Featherweight',
            title: 'K-1 World Grand Prix',
            scheduledRounds: 3
          },
          {
            id: 44,
            fighterA: 'Wei Rui',
            fighterB: 'Zhang Peimian',
            weightClass: 'Bantamweight',
            title: 'ONE Kickboxing Bantamweight Championship',
            scheduledRounds: 3
          },
          {
            id: 45,
            fighterA: 'Anissa Meksen',
            fighterB: 'Janet Todd',
            weightClass: 'Atomweight',
            title: 'ONE Kickboxing Atomweight Championship',
            scheduledRounds: 3
          }
        ]
      }
    ],
    individualFights: [
      {
        id: 301,
        fighterA: 'Rodtang Jitmuangnon',
        fighterB: 'Superlek Kiatmuu9',
        weightClass: 'Flyweight',
        title: 'ONE Muay Thai Championship',
        date: '2024-06-08',
        venue: 'Singapore Indoor Stadium',
        scheduledRounds: 3
      },
      {
        id: 302,
        fighterA: 'Giorgio Petrosyan',
        fighterB: 'Superbon Singha Mawynn',
        weightClass: 'Lightweight',
        title: 'ONE Kickboxing Championship',
        date: '2024-06-22',
        venue: 'Impact Arena',
        scheduledRounds: 3
      },
      {
        id: 303,
        fighterA: 'Takeru Segawa',
        fighterB: 'Hiroki Akimoto',
        weightClass: 'Featherweight',
        title: 'K-1 World Grand Prix',
        date: '2024-07-06',
        venue: 'Saitama Super Arena',
        scheduledRounds: 3
      }
    ]
  }
};

const FightingCard = ({ onStake }) => {
  const [selectedSport, setSelectedSport] = useState('boxing');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [cardType, setCardType] = useState('event'); // 'event' or 'individual'
  const [predictions, setPredictions] = useState({});
  const [isSportDropdownOpen, setIsSportDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const sports = [
    { key: 'boxing', name: 'Boxing' },
    { key: 'mma', name: 'MMA (UFC, Bellator, etc)' },
    { key: 'kickboxing', name: 'Kickboxing/Muay Thai (ONE, K-1, etc)' }
  ];

  const cardTypes = [
    { key: 'event', label: 'Full Events', description: 'Predict entire fight cards' },
    { key: 'individual', label: 'Individual Fights', description: 'Predict single fights' }
  ];

  const getDisciplineMethods = (sport) => {
    switch (sport) {
      case 'boxing': return ['KO/TKO', 'Decision'];
      case 'mma': return ['KO/TKO', 'Submission', 'Decision'];
      case 'kickboxing': return ['KO/TKO', 'Decision'];
      default: return ['KO/TKO', 'Decision'];
    }
  };

  // Get KO round options based on scheduled rounds
  const getKORoundOptions = (scheduledRounds) => {
    const rounds = [];
    for (let i = 1; i <= scheduledRounds; i++) {
      rounds.push(`Round ${i}`);
    }
    return rounds;
  };

  // Get decision types based on sport
  const getDecisionTypes = (sport) => {
    switch (sport) {
      case 'boxing': return ['Unanimous Decision', 'Majority Decision', 'Split Decision'];
      case 'mma': return ['Unanimous Decision', 'Majority Decision', 'Split Decision'];
      case 'kickboxing': return ['Unanimous Decision', 'Majority Decision', 'Split Decision'];
      default: return ['Unanimous Decision', 'Majority Decision', 'Split Decision'];
    }
  };

  const getAvailableEvents = () => {
    const events = [{ key: 'all', name: 'All Events' }];
    const sportData = fightingData[selectedSport];
    if (sportData) {
      if (cardType === 'event') {
        sportData.events.forEach(event => {
          events.push({
            key: event.id.toString(),
            name: event.title,
            event: event
          });
        });
      } else {
        sportData.individualFights.forEach(fight => {
          events.push({
            key: fight.id.toString(),
            name: `${fight.fighterA} vs ${fight.fighterB}`,
            fight: fight
          });
        });
      }
    }
    return events;
  };

  const getEventsToShow = () => {
    const sportData = fightingData[selectedSport];
    if (!sportData) return [];

    if (cardType === 'event') {
      if (selectedEvent === 'all') {
        return sportData.events;
      } else {
        const event = sportData.events.find(e => e.id.toString() === selectedEvent);
        return event ? [event] : [];
      }
    } else {
      if (selectedEvent === 'all') {
        return sportData.individualFights;
      } else {
        const fight = sportData.individualFights.find(f => f.id.toString() === selectedEvent);
        return fight ? [fight] : [];
      }
    }
  };

  // Enhanced prediction handler for EVENT mode to include Draw/Cancelled/NC
  const handlePrediction = (fightId, field, value) => {
    setPredictions(prev => ({
      ...prev,
      [fightId]: {
        ...prev[fightId],
        [field]: value
      }
    }));
  };

  // Enhanced prediction handler for individual fights with reset logic
  const handleIndividualFightPrediction = (fightId, field, value) => {
    setPredictions(prev => {
      const currentPrediction = prev[fightId] || {};

      // If selecting result
      if (field === 'result') {
        if (value === 'Draw/Cancelled/NC') {
          // Reset everything when Draw/Cancelled/NC is selected
          return {
            ...prev,
            [fightId]: {
              result: value
              // All other fields are cleared
            }
          };
        } else {
          // Fighter selected - keep result and set winner, clear method-specific fields
          return {
            ...prev,
            [fightId]: {
              result: value,
              winner: value,
              // Clear method-specific fields
              method: undefined,
              koRound: undefined,
              decisionType: undefined
            }
          };
        }
      }

      // If selecting method
      if (field === 'method') {
        return {
          ...prev,
          [fightId]: {
            ...currentPrediction,
            method: value,
            // Clear method-specific details when method changes
            koRound: undefined,
            decisionType: undefined
          }
        };
      }

      // For other fields, just update normally
      return {
        ...prev,
        [fightId]: {
          ...currentPrediction,
          [field]: value
        }
      };
    });
  };

  const handleStakeEvent = (event) => {
    const eventPredictions = {};
    let allPredicted = true;

    event.fights.forEach(fight => {
      const prediction = predictions[fight.id];
      // Enhanced validation for event mode - check for fighter OR Draw/Cancelled/NC
      if ((prediction?.fighter && prediction?.method) || prediction?.fighter === 'Draw/Cancelled/NC') {
        eventPredictions[fight.id] = prediction;
      } else {
        allPredicted = false;
      }
    });

    if (allPredicted) {
      onStake({
        type: 'fighting-event',
        event: event,
        predictions: eventPredictions,
        totalFights: event.fights.length,
        sport: 'Fighting'
      });
    }
  };

  const handleStakeIndividualFight = (fight) => {
    const prediction = predictions[fight.id];
    if (isIndividualFightComplete(fight)) {
      onStake({
        type: 'fighting-individual',
        fight: fight,
        prediction: prediction,
        sport: 'Fighting'
      });
    }
  };

  // Enhanced validation for event mode
  const isEventComplete = (event) => {
    return event.fights.every(fight => {
      const prediction = predictions[fight.id];
      // Accept Draw/Cancelled/NC as complete prediction OR fighter + method
      return prediction?.fighter === 'Draw/Cancelled/NC' || (prediction?.fighter && prediction?.method);
    });
  };

  // Enhanced validation for individual fights
  const isIndividualFightComplete = (fight) => {
    const prediction = predictions[fight.id];
    if (!prediction?.result) return false;

    // If Draw/Cancelled/NC is selected, that's all we need
    if (prediction.result === 'Draw/Cancelled/NC') return true;

    // If a fighter is selected, we need method details
    if (!prediction.winner) return false;
    if (!prediction.method) return false;

    // Method-specific validation
    if (prediction.method === 'KO/TKO' && !prediction.koRound) return false;
    if (prediction.method === 'Decision' && !prediction.decisionType) return false;

    return true;
  };

  const eventsToShow = getEventsToShow();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Compact Instructions */}
      <motion.div
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-3 sm:p-4 shadow-bull"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <SafeIcon icon={FiInfo} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-xs sm:text-sm font-bold text-bull-white mb-1">
              Fighting Sports Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              {cardType === 'event'
                ? 'Choose sport, predict winner/draw/cancelled and method for all fights to stake the event.'
                : 'Select winner/draw/cancelled, then exact KO round or decision type to stake prediction.'
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile-First Filters */}
      <div className="space-y-3 sm:space-y-4">
        {/* Card Type Selector */}
        <div className="bg-bull-charcoal rounded-bull p-3 border border-bull-gray">
          <label className="block text-bull-light-gray text-xs sm:text-sm font-medium mb-2">Prediction Mode</label>
          <div className="grid grid-cols-2 gap-2">
            {cardTypes.map((type) => (
              <motion.button
                key={type.key}
                className={`p-2 sm:p-3 rounded text-xs font-medium transition-all duration-300 ${
                  cardType === type.key
                    ? 'bg-bull-yellow text-bull-black'
                    : 'bg-bull-gray text-bull-light-gray hover:bg-bull-light-gray hover:text-bull-white'
                }`}
                onClick={() => {
                  setCardType(type.key);
                  setSelectedEvent('all');
                  setPredictions({});
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{type.label}</div>
                <div className="text-xs opacity-70 hidden sm:block">{type.description}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sport and Event Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Sport Selector */}
          <div className="relative">
            <motion.button
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
              onClick={() => setIsSportDropdownOpen(!isSportDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <SafeIcon icon={FiTarget} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-red flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm truncate">
                  {sports.find(s => s.key === selectedSport)?.name || 'Boxing'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isSportDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isSportDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
              >
                {sports.map((sport) => (
                  <motion.button
                    key={sport.key}
                    className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                    onClick={() => {
                      setSelectedSport(sport.key);
                      setSelectedEvent('all');
                      setIsSportDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#2A3132' }}
                  >
                    <div className="font-medium text-white text-xs sm:text-sm">{sport.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Event/Fight Selector */}
          <div className="relative">
            <motion.button
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
              onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <SafeIcon icon={cardType === 'event' ? FiUsers : FiTarget} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-red flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm truncate">
                  {getAvailableEvents().find(e => e.key === selectedEvent)?.name || (cardType === 'event' ? 'All Events' : 'All Fights')}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isEventDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isEventDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-48 sm:max-h-60 overflow-y-auto"
              >
                {getAvailableEvents().map((event) => (
                  <motion.button
                    key={event.key}
                    className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                    onClick={() => {
                      setSelectedEvent(event.key);
                      setIsEventDropdownOpen(false);
                      setPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#2A3132' }}
                  >
                    <div className="font-medium text-white text-xs sm:text-sm truncate">{event.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Render Event Cards or Individual Fight Cards */}
      <div className="space-y-4 sm:space-y-6">
        {cardType === 'event' ? (
          // Enhanced Event Cards with Draw/Cancelled/NC option
          eventsToShow.map((event, eventIndex) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: eventIndex * 0.1 }}
              className="bg-bull-charcoal rounded-bull p-3 sm:p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Event Header */}
              <div className="mb-3 sm:mb-4">
                <h2 className="font-heading font-bold text-bull-red text-lg sm:text-xl mb-2">
                  {event.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm text-bull-light-gray">
                  <span>{event.date} • {event.time}</span>
                  <span className="sm:col-span-1">{event.venue}</span>
                  <span className="text-bull-yellow sm:text-right">{event.fights.length} Fights</span>
                </div>
              </div>

              {/* Enhanced Mobile-Responsive Fights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {event.fights.map((fight, fightIndex) => (
                  <motion.div
                    key={fight.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: fightIndex * 0.05 }}
                    className="bg-bull-gray rounded-bull p-2 sm:p-3 border border-bull-charcoal hover:border-bull-red/20 transition-all duration-300"
                  >
                    {/* Fight Details */}
                    <div className="mb-2 sm:mb-3">
                      <div className="text-center text-bull-white font-bold text-xs sm:text-sm mb-1">
                        {fight.fighterA} <span className="text-bull-light-gray">vs</span> {fight.fighterB}
                      </div>
                      <div className="text-bull-light-gray text-xs text-center">
                        {fight.weightClass}
                      </div>
                    </div>

                    {/* Enhanced Winner Selection with Draw/Cancelled/NC */}
                    <div className="mb-2 sm:mb-3">
                      <label className="block text-bull-light-gray text-xs font-medium mb-1">Winner/Result</label>
                      <div className="space-y-1">
                        {[fight.fighterA, fight.fighterB, 'Draw/Cancelled/NC'].map((option) => (
                          <motion.button
                            key={option}
                            className={`w-full p-1.5 sm:p-2 rounded text-xs font-medium transition-all duration-300 ${
                              predictions[fight.id]?.fighter === option
                                ? option === 'Draw/Cancelled/NC'
                                  ? 'border border-bull-yellow bg-bull-yellow/20 text-bull-yellow'
                                  : 'border border-bull-red bg-bull-red/20 text-bull-red'
                                : 'border border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red hover:bg-bull-red/10'
                            }`}
                            onClick={() => handlePrediction(fight.id, 'fighter', option)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {option === 'Draw/Cancelled/NC' ? 'Draw/Cancelled/NC' : option.split(' ').pop()}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Method Selection - Only show if not Draw/Cancelled/NC */}
                    {predictions[fight.id]?.fighter && predictions[fight.id]?.fighter !== 'Draw/Cancelled/NC' && (
                      <div>
                        <label className="block text-bull-light-gray text-xs font-medium mb-1">Method</label>
                        <select
                          className="w-full bg-bull-charcoal border border-bull-light-gray rounded px-2 py-1.5 sm:py-2 text-white text-xs focus:border-bull-red focus:outline-none"
                          value={predictions[fight.id]?.method || ''}
                          onChange={(e) => handlePrediction(fight.id, 'method', e.target.value)}
                        >
                          <option value="">Select Method</option>
                          {getDisciplineMethods(selectedSport).map(method => (
                            <option key={method} value={method}>{method}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Event Progress and Stake Button */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-bull-light-gray">Progress</span>
                  <span className="text-bull-yellow font-bold">
                    {event.fights.filter(f => {
                      const pred = predictions[f.id];
                      return pred?.fighter === 'Draw/Cancelled/NC' || (pred?.fighter && pred?.method);
                    }).length}/{event.fights.length} Fights
                  </span>
                </div>
                <div className="w-full bg-bull-gray rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-bull-red to-bull-orange h-1.5 sm:h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(event.fights.filter(f => {
                        const pred = predictions[f.id];
                        return pred?.fighter === 'Draw/Cancelled/NC' || (pred?.fighter && pred?.method);
                      }).length / event.fights.length) * 100}%`
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.button
                  className={`w-full py-2.5 sm:py-3 rounded-bull font-bold text-xs sm:text-sm transition-all duration-300 ${
                    isEventComplete(event)
                      ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-bull-white'
                      : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                  }`}
                  onClick={() => handleStakeEvent(event)}
                  disabled={!isEventComplete(event)}
                  whileHover={isEventComplete(event) ? { scale: 1.02 } : {}}
                  whileTap={isEventComplete(event) ? { scale: 0.98 } : {}}
                >
                  {isEventComplete(event) ? 'STAKE EVENT PREDICTION' : `${event.fights.length - event.fights.filter(f => {
                    const pred = predictions[f.id];
                    return pred?.fighter === 'Draw/Cancelled/NC' || (pred?.fighter && pred?.method);
                  }).length} FIGHTS LEFT`}
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          // Enhanced Individual Fight Cards with properly fixed mobile layout
          eventsToShow.map((fight, fightIndex) => (
            <motion.div
              key={fight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: fightIndex * 0.1 }}
              className="bg-bull-charcoal rounded-bull p-3 sm:p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Individual Fight Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="font-heading font-bold text-bull-red text-lg sm:text-xl mb-2">
                  {fight.fighterA} <span className="text-bull-light-gray">vs</span> {fight.fighterB}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm text-bull-light-gray">
                  <span>{fight.date}</span>
                  <span>{fight.venue}</span>
                  <span className="text-bull-yellow">{fight.weightClass}</span>
                </div>
                <p className="text-bull-yellow text-xs sm:text-sm mt-2">{fight.title}</p>
              </div>

              {/* Enhanced Prediction System */}
              <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                {/* Step 1: Fight Result - Fixed Mobile Layout */}
                <div className="bg-bull-gray rounded-bull p-3 sm:p-4">
                  <h4 className="text-bull-yellow font-bold text-sm mb-3 text-center">Fight Result</h4>
                  
                  {/* Mobile-Optimized Layout - Fixed to prevent overlapping */}
                  <div className="grid grid-cols-2 gap-2 sm:hidden">
                    {/* Fighter A Button */}
                    <motion.button
                      className={`p-2 rounded-bull border-2 transition-all duration-300 ${
                        predictions[fight.id]?.result === fight.fighterA
                          ? 'border-bull-red bg-bull-red/20 text-bull-red'
                          : 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-white hover:bg-bull-red/10'
                      }`}
                      onClick={() => handleIndividualFightPrediction(fight.id, 'result', fight.fighterA)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-bold text-xs text-center truncate">
                        {fight.fighterA.split(' ').pop()}
                      </div>
                    </motion.button>

                    {/* Fighter B Button */}
                    <motion.button
                      className={`p-2 rounded-bull border-2 transition-all duration-300 ${
                        predictions[fight.id]?.result === fight.fighterB
                          ? 'border-bull-red bg-bull-red/20 text-bull-red'
                          : 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-white hover:bg-bull-red/10'
                      }`}
                      onClick={() => handleIndividualFightPrediction(fight.id, 'result', fight.fighterB)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-bold text-xs text-center truncate">
                        {fight.fighterB.split(' ').pop()}
                      </div>
                    </motion.button>

                    {/* Draw/Cancelled/NC Button - Full Width */}
                    <motion.button
                      className={`col-span-2 p-2 rounded-bull border-2 transition-all duration-300 ${
                        predictions[fight.id]?.result === 'Draw/Cancelled/NC'
                          ? 'border-bull-yellow bg-bull-yellow/20 text-bull-yellow'
                          : 'border-bull-light-gray text-bull-light-gray hover:border-bull-yellow hover:text-bull-white hover:bg-bull-yellow/10'
                      }`}
                      onClick={() => handleIndividualFightPrediction(fight.id, 'result', 'Draw/Cancelled/NC')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-bold text-xs text-center">
                        Draw/Cancelled/NC
                      </div>
                    </motion.button>
                  </div>

                  {/* Desktop Layout (unchanged) */}
                  <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3">
                    {[fight.fighterA, 'Draw/Cancelled/NC', fight.fighterB].map((option) => (
                      <motion.button
                        key={option}
                        className={`p-3 sm:p-4 rounded-bull border-2 transition-all duration-300 ${
                          predictions[fight.id]?.result === option
                            ? 'border-bull-red bg-bull-red/20 text-bull-red'
                            : 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-white hover:bg-bull-red/10'
                        }`}
                        onClick={() => handleIndividualFightPrediction(fight.id, 'result', option)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-bold text-xs sm:text-sm text-center">
                          {option === 'Draw/Cancelled/NC' ? 'Draw/Cancelled/NC' : option.split(' ').pop()}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Victory Method (if not draw/cancelled/nc) */}
                {predictions[fight.id]?.result && predictions[fight.id]?.result !== 'Draw/Cancelled/NC' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-bull-gray rounded-bull p-3 sm:p-4"
                  >
                    <h4 className="text-bull-yellow font-bold text-sm mb-3 text-center">Victory Method</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {getDisciplineMethods(selectedSport).map((method) => (
                        <motion.button
                          key={method}
                          className={`p-3 rounded-bull border transition-all duration-300 ${
                            predictions[fight.id]?.method === method
                              ? 'border-bull-yellow bg-bull-yellow/20 text-bull-yellow'
                              : 'border-bull-light-gray text-bull-light-gray hover:border-bull-yellow hover:text-bull-white hover:bg-bull-yellow/10'
                          }`}
                          onClick={() => handleIndividualFightPrediction(fight.id, 'method', method)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-sm font-bold text-center">{method}</div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Specific Details */}
                {predictions[fight.id]?.method && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-bull-gray rounded-bull p-3 sm:p-4"
                  >
                    {predictions[fight.id]?.method === 'KO/TKO' ? (
                      <div>
                        <h4 className="text-bull-red font-bold text-sm mb-3 text-center">KO/TKO Round</h4>
                        <select
                          className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 text-white text-sm focus:border-bull-red focus:outline-none"
                          value={predictions[fight.id]?.koRound || ''}
                          onChange={(e) => handleIndividualFightPrediction(fight.id, 'koRound', e.target.value)}
                        >
                          <option value="">Select KO/TKO Round</option>
                          {getKORoundOptions(fight.scheduledRounds).map(round => (
                            <option key={round} value={round}>{round}</option>
                          ))}
                        </select>
                      </div>
                    ) : predictions[fight.id]?.method === 'Decision' ? (
                      <div>
                        <h4 className="text-bull-red font-bold text-sm mb-3 text-center">Decision Type</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {getDecisionTypes(selectedSport).map((decisionType) => (
                            <motion.button
                              key={decisionType}
                              className={`p-3 rounded-bull border transition-all duration-300 ${
                                predictions[fight.id]?.decisionType === decisionType
                                  ? 'border-bull-red bg-bull-red/20 text-bull-red'
                                  : 'border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-white hover:bg-bull-red/10'
                              }`}
                              onClick={() => handleIndividualFightPrediction(fight.id, 'decisionType', decisionType)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-sm font-medium text-center">{decisionType}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-3 bg-bull-yellow/10 rounded border border-bull-yellow/30">
                        <p className="text-bull-yellow text-sm font-medium">Submission Method Selected</p>
                        <p className="text-bull-light-gray text-xs mt-1">Ready to stake prediction</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step Progress Indicator */}
                <div className="bg-bull-charcoal rounded-bull p-3 border border-bull-gray">
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <span className="text-bull-light-gray">Prediction Progress</span>
                    <span className="text-bull-yellow font-bold">
                      {isIndividualFightComplete(fight) ? 'Complete' : 'In Progress'}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className={`flex items-center gap-2 ${predictions[fight.id]?.result ? 'text-bull-yellow' : 'text-bull-light-gray'}`}>
                      <span>{predictions[fight.id]?.result ? '✓' : '○'}</span>
                      <span>Fight Result Selected</span>
                    </div>
                    {predictions[fight.id]?.result !== 'Draw/Cancelled/NC' && predictions[fight.id]?.result && (
                      <>
                        <div className={`flex items-center gap-2 ${predictions[fight.id]?.method ? 'text-bull-yellow' : 'text-bull-light-gray'}`}>
                          <span>{predictions[fight.id]?.method ? '✓' : '○'}</span>
                          <span>Victory Method Selected</span>
                        </div>
                        {predictions[fight.id]?.method === 'KO/TKO' && (
                          <div className={`flex items-center gap-2 ${predictions[fight.id]?.koRound ? 'text-bull-yellow' : 'text-bull-light-gray'}`}>
                            <span>{predictions[fight.id]?.koRound ? '✓' : '○'}</span>
                            <span>KO/TKO Round Selected</span>
                          </div>
                        )}
                        {predictions[fight.id]?.method === 'Decision' && (
                          <div className={`flex items-center gap-2 ${predictions[fight.id]?.decisionType ? 'text-bull-yellow' : 'text-bull-light-gray'}`}>
                            <span>{predictions[fight.id]?.decisionType ? '✓' : '○'}</span>
                            <span>Decision Type Selected</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Stake Button */}
                <motion.button
                  className={`w-full py-3 sm:py-4 rounded-bull font-bold text-sm transition-all duration-300 ${
                    isIndividualFightComplete(fight)
                      ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-bull-white'
                      : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                  }`}
                  onClick={() => handleStakeIndividualFight(fight)}
                  disabled={!isIndividualFightComplete(fight)}
                  whileHover={isIndividualFightComplete(fight) ? { scale: 1.02 } : {}}
                  whileTap={isIndividualFightComplete(fight) ? { scale: 0.98 } : {}}
                >
                  {isIndividualFightComplete(fight) ? 'STAKE FIGHT PREDICTION' : 'COMPLETE ALL PREDICTION STEPS'}
                </motion.button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {eventsToShow.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-3xl sm:text-4xl mb-4">🥊</div>
          <h3 className="text-lg sm:text-xl font-bold text-bull-white mb-2">
            No {cardType === 'event' ? 'Fighting Events' : 'Individual Fights'} Available
          </h3>
          <p className="text-bull-light-gray text-sm sm:text-base">
            No {cardType === 'event' ? 'events' : 'fights'} available for the selected filters
          </p>
        </div>
      )}
    </div>
  );
};

export default FightingCard;