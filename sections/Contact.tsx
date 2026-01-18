
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

export const Contact = () => {
  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-panel rounded-[4rem] p-10 md:p-24 border-white/20 dark:border-white/5 shadow-3xl">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[12px] font-bold tracking-[0.5em] text-primary uppercase mb-8 block"
              >
                Get in Touch
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
                Let's initiate a <span className="text-primary italic">Dialogue.</span>
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                Currently open to principal-level opportunities and high-impact digital architectural collaborations.
              </p>
              
              <div className="space-y-6">
                <Magnetic strength={0.1}>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <Mail className="group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block mb-1">Send an Email</span>
                      <span className="text-xl font-bold">{PERSONAL_INFO.email}</span>
                    </div>
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-10">
              <Magnetic strength={0.05}>
                <a 
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-10 bg-white/5 dark:bg-black/20 rounded-[3rem] border border-white/10 hover:border-primary/40 transition-all duration-700 shadow-2xl"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center">
                      <MessageCircle size={32} className="text-primary" />
                    </div>
                    <ArrowRight className="text-muted-foreground group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Direct Messaging</h3>
                  <p className="text-muted-foreground text-lg mb-8">Fast-track our conversation via encrypted mobile channels.</p>
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">Open WhatsApp — Fast Response</span>
                </a>
              </Magnetic>
              
              <div className="text-center">
                 <p className="text-muted-foreground/60 text-sm font-medium italic">"Architecture is where form meets function in digital space."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
    </section>
  );
};
