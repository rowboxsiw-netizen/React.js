
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-gray-900 dark:text-white">{PERSONAL_INFO.name}</span>
          <span>© {new Date().getFullYear()} — Built with ☕ and React</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Locally sourcing talent globally</span>
        </div>
      </div>
    </footer>
  );
};
