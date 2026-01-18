
import React, { Suspense } from 'react';
import { Star } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';
import dynamic from 'next/dynamic';

// Dynamic import for WebGL background to prevent blocking main thread
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground').then(m => m.ThreeBackground), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />
});

// Client-only animations isolated to a wrapper
const HeroMotion = dynamic(() => import('@/components/motion/HeroMotion').then(m => m.HeroMotion), { ssr: false });

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <HeroMotion role={PERSONAL_INFO.role} />
      </div>
      
      <div className="absolute bottom-12 left-12 hidden xl:block">
        <div className="flex items-center gap-5 text-primary/40">
          <Star size={16} className="animate-spin-slow" />
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold">Based in Kathmandu, Nepal</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden xl:flex flex-col items-center gap-6">
        <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[11px] uppercase tracking-[0.6em] font-bold text-muted-foreground">Scroll Down</span>
      </div>
    </section>
  );
};
