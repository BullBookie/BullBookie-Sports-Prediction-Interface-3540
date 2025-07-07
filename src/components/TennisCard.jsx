import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo, FiChevronDown, FiCalendar, FiUser, FiTrophy, FiCheck, FiTarget, FiClock, FiUsers, FiFilter, FiAlertTriangle, FiX } = FiIcons;

// Enhanced Tennis data with comprehensive tournament structure
const tennisData = {
  matches: [
    {
      id: 1,
      playerA: {
        name: 'Novak Djokovic',
        country: 'SRB',
        ranking: 1,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=face'
      },
      playerB: {
        name: 'Carlos Alcaraz',
        country: 'ESP',
        ranking: 2,
        image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=400&h=400&fit=crop&crop=face'
      },
      tournament: 'Wimbledon Final',
      date: '2024-07-14',
      time: '15:00',
      surface: 'Grass',
      category: 'Men\'s Singles'
    },
    {
      id: 2,
      playerA: {
        name: 'Iga Swiatek',
        country: 'POL',
        ranking: 1,
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face'
      },
      playerB: {
        name: 'Aryna Sabalenka',
        country: 'BLR',
        ranking: 2,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face'
      },
      tournament: 'French Open Final',
      date: '2024-06-08',
      time: '15:00',
      surface: 'Clay',
      category: 'Women\'s Singles'
    },
    {
      id: 3,
      playerA: {
        name: 'Jannik Sinner',
        country: 'ITA',
        ranking: 4,
        image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=400&h=400&fit=crop&crop=face'
      },
      playerB: {
        name: 'Daniil Medvedev',
        country: 'RUS',
        ranking: 3,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
      },
      tournament: 'US Open Semi-Final',
      date: '2024-09-06',
      time: '19:00',
      surface: 'Hard',
      category: 'Men\'s Singles'
    },
    {
      id: 4,
      playerA: {
        name: 'Coco Gauff',
        country: 'USA',
        ranking: 3,
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face'
      },
      playerB: {
        name: 'Jessica Pegula',
        country: 'USA',
        ranking: 4,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face'
      },
      tournament: 'US Open Women\'s Final',
      date: '2024-09-07',
      time: '16:00',
      surface: 'Hard',
      category: 'Women\'s Singles'
    }
  ],
  tournaments: [
    {
      id: 101,
      name: 'Wimbledon Championships',
      date: '2024-07-01 - 2024-07-14',
      surface: 'Grass',
      location: 'London, England',
      categories: ['Men\'s Singles', 'Women\'s Singles'],
      players: {
        'Men\'s Singles': [
          'Novak Djokovic', 'Carlos Alcaraz', 'Daniil Medvedev', 'Jannik Sinner',
          'Alexander Zverev', 'Taylor Fritz', 'Stefanos Tsitsipas', 'Casper Ruud',
          'Andrey Rublev', 'Grigor Dimitrov', 'Tommy Paul', 'Ben Shelton',
          'Holger Rune', 'Felix Auger-Aliassime', 'Lorenzo Musetti', 'Sebastian Korda'
        ],
        'Women\'s Singles': [
          'Iga Swiatek', 'Aryna Sabalenka', 'Coco Gauff', 'Elena Rybakina',
          'Ons Jabeur', 'Jessica Pegula', 'Qinwen Zheng', 'Emma Navarro',
          'Barbora Krejcikova', 'Danielle Collins', 'Daria Kasatkina', 'Jelena Ostapenko',
          'Madison Keys', 'Liudmila Samsonova', 'Ekaterina Alexandrova', 'Anastasia Pavlyuchenkova'
        ]
      },
      structure: {
        'Men\'s Singles': {
          winner: null,
          finalist: null,
          semifinalists: [null, null],
          quarterfinalists: [null, null, null, null]
        },
        'Women\'s Singles': {
          winner: null,
          finalist: null,
          semifinalists: [null, null],
          quarterfinalists: [null, null, null, null]
        }
      }
    },
    {
      id: 102,
      name: 'French Open',
      date: '2024-05-26 - 2024-06-09',
      surface: 'Clay',
      location: 'Paris, France',
      categories: ['Men\'s Singles', 'Women\'s Singles'],
      players: {
        'Men\'s Singles': [
          'Rafael Nadal', 'Novak Djokovic', 'Carlos Alcaraz', 'Stefanos Tsitsipas',
          'Daniil Medvedev', 'Alexander Zverev', 'Casper Ruud', 'Andrey Rublev',
          'Lorenzo Musetti', 'Grigor Dimitrov', 'Tommy Paul', 'Holger Rune',
          'Felix Auger-Aliassime', 'Cameron Norrie', 'Alex de Minaur', 'Sebastian Baez'
        ],
        'Women\'s Singles': [
          'Iga Swiatek', 'Coco Gauff', 'Aryna Sabalenka', 'Elena Rybakina',
          'Ons Jabeur', 'Jessica Pegula', 'Marketa Vondrousova', 'Qinwen Zheng',
          'Maria Sakkari', 'Daria Kasatkina', 'Barbora Krejcikova', 'Caroline Garcia',
          'Madison Keys', 'Jelena Ostapenko', 'Liudmila Samsonova', 'Anastasia Pavlyuchenkova'
        ]
      },
      structure: {
        'Men\'s Singles': {
          winner: null,
          finalist: null,
          semifinalists: [null, null],
          quarterfinalists: [null, null, null, null]
        },
        'Women\'s Singles': {
          winner: null,
          finalist: null,
          semifinalists: [null, null],
          quarterfinalists: [null, null, null, null]
        }
      }
    }
  ]
};

const TennisCard = ({ onStake }) => {
  const [predictionMode, setPredictionMode] = useState('match'); // 'match' or 'tournament'
  const [selectedTournament, setSelectedTournament] = useState('all');
  const [selectedMatch, setSelectedMatch] = useState('all');
  const [matchPredictions, setMatchPredictions] = useState({});
  const [tournamentPredictions, setTournamentPredictions] = useState({});
  const [isTournamentDropdownOpen, setIsTournamentDropdownOpen] = useState(false);
  const [isMatchDropdownOpen, setIsMatchDropdownOpen] = useState(false);

  const predictionModes = [
    { key: 'match', label: 'Individual Matches', description: 'Predict single match outcomes' },
    { key: 'tournament', label: 'Tournament Mode', description: 'Predict tournament structure' }
  ];

  // Match prediction handling with updated format options
  const handleMatchPrediction = (matchId, type, value) => {
    setMatchPredictions(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [type]: value
      }
    }));
  };

  // Enhanced tournament prediction handling for separate gender cards
  const handleTournamentPrediction = (tournamentId, category, stage, position, player) => {
    setTournamentPredictions(prev => ({
      ...prev,
      [tournamentId]: {
        ...prev[tournamentId],
        [category]: {
          ...prev[tournamentId]?.[category],
          [stage]: stage === 'quarterfinalists' || stage === 'semifinalists'
            ? (() => {
                const current = prev[tournamentId]?.[category]?.[stage] || [];
                const newArray = [...current];
                newArray[position] = player;
                return newArray;
              })()
            : player
        }
      }
    }));
  };

  const handleSetScore = (matchId, setNumber, score) => {
    setMatchPredictions(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        sets: {
          ...prev[matchId]?.sets,
          [setNumber]: score
        }
      }
    }));
  };

  const handleSetWinner = (matchId, setNumber, winner) => {
    setMatchPredictions(prev => {
      const currentSets = prev[matchId]?.sets || {};
      const newSets = { ...currentSets };
      delete newSets[setNumber];

      return {
        ...prev,
        [matchId]: {
          ...prev[matchId],
          setWinners: {
            ...prev[matchId]?.setWinners,
            [setNumber]: winner
          },
          sets: newSets,
          tiebreaks: {
            ...prev[matchId]?.tiebreaks,
            [setNumber]: false
          }
        }
      };
    });
  };

  const toggleTiebreak = (matchId, setNumber) => {
    setMatchPredictions(prev => {
      const currentSets = prev[matchId]?.sets || {};
      const newSets = { ...currentSets };
      delete newSets[setNumber];

      return {
        ...prev,
        [matchId]: {
          ...prev[matchId],
          tiebreaks: {
            ...prev[matchId]?.tiebreaks,
            [setNumber]: !prev[matchId]?.tiebreaks?.[setNumber]
          },
          sets: newSets
        }
      };
    });
  };

  // Get available tournaments
  const getAvailableTournaments = () => {
    const tournaments = [{ key: 'all', name: 'All Tournaments' }];
    tennisData.tournaments.forEach(tournament => {
      tournaments.push({
        key: tournament.id.toString(),
        name: tournament.name,
        tournament: tournament
      });
    });
    return tournaments;
  };

  // Get available matches
  const getAvailableMatches = () => {
    const matches = [{ key: 'all', name: 'All Matches' }];
    tennisData.matches.forEach(match => {
      matches.push({
        key: match.id.toString(),
        name: `${match.playerA.name} vs ${match.playerB.name}`,
        match: match
      });
    });
    return matches;
  };

  // Get data to show based on mode
  const getDataToShow = () => {
    if (predictionMode === 'tournament') {
      if (selectedTournament === 'all') {
        return tennisData.tournaments;
      } else {
        const tournament = tennisData.tournaments.find(t => t.id.toString() === selectedTournament);
        return tournament ? [tournament] : [];
      }
    } else {
      if (selectedMatch === 'all') {
        return tennisData.matches;
      } else {
        const match = tennisData.matches.find(m => m.id.toString() === selectedMatch);
        return match ? [match] : [];
      }
    }
  };

  // Enhanced format options based on match category
  const getFormatOptions = (match) => {
    if (match.category === 'Men\'s Singles') {
      return [
        { key: '3-out-of-3', label: '3 out of 3 Sets', description: 'Straight sets (3-0)', maxSets: 3, requiredSets: 3 },
        { key: '3-out-of-4', label: '3 out of 4 Sets', description: 'Best of 4 (3-1)', maxSets: 4, requiredSets: 3 },
        { key: '3-out-of-5', label: '3 out of 5 Sets', description: 'Best of 5', maxSets: 5, requiredSets: 3 }
      ];
    } else {
      return [
        { key: '2-out-of-2', label: '2 out of 2 Sets', description: 'Straight sets (2-0)', maxSets: 2, requiredSets: 2 },
        { key: '2-out-of-3', label: '2 out of 3 Sets', description: 'Best of 3', maxSets: 3, requiredSets: 2 }
      ];
    }
  };

  // Get max sets based on format
  const getMaxSets = (format) => {
    const formatMap = {
      '2-out-of-2': 2,
      '2-out-of-3': 3,
      '3-out-of-3': 3,
      '3-out-of-4': 4,
      '3-out-of-5': 5
    };
    return formatMap[format] || 3;
  };

  // Get required sets to win based on format
  const getRequiredSets = (format) => {
    if (format?.startsWith('2-out-of')) return 2;
    if (format?.startsWith('3-out-of')) return 3;
    return 2;
  };

  // Get format label for display
  const getFormatLabel = (format) => {
    const formatLabels = {
      '2-out-of-2': '2-0 (Straight Sets)',
      '2-out-of-3': 'Best of 3',
      '3-out-of-3': '3-0 (Straight Sets)',
      '3-out-of-4': 'Best of 4',
      '3-out-of-5': 'Best of 5'
    };
    return formatLabels[format] || format;
  };

  // Enhanced tournament completion validation for individual gender cards
  const isTournamentCategoryComplete = (tournament, category) => {
    const predictions = tournamentPredictions[tournament.id] || {};
    const categoryPredictions = predictions[category];
    if (!categoryPredictions) return false;

    // Check if all required positions are filled
    const hasWinner = categoryPredictions.winner;
    const hasFinalist = categoryPredictions.finalist;
    const hasSemifinalists = categoryPredictions.semifinalists && 
                           categoryPredictions.semifinalists.length === 2 && 
                           categoryPredictions.semifinalists.every(p => p);
    const hasQuarterfinalists = categoryPredictions.quarterfinalists && 
                               categoryPredictions.quarterfinalists.length === 4 && 
                               categoryPredictions.quarterfinalists.every(p => p);

    return hasWinner && hasFinalist && hasSemifinalists && hasQuarterfinalists;
  };

  // FIXED: Get available players for semifinalists with proper filtering
  const getAvailablePlayersForSemifinalists = (tournament, category, position) => {
    const players = tournament.players[category] || [];
    const categoryPredictions = tournamentPredictions[tournament.id]?.[category] || {};
    
    // Get current value at this position
    const currentValue = categoryPredictions.semifinalists?.[position];
    
    // Players to exclude (already selected in higher positions or other semifinalist positions)
    const excludedPlayers = new Set([
      categoryPredictions.winner,
      categoryPredictions.finalist,
      // Only exclude other semifinalist positions, not the current one
      ...(categoryPredictions.semifinalists || []).filter((player, idx) => idx !== position && player)
    ].filter(Boolean));

    return players.filter(player => !excludedPlayers.has(player));
  };

  // FIXED: Get available players for quarterfinalists with proper filtering
  const getAvailablePlayersForQuarterfinalists = (tournament, category, position) => {
    const players = tournament.players[category] || [];
    const categoryPredictions = tournamentPredictions[tournament.id]?.[category] || {};
    
    // Get current value at this position
    const currentValue = categoryPredictions.quarterfinalists?.[position];
    
    // Players to exclude (already selected in higher positions or other quarterfinalist positions)
    const excludedPlayers = new Set([
      categoryPredictions.winner,
      categoryPredictions.finalist,
      ...(categoryPredictions.semifinalists || []).filter(player => player),
      // Only exclude other quarterfinalist positions, not the current one
      ...(categoryPredictions.quarterfinalists || []).filter((player, idx) => idx !== position && player)
    ].filter(Boolean));

    return players.filter(player => !excludedPlayers.has(player));
  };

  // ENHANCED VALIDATION FUNCTIONS for matches
  const validateMatchPrediction = (matchId, match) => {
    const prediction = matchPredictions[matchId];
    const issues = [];

    if (!prediction?.winner || !prediction?.setsFormat) {
      return { isValid: false, issues: ['Complete match winner and format selection first'] };
    }

    const requiredSets = getRequiredSets(prediction.setsFormat);
    const maxSets = getMaxSets(prediction.setsFormat);
    const setWinners = prediction.setWinners || {};
    const sets = prediction.sets || {};
    const tiebreaks = prediction.tiebreaks || {};

    const completedSets = Object.keys(setWinners).filter(setNum => {
      const hasWinner = setWinners[setNum];
      const isTiebreak = tiebreaks[setNum];
      const hasScore = sets[setNum] || isTiebreak;
      return hasWinner && hasScore;
    });

    const matchWinner = prediction.winner;
    const otherPlayer = matchWinner === match.playerA.name ? match.playerB.name : match.playerA.name;
    let matchWinnerSets = 0;
    let otherPlayerSets = 0;

    completedSets.forEach(setNum => {
      if (setWinners[setNum] === matchWinner) {
        matchWinnerSets++;
      } else {
        otherPlayerSets++;
      }
    });

    // Enhanced validation for different formats
    const totalSetsPlayed = completedSets.length;

    // Check minimum sets completed
    if (totalSetsPlayed < requiredSets) {
      issues.push(`Need at least ${requiredSets} sets completed, only ${totalSetsPlayed} completed`);
    }

    // Check if match winner has required sets
    if (totalSetsPlayed >= requiredSets && matchWinnerSets < requiredSets) {
      issues.push(
        `${matchWinner} is selected as match winner but only wins ${matchWinnerSets} sets. ` +
        `Need ${requiredSets} sets to win (${getFormatLabel(prediction.setsFormat)})`
      );
    }

    // Check for impossible scenarios
    if (totalSetsPlayed > maxSets) {
      issues.push(`Too many sets played (${totalSetsPlayed}). Maximum for ${getFormatLabel(prediction.setsFormat)} is ${maxSets}`);
    }

    // Format-specific validations
    if (prediction.setsFormat === '2-out-of-2' || prediction.setsFormat === '3-out-of-3') {
      // Straight sets - opponent should win 0 sets
      if (otherPlayerSets > 0) {
        issues.push(`${getFormatLabel(prediction.setsFormat)} means straight sets - ${otherPlayer} cannot win any sets`);
      }
    }

    // Check if match should have ended earlier
    if (matchWinnerSets >= requiredSets && totalSetsPlayed > (matchWinnerSets + otherPlayerSets)) {
      issues.push(`Match should have ended when ${matchWinner} reached ${requiredSets} sets`);
    }

    return {
      isValid: issues.length === 0,
      issues: issues,
      setsWon: { [matchWinner]: matchWinnerSets, [otherPlayer]: otherPlayerSets },
      completedSets: totalSetsPlayed,
      requiredSets,
      maxSets
    };
  };

  const isMatchComplete = (matchId) => {
    const validation = validateMatchPrediction(matchId, tennisData.matches.find(m => m.id === matchId));
    return validation.isValid;
  };

  // Get tennis score options
  const getScoreOptionsForWinner = (match, setNumber, setWinner, isTiebreak) => {
    if (isTiebreak) {
      return ['7-0', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '8-6', '9-7', '10-8', '11-9', '12-10'];
    }

    const winningScores = ['6-0', '6-1', '6-2', '6-3', '6-4', '7-5', '7-6'];
    return winningScores;
  };

  const generateSetPredictions = (match, matchId) => {
    const prediction = matchPredictions[matchId];
    if (!prediction?.setsFormat) return null;

    const maxSets = getMaxSets(prediction.setsFormat);
    const requiredSets = getRequiredSets(prediction.setsFormat);

    return (
      <div className="space-y-4">
        {/* Format Information */}
        <div className="bg-bull-charcoal rounded-bull p-3 border border-bull-yellow/30">
          <div className="text-center">
            <h5 className="text-bull-yellow font-bold text-sm mb-1">
              {getFormatLabel(prediction.setsFormat)}
            </h5>
            <p className="text-bull-light-gray text-xs">
              {match.playerA.name} vs {match.playerB.name} • {match.category}
            </p>
            <p className="text-bull-white text-xs mt-1">
              Winner needs {requiredSets} sets • Maximum {maxSets} sets
            </p>
          </div>
        </div>

        {/* Sets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: maxSets }, (_, setIndex) => {
            const setNumber = setIndex + 1;
            const setWinner = prediction?.setWinners?.[setNumber];
            const isTiebreak = prediction?.tiebreaks?.[setNumber];
            const setScore = prediction?.sets?.[setNumber];

            return (
              <motion.div
                key={setNumber}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: setIndex * 0.1 }}
                className="bg-bull-gray rounded-bull p-2 sm:p-3 border border-bull-charcoal hover:border-bull-red/20 transition-all duration-300"
              >
                <div className="text-center mb-2">
                  <span className="inline-flex items-center gap-1 bg-bull-red px-2 py-1 rounded text-white text-xs font-bold">
                    Set {setNumber}
                  </span>
                </div>

                {/* Set Winner Selection */}
                <div className="mb-2">
                  <label className="block text-xs text-bull-light-gray mb-1 font-medium">Winner</label>
                  <div className="grid grid-cols-2 gap-1">
                    {[match.playerA, match.playerB].map((player, playerIndex) => (
                      <motion.button
                        key={playerIndex}
                        className={`p-1 rounded text-xs font-medium transition-all duration-300 ${
                          setWinner === player.name
                            ? 'bg-bull-red text-white border border-bull-red'
                            : 'bg-bull-charcoal text-bull-light-gray hover:bg-bull-light-gray hover:text-white border border-transparent'
                        }`}
                        onClick={() => handleSetWinner(matchId, setNumber, player.name)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {player.name.split(' ')[1] || player.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Tiebreak Toggle */}
                {setWinner && (
                  <div className="mb-2">
                    <motion.button
                      className={`w-full p-1 rounded text-xs font-medium transition-all duration-300 border ${
                        isTiebreak
                          ? 'bg-bull-yellow/20 text-bull-yellow border-bull-yellow'
                          : 'bg-bull-charcoal text-bull-light-gray border-bull-gray hover:border-bull-yellow'
                      }`}
                      onClick={() => toggleTiebreak(matchId, setNumber)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isTiebreak ? 'Tiebreak' : 'Regular'}
                    </motion.button>
                  </div>
                )}

                {/* Score Selection */}
                {setWinner && isTiebreak !== undefined && !isTiebreak && (
                  <div>
                    <select
                      value={setScore || ''}
                      onChange={(e) => handleSetScore(matchId, setNumber, e.target.value)}
                      className="w-full bg-bull-charcoal border border-bull-light-gray rounded px-2 py-1 text-white text-xs focus:border-bull-red focus:outline-none"
                    >
                      <option value="">Score</option>
                      {getScoreOptionsForWinner(match, setNumber, setWinner, false).map(score => (
                        <option key={score} value={score}>{score}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Tiebreak Complete */}
                {setWinner && isTiebreak && (
                  <div className="text-center p-1 bg-bull-yellow/10 rounded border border-bull-yellow/30">
                    <p className="text-bull-yellow text-xs font-medium">7-6</p>
                  </div>
                )}

                {/* Completion Status */}
                <div className="mt-2 text-center">
                  {setWinner && (isTiebreak || setScore) ? (
                    <div className="flex items-center justify-center gap-1 text-bull-yellow">
                      <SafeIcon icon={FiCheck} className="w-3 h-3" />
                      <span className="text-xs">Complete</span>
                    </div>
                  ) : (
                    <div className="text-bull-light-gray text-xs">Incomplete</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Enhanced Validation Status Component
  const ValidationStatus = ({ matchId, match }) => {
    const validation = validateMatchPrediction(matchId, match);

    if (validation.issues.length > 0) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bull-red/10 border border-bull-red/20 rounded-bull p-3 mb-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <SafeIcon icon={FiAlertTriangle} className="w-4 h-4 text-bull-red" />
            <span className="text-bull-red font-bold text-sm">Validation Issues</span>
          </div>
          <div className="space-y-1">
            {validation.issues.map((issue, index) => (
              <div key={index} className="flex items-start gap-2 text-bull-white text-xs">
                <SafeIcon icon={FiX} className="w-3 h-3 text-bull-red flex-shrink-0 mt-0.5" />
                <span>{issue}</span>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    // Show positive validation for completed matches
    if (validation.isValid && validation.completedSets >= validation.requiredSets) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bull-yellow/10 border border-bull-yellow/20 rounded-bull p-3 mb-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <SafeIcon icon={FiCheck} className="w-4 h-4 text-bull-yellow" />
            <span className="text-bull-yellow font-bold text-sm">Prediction Valid</span>
          </div>
          <div className="text-bull-white text-xs">
            Match prediction complete and logically correct for {getFormatLabel(matchPredictions[matchId]?.setsFormat)}
          </div>
        </motion.div>
      );
    }

    return null;
  };

  // Handle staking for individual gender categories
  const handleStakeTournamentCategory = (tournament, category) => {
    if (isTournamentCategoryComplete(tournament, category)) {
      onStake({
        type: 'tennis-tournament',
        tournament: tournament,
        category: category,
        predictions: tournamentPredictions[tournament.id]?.[category],
        sport: 'Tennis'
      });
    }
  };

  const dataToShow = getDataToShow();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Mobile-Responsive Instructions */}
      <motion.div
        className="bg-bull-charcoal border border-bull-red/20 rounded-bull p-3 sm:p-4 shadow-bull"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <SafeIcon icon={FiInfo} className="w-4 h-4 sm:w-5 sm:h-5 text-bull-yellow flex-shrink-0" />
          <div>
            <h3 className="font-heading text-xs sm:text-sm font-bold text-bull-white mb-1">
              Tennis Predictions
            </h3>
            <p className="text-xs text-bull-light-gray">
              {predictionMode === 'match'
                ? 'Select winner, format (men: 3/3, 3/4, 3/5 • women: 2/2, 2/3), then predict sets.'
                : 'Predict winners, finalists, and quarterfinalists for men and women separately.'
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile-First Filters */}
      <div className="space-y-3 sm:space-y-4">
        {/* Prediction Mode Selector */}
        <div className="bg-bull-charcoal rounded-bull p-3 border border-bull-gray">
          <label className="block text-bull-light-gray text-xs sm:text-sm font-medium mb-2">Prediction Mode</label>
          <div className="grid grid-cols-2 gap-2">
            {predictionModes.map((mode) => (
              <motion.button
                key={mode.key}
                className={`p-2 sm:p-3 rounded text-xs font-medium transition-all duration-300 ${
                  predictionMode === mode.key
                    ? 'bg-bull-yellow text-bull-black'
                    : 'bg-bull-gray text-bull-light-gray hover:bg-bull-light-gray hover:text-bull-white'
                }`}
                onClick={() => {
                  setPredictionMode(mode.key);
                  setSelectedTournament('all');
                  setSelectedMatch('all');
                  setMatchPredictions({});
                  setTournamentPredictions({});
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{mode.label}</div>
                <div className="text-xs opacity-70 hidden sm:block">{mode.description}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tournament/Match Selector */}
        {predictionMode === 'tournament' ? (
          <div className="relative">
            <motion.button
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
              onClick={() => setIsTournamentDropdownOpen(!isTournamentDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <SafeIcon icon={FiTrophy} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-yellow flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm truncate">
                  {getAvailableTournaments().find(t => t.key === selectedTournament)?.name || 'All Tournaments'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isTournamentDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isTournamentDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-48 sm:max-h-60 overflow-y-auto"
              >
                {getAvailableTournaments().map((tournament) => (
                  <motion.button
                    key={tournament.key}
                    className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                    onClick={() => {
                      setSelectedTournament(tournament.key);
                      setIsTournamentDropdownOpen(false);
                      setTournamentPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#2A3132' }}
                  >
                    <div className="font-medium text-white text-xs sm:text-sm">{tournament.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          <div className="relative">
            <motion.button
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:border-bull-red transition-all duration-300"
              onClick={() => setIsMatchDropdownOpen(!isMatchDropdownOpen)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <SafeIcon icon={FiTarget} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-red flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm truncate">
                  {getAvailableMatches().find(m => m.key === selectedMatch)?.name || 'All Matches'}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isMatchDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <SafeIcon icon={FiChevronDown} className="w-3 h-3 sm:w-4 sm:h-4 text-bull-light-gray" />
              </motion.div>
            </motion.button>

            {isMatchDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-bull-charcoal border border-bull-light-gray rounded-bull shadow-bull-lg z-50 max-h-48 sm:max-h-60 overflow-y-auto"
              >
                {getAvailableMatches().map((match) => (
                  <motion.button
                    key={match.key}
                    className="w-full px-3 sm:px-4 py-3 text-left hover:bg-bull-gray transition-colors border-b border-bull-gray last:border-b-0"
                    onClick={() => {
                      setSelectedMatch(match.key);
                      setIsMatchDropdownOpen(false);
                      setMatchPredictions({});
                    }}
                    whileHover={{ backgroundColor: '#2A3132' }}
                  >
                    <div className="font-medium text-white text-xs sm:text-sm">{match.name}</div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Render Tournament or Match Cards */}
      <div className="space-y-4 sm:space-y-6">
        {predictionMode === 'tournament' ? (
          // Enhanced Tournament Cards with Separate Gender Cards
          dataToShow.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bull-charcoal rounded-bull p-3 sm:p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Tournament Header */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bull-yellow to-bull-red px-3 py-1 rounded text-bull-black font-bold text-xs mb-2">
                  <SafeIcon icon={FiTrophy} className="w-3 h-3" />
                  Tournament Structure
                </div>
                <h3 className="font-heading font-bold text-bull-yellow text-lg sm:text-xl mb-1">
                  {tournament.name}
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-bull-light-gray text-xs sm:text-sm">
                  <span>{tournament.date}</span>
                  <span>{tournament.surface} • {tournament.location}</span>
                </div>
              </div>

              {/* Separate Gender Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {tournament.categories.map((category) => {
                  const categoryPredictions = tournamentPredictions[tournament.id]?.[category] || {};
                  const players = tournament.players[category] || [];
                  const isComplete = isTournamentCategoryComplete(tournament, category);
                  const genderIcon = category.includes('Men') ? '♂️' : '♀️';
                  const genderColor = category.includes('Men') ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' : 'from-pink-500/20 to-pink-600/20 border-pink-500/30';

                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`bg-gradient-to-br ${genderColor} rounded-bull p-3 sm:p-4 border`}
                    >
                      {/* Category Header */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-xl">{genderIcon}</span>
                          <h4 className="text-bull-white font-bold text-sm sm:text-base">
                            {category}
                          </h4>
                        </div>
                        <div className="text-xs text-bull-light-gray">
                          {players.length} players • 8 positions to predict
                        </div>
                      </div>

                      {/* Mobile-Responsive Tournament Structure Grid */}
                      <div className="space-y-3">
                        {/* Winner */}
                        <div className="bg-bull-charcoal rounded p-2 sm:p-3">
                          <label className="block text-bull-yellow font-bold text-xs sm:text-sm mb-2 text-center">🏆 Champion</label>
                          <select
                            className="w-full bg-bull-dark-black border border-bull-light-gray rounded px-2 sm:px-3 py-2 text-white text-xs sm:text-sm focus:border-bull-yellow focus:outline-none"
                            value={categoryPredictions.winner || ''}
                            onChange={(e) => handleTournamentPrediction(tournament.id, category, 'winner', 0, e.target.value)}
                          >
                            <option value="">Select Champion</option>
                            {players.map(player => (
                              <option key={player} value={player}>{player}</option>
                            ))}
                          </select>
                        </div>

                        {/* Finalist */}
                        <div className="bg-bull-charcoal rounded p-2 sm:p-3">
                          <label className="block text-bull-red font-bold text-xs sm:text-sm mb-2 text-center">🥈 Runner-up</label>
                          <select
                            className="w-full bg-bull-dark-black border border-bull-light-gray rounded px-2 sm:px-3 py-2 text-white text-xs sm:text-sm focus:border-bull-red focus:outline-none"
                            value={categoryPredictions.finalist || ''}
                            onChange={(e) => handleTournamentPrediction(tournament.id, category, 'finalist', 0, e.target.value)}
                          >
                            <option value="">Select Runner-up</option>
                            {players.filter(p => p !== categoryPredictions.winner).map(player => (
                              <option key={player} value={player}>{player}</option>
                            ))}
                          </select>
                        </div>

                        {/* Semifinalists - FIXED */}
                        <div className="bg-bull-charcoal rounded p-2 sm:p-3">
                          <label className="block text-bull-light-gray font-bold text-xs sm:text-sm mb-2 text-center">🥉 Semifinalists</label>
                          <div className="grid grid-cols-1 gap-2">
                            {[0, 1].map((position) => (
                              <select
                                key={position}
                                className="w-full bg-bull-dark-black border border-bull-light-gray rounded px-2 sm:px-3 py-2 text-white text-xs sm:text-sm focus:border-bull-light-gray focus:outline-none"
                                value={categoryPredictions.semifinalists?.[position] || ''}
                                onChange={(e) => handleTournamentPrediction(tournament.id, category, 'semifinalists', position, e.target.value)}
                              >
                                <option value="">Semifinalist {position + 1}</option>
                                {getAvailablePlayersForSemifinalists(tournament, category, position).map(player => (
                                  <option key={player} value={player}>{player}</option>
                                ))}
                              </select>
                            ))}
                          </div>
                        </div>

                        {/* Quarterfinalists - FIXED */}
                        <div className="bg-bull-charcoal rounded p-2 sm:p-3">
                          <label className="block text-bull-light-gray font-bold text-xs sm:text-sm mb-2 text-center">🎯 Quarterfinalists</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[0, 1, 2, 3].map((position) => (
                              <select
                                key={position}
                                className="w-full bg-bull-dark-black border border-bull-light-gray rounded px-2 sm:px-3 py-1.5 sm:py-2 text-white text-xs focus:border-bull-light-gray focus:outline-none"
                                value={categoryPredictions.quarterfinalists?.[position] || ''}
                                onChange={(e) => handleTournamentPrediction(tournament.id, category, 'quarterfinalists', position, e.target.value)}
                              >
                                <option value="">QF {position + 1}</option>
                                {getAvailablePlayersForQuarterfinalists(tournament, category, position).map(player => (
                                  <option key={player} value={player}>{player}</option>
                                ))}
                              </select>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Category Progress */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-bull-light-gray">Progress</span>
                          <span className="text-bull-yellow font-bold">
                            {[
                              categoryPredictions.winner,
                              categoryPredictions.finalist,
                              ...(categoryPredictions.semifinalists || []),
                              ...(categoryPredictions.quarterfinalists || [])
                            ].filter(Boolean).length}/8 Positions
                          </span>
                        </div>
                        <div className="w-full bg-bull-dark-black rounded-full h-1.5">
                          <motion.div
                            className="bg-gradient-to-r from-bull-yellow to-bull-red h-1.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${([
                                categoryPredictions.winner,
                                categoryPredictions.finalist,
                                ...(categoryPredictions.semifinalists || []),
                                ...(categoryPredictions.quarterfinalists || [])
                              ].filter(Boolean).length / 8) * 100}%`
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      {/* Individual Category Stake Button */}
                      <motion.button
                        className={`w-full mt-3 py-2.5 sm:py-3 rounded-bull font-bold text-xs sm:text-sm transition-all duration-300 ${
                          isComplete
                            ? 'bg-gradient-to-r from-bull-yellow to-bull-red hover:from-bull-red hover:to-bull-yellow text-bull-black'
                            : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                        }`}
                        onClick={() => handleStakeTournamentCategory(tournament, category)}
                        disabled={!isComplete}
                        whileHover={isComplete ? { scale: 1.02 } : {}}
                        whileTap={isComplete ? { scale: 0.98 } : {}}
                      >
                        {isComplete
                          ? `STAKE ${category.toUpperCase()} PREDICTION`
                          : `COMPLETE ${category.split("'s")[0].toUpperCase()}'S STRUCTURE`
                        }
                      </motion.button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))
        ) : (
          // Enhanced Individual Match Cards with new format options (unchanged)
          dataToShow.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bull-charcoal rounded-bull p-3 sm:p-4 shadow-bull border border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Compact Match Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bull-red to-bull-yellow px-3 py-1 rounded text-bull-white font-bold text-xs mb-2">
                  <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                  {match.category}
                </div>
                <h3 className="font-heading font-bold text-bull-red text-base sm:text-lg mb-1">
                  {match.tournament}
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-bull-light-gray text-xs">
                  <span>{match.date} • {match.time}</span>
                  <span>{match.surface}</span>
                </div>
              </div>

              {/* Mobile-Responsive Player Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                {[match.playerA, match.playerB].map((player, playerIndex) => (
                  <div key={playerIndex} className="text-center">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto object-cover border-2 border-bull-red mb-2"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                      }}
                    />
                    <h4 className="font-bold text-bull-white text-xs sm:text-sm">{player.name}</h4>
                    <p className="text-bull-light-gray text-xs">#{player.ranking} • {player.country}</p>
                  </div>
                ))}
              </div>

              {/* Mobile-Responsive Prediction Steps */}
              <div className="space-y-3 sm:space-y-4">
                {/* Step 1: Match Winner */}
                <div className="bg-bull-gray rounded-bull p-3">
                  <h4 className="text-bull-yellow font-bold text-xs sm:text-sm mb-2 flex items-center gap-2">
                    <SafeIcon icon={FiCheck} className="w-3 h-3 sm:w-4 sm:h-4" />
                    Match Winner
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[match.playerA, match.playerB].map((player, playerIndex) => {
                      const isSelected = matchPredictions[match.id]?.winner === player.name;
                      return (
                        <motion.button
                          key={playerIndex}
                          className={`p-2 sm:p-3 rounded border-2 transition-all duration-300 ${
                            isSelected
                              ? 'border-bull-red bg-bull-red/20 text-bull-red'
                              : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                          }`}
                          onClick={() => handleMatchPrediction(match.id, 'winner', player.name)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-xs sm:text-sm font-bold">{player.name}</div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Enhanced Sets Format */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.winner && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-bull-gray rounded-bull p-3"
                    >
                      <h4 className="text-bull-yellow font-bold text-xs sm:text-sm mb-2 flex items-center gap-2">
                        <SafeIcon icon={FiTarget} className="w-3 h-3 sm:w-4 sm:h-4" />
                        Match Format ({match.category})
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {getFormatOptions(match).map((format) => {
                          const isSelected = matchPredictions[match.id]?.setsFormat === format.key;
                          return (
                            <motion.button
                              key={format.key}
                              className={`p-2 sm:p-3 rounded border transition-all duration-300 ${
                                isSelected
                                  ? 'border-bull-yellow bg-bull-yellow/20 text-bull-yellow'
                                  : 'border-bull-light-gray hover:border-bull-yellow/50 text-bull-light-gray hover:text-white hover:bg-bull-yellow/10'
                              }`}
                              onClick={() => handleMatchPrediction(match.id, 'setsFormat', format.key)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-xs sm:text-sm font-bold">{format.label}</div>
                              <div className="text-xs opacity-70">{format.description}</div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 3: Enhanced Set Predictions */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.setsFormat && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-bull-gray rounded-bull p-3"
                    >
                      <h4 className="text-bull-yellow font-bold text-xs sm:text-sm mb-3 flex items-center gap-2">
                        <SafeIcon icon={FiTrophy} className="w-3 h-3 sm:w-4 sm:h-4" />
                        Set-by-Set Predictions
                      </h4>
                      {generateSetPredictions(match, match.id)}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced Validation Status */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.setsFormat && (
                    <ValidationStatus matchId={match.id} match={match} />
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile-Responsive Stake Button */}
              <motion.button
                className={`w-full mt-4 py-3 sm:py-4 rounded-bull font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isMatchComplete(match.id)
                    ? 'bg-gradient-to-r from-bull-red to-bull-yellow hover:from-bull-yellow hover:to-bull-red text-bull-white'
                    : 'bg-bull-gray text-bull-light-gray cursor-not-allowed'
                }`}
                onClick={() => {
                  if (isMatchComplete(match.id)) {
                    onStake({
                      type: 'tennis-match',
                      match: match,
                      prediction: matchPredictions[match.id],
                      sport: 'Tennis'
                    });
                  }
                }}
                disabled={!isMatchComplete(match.id)}
                whileHover={isMatchComplete(match.id) ? { scale: 1.02 } : {}}
                whileTap={isMatchComplete(match.id) ? { scale: 0.98 } : {}}
              >
                {isMatchComplete(match.id) ? 'STAKE MATCH PREDICTION' : 'COMPLETE ALL STEPS'}
              </motion.button>
            </motion.div>
          ))
        )}
      </div>

      {dataToShow.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-3xl sm:text-4xl mb-4">🎾</div>
          <h3 className="text-lg sm:text-xl font-bold text-bull-white mb-2">
            No {predictionMode === 'tournament' ? 'Tournaments' : 'Matches'} Available
          </h3>
          <p className="text-bull-light-gray text-sm sm:text-base">
            No {predictionMode === 'tournament' ? 'tournaments' : 'matches'} available for the selected filters
          </p>
        </div>
      )}
    </div>
  );
};

export default TennisCard;