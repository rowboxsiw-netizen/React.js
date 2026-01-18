
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ThreeBackground } from '@/components/ThreeBackground';
import { Magnetic } from '@/components/ui/Magnetic';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-12 h-px bg-primary/40" />
            <span className="text-[12px] font-bold tracking-[0.5em] text-primary uppercase">
              {PERSONAL_INFO.role}
            </span>
            <span className="w-12 h-px bg-primary/40" />
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-display font-bold mb-10 tracking-tighter leading-[0.8] italic uppercase">
            Future<br />
            <span className="text-primary not-italic">Architect</span>
          </h1>

          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16 font-medium leading-relaxed tracking-tight">
            Engineering premium digital interfaces for <span className="text-foreground">Bharat Singh</span>. 
            Merging deep logic with high-fidelity aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic strength={0.15}>
              <a 
                href="#projects"
                className="group relative px-12 py-6 bg-primary text-white rounded-full font-bold flex items-center gap-4 overflow-hidden transition-all shadow-2xl shadow-primary/30"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">View My Work</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>
            
            <Magnetic strength={0.15}>
              <a 
                href="#contact"
                className="px-12 py-6 glass-panel rounded-full font-bold uppercase tracking-widest text-xs hover:border-primary/50 transition-all"
              >
                Let's Talk
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-12 left-12 hidden xl:block">
        <div className="flex items-center gap-5 text-primary/40">
          <Star size={16} className="animate-spin-slow" />
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold">Based in Kathmandu, Nepal</span>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden xl:flex flex-col items-center gap-6"
      >
        <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[11px] uppercase tracking-[0.6em] font-bold text-muted-foreground">Scroll Down</span>
      </motion.div>
    </section>
  );
};
