
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { ThreeBackground } from '../components/ThreeBackground';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            Available for new opportunities ⚡️
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8">
            I build <span className="text-primary italic">exceptional</span> digital experiences.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm <span className="font-bold text-gray-900 dark:text-white">{PERSONAL_INFO.name}</span>, a high-performance engineer focused on building the future of the web with precision and flair.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-primary text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-bold flex items-center gap-2">
                View My Work <ArrowDownRight size={20} className="group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#6366f1' }}
                  className="p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 hover:border-primary/50 transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
