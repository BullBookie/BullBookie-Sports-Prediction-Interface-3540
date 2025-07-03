import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiTrendingUp, FiHome, FiBarChart3, FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: FiHome, label: 'Main' },
    { to: '/predictions', icon: FiTrendingUp, label: 'My Predictions' },
    { to: '/analytics', icon: FiBarChart3, label: 'Analytics' },
    { to: '/account', icon: FiUser, label: 'Account' }
  ];

  const NavItem = ({ to, icon, label, mobile = false }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center ${mobile ? 'justify-start' : 'justify-center'} gap-2 px-3 py-2 rounded-bull transition-all duration-300 ${
          isActive 
            ? 'bg-bull-red text-bull-white shadow-bull' 
            : 'text-bull-light-gray hover:text-bull-white hover:bg-bull-gray'
        } ${mobile ? 'w-full text-left' : ''}`
      }
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      <SafeIcon icon={icon} className="w-4 h-4 flex-shrink-0" />
      <span className={`font-medium ${mobile ? '' : 'hidden lg:inline'}`}>{label}</span>
    </NavLink>
  );

  return (
    <header className="bg-bull-charcoal border-b border-bull-gray sticky top-0 z-50 shadow-bull">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-caprasimo text-xl sm:text-2xl font-bold text-bull-red">
              BullBookie
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>

          {/* BBWIN Balance - Desktop */}
          <div className="hidden sm:flex items-center">
            <div className="bg-bull-gray px-3 py-2 rounded-bull border border-bull-gray flex items-center space-x-2">
              <span className="font-heading text-bull-yellow font-bold text-sm">BBWIN</span>
              <span className="text-bull-light-gray text-xs">:</span>
              <span className="text-bull-yellow font-bold text-sm">1,250.50</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile BBWIN Balance */}
            <div className="bg-bull-gray px-2 py-1 rounded text-xs">
              <span className="text-bull-yellow font-bold">1,250</span>
            </div>
            <motion.button
              className="p-2 text-bull-light-gray hover:text-bull-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-bull-gray"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <NavItem key={item.to} {...item} mobile />
                ))}
                {/* Full BBWIN Balance - Mobile */}
                <div className="mt-4 pt-4 border-t border-bull-gray">
                  <div className="bg-bull-gray px-4 py-3 rounded-bull flex items-center justify-between">
                    <span className="font-heading text-bull-yellow font-bold">BBWIN Balance</span>
                    <span className="text-bull-yellow font-bold text-lg">1,250.50</span>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;