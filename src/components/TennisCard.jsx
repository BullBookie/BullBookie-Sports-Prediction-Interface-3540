import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInfo, FiChevronDown, FiCalendar, FiUser, FiTrophy, FiCheck, FiTarget, FiClock, FiUsers, FiFilter, FiAlertTriangle, FiX } = FiIcons;

// Comprehensive Grand Slam participants list (168 players)
const grandSlamParticipants = [
  // Top 50 Men's Players
  { name: 'Novak Djokovic', country: 'SRB', ranking: 1, category: 'men', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop&crop=face' },
  { name: 'Carlos Alcaraz', country: 'ESP', ranking: 2, category: 'men', image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=200&h=200&fit=crop&crop=face' },
  { name: 'Daniil Medvedev', country: 'RUS', ranking: 3, category: 'men', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jannik Sinner', country: 'ITA', ranking: 4, category: 'men', image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Andrey Rublev', country: 'RUS', ranking: 5, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Stefanos Tsitsipas', country: 'GRE', ranking: 6, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Holger Rune', country: 'DEN', ranking: 7, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Hubert Hurkacz', country: 'POL', ranking: 8, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Taylor Fritz', country: 'USA', ranking: 9, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Alex de Minaur', country: 'AUS', ranking: 10, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Grigor Dimitrov', country: 'BUL', ranking: 11, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Tommy Paul', country: 'USA', ranking: 12, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Ben Shelton', country: 'USA', ranking: 13, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Alexander Zverev', country: 'GER', ranking: 14, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Ugo Humbert', country: 'FRA', ranking: 15, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Lorenzo Musetti', country: 'ITA', ranking: 16, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sebastian Korda', country: 'USA', ranking: 17, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Frances Tiafoe', country: 'USA', ranking: 18, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jack Draper', country: 'GBR', ranking: 19, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Karen Khachanov', country: 'RUS', ranking: 20, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Arthur Fils', country: 'FRA', ranking: 21, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Alejandro Tabilo', country: 'CHI', ranking: 22, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Nuno Borges', country: 'POR', ranking: 23, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Casper Ruud', country: 'NOR', ranking: 24, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jordan Thompson', country: 'AUS', ranking: 25, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Felix Auger-Aliassime', country: 'CAN', ranking: 26, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Francisco Cerundolo', country: 'ARG', ranking: 27, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Tomas Machac', country: 'CZE', ranking: 28, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Alexei Popyrin', country: 'AUS', ranking: 29, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Matteo Arnaldi', country: 'ITA', ranking: 30, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Flavio Cobolli', country: 'ITA', ranking: 31, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Matteo Berrettini', country: 'ITA', ranking: 32, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Brandon Nakashima', country: 'USA', ranking: 33, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Zhizhen Zhang', country: 'CHN', ranking: 34, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jiri Lehecka', country: 'CZE', ranking: 35, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Nicolas Jarry', country: 'CHI', ranking: 36, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Mariano Navone', country: 'ARG', ranking: 37, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Pavel Kotov', country: 'RUS', ranking: 38, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Giovanni Mpetshi Perricard', country: 'FRA', ranking: 39, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Tallon Griekspoor', country: 'NED', ranking: 40, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Alexandre Muller', country: 'FRA', ranking: 41, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Luciano Darderi', country: 'ITA', ranking: 42, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Roberto Bautista Agut', country: 'ESP', ranking: 43, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Christopher O\'Connell', country: 'AUS', ranking: 44, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Tomas Martin Etcheverry', country: 'ARG', ranking: 45, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Gael Monfils', country: 'FRA', ranking: 46, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Roberto Carballes Baena', country: 'ESP', ranking: 47, category: 'men', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Adrian Mannarino', country: 'FRA', ranking: 48, category: 'men', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
  { name: 'Cameron Norrie', country: 'GBR', ranking: 49, category: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Pedro Martinez', country: 'ESP', ranking: 50, category: 'men', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },

  // Top 50 Women's Players
  { name: 'Iga Swiatek', country: 'POL', ranking: 1, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Aryna Sabalenka', country: 'BLR', ranking: 2, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Coco Gauff', country: 'USA', ranking: 3, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Elena Rybakina', country: 'KAZ', ranking: 4, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jessica Pegula', country: 'USA', ranking: 5, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Ons Jabeur', country: 'TUN', ranking: 6, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Marketa Vondrousova', country: 'CZE', ranking: 7, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Maria Sakkari', country: 'GRE', ranking: 8, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Barbora Krejcikova', country: 'CZE', ranking: 9, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Danielle Collins', country: 'USA', ranking: 10, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Daria Kasatkina', country: 'RUS', ranking: 11, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Zheng Qinwen', country: 'CHN', ranking: 12, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Emma Navarro', country: 'USA', ranking: 13, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Madison Keys', country: 'USA', ranking: 14, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Beatriz Haddad Maia', country: 'BRA', ranking: 15, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Anna Kalinskaya', country: 'RUS', ranking: 16, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Marta Kostyuk', country: 'UKR', ranking: 17, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Donna Vekic', country: 'CRO', ranking: 18, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Liudmila Samsonova', country: 'RUS', ranking: 19, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Mirra Andreeva', country: 'RUS', ranking: 20, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jasmine Paolini', country: 'ITA', ranking: 21, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Elise Mertens', country: 'BEL', ranking: 22, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Caroline Garcia', country: 'FRA', ranking: 23, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Leylah Fernandez', country: 'CAN', ranking: 24, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Elina Svitolina', country: 'UKR', ranking: 25, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Anastasia Pavlyuchenkova', country: 'RUS', ranking: 26, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Linda Noskova', country: 'CZE', ranking: 27, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Katie Boulter', country: 'GBR', ranking: 28, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Ekaterina Alexandrova', country: 'RUS', ranking: 29, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Magda Linette', country: 'POL', ranking: 30, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Dayana Yastremska', country: 'UKR', ranking: 31, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Paula Badosa', country: 'ESP', ranking: 32, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sorana Cirstea', country: 'ROU', ranking: 33, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Peyton Stearns', country: 'USA', ranking: 34, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Victoria Azarenka', country: 'BLR', ranking: 35, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sloane Stephens', country: 'USA', ranking: 36, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Lulu Sun', country: 'NZL', ranking: 37, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Diana Shnaider', country: 'RUS', ranking: 38, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Yulia Putintseva', country: 'KAZ', ranking: 39, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Veronika Kudermetova', country: 'RUS', ranking: 40, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Anhelina Kalinina', country: 'UKR', ranking: 41, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Jelena Ostapenko', country: 'LAT', ranking: 42, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },
  { name: 'Anastasia Potapova', country: 'RUS', ranking: 43, category: 'women', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face' },
  { name: 'Clara Tauson', country: 'DEN', ranking: 44, category: 'women', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
  { name: 'Karolina Muchova', country: 'CZE', ranking: 45, category: 'women', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Caroline Wozniacki', country: 'DEN', ranking: 46, category: 'women', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
  { name: 'Xinyu Wang', country: 'CHN', ranking: 47, category: 'women', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
  { name: 'Marie Bouzkova', country: 'CZE', ranking: 48, category: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
  { name: 'Irina-Camelia Begu', country: 'ROU', ranking: 49, category: 'women', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop&crop=face' },
  { name: 'Petra Martic', country: 'CRO', ranking: 50, category: 'women', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face' },

  // Additional 68 players (mix of men and women, lower rankings)
  ...Array.from({ length: 68 }, (_, i) => ({
    name: `Player ${i + 101}`,
    country: ['USA', 'FRA', 'ESP', 'ITA', 'GER', 'AUS', 'CAN', 'GBR', 'ARG', 'BRA'][i % 10],
    ranking: i + 51,
    category: i % 2 === 0 ? 'men' : 'women',
    image: `https://images.unsplash.com/photo-${1472099645785 + i}?w=200&h=200&fit=crop&crop=face`
  }))
];

// Tennis match data with correct Grand Slam categories
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
    }
  ],
  tournaments: [
    {
      id: 1,
      name: 'US Open - Men\'s Singles',
      date: '2024-08-26 - 2024-09-08',
      surface: 'Hard',
      prize: '$75,000,000',
      category: 'men',
      participants: grandSlamParticipants.filter(p => p.category === 'men')
    },
    {
      id: 2,
      name: 'US Open - Women\'s Singles',
      date: '2024-08-26 - 2024-09-08',
      surface: 'Hard',
      prize: '$75,000,000',
      category: 'women',
      participants: grandSlamParticipants.filter(p => p.category === 'women')
    },
    {
      id: 3,
      name: 'Wimbledon - Men\'s Singles',
      date: '2024-07-01 - 2024-07-14',
      surface: 'Grass',
      prize: '$65,000,000',
      category: 'men',
      participants: grandSlamParticipants.filter(p => p.category === 'men')
    },
    {
      id: 4,
      name: 'Wimbledon - Women\'s Singles',
      date: '2024-07-01 - 2024-07-14',
      surface: 'Grass',
      prize: '$65,000,000',
      category: 'women',
      participants: grandSlamParticipants.filter(p => p.category === 'women')
    }
  ]
};

const TennisCard = ({ onStake }) => {
  const [predictionType, setPredictionType] = useState('matches'); // 'matches' or 'tournaments'
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [matchPredictions, setMatchPredictions] = useState({});
  
  // Tournament round selections - round-based approach
  const [roundSelections, setRoundSelections] = useState({
    round16: [], // 16 players
    quarterfinals: [], // 8 players
    semifinals: [], // 4 players
    final: [], // 2 players
    champion: null // 1 player
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');

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
      // Clear the score when changing winner
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
          // Also clear tiebreak setting when changing winner
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
      // Clear the score when toggling tiebreak
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

  // Round-based selection handlers
  const handleRoundSelection = (round, player) => {
    setRoundSelections(prev => {
      const currentSelections = prev[round] || [];
      const isSelected = currentSelections.find(p => p.name === player.name);
      
      let maxSelections;
      switch (round) {
        case 'round16': maxSelections = 16; break;
        case 'quarterfinals': maxSelections = 8; break;
        case 'semifinals': maxSelections = 4; break;
        case 'final': maxSelections = 2; break;
        default: maxSelections = 1;
      }
      
      if (isSelected) {
        // Remove player if already selected
        return {
          ...prev,
          [round]: currentSelections.filter(p => p.name !== player.name)
        };
      } else if (currentSelections.length < maxSelections) {
        // Add player if under limit
        return {
          ...prev,
          [round]: [...currentSelections, player]
        };
      } else {
        // Replace last player if at limit
        return {
          ...prev,
          [round]: [...currentSelections.slice(0, maxSelections - 1), player]
        };
      }
    });
  };

  const handleChampionSelection = (player) => {
    setRoundSelections(prev => ({
      ...prev,
      champion: player
    }));
  };

  // Get available players for each round based on previous round selections
  const getAvailablePlayersForRound = (round) => {
    if (!selectedTournament) return [];
    
    switch (round) {
      case 'round16':
        return selectedTournament.participants;
      case 'quarterfinals':
        return roundSelections.round16;
      case 'semifinals':
        return roundSelections.quarterfinals;
      case 'final':
        return roundSelections.semifinals;
      case 'champion':
        return roundSelections.final;
      default:
        return [];
    }
  };

  // Filter participants based on search and filters
  const getFilteredParticipants = (round) => {
    const availablePlayers = getAvailablePlayersForRound(round);
    let filtered = availablePlayers;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by country
    if (filterCountry !== 'all') {
      filtered = filtered.filter(player => player.country === filterCountry);
    }
    
    return filtered.sort((a, b) => a.ranking - b.ranking);
  };

  // Get unique countries for filter
  const getAvailableCountries = () => {
    if (!selectedTournament) return [];
    
    const countries = [...new Set(selectedTournament.participants.map(p => p.country))];
    return countries.sort();
  };

  // Get format options based on match category
  const getFormatOptions = (match) => {
    if (match.category === 'Men\'s Singles') {
      return [
        { key: '3-out-of-3', label: '3 out of 3 Sets', description: 'First to win 3 sets' },
        { key: '3-out-of-4', label: '3 out of 4 Sets', description: 'First to win 3 sets (max 4)' },
        { key: '3-out-of-5', label: '3 out of 5 Sets', description: 'First to win 3 sets (max 5)' }
      ];
    } else {
      return [
        { key: '2-out-of-2', label: '2 out of 2 Sets', description: 'First to win 2 sets' },
        { key: '2-out-of-3', label: '2 out of 3 Sets', description: 'First to win 2 sets (max 3)' }
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

  // ENHANCED VALIDATION FUNCTIONS
  const validateMatchPrediction = (matchId, match) => {
    const prediction = matchPredictions[matchId];
    const issues = [];

    // Check basic requirements
    if (!prediction?.winner || !prediction?.setsFormat) {
      return { isValid: false, issues: ['Complete match winner and format selection first'] };
    }

    const requiredSets = getRequiredSets(prediction.setsFormat);
    const maxSets = getMaxSets(prediction.setsFormat);
    const setWinners = prediction.setWinners || {};
    const sets = prediction.sets || {};
    const tiebreaks = prediction.tiebreaks || {};
    
    // Get completed sets
    const completedSets = Object.keys(setWinners).filter(setNum => {
      const hasWinner = setWinners[setNum];
      const isTiebreak = tiebreaks[setNum];
      const hasScore = sets[setNum] || isTiebreak;
      return hasWinner && hasScore;
    });

    // Check if enough sets are completed
    if (completedSets.length < requiredSets) {
      issues.push(`Need ${requiredSets} complete sets, only ${completedSets.length} completed`);
    }

    // Count sets won by each player
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

    // Check logical consistency
    if (completedSets.length >= requiredSets) {
      // Check if match winner actually wins enough sets
      if (matchWinnerSets < requiredSets) {
        issues.push(
          `${matchWinner} is selected as match winner but only wins ${matchWinnerSets} sets. ` +
          `Need ${requiredSets} sets to win (format: ${prediction.setsFormat})`
        );
      }

      // Check if opponent has won too many sets
      const maxOpponentSets = requiredSets - 1;
      if (otherPlayerSets > maxOpponentSets) {
        issues.push(
          `${otherPlayer} wins ${otherPlayerSets} sets but ${matchWinner} is selected as match winner. ` +
          `This is impossible in ${prediction.setsFormat} format`
        );
      }

      // Check if match should have ended earlier
      if (matchWinnerSets >= requiredSets) {
        const setsPlayed = matchWinnerSets + otherPlayerSets;
        const minSetsNeeded = requiredSets + Math.min(otherPlayerSets, requiredSets - 1);
        
        if (setsPlayed > minSetsNeeded) {
          issues.push(
            `Match would have ended after ${minSetsNeeded} sets when ${matchWinner} reached ${requiredSets} wins. ` +
            `Remove extra sets or adjust predictions`
          );
        }
      }
    }

    // Check for impossible scenarios
    if (completedSets.length > 0) {
      // Both players can't win the same number of sets equal to required sets
      if (matchWinnerSets === requiredSets && otherPlayerSets === requiredSets) {
        issues.push(`Both players can't win ${requiredSets} sets in ${prediction.setsFormat} format`);
      }

      // Check maximum sets constraint
      if (completedSets.length > maxSets) {
        issues.push(`Too many sets completed. Maximum ${maxSets} sets in ${prediction.setsFormat} format`);
      }
    }

    return {
      isValid: issues.length === 0,
      issues: issues,
      setsWon: { [matchWinner]: matchWinnerSets, [otherPlayer]: otherPlayerSets },
      completedSets: completedSets.length
    };
  };

  const isMatchComplete = (matchId) => {
    const validation = validateMatchPrediction(matchId, tennisData.matches.find(m => m.id === matchId));
    return validation.isValid;
  };

  const isTournamentComplete = () => {
    return (
      roundSelections.round16.length === 16 &&
      roundSelections.quarterfinals.length === 8 &&
      roundSelections.semifinals.length === 4 &&
      roundSelections.final.length === 2 &&
      roundSelections.champion !== null
    );
  };

  // Get tennis score options based on the set winner
  const getScoreOptionsForWinner = (match, setNumber, setWinner, isTiebreak) => {
    if (isTiebreak) {
      // For tiebreaks, winner scores 7+ and opponent scores less
      return [
        '7-0', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6',
        '8-6', '9-7', '10-8', '11-9', '12-10', '13-11', '14-12', '15-13'
      ];
    }

    // For regular sets, return scores where the selected winner actually wins the set
    const winningScores = [
      '6-0', '6-1', '6-2', '6-3', '6-4', // Standard wins
      '7-5', // Break advantage
      '7-6'  // Tiebreak win (7-6)
    ];
    
    return winningScores;
  };

  const generateSetPredictions = (match, matchId) => {
    const prediction = matchPredictions[matchId];
    if (!prediction?.setsFormat) return null;

    const maxSets = getMaxSets(prediction.setsFormat);
    const requiredSets = getRequiredSets(prediction.setsFormat);
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h5 className="text-bull-yellow font-bold text-lg mb-2">
            Set Predictions ({requiredSets} sets to win)
          </h5>
          <p className="text-bull-light-gray text-sm">
            First select the set winner, then choose if it's a tiebreak, then select the score
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="bg-bull-charcoal rounded-bull p-4 border-2 border-bull-gray hover:border-bull-red/30 transition-all duration-300"
              >
                <div className="text-center mb-3">
                  <span className="inline-flex items-center gap-2 bg-bull-red px-3 py-1 rounded-bull text-white text-sm font-bold">
                    <SafeIcon icon={FiTarget} className="w-3 h-3" />
                    Set {setNumber}
                  </span>
                </div>

                {/* Step 1: Set Winner Selection */}
                <div className="mb-4">
                  <label className="block text-xs text-bull-light-gray mb-2 font-medium">
                    Step 1: Set Winner
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[match.playerA, match.playerB].map((player, playerIndex) => (
                      <motion.button
                        key={playerIndex}
                        className={`p-2 rounded-bull text-xs font-medium transition-all duration-300 ${
                          setWinner === player.name
                            ? 'bg-bull-red text-white border-2 border-bull-red'
                            : 'bg-bull-gray text-bull-light-gray hover:bg-bull-light-gray hover:text-white border-2 border-transparent'
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

                {/* Step 2: Tiebreak Toggle (only appears after winner selection) */}
                {setWinner && (
                  <div className="mb-3">
                    <label className="block text-xs text-bull-light-gray mb-2 font-medium">
                      Step 2: Set Type
                    </label>
                    <motion.button
                      className={`w-full p-2 rounded-bull text-xs font-medium transition-all duration-300 border-2 ${
                        isTiebreak
                          ? 'bg-bull-yellow/20 text-bull-yellow border-bull-yellow'
                          : 'bg-bull-gray text-bull-light-gray border-bull-gray hover:border-bull-yellow'
                      }`}
                      onClick={() => toggleTiebreak(matchId, setNumber)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isTiebreak ? '✓ Tiebreak Set (7-6)' : 'Regular Set (6-0 to 7-5)'}
                    </motion.button>
                  </div>
                )}

                {/* Step 3: Score Selection (only appears after winner and type selection) */}
                {setWinner && isTiebreak !== undefined && !isTiebreak && (
                  <div>
                    <label className="block text-xs text-bull-light-gray mb-2 font-medium">
                      Step 3: Set Score
                    </label>
                    <select
                      value={setScore || ''}
                      onChange={(e) => handleSetScore(matchId, setNumber, e.target.value)}
                      className="w-full bg-bull-gray border border-bull-light-gray rounded-bull px-2 py-2 text-white text-xs focus:border-bull-red focus:outline-none"
                    >
                      <option value="">Select Score</option>
                      {getScoreOptionsForWinner(match, setNumber, setWinner, false).map(score => (
                        <option key={score} value={score}>{score}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* For tiebreak sets, automatically set as complete */}
                {setWinner && isTiebreak && (
                  <div className="text-center p-2 bg-bull-yellow/10 rounded-bull border border-bull-yellow/30">
                    <p className="text-bull-yellow text-xs font-medium">
                      Tiebreak Set Complete: 7-6
                    </p>
                  </div>
                )}

                {/* Set Completion Status */}
                <div className="mt-3 text-center">
                  {setWinner && (isTiebreak || setScore) ? (
                    <div className="flex items-center justify-center gap-1 text-bull-yellow">
                      <SafeIcon icon={FiCheck} className="w-3 h-3" />
                      <span className="text-xs font-medium">Set Complete</span>
                    </div>
                  ) : (
                    <div className="text-bull-light-gray text-xs">
                      {!setWinner && 'Select winner first'}
                      {setWinner && isTiebreak === undefined && 'Choose set type'}
                      {setWinner && isTiebreak === false && !setScore && 'Select score'}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Validation Status Component
  const ValidationStatus = ({ matchId, match }) => {
    const validation = validateMatchPrediction(matchId, match);
    
    if (validation.isValid) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bull-yellow/10 border border-bull-yellow/30 rounded-bull p-4 mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <SafeIcon icon={FiCheck} className="w-5 h-5 text-bull-yellow" />
            <span className="text-bull-yellow font-bold">Prediction Valid</span>
          </div>
          <div className="text-bull-white text-sm">
            {match.playerA.name}: {validation.setsWon[match.playerA.name] || 0} sets • 
            {match.playerB.name}: {validation.setsWon[match.playerB.name] || 0} sets
          </div>
        </motion.div>
      );
    }

    if (validation.issues.length > 0) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bull-red/10 border border-bull-red/30 rounded-bull p-4 mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-bull-red" />
            <span className="text-bull-red font-bold">Prediction Issues</span>
          </div>
          <div className="space-y-2">
            {validation.issues.map((issue, index) => (
              <div key={index} className="flex items-start gap-2 text-bull-white text-sm">
                <SafeIcon icon={FiX} className="w-4 h-4 text-bull-red flex-shrink-0 mt-0.5" />
                <span>{issue}</span>
              </div>
            ))}
          </div>
          {validation.setsWon && (
            <div className="mt-3 pt-3 border-t border-bull-red/20 text-bull-light-gray text-sm">
              Current: {match.playerA.name}: {validation.setsWon[match.playerA.name] || 0} sets • 
              {match.playerB.name}: {validation.setsWon[match.playerB.name] || 0} sets
            </div>
          )}
        </motion.div>
      );
    }

    return null;
  };

  // Round-based Tournament Prediction Component
  const TournamentRoundPredictions = ({ tournament }) => {
    const rounds = [
      { key: 'round16', name: 'Round of 16', count: 16, description: 'Select 16 players who will reach Round of 16' },
      { key: 'quarterfinals', name: 'Quarter Finals', count: 8, description: 'Select 8 players who will reach Quarter Finals' },
      { key: 'semifinals', name: 'Semi Finals', count: 4, description: 'Select 4 players who will reach Semi Finals' },
      { key: 'final', name: 'Final', count: 2, description: 'Select 2 players who will reach the Final' },
      { key: 'champion', name: 'Champion', count: 1, description: 'Select the tournament winner' }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-bold text-bull-red mb-2">{tournament.name}</h3>
          <div className="flex justify-center items-center gap-4 text-sm text-bull-light-gray mb-4">
            <span>{tournament.date}</span>
            <span>•</span>
            <span>{tournament.surface}</span>
            <span>•</span>
            <span>{tournament.prize}</span>
          </div>
          <div className="bg-bull-charcoal rounded-bull p-4 border border-bull-red/20">
            <p className="text-bull-white text-sm">
              <strong>Round-Based Predictions:</strong> Select qualified players for each tournament round
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-red focus:outline-none pl-10"
            />
            <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-bull-light-gray" />
          </div>

          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="w-full bg-bull-charcoal border border-bull-light-gray rounded-bull px-4 py-3 text-white focus:border-bull-red focus:outline-none"
          >
            <option value="all">All Countries</option>
            {getAvailableCountries().map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <SafeIcon icon={FiFilter} className="w-4 h-4 text-bull-light-gray" />
            <span className="text-bull-light-gray text-sm">
              Total Players: {tournament.participants.length}
            </span>
          </div>
        </div>

        {/* Round Selection Cards */}
        <div className="space-y-8">
          {rounds.map((round, roundIndex) => {
            const currentSelections = roundSelections[round.key] || [];
            const isChampionRound = round.key === 'champion';
            const availablePlayers = getFilteredParticipants(round.key);
            const isRoundComplete = isChampionRound ? roundSelections.champion !== null : currentSelections.length === round.count;
            
            return (
              <motion.div
                key={round.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: roundIndex * 0.1 }}
                className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-6 border-2 border-bull-charcoal shadow-bull-lg"
              >
                <div className="text-center mb-6">
                  <h4 className="inline-flex items-center gap-2 bg-gradient-to-r from-bull-red to-bull-yellow px-4 py-2 rounded-bull text-bull-white font-bold text-lg mb-3">
                    <SafeIcon icon={FiTrophy} className="w-5 h-5" />
                    {round.name}
                  </h4>
                  <p className="text-bull-light-gray text-sm mb-4">{round.description}</p>
                  
                  {/* Progress Indicator */}
                  <div className="bg-bull-charcoal rounded-bull p-3 border border-bull-red/20 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-bull-white font-medium">
                        Progress: {isChampionRound ? (roundSelections.champion ? 1 : 0) : currentSelections.length}/{round.count}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${isRoundComplete ? 'bg-bull-yellow text-bull-black' : 'bg-bull-gray text-bull-light-gray'}`}>
                        {isRoundComplete ? 'Complete' : 'In Progress'}
                      </span>
                    </div>
                    <div className="w-full bg-bull-gray rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-bull-red to-bull-yellow h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${isChampionRound ? (roundSelections.champion ? 100 : 0) : (currentSelections.length / round.count) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Show selections if available players exist */}
                {availablePlayers.length > 0 ? (
                  <>
                    {/* Selected Players Display */}
                    {currentSelections.length > 0 && !isChampionRound && (
                      <div className="mb-6">
                        <h5 className="text-bull-yellow font-bold text-sm mb-3">
                          Selected for {round.name} ({currentSelections.length}/{round.count})
                        </h5>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                          {currentSelections.map((player, index) => (
                            <motion.div
                              key={player.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-bull-red/20 border border-bull-red rounded-bull p-2 text-center"
                            >
                              <img
                                src={player.image}
                                alt={player.name}
                                className="w-8 h-8 rounded-full mx-auto mb-1 object-cover"
                                onError={(e) => {
                                  e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                                }}
                              />
                              <p className="text-white text-xs font-medium truncate">{player.name.split(' ')[1] || player.name}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Champion Selection */}
                    {isChampionRound && roundSelections.champion && (
                      <div className="mb-6">
                        <h5 className="text-bull-yellow font-bold text-sm mb-3">Tournament Champion</h5>
                        <div className="flex justify-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-r from-bull-red via-bull-yellow to-bull-red border-2 border-bull-yellow rounded-bull p-4 text-center"
                          >
                            <img
                              src={roundSelections.champion.image}
                              alt={roundSelections.champion.name}
                              className="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-2 border-bull-white"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                              }}
                            />
                            <p className="text-bull-white text-sm font-bold">{roundSelections.champion.name}</p>
                            <p className="text-bull-white text-xs">#{roundSelections.champion.ranking} • {roundSelections.champion.country}</p>
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {/* Player Selection Grid */}
                    {(!isRoundComplete || isChampionRound) && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-64 overflow-y-auto">
                        {availablePlayers.map((player, index) => {
                          const isSelected = isChampionRound 
                            ? roundSelections.champion?.name === player.name
                            : currentSelections.find(p => p.name === player.name);
                          
                          return (
                            <motion.button
                              key={player.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.02 }}
                              className={`p-3 rounded-bull border-2 transition-all duration-300 text-center ${
                                isSelected
                                  ? 'border-bull-red bg-bull-red/20 text-bull-red'
                                  : 'border-bull-gray bg-bull-charcoal hover:border-bull-red/50 hover:bg-bull-red/10 text-bull-white'
                              }`}
                              onClick={() => isChampionRound ? handleChampionSelection(player) : handleRoundSelection(round.key, player)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <img
                                src={player.image}
                                alt={player.name}
                                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                                onError={(e) => {
                                  e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                                }}
                              />
                              <h6 className="font-medium text-xs mb-1 truncate">{player.name}</h6>
                              <p className="text-xs opacity-70">#{player.ranking}</p>
                              {isSelected && (
                                <div className="mt-1">
                                  <SafeIcon icon={FiCheck} className="w-3 h-3 mx-auto text-bull-red" />
                                </div>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  // No available players message
                  <div className="text-center py-8">
                    <SafeIcon icon={FiClock} className="w-12 h-12 text-bull-light-gray mx-auto mb-4" />
                    <p className="text-bull-light-gray">
                      {round.key === 'round16' 
                        ? 'No players available - check filters'
                        : `Complete the previous round first (${round.key === 'quarterfinals' ? 'Round of 16' : round.key === 'semifinals' ? 'Quarter Finals' : round.key === 'final' ? 'Semi Finals' : 'Final'})`
                      }
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Tournament Stake Button */}
        <motion.button
          className={`w-full mt-8 py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
            isTournamentComplete()
              ? 'bg-gradient-to-r from-bull-red to-bull-yellow hover:from-bull-yellow hover:to-bull-red text-bull-white'
              : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
          }`}
          onClick={() => {
            if (isTournamentComplete()) {
              onStake({
                type: 'tennis-tournament-rounds',
                tournament: tournament,
                predictions: roundSelections,
                sport: 'Tennis'
              });
            }
          }}
          disabled={!isTournamentComplete()}
          whileHover={isTournamentComplete() ? { scale: 1.02, boxShadow: '0 12px 30px -8px rgba(212,9,52,0.5)' } : {}}
          whileTap={isTournamentComplete() ? { scale: 0.98 } : {}}
        >
          <div className="flex items-center justify-center gap-3">
            <SafeIcon icon={FiTrophy} className="w-6 h-6" />
            {isTournamentComplete() ? 'STAKE TOURNAMENT PREDICTION' : 'COMPLETE ALL ROUND SELECTIONS'}
          </div>
        </motion.button>
      </div>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-10">
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
              Grand Slam Tennis Prediction System
            </h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-bull-light-gray">
              <p>• <strong className="text-bull-white">Individual Matches:</strong> Step-by-step predictions: Winner → Format → Set-by-set (winner → type → score)</p>
              <p>• <strong className="text-bull-white">Set Logic:</strong> Select winner first, then choose regular/tiebreak, then score (only valid scores shown)</p>
              <p>• <strong className="text-bull-white">Tournament Rounds:</strong> Select qualified players for each round (16→8→4→2→1)</p>
              <p>• <strong className="text-bull-yellow">Smart Validation:</strong> Ensures match winner actually wins enough sets and prevents impossible scenarios</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Prediction Type Selector */}
      <div className="flex bg-gradient-to-r from-bull-charcoal to-bull-gray rounded-bull p-1 w-fit mx-auto border-2 border-bull-light-gray shadow-bull">
        <motion.button
          className={`flex items-center gap-3 px-6 py-4 rounded-bull font-bold text-lg transition-all duration-300 ${
            predictionType === 'matches'
              ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-bull-white shadow-bull-lg'
              : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
          }`}
          onClick={() => setPredictionType('matches')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SafeIcon icon={FiUser} className="w-5 h-5" />
          <span>Individual Matches</span>
        </motion.button>
        
        <motion.button
          className={`flex items-center gap-3 px-6 py-4 rounded-bull font-bold text-lg transition-all duration-300 ${
            predictionType === 'tournaments'
              ? 'bg-gradient-to-r from-bull-red to-bull-red-light text-bull-white shadow-bull-lg'
              : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
          }`}
          onClick={() => {
            setPredictionType('tournaments');
            // Reset tournament state when switching
            setSelectedTournament(null);
            setRoundSelections({
              round16: [],
              quarterfinals: [],
              semifinals: [],
              final: [],
              champion: null
            });
            setSearchTerm('');
            setFilterCountry('all');
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SafeIcon icon={FiTrophy} className="w-5 h-5" />
          <span>Tournament Rounds</span>
        </motion.button>
      </div>

      {/* Content based on prediction type */}
      {predictionType === 'matches' ? (
        // Individual Matches with correct Grand Slam format
        <div className="space-y-10">
          {tennisData.matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-bull-gray to-bull-charcoal rounded-bull p-8 shadow-bull-lg border-2 border-bull-charcoal hover:border-bull-red/50 transition-all duration-300"
              whileHover={{ scale: 1.005, boxShadow: '0 25px 50px -12px rgba(212,9,52,0.25)' }}
            >
              {/* Match Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bull-red to-bull-yellow px-4 py-2 rounded-bull text-bull-white font-bold text-sm mb-4">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  {match.category}
                </div>
                <h3 className="font-heading font-bold text-bull-red text-2xl sm:text-3xl mb-3 uppercase tracking-wide">
                  {match.tournament}
                </h3>
                <div className="flex justify-center items-center gap-6 text-bull-light-gray mb-2">
                  <span className="flex items-center gap-1">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    {match.date} • {match.time}
                  </span>
                  <span>{match.surface}</span>
                  <span className="bg-bull-charcoal px-2 py-1 rounded text-xs">{match.category}</span>
                </div>
              </div>

              {/* Enhanced Player Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {[match.playerA, match.playerB].map((player, playerIndex) => (
                  <motion.div
                    key={playerIndex}
                    className="bg-bull-charcoal rounded-bull p-6 border-2 border-bull-gray hover:border-bull-red/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className="relative mb-4">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-bull-red shadow-bull-lg"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face';
                          }}
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-bull-red to-bull-yellow text-white px-3 py-1 rounded-bull text-sm font-bold shadow-bull">
                          #{player.ranking}
                        </div>
                      </div>
                      <h4 className="font-bold text-bull-white text-xl mb-2">{player.name}</h4>
                      <p className="text-bull-light-gray font-medium">{player.country}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progressive Prediction Steps */}
              <div className="space-y-8">
                {/* Step 1: Match Winner */}
                <div className="bg-bull-charcoal rounded-bull p-6 border-2 border-bull-gray">
                  <h4 className="text-center font-bold text-bull-yellow text-xl mb-6 flex items-center justify-center gap-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                    Step 1: Match Winner
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[match.playerA, match.playerB].map((player, playerIndex) => {
                      const isSelected = matchPredictions[match.id]?.winner === player.name;
                      return (
                        <motion.button
                          key={playerIndex}
                          className={`p-6 rounded-bull border-3 transition-all duration-300 ${
                            isSelected
                              ? 'border-bull-red bg-bull-red/20 text-bull-red shadow-bull-lg transform scale-105'
                              : 'border-bull-light-gray hover:border-bull-red/50 text-bull-light-gray hover:text-white hover:bg-bull-red/10'
                          }`}
                          onClick={() => handleMatchPrediction(match.id, 'winner', player.name)}
                          whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={player.image}
                              alt={player.name}
                              className="w-12 h-12 rounded-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                              }}
                            />
                            <div className="text-left">
                              <div className="font-bold text-lg">{player.name}</div>
                              <div className="text-sm opacity-70">#{player.ranking} • {player.country}</div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Sets Format (appears after winner selection) */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.winner && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-bull-charcoal rounded-bull p-6 border-2 border-bull-gray"
                    >
                      <h4 className="text-center font-bold text-bull-yellow text-xl mb-6 flex items-center justify-center gap-2">
                        <SafeIcon icon={FiTarget} className="w-5 h-5" />
                        Step 2: Match Format
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getFormatOptions(match).map((format) => {
                          const isSelected = matchPredictions[match.id]?.setsFormat === format.key;
                          return (
                            <motion.button
                              key={format.key}
                              className={`p-4 rounded-bull border-2 transition-all duration-300 ${
                                isSelected
                                  ? 'border-bull-yellow bg-bull-yellow/20 text-bull-yellow shadow-bull'
                                  : 'border-bull-light-gray hover:border-bull-yellow/50 text-bull-light-gray hover:text-white hover:bg-bull-yellow/10'
                              }`}
                              onClick={() => handleMatchPrediction(match.id, 'setsFormat', format.key)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-center">
                                <div className="font-bold text-base mb-1">{format.label}</div>
                                <div className="text-xs opacity-70">{format.description}</div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 3: Set Predictions (appears after format selection) */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.setsFormat && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-bull-charcoal rounded-bull p-6 border-2 border-bull-gray"
                    >
                      <h4 className="text-center font-bold text-bull-yellow text-xl mb-6 flex items-center justify-center gap-2">
                        <SafeIcon icon={FiTrophy} className="w-5 h-5" />
                        Step 3: Set-by-Set Predictions
                      </h4>
                      {generateSetPredictions(match, match.id)}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Validation Status */}
                <AnimatePresence>
                  {matchPredictions[match.id]?.setsFormat && (
                    <ValidationStatus matchId={match.id} match={match} />
                  )}
                </AnimatePresence>
              </div>

              {/* Match Stake Button */}
              <motion.button
                className={`w-full mt-10 py-6 rounded-bull font-bold text-xl transition-all duration-300 shadow-bull ${
                  isMatchComplete(match.id)
                    ? 'bg-gradient-to-r from-bull-red to-bull-yellow hover:from-bull-yellow hover:to-bull-red text-bull-white'
                    : 'bg-bull-charcoal text-bull-light-gray cursor-not-allowed'
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
                whileHover={isMatchComplete(match.id) ? { scale: 1.02, boxShadow: '0 12px 30px -8px rgba(212,9,52,0.5)' } : {}}
                whileTap={isMatchComplete(match.id) ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center justify-center gap-3">
                  <SafeIcon icon={FiTrophy} className="w-6 h-6" />
                  {isMatchComplete(match.id) ? 'STAKE MATCH PREDICTION' : 'FIX PREDICTION ISSUES ABOVE'}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      ) : (
        // Tournament Round-Based Predictions
        <div className="space-y-10">
          {/* Tournament Selector */}
          <div className="text-center">
            <h3 className="font-heading text-3xl font-bold text-bull-white mb-6">Select Grand Slam Tournament</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {tennisData.tournaments.map((tournament) => (
                <motion.button
                  key={tournament.id}
                  className={`p-8 rounded-bull border-3 transition-all duration-300 text-left ${
                    selectedTournament?.id === tournament.id
                      ? 'border-bull-red bg-bull-red/10 shadow-bull-lg transform scale-105'
                      : 'border-bull-charcoal bg-bull-charcoal hover:border-bull-red/50 hover:shadow-bull'
                  }`}
                  onClick={() => {
                    setSelectedTournament(tournament);
                    setRoundSelections({
                      round16: [],
                      quarterfinals: [],
                      semifinals: [],
                      final: [],
                      champion: null
                    });
                    setSearchTerm('');
                    setFilterCountry('all');
                  }}
                  whileHover={{ scale: selectedTournament?.id === tournament.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <SafeIcon icon={FiTrophy} className="w-8 h-8 text-bull-yellow flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-bull-white text-xl mb-2">{tournament.name}</h4>
                      <div className="text-bull-light-gray space-y-1">
                        <p className="flex items-center gap-2">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          {tournament.date} • {tournament.surface}
                        </p>
                        <p className="text-bull-yellow font-bold">{tournament.prize}</p>
                        <p className="flex items-center gap-2">
                          <SafeIcon icon={FiUsers} className="w-4 h-4" />
                          {tournament.participants.length} {tournament.category === 'men' ? 'Men' : 'Women'} Players
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Player Preview */}
                  <div className="flex -space-x-2">
                    {tournament.participants.slice(0, 6).map((player, idx) => (
                      <img
                        key={idx}
                        src={player.image}
                        alt={player.name}
                        className="w-8 h-8 rounded-full border-2 border-bull-charcoal object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
                        }}
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-bull-gray border-2 border-bull-charcoal flex items-center justify-center text-xs text-bull-light-gray">
                      +{tournament.participants.length - 6}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tournament Round Predictions */}
          <AnimatePresence>
            {selectedTournament && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <TournamentRoundPredictions tournament={selectedTournament} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default TennisCard;