
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#home" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-gray-900">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-xl border border-primary/10 rounded-full px-2 py-1 shadow-sm">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="px-6 py-2 rounded-full text-sm font-semibold text-gray-800 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-primary/10 hover:scale-110 transition-transform shadow-sm"
          >
            {isDarkMode ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
          </button>
          
          <button 
            className="md:hidden p-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-primary/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-gray-900 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
