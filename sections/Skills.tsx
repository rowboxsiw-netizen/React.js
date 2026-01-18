
"use client";

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';
import React from 'react';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase mb-4 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">TECHNICAL ARSENAL</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col p-8 glass-panel rounded-[2.5rem] hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                   </div>
                   <div className="text-right">
                    <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">Expertise</div>
                    <div className="text-2xl font-display font-bold text-primary">{skill.level}%</div>
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{skill.name}</h3>
                
                <div className="space-y-4">
                  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                    {skill.category || 'Core Stack'} / Production Grade
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
