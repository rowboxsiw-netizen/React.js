
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/Toast';

const App: React.FC = () => {
  // Purely Light Mode for the "Premium White & Gold" request
  const isDarkMode = false;

  return (
    <div className="relative w-full min-h-screen bg-background text-textMain">
      <CustomCursor />
      <Navbar toggleTheme={() => {}} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Toaster />
      
      {/* Performance-optimized static textured background instead of moving blurs */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C5A028_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
      </div>
    </div>
  );
};

export default App;
