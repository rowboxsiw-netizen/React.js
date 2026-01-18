
"use client";

import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 border border-white/40 dark:border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Let's Build Something <span className="text-primary">Legendary</span>
            </h2>
            <p className="text-muted-foreground">
              Available for select freelance opportunities and consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a 
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative w-16 h-16 shrink-0">
                <img 
                  src={PERSONAL_INFO.whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-sm text-primary">Chat with Bharat</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-4 p-6 bg-background rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative w-16 h-16 shrink-0">
                <img 
                  src={PERSONAL_INFO.gmailIcon} 
                  alt="Gmail" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-lg">Email Me</h3>
                <p className="text-sm text-muted-foreground truncate">{PERSONAL_INFO.email}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
