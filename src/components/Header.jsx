import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiTrendingUp, FiHome, FiBarChart3 } = FiIcons;

const Header = () => {
  return (
    <header className="bg-bull-charcoal border-b border-bull-gray sticky top-0 z-50 shadow-bull">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="font-caprasimo text-2xl font-bold text-bull-red">
              BullBookie
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-bull transition-all duration-300 ${
                  isActive
                    ? 'bg-bull-red text-bull-white shadow-bull'
                    : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
                }`
              }
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              <span className="font-medium">Main</span>
            </NavLink>

            <NavLink
              to="/predictions"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-bull transition-all duration-300 ${
                  isActive
                    ? 'bg-bull-red text-bull-white shadow-bull'
                    : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
                }`
              }
            >
              <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
              <span className="font-medium">My Predictions</span>
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-bull transition-all duration-300 ${
                  isActive
                    ? 'bg-bull-red text-bull-white shadow-bull'
                    : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
                }`
              }
            >
              <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
              <span className="font-medium">Analytics</span>
            </NavLink>

            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-bull transition-all duration-300 ${
                  isActive
                    ? 'bg-bull-red text-bull-white shadow-bull'
                    : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
                }`
              }
            >
              <SafeIcon icon={FiUser} className="w-4 h-4" />
              <span className="font-medium">Account</span>
            </NavLink>
          </nav>

          {/* BBWIN Balance */}
          <div className="flex items-center space-x-3">
            <div className="bg-bull-gray px-4 py-2 rounded-bull border border-bull-gray flex items-center space-x-2">
              <span className="font-caprasimo text-bull-yellow font-bold">BBWIN</span>
              <span className="text-bull-light-gray text-sm font-medium">:</span>
              <span className="text-bull-yellow font-bold text-lg">1,250.50</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;