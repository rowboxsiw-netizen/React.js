
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Crafting Digital Excellence Through <span className="text-primary">Passion</span> & Precision.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              With over 8 years of experience, I've honed the ability to bridge the gap between design and development. I don't just write code; I architect systems that scale and design interfaces that delight users.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "100+ Projects", desc: "Successfully Delivered" },
                { icon: Zap, title: "Speed Focused", desc: "95+ Performance Scores" },
                { icon: Shield, title: "Reliable Arch", desc: "Clean, Scalable Code" },
                { icon: Target, title: "User Centric", desc: "Designed for Growth" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-surface border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors">
                  <item.icon className="text-primary mb-4" size={28} />
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden rotate-3 relative group">
              <img 
                src="https://picsum.photos/seed/bharat/800/800" 
                alt="Bharat Singh" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 p-6 bg-white dark:bg-surface rounded-2xl shadow-xl border border-gray-100 dark:border-white/5"
            >
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-xs font-medium uppercase tracking-wider text-gray-500">Years Exp</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
