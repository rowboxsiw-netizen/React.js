
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useToast } from '../components/Toast';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    addToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white dark:bg-surface rounded-[3rem] p-12 md:p-20 shadow-2xl border border-gray-100 dark:border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">
              Let's create something <span className="text-primary underline decoration-accent/30 decoration-8 underline-offset-8 italic">legendary</span> together.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Direct Connect */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">One-click Connect</h3>
              
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
              >
                <img src={PERSONAL_INFO.whatsappIcon} alt="WhatsApp" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xl font-bold text-[#25D366]">Chat on WhatsApp</div>
                  <div className="text-gray-500 text-sm">Response time: &lt; 2 hours</div>
                </div>
              </a>

              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-6 p-6 rounded-3xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group"
              >
                <img src={PERSONAL_INFO.gmailIcon} alt="Gmail" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xl font-bold text-primary">Email Me Directly</div>
                  <div className="text-gray-500 text-sm">{PERSONAL_INFO.email}</div>
                </div>
              </a>
            </div>

            {/* Quick Form/Action */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Email</h4>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-white/5">
                  <span className="font-mono text-lg">{PERSONAL_INFO.email}</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white dark:hover:bg-surface rounded-xl transition-colors"
                  >
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              <button className="group relative w-full px-10 py-6 bg-primary text-white rounded-3xl font-bold text-xl overflow-hidden hover:scale-105 transition-all shadow-xl shadow-primary/20">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start a Project <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
