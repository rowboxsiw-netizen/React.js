
"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

/**
 * We move the ssr: false dynamic imports into this Client Component.
 * This satisfies Next.js App Router rules.
 */
const ThreeBackground = dynamic(
  () => import('@/components/ThreeBackground').then(m => m.ThreeBackground),
  { ssr: false }
);

const HeroMotion = dynamic(
  () => import('@/components/motion/HeroMotion').then(m => m.HeroMotion),
  { ssr: false }
);

interface HeroVisualsProps {
  role: string;
}

export const HeroVisuals = ({ role }: HeroVisualsProps) => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <ThreeBackground />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Suspense fallback={null}>
          <HeroMotion role={role} />
        </Suspense>
      </div>
    </>
  );
};
