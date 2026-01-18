
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-block px-5 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-sm">
            ⚜️ Senior UI Architect
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 text-textMain leading-[1.1]">
            Curating <span className="text-primary">Elite</span> Digital <span className="italic font-light">Elegance.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            I am <span className="font-bold text-textMain">{PERSONAL_INFO.name}</span>. I deliver high-performance code wrapped in award-winning aesthetics.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative px-10 py-5 bg-primary text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30"
            >
              <span className="relative z-10 font-bold flex items-center gap-2 text-lg">
                View Collection <ArrowDownRight size={22} className="group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, backgroundColor: '#FAF9F6' }}
                  className="p-4 rounded-full border border-primary/20 bg-white text-primary hover:border-primary transition-all shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <div className="w-5 h-8 rounded-full border border-primary/20 flex justify-center pt-1">
          <div className="w-0.5 h-1.5 bg-primary/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
