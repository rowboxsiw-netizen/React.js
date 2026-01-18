
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
    addToast("Email copied!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-background rounded-[3rem] p-8 md:p-16 shadow-2xl border border-primary/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 text-textMain">
              Let's craft <span className="text-primary italic">gold</span> together.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Ready to elevate your digital presence with high-performance engineering? Reach out today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Action Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Direct Channels</h3>
              
              <a 
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-primary/10 hover:border-primary/40 transition-all shadow-sm group active:scale-95"
              >
                <div className="relative">
                  <img src={PERSONAL_INFO.whatsappIcon} alt="WhatsApp" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">WhatsApp</div>
                  <div className="text-primary font-medium text-sm">Response: Immediate</div>
                </div>
              </a>

              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-primary/10 hover:border-primary/40 transition-all shadow-sm group active:scale-95"
              >
                <img src={PERSONAL_INFO.gmailIcon} alt="Gmail" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xl font-bold text-gray-900">Official Email</div>
                  <div className="text-primary font-medium text-sm">{PERSONAL_INFO.email}</div>
                </div>
              </a>
            </div>

            {/* Quick Action */}
            <div className="flex flex-col justify-center">
              <div className="p-8 rounded-[2.5rem] bg-white border border-primary/20 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Send size={80} className="text-primary" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4">Quick Copy</h4>
                <div className="flex items-center justify-between p-4 bg-background rounded-2xl border border-primary/10 mb-8">
                  <span className="font-mono text-sm md:text-base truncate mr-4">{PERSONAL_INFO.email}</span>
                  <button onClick={handleCopy} className="p-2 hover:bg-primary/10 rounded-xl transition-colors shrink-0">
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} className="text-primary" />}
                  </button>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all">
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
