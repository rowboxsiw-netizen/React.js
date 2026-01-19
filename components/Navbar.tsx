
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { Magnetic } from './ui/Magnetic';
import Image from 'next/image';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[calc(100%-2rem)] max-w-5xl",
        scrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "px-8 py-3 rounded-full flex items-center justify-between transition-all duration-500",
        scrolled ? "glass-panel shadow-2xl border-white/20" : "bg-transparent border-transparent"
      )}>
        <a href="#" className="flex items-center gap-4 group relative">
          <div className="relative w-[50px] h-[50px] flex items-center justify-center">
            {/* Ambient Glow behind Logo - Balanced for 50x50 */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 ease-out" />
            
            <Image 
              src={PERSONAL_INFO.logo} 
              alt={`${PERSONAL_INFO.name} Logo`}
              width={50}
              height={50}
              className="relative z-10 object-contain brightness-0 dark:brightness-100 group-hover:rotate-[360deg] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              priority
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold tracking-tighter group-hover:text-primary transition-colors duration-300 leading-none mb-1">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground opacity-60">
              Architecture
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative"
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            {mounted && (
              <Magnetic strength={0.2}>
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </Magnetic>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden glass-panel p-2 rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 glass-panel rounded-[2rem] p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold hover:text-primary transition-colors"
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
