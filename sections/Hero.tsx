
import React from 'react';
import { Star } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';
import { HeroVisuals } from '@/components/visuals/HeroVisuals';

/**
 * Hero is a Server Component for SEO and LCP performance.
 * It remains static during SSR, while dynamic 3D elements stream in via HeroVisuals.
 */
export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 
        HeroVisuals is a Client Component. 
        It safely uses dynamic(..., { ssr: false }) for WebGL and Motion.
      */}
      <HeroVisuals role={PERSONAL_INFO.role} />
      
      {/* Decorative static elements */}
      <div className="absolute bottom-12 left-12 hidden xl:block z-20">
        <div className="flex items-center gap-5 text-primary/40">
          <Star size={16} className="animate-spin-slow" />
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold">Based in Kathmandu, Nepal</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden xl:flex flex-col items-center gap-6 z-20">
        <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[11px] uppercase tracking-[0.6em] font-bold text-muted-foreground">Scroll Down</span>
      </div>
    </section>
  );
};
