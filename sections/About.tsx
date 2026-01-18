
"use client";

import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Engineering <br/>
              <span className="text-primary">Perfection</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don't just write code; I architect digital experiences. With a focus on performance, accessibility, and pixel-perfect design, I bridge the gap between creative vision and technical reality.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: Zap, title: "High Performance", desc: "Optimized for core web vitals." },
                { icon: Shield, title: "Secure Architecture", desc: "Best practices in frontend security." },
                { icon: Target, title: "Pixel Perfect", desc: "Design implementation precision." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-secondary/30 relative overflow-hidden border-8 border-background shadow-2xl">
              <img 
                src="https://picsum.photos/seed/bharat/800/800" 
                alt="Bharat Singh"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
