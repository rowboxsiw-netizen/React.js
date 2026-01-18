
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
  // Set to light mode for the White & Gold aesthetic
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative w-full min-h-screen bg-background">
      <CustomCursor />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Toaster />
      
      {/* Subtle non-laggy background texture */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A028_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
    </div>
  );
};

export default App;
