
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ThreeBackground } from '@/components/ThreeBackground';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <ThreeBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/20 rounded-full bg-background/50 backdrop-blur-sm">
            Principal Engineer
          </span>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
            Building <span className="text-primary">Digital Gold</span><br />
            for the Future Web.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm <span className="font-semibold text-foreground">{PERSONAL_INFO.name}</span>. 
            Merging artistic motion with robust engineering to create award-winning web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-input rounded-full font-bold hover:bg-secondary/50 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
