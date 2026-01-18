
"use client";

// Added React import for standard component context
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

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic 3D Environment */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase">
              {PERSONAL_INFO.role}
            </span>
            <span className="w-8 h-px bg-primary/40" />
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-display font-bold mb-8 tracking-tighter leading-[0.85] italic">
            DIGITAL<br />
            <span className="text-primary italic">ALCHEMY</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Crafting high-fidelity digital systems for <span className="text-foreground">Bharat Singh</span>. 
            Where advanced engineering meets luxury aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.1}>
              <a 
                href="#projects"
                className="group relative px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center gap-3 overflow-hidden transition-all shadow-2xl shadow-primary/20"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">Explore Portfolio</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>
            
            <Magnetic strength={0.1}>
              <a 
                href="#contact"
                className="px-10 py-5 glass-panel rounded-full font-bold uppercase tracking-widest text-xs hover:border-primary/50 transition-all"
              >
                Start a Project
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Ambient Elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex items-center gap-4 text-primary/40">
          <Star size={14} className="animate-spin-slow" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Awwwards Honorable Mention 2026</span>
        </div>
      </div>

      {/* Floating Scroll Badge */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  );
};
