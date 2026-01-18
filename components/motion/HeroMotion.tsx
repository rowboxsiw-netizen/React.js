
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

export const HeroMotion = ({ role }: { role: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="w-12 h-px bg-primary/40" />
        <span className="text-[12px] font-bold tracking-[0.5em] text-primary uppercase">
          {role}
        </span>
        <span className="w-12 h-px bg-primary/40" />
      </div>
      
      <h1 className="text-7xl md:text-[10rem] font-display font-bold mb-10 tracking-tighter leading-[0.8] italic uppercase">
        Future<br />
        <span className="text-primary not-italic">Architect</span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 font-medium leading-relaxed tracking-tight">
        Engineering premium digital interfaces. Merging deep logic with high-fidelity aesthetics.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <Magnetic strength={0.15}>
          <a 
            href="#projects"
            className="group relative px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center gap-4 overflow-hidden transition-all shadow-2xl"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">View My Work</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </Magnetic>
        
        <Magnetic strength={0.15}>
          <a 
            href="#contact"
            className="px-10 py-5 glass-panel rounded-full font-bold uppercase tracking-widest text-xs hover:border-primary/50 transition-all"
          >
            Let's Talk
          </a>
        </Magnetic>
      </div>
    </motion.div>
  );
};
