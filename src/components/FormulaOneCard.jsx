import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiInfo, FiChevronDown, FiCalendar} = FiIcons;

// Expanded Racing Sports data with multiple categories
const racingData = {
  'formula1': {
    name: 'Formula 1',
    races: [
      {
        id: 1,
        race: 'Monaco Grand Prix',
        date: '2024-05-26',
        circuit: 'Circuit de Monaco',
        drivers: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Lando Norris', 'George Russell', 'Carlos Sainz', 'Sergio Perez', 'Fernando Alonso']
      },
      {
        id: 2,
        race: 'British Grand Prix',
        date: '2024-07-07',
        circuit: 'Silverstone Circuit',
        drivers: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Lando Norris', 'George Russell', 'Carlos Sainz', 'Oscar Piastri', 'Fernando Alonso']
      }
    ]
  },
  'motogp': {
    name: 'MotoGP',
    races: [
      {
        id: 11,
        race: 'Italian Grand Prix',
        date: '2024-06-02',
        circuit: 'Mugello Circuit',
        drivers: ['Francesco Bagnaia', 'Jorge Martin', 'Marco Bezzecchi', 'Brad Binder', 'Jack Miller', 'Maverick Viñales', 'Aleix Espargaro', 'Johann Zarco']
      },
      {
        id: 12,
        race: 'Spanish Grand Prix',
        date: '2024-05-05',
        circuit: 'Jerez Circuit',
        drivers: ['Francesco Bagnaia', 'Jorge Martin', 'Pedro Acosta', 'Enea Bastianini', 'Marc Marquez', 'Maverick Viñales', 'Brad Binder', 'Fabio Quartararo']
      }
    ]
  },
  'indycar': {
    name: 'IndyCar',
    races: [
      {
        id: 21,
        race: 'Indianapolis 500',
        date: '2024-05-26',
        circuit: 'Indianapolis Motor Speedway',
        drivers: ['Alex Palou', 'Scott Dixon', 'Josef Newgarden', 'Pato O\'Ward', 'Marcus Ericsson', 'Colton Herta', 'Will Power', 'Scott McLaughlin']
      },
      {
        id: 22,
        race: 'Long Beach Grand Prix',
        date: '2024-04-21',
        circuit: 'Streets of Long Beach',
        drivers: ['Alex Palou', 'Josef Newgarden', 'Pato O\'Ward', 'Scott Dixon', 'Colton Herta', 'Alexander Rossi', 'Marcus Ericsson', 'Will Power']
      }
    ]
  },
  'rally': {
    name: 'WRC Rally',
    races: [
      {
        id: 31,
        race: 'Rally Monte Carlo',
        date: '2024-01-25',
        circuit: 'Monte Carlo, Monaco',
        drivers: ['Sébastien Ogier', 'Kalle Rovanperä', 'Thierry Neuville', 'Ott Tänak', 'Elfyn Evans', 'Esapekka Lappi', 'Takamoto Katsuta', 'Adrien Fourmaux']
      },
      {
        id: 32,
        race: 'Rally Sweden',
        date: '2024-02-15',
        circuit: 'Umeå, Sweden',
        drivers: ['Kalle Rovanperä', 'Thierry Neuville', 'Ott Tänak', 'Sébastien Ogier', 'Elfyn Evans', 'Esapekka Lappi', 'Takamoto Katsuta', 'Pierre-Louis Loubet']
      }
    ]
  },
  'nascar': {
    name: 'NASCAR Cup Series',
    races: [
      {
        id: 41,
        race: 'Daytona 500',
        date: '2024-02-18',
        circuit: 'Daytona International Speedway',
        drivers: ['Kyle Larson', 'Chase Elliott', 'Ryan Blaney', 'William Byron', 'Denny Hamlin', 'Christopher Bell', 'Tyler Reddick', 'Ross Chastain']
      },
      {
        id: 42,
        race: 'Coca-Cola 600',
        date: '2024-05-26',
        circuit: 'Charlotte Motor Speedway',
        drivers: ['Kyle Larson', 'Chase Elliott', 'Ryan Blaney', 'Denny Hamlin', 'William Byron', 'Christopher Bell', 'Martin Truex Jr.', 'Kevin Harvick']
      }
    ]
  }
};

const RacingSportsCard = ({onStake}) => {
  const [selectedCategory, setSelectedCategory] = useState('formula1');
  const [selectedRace, setSelectedRace] = useState('all');
  const [predictions, setPredictions] = useState({});
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isRaceDropdownOpen, setIsRaceDropdownOpen] = useState(false);

  const categories = [
    {key: 'formula1', name: 'Formula 1', emoji: '🏎️'},
    {key: 'motogp', name: 'MotoGP', emoji: '🏍️'},
    {key: 'indycar', name: 'IndyCar', emoji: '🏁'},
    {key: 'rally', name: 'WRC Rally', emoji: '🚗'},
    {key: 'nascar', name: 'NASCAR', emoji: '🏆'}
  ];

  const getAvailableRaces = () => {
    const races = [{key: 'all', name: 'All Races'}];
    const categoryData = racingData[selectedCategory];
    if (categoryData) {
      categoryData.races.forEach(race => {
        races.push({
          key: race.id.toString(),
          name: race.race,
          race: race
        });
      });
    }
    return races;
  };

  const getRacesToShow = () => {
    const categoryData = racingData[selectedCategory];
    if (!categoryData) return [];

    if (selectedRace === 'all') {
      return categoryData.races;
    } else {
      const race = categoryData.races.find(r => r.id.toString() === selectedRace);
      return race ? [race] : [];
    }
  };

  const handlePrediction = (raceId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [raceId]: prediction
    }));
  };

  const handleStake = (race) => {
    const prediction = predictions[race.id];
    if (prediction) {
      onStake({
        type: 'racing-sports',
        category: racingData[selectedCategory].name,
        race: race,
        prediction: prediction,
        sport: 'Racing Sports'
      });
    }
  };

  const racesToShow = getRacesToShow();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Compact Instructions */}
      <motion.div 
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-3 sm:p-4 shadow-bull"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <SafeIcon icon={FiInfo} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-xs sm:text-sm font-bold text-bull-white mb-1">
              Racing Sports Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              Select racing category, choose race winner from top drivers to stake your prediction.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Category and Race Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Category Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.99}}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <span className="text-lg sm:text-xl">
                {categories.find(c => c.key === selectedCategory)?.emoji || '🏎️'}
              </span>
              <span className="font-medium text-xs sm:text-sm truncate">
                {categories.find(c => c.key === selectedCategory)?.name || 'Formula 1'}
              </span>
            </div>
            <motion.div
              animate={{rotate: isCategoryDropdownOpen ? 180 : 0}}
              transition={{duration: 0.2}}
              className="flex-shrink-0"
            >
              <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isCategoryDropdownOpen && (
            <motion.div
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 overflow-hidden"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.key}
                  className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0 flex items-center gap-3"
                  onClick={() => {
                    setSelectedCategory(category.key);
                    setSelectedRace('all');
                    setIsCategoryDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{backgroundColor: '#2A3132'}}
                >
                  <span className="text-lg">{category.emoji}</span>
                  <div className="font-medium text-white text-xs sm:text-sm">{category.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Race Selector */}
        <div className="relative">
          <motion.button
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
            onClick={() => setIsRaceDropdownOpen(!isRaceDropdownOpen)}
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.99}}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <SafeIcon icon={FiCalendar} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-orange flex-shrink-0" />
              <span className="font-medium text-xs sm:text-sm truncate">
                {getAvailableRaces().find(r => r.key === selectedRace)?.name || 'All Races'}
              </span>
            </div>
            <motion.div
              animate={{rotate: isRaceDropdownOpen ? 180 : 0}}
              transition={{duration: 0.2}}
              className="flex-shrink-0"
            >
              <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
            </motion.div>
          </motion.button>

          {isRaceDropdownOpen && (
            <motion.div
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-48 sm:max-h-60 overflow-y-auto"
            >
              {getAvailableRaces().map((race) => (
                <motion.button
                  key={race.key}
                  className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                  onClick={() => {
                    setSelectedRace(race.key);
                    setIsRaceDropdownOpen(false);
                    setPredictions({});
                  }}
                  whileHover={{backgroundColor: '#2A3132'}}
                >
                  <div className="font-medium text-white text-xs sm:text-sm">{race.name}</div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Race Cards */}
      <div className="space-y-4 sm:space-y-6">
        {racesToShow.map((race, index) => (
          <motion.div
            key={race.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1}}
            className="bg-bull-charcoal rounded-bull p-3 sm:p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
            whileHover={{scale: 1.01}}
          >
            {/* Race Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl sm:text-2xl">
                  {categories.find(c => c.key === selectedCategory)?.emoji}
                </span>
                <h3 className="font-heading font-bold text-bull-red text-base sm:text-xl uppercase tracking-wide">
                  {race.race}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-bull-light-gray">
                <span>{race.date}</span>
                <span>{race.circuit}</span>
              </div>
              <div className="text-bull-yellow text-xs sm:text-sm mt-1">
                {racingData[selectedCategory].name}
              </div>
            </div>

            {/* Driver Selection */}
            <div className="mb-4 sm:mb-6">
              <div className="text-center mb-3 text-bull-light-gray">
                <span className="font-bold text-sm">Race Winner</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {race.drivers.map((driver) => {
                  const isSelected = predictions[race.id] === driver;
                  return (
                    <motion.button
                      key={driver}
                      className={`p-2 sm:p-3 rounded-bull border transition-all duration-300 text-left ${
                        isSelected
                          ? 'border-bull-red bg-bull-red/20 text-bull-red'
                          : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                      }`}
                      onClick={() => handlePrediction(race.id, driver)}
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                    >
                      <div className="font-bold text-xs sm:text-sm">{driver}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Stake Button */}
            <motion.button
              className={`w-full py-2.5 sm:py-3 rounded-bull font-bold text-xs sm:text-sm transition-all duration-300 ${
                predictions[race.id]
                  ? 'bg-gradient-to-r from-bull-red to-bull-red-light hover:from-bull-red-light hover:to-bull-red text-white'
                  : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
              }`}
              onClick={() => handleStake(race)}
              disabled={!predictions[race.id]}
              whileHover={predictions[race.id] ? {scale: 1.02} : {}}
              whileTap={predictions[race.id] ? {scale: 0.98} : {}}
            >
              {predictions[race.id] ? 'STAKE PREDICTION' : 'SELECT DRIVER FIRST'}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {racesToShow.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-3xl sm:text-4xl mb-4">🏁</div>
          <h3 className="text-lg sm:text-xl font-bold text-bull-white mb-2">No Races Available</h3>
          <p className="text-bull-light-gray text-sm sm:text-base">
            No races available for the selected category
          </p>
        </div>
      )}
    </div>
  );
};

export default RacingSportsCard;