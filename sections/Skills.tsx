
"use client";

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground">The tools I use to forge digital products.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <skill.icon className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold bg-secondary/50 px-2 py-1 rounded-md">{skill.level}%</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
