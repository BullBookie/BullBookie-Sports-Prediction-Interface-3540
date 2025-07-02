import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo, FiChevronDown, FiCalendar, FiMapPin, FiClock } = FiIcons;

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
        significance: 'Winner becomes undisputed heavyweight champion with all four major belts.',
        highlights: [
          'First undisputed champion since Lennox Lewis',
          'Combined 67 knockouts between both fighters',
          'Highest grossing heavyweight fight in 5 years'
        ],
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
      },
      {
        id: 2,
        title: 'Golden Boy Championship Series',
        date: '2024-05-15',
        time: '20:00 EST',
        venue: 'T-Mobile Arena, Las Vegas',
        description: 'Elite boxing showcase featuring rising stars and established champions across multiple weight classes.',
        significance: 'Major stepping stone fights for title contenders and ranked prospects.',
        highlights: [
          'Three world title fights on one card',
          'Olympic gold medalists featured',
          'Potential fight of the year candidates'
        ],
        fights: [
          {
            id: 10,
            fighterA: 'Ryan Garcia',
            fighterB: 'Devin Haney',
            weightClass: 'Lightweight',
            title: 'WBC Lightweight Championship',
            scheduledRounds: 12
          },
          {
            id: 11,
            fighterA: 'Jaron Ennis',
            fighterB: 'Vergil Ortiz Jr.',
            weightClass: 'Welterweight',
            title: 'IBF Welterweight Championship',
            scheduledRounds: 12
          },
          {
            id: 12,
            fighterA: 'David Morrell',
            fighterB: 'David Benavidez',
            weightClass: 'Super Middleweight',
            title: 'WBA Title Eliminator',
            scheduledRounds: 10
          },
          {
            id: 13,
            fighterA: 'Keyshawn Davis',
            fighterB: 'Isaac Cruz',
            weightClass: 'Lightweight',
            title: 'WBA Title Eliminator',
            scheduledRounds: 10
          },
          {
            id: 14,
            fighterA: 'Boots Ennis',
            fighterB: 'Conor Benn',
            weightClass: 'Welterweight',
            title: 'Title Eliminator',
            scheduledRounds: 10
          },
          {
            id: 15,
            fighterA: 'Rolando Romero',
            fighterB: 'Gervonta Davis',
            weightClass: 'Super Lightweight',
            title: 'WBA Championship',
            scheduledRounds: 12
          },
          {
            id: 16,
            fighterA: 'Jaime Munguia',
            fighterB: 'Sergey Derevyanchenko',
            weightClass: 'Middleweight',
            title: 'Title Fight',
            scheduledRounds: 12
          },
          {
            id: 17,
            fighterA: 'Caleb Plant',
            fighterB: 'Canelo Alvarez',
            weightClass: 'Super Middleweight',
            title: 'Unification',
            scheduledRounds: 12
          },
          {
            id: 18,
            fighterA: 'Jesse Rodriguez',
            fighterB: 'Juan Francisco Estrada',
            weightClass: 'Super Flyweight',
            title: 'WBC Championship',
            scheduledRounds: 12
          }
        ]
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
        significance: 'UFC\'s 300th numbered event with multiple title fights and legend comebacks.',
        highlights: [
          'Jon Jones returns to defend heavyweight title',
          'Three championship fights',
          'Conor McGregor comeback fight'
        ],
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
      },
      {
        id: 4,
        title: 'Bellator Champions Series',
        date: '2024-05-25',
        time: '21:00 EST',
        venue: 'Mohegan Sun Arena, Connecticut',
        description: 'Premier Bellator championship event featuring cross-promotional superfights.',
        significance: 'Major Bellator event with potential UFC crossover implications.',
        highlights: [
          'Former UFC champions featured',
          'Bellator vs ONE Championship fighters',
          'Heavyweight grand prix finale'
        ],
        fights: [
          {
            id: 28,
            fighterA: 'Patricio Freire',
            fighterB: 'AJ McKee',
            weightClass: 'Featherweight',
            title: 'Bellator Featherweight Championship',
            scheduledRounds: 5
          },
          {
            id: 29,
            fighterA: 'Vadim Nemkov',
            fighterB: 'Corey Anderson',
            weightClass: 'Light Heavyweight',
            title: 'Bellator Light Heavyweight Championship',
            scheduledRounds: 5
          },
          {
            id: 30,
            fighterA: 'Yaroslav Amosov',
            fighterB: 'Logan Storley',
            weightClass: 'Welterweight',
            title: 'Bellator Welterweight Championship',
            scheduledRounds: 5
          },
          {
            id: 31,
            fighterA: 'Sergio Pettis',
            fighterB: 'Juan Archuleta',
            weightClass: 'Bantamweight',
            title: 'Bellator Bantamweight Championship',
            scheduledRounds: 5
          },
          {
            id: 32,
            fighterA: 'Cris Cyborg',
            fighterB: 'Cat Zingano',
            weightClass: 'Featherweight',
            title: 'Bellator Women\'s Featherweight Championship',
            scheduledRounds: 5
          },
          {
            id: 33,
            fighterA: 'Raufeon Stots',
            fighterB: 'Danny Sabatello',
            weightClass: 'Bantamweight',
            title: 'Title Eliminator',
            scheduledRounds: 3
          },
          {
            id: 34,
            fighterA: 'Usman Nurmagomedov',
            fighterB: 'Brent Primus',
            weightClass: 'Lightweight',
            title: 'Bellator Lightweight Championship',
            scheduledRounds: 5
          },
          {
            id: 35,
            fighterA: 'Ryan Bader',
            fighterB: 'Linton Vassell',
            weightClass: 'Light Heavyweight',
            title: 'Heavyweight Grand Prix Final',
            scheduledRounds: 3
          },
          {
            id: 36,
            fighterA: 'Liz Carmouche',
            fighterB: 'Juliana Velasquez',
            weightClass: 'Flyweight',
            title: 'Bellator Women\'s Flyweight Championship',
            scheduledRounds: 5
          }
        ]
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
        significance: 'Biggest ONE Championship card of the year with multiple world title fights.',
        highlights: [
          'Rodtang defending Muay Thai title',
          'Kickboxing grand prix finale',
          'Cross-discipline superfights'
        ],
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
      },
      {
        id: 6,
        title: 'K-1 World Grand Prix Finals',
        date: '2024-07-20',
        time: '06:00 EST (Live from Tokyo)',
        venue: 'Saitama Super Arena, Tokyo',
        description: 'The most prestigious kickboxing tournament finale featuring the world\'s elite fighters.',
        significance: 'Historic K-1 tournament that determines the world\'s best kickboxer.',
        highlights: [
          '16-man tournament finale',
          'Multiple weight class grand prix',
          'Legendary K-1 venue return'
        ],
        fights: [
          {
            id: 46,
            fighterA: 'Takeru Segawa',
            fighterB: 'Tenshin Nasukawa',
            weightClass: 'Featherweight',
            title: 'K-1 World Grand Prix Final',
            scheduledRounds: 3
          },
          {
            id: 47,
            fighterA: 'Masaaki Noiri',
            fighterB: 'Kaew Fairtex',
            weightClass: 'Super Featherweight',
            title: 'K-1 Super Featherweight Championship',
            scheduledRounds: 3
          },
          {
            id: 48,
            fighterA: 'Hiroki Akimoto',
            fighterB: 'Kenta Hayashi',
            weightClass: 'Lightweight',
            title: 'K-1 Lightweight Championship',
            scheduledRounds: 3
          },
          {
            id: 49,
            fighterA: 'Yuta Kubo',
            fighterB: 'Koya Urabe',
            weightClass: 'Super Lightweight',
            title: 'K-1 Super Lightweight Championship',
            scheduledRounds: 3
          },
          {
            id: 50,
            fighterA: 'Yoshiki Takei',
            fighterB: 'Akihiro Kaneko',
            weightClass: 'Welterweight',
            title: 'K-1 Welterweight Championship',
            scheduledRounds: 3
          },
          {
            id: 51,
            fighterA: 'Hideaki Yamazaki',
            fighterB: 'Sina Karimian',
            weightClass: 'Super Welterweight',
            title: 'K-1 Super Welterweight Championship',
            scheduledRounds: 3
          },
          {
            id: 52,
            fighterA: 'Kouzi',
            fighterB: 'Anderson Silva',
            weightClass: 'Middleweight',
            title: 'K-1 Middleweight Championship',
            scheduledRounds: 3
          },
          {
            id: 53,
            fighterA: 'Taito Gunji',
            fighterB: 'Hirotaka Urabe',
            weightClass: 'Super Middleweight',
            title: 'K-1 Super Middleweight Championship',
            scheduledRounds: 3
          },
          {
            id: 54,
            fighterA: 'Ryo Aitaka',
            fighterB: 'Yuki Egawa',
            weightClass: 'Light Heavyweight',
            title: 'K-1 Light Heavyweight Championship',
            scheduledRounds: 3
          }
        ]
      }
    ]
  }
};

const FightingCard = ({ onStake }) => {
  const [selectedSport, setSelectedSport] = useState('boxing');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [cardType, setCardType] = useState('event');
  const [predictions, setPredictions] = useState({});
  const [isSportDropdownOpen, setIsSportDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const sports = [
    { key: 'boxing', name: 'Boxing' },
    { key: 'mma', name: 'MMA (UFC, Bellator, etc)' },
    { key: 'kickboxing', name: 'Kickboxing/Muay Thai (ONE, K-1, etc)' }
  ];

  // Get discipline-specific methods and rounds
  const getDisciplineMethods = (sport) => {
    switch (sport) {
      case 'boxing':
        return ['KO/TKO', 'Decision'];
      case 'mma':
        return ['KO/TKO', 'Submission', 'Decision'];
      case 'kickboxing':
        return ['KO/TKO', 'Decision'];
      default:
        return ['KO/TKO', 'Decision'];
    }
  };

  const getDisciplineRounds = (fight, sport) => {
    const scheduledRounds = fight.scheduledRounds || 3;
    const rounds = [];
    for (let i = 1; i <= scheduledRounds; i++) {
      rounds.push(i);
    }
    return rounds;
  };

  const getDisciplineDecisionTypes = (sport) => {
    switch (sport) {
      case 'boxing':
        return ['Unanimous Decision', 'Split Decision', 'Majority Decision'];
      case 'mma':
        return ['Unanimous Decision', 'Split Decision', 'Majority Decision'];
      case 'kickboxing':
        return ['Unanimous Decision', 'Split Decision', 'Majority Decision'];
      default:
        return ['Unanimous Decision', 'Split Decision'];
    }
  };

  const getAvailableEvents = () => {
    const events = [{ key: 'all', name: 'All Events' }];
    const sportData = fightingData[selectedSport];
    if (sportData) {
      sportData.events.forEach(event => {
        events.push({
          key: event.id.toString(),
          name: event.title,
          event: event
        });
      });
    }
    return events;
  };

  const getEventsToShow = () => {
    const sportData = fightingData[selectedSport];
    if (!sportData) return [];

    if (selectedEvent === 'all') {
      return sportData.events;
    } else {
      const event = sportData.events.find(e => e.id.toString() === selectedEvent);
      return event ? [event] : [];
    }
  };

  const handlePrediction = (fightId, field, value) => {
    setPredictions(prev => ({
      ...prev,
      [fightId]: {
        ...prev[fightId],
        [field]: value
      }
    }));
  };

  const handleStakeFight = (fight, event) => {
    const prediction = predictions[fight.id];
    if (prediction?.fighter) {
      onStake({
        type: 'fighting-single',
        fight: fight,
        event: event,
        prediction: prediction,
        sport: 'Fighting'
      });
    }
  };

  const handleStakeEvent = (event) => {
    const eventPredictions = {};
    let allPredicted = true;

    event.fights.forEach(fight => {
      const prediction = predictions[fight.id];
      if (cardType === 'event') {
        // Event mode: only fighter and method required
        if (prediction?.fighter && prediction?.method) {
          eventPredictions[fight.id] = prediction;
        } else {
          allPredicted = false;
        }
      } else {
        // Fight mode: all fields required
        if (prediction?.fighter && prediction?.method && 
            (prediction.method === 'Decision' ? prediction.decisionType : prediction.round)) {
          eventPredictions[fight.id] = prediction;
        } else {
          allPredicted = false;
        }
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

  const isEventComplete = (event) => {
    return event.fights.every(fight => {
      const prediction = predictions[fight.id];
      if (cardType === 'event') {
        return prediction?.fighter && prediction?.method;
      } else {
        return prediction?.fighter && prediction?.method && 
               (prediction.method === 'Decision' ? prediction.decisionType : prediction.round);
      }
    });
  };

  const isFightComplete = (fightId) => {
    const prediction = predictions[fightId];
    return prediction?.fighter && prediction?.method && 
           (prediction.method === 'Decision' ? prediction.decisionType : prediction.round);
  };

  const eventsToShow = getEventsToShow();

  return (
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
              How to Submit Fighting Predictions
            </h3>
            <div className="space-y-2 text-bull-light-gray">
              <p>• <strong className="text-bull-white">Choose Sport & Mode:</strong> Select boxing, MMA, or kickboxing, then choose event or individual fight predictions</p>
              <p>• <strong className="text-bull-white">Event Mode:</strong> Predict winner and method for all 9 fights to stake the entire event</p>
              <p>• <strong className="text-bull-white">Fight Mode:</strong> Complete winner, method, and round/decision details for individual fight stakes</p>
              <p>• <strong className="text-bull-white">Discipline-Specific:</strong> Boxing (10-12 rounds, no submissions), MMA (3-5 rounds, submissions), Kickboxing (3 rounds, no submissions)</p>
              <p>• <strong className="text-bull-yellow">Stake BBWIN:</strong> Individual fight stakes or complete event predictions to submit</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Sport Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull min-h-[4rem]"
            onClick={() => setIsSportDropdownOpen(!isSportDropdownOpen)}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <SafeIcon icon={FiCalendar} className="w-6 h-6 text-bull-red flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="font-bold text-base truncate">
                  {sports.find(s => s.key === selectedSport)?.name || 'Boxing'}
                </div>
                <div className="text-bull-light-gray text-sm">Fighting Sport</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isSportDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-2"
            >
              <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isSportDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
            >
              {sports.map((sport) => (
                <motion.button
                  key={sport.key}
                  className="w-full px-6 py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedSport(sport.key);
                    setSelectedEvent('all');
                    setIsSportDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-bold text-white">{sport.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Event Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-gradient-to-r from-bull-gray to-bull-charcoal border-2 border-bull-light-gray rounded-bull px-6 py-4 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300 shadow-bull min-h-[4rem]"
            onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <SafeIcon icon={FiCalendar} className="w-6 h-6 text-bull-red flex-shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="font-bold text-base truncate">
                  {getAvailableEvents().find(e => e.key === selectedEvent)?.name || 'All Events'}
                </div>
                <div className="text-bull-light-gray text-sm">Event</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isEventDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-2"
            >
              <SafeIcon icon={FiChevronDown} className="w-5 h-5 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isEventDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-gray border-2 border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-60 overflow-y-auto"
            >
              {getAvailableEvents().map((event) => (
                <motion.button
                  key={event.key}
                  className="w-full px-6 py-4 text-left hover:bg-bull-charcoal transition-colors border-b border-bull-charcoal last:border-b-0"
                  onClick={() => {
                    setSelectedEvent(event.key);
                    setIsEventDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{ backgroundColor: '#212121' }}
                >
                  <div className="font-bold text-white">{event.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Mode Selector */}
        <div className="flex bg-gradient-to-r from-bull-charcoal to-bull-gray rounded-bull p-2 border border-bull-light-gray shadow-bull">
          <motion.button
            className={`flex-1 py-3 px-4 rounded-bull font-bold text-sm transition-all duration-300 ${
              cardType === 'event'
                ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-white shadow-bull-lg'
                : 'text-bull-light-gray hover:text-white hover:bg-bull-gray'
            }`}
            onClick={() => setCardType('event')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Event Predictions
          </motion.button>
          <motion.button
            className={`flex-1 py-3 px-4 rounded-bull font-bold text-sm transition-all duration-300 ${
              cardType === 'fight'
                ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-white shadow-bull-lg'
                : 'text-bull-light-gray hover:text-white hover:bg-bull-gray'
            }`}
            onClick={() => setCardType('fight')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Fight Predictions
          </motion.button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="space-y-10">
        {eventsToShow.map((event, eventIndex) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: eventIndex * 0.1 }}
            className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
            whileHover={{ scale: 1.005, boxShadow: '0 20px 40px -12px rgba(212,9,52,0.25)' }}
          >
            {/* Sticky Event Stake Button (Event Mode Only) */}
            {cardType === 'event' && (
              <motion.button
                className={`w-full py-4 rounded-bull font-bold text-lg mb-8 transition-all duration-300 shadow-bull sticky top-4 z-10 ${
                  isEventComplete(event)
                    ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white'
                    : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => handleStakeEvent(event)}
                disabled={!isEventComplete(event)}
                whileHover={isEventComplete(event) ? { scale: 1.02, boxShadow: '0 8px 25px -8px rgba(212,9,52,0.4)' } : {}}
                whileTap={isEventComplete(event) ? { scale: 0.98 } : {}}
              >
                {isEventComplete(event) 
                  ? 'STAKE EVENT PREDICTION' 
                  : `COMPLETE ALL 9 FIGHTS (${9 - event.fights.filter(f => {
                      const pred = predictions[f.id];
                      return pred?.fighter && pred?.method;
                    }).length} LEFT)`
                }
              </motion.button>
            )}

            {/* Event Header */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-bull-red text-3xl mb-4">
                {event.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-bull-yellow" />
                  <span className="text-bull-white font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-bull-yellow" />
                  <span className="text-bull-white font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-bull-yellow" />
                  <span className="text-bull-white font-medium">{event.venue}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-bull-light-gray text-lg">{event.description}</p>
                
                <div className="bg-bull-charcoal rounded-bull p-4">
                  <h4 className="font-bold text-bull-yellow mb-2">Event Significance:</h4>
                  <p className="text-bull-white">{event.significance}</p>
                </div>

                <div className="bg-bull-charcoal rounded-bull p-4">
                  <h4 className="font-bold text-bull-yellow mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-bull-white">
                        <span className="text-bull-red font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fights Grid - 3x3 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {event.fights.map((fight, fightIndex) => (
                <motion.div
                  key={fight.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: fightIndex * 0.05 }}
                  className="bg-bull-charcoal rounded-bull p-6 border-2 border-bull-gray hover:border-bull-red/30 transition-all duration-300 shadow-bull"
                >
                  {/* Fight Image Placeholder */}
                  <div className="w-full aspect-square bg-bull-gray rounded-bull mb-4 flex items-center justify-center border border-bull-light-gray">
                    <span className="text-bull-light-gray text-lg font-bold">VS</span>
                  </div>

                  {/* Fight Details */}
                  <div className="mb-4">
                    <h4 className="font-bold text-bull-white text-sm mb-1 truncate">
                      {fight.title}
                    </h4>
                    <div className="text-bull-light-gray text-xs mb-2">
                      {fight.weightClass} • {fight.scheduledRounds} Rounds
                    </div>
                    <div className="text-center text-bull-white font-bold text-sm">
                      {fight.fighterA} <span className="text-bull-light-gray">vs</span> {fight.fighterB}
                    </div>
                  </div>

                  {/* Winner Selection */}
                  <div className="mb-4">
                    <label className="block text-bull-light-gray text-xs font-medium mb-2">Winner</label>
                    <div className="space-y-2">
                      {[fight.fighterA, fight.fighterB, 'Draw/Cancelled/No Contest'].map((option) => (
                        <motion.button
                          key={option}
                          className={`w-full p-2 rounded text-xs font-medium transition-all duration-300 ${
                            predictions[fight.id]?.fighter === option
                              ? option === 'Draw/Cancelled/No Contest'
                                ? 'border border-bull-yellow bg-bull-yellow/20 text-bull-yellow'
                                : 'border border-bull-red bg-bull-red/20 text-bull-red'
                              : 'border border-bull-light-gray text-bull-light-gray hover:border-bull-red hover:text-bull-red hover:bg-bull-red/10'
                          }`}
                          onClick={() => handlePrediction(fight.id, 'fighter', option)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {option === 'Draw/Cancelled/No Contest' ? 'Draw/Cancel/NC' : option}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Method Selection */}
                  <div className="mb-4">
                    <label className="block text-bull-light-gray text-xs font-medium mb-2">Method</label>
                    <select
                      className="w-full bg-bull-gray border border-bull-light-gray rounded px-2 py-2 text-white text-xs focus:border-bull-red focus:outline-none"
                      value={predictions[fight.id]?.method || ''}
                      onChange={(e) => handlePrediction(fight.id, 'method', e.target.value)}
                    >
                      <option value="">Select Method</option>
                      {getDisciplineMethods(selectedSport).map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>

                  {/* Round/Decision Selection (Fight Mode Only) */}
                  {cardType === 'fight' && (
                    <>
                      {predictions[fight.id]?.method && predictions[fight.id]?.method !== 'Decision' && (
                        <div className="mb-4">
                          <label className="block text-bull-light-gray text-xs font-medium mb-2">Round</label>
                          <select
                            className="w-full bg-bull-gray border border-bull-light-gray rounded px-2 py-2 text-white text-xs focus:border-bull-red focus:outline-none"
                            value={predictions[fight.id]?.round || ''}
                            onChange={(e) => handlePrediction(fight.id, 'round', e.target.value)}
                          >
                            <option value="">Select Round</option>
                            {getDisciplineRounds(fight, selectedSport).map(round => (
                              <option key={round} value={round}>Round {round}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {predictions[fight.id]?.method === 'Decision' && (
                        <div className="mb-4">
                          <label className="block text-bull-light-gray text-xs font-medium mb-2">Decision Type</label>
                          <select
                            className="w-full bg-bull-gray border border-bull-light-gray rounded px-2 py-2 text-white text-xs focus:border-bull-red focus:outline-none"
                            value={predictions[fight.id]?.decisionType || ''}
                            onChange={(e) => handlePrediction(fight.id, 'decisionType', e.target.value)}
                          >
                            <option value="">Select Decision Type</option>
                            {getDisciplineDecisionTypes(selectedSport).map(decisionType => (
                              <option key={decisionType} value={decisionType}>{decisionType}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </>
                  )}

                  {/* Individual Fight Stake Button (Fight Mode Only) */}
                  {cardType === 'fight' && (
                    <motion.button
                      className={`w-full py-3 rounded font-bold text-xs transition-all duration-300 shadow-bull ${
                        isFightComplete(fight.id)
                          ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white'
                          : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                      }`}
                      onClick={() => handleStakeFight(fight, event)}
                      disabled={!isFightComplete(fight.id)}
                      whileHover={isFightComplete(fight.id) ? { scale: 1.02, boxShadow: '0 4px 12px -4px rgba(212,9,52,0.4)' } : {}}
                      whileTap={isFightComplete(fight.id) ? { scale: 0.98 } : {}}
                    >
                      {isFightComplete(fight.id) ? 'STAKE PREDICTION' : 'COMPLETE PREDICTION'}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {eventsToShow.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🥊</div>
          <h3 className="text-2xl font-bold text-bull-white mb-2">No Fighting Events Available</h3>
          <p className="text-bull-light-gray text-lg">No events available for the selected filters</p>
        </div>
      )}
    </div>
  );
};

export default FightingCard;