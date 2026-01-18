
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100/50 dark:bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My Expert <span className="text-primary">Arsenal</span>
          </motion.h2>
          <p className="text-gray-500">Continuously evolving with the latest 2026 tech standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-surface border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="text-xl font-bold">{skill.name}</span>
                <span className="text-primary font-display font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-primary transition-colors">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
