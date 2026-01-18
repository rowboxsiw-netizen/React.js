
"use client";

import React, { useEffect, useRef, Suspense } from 'react';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import("@/components/CustomCursor").then(m => m.CustomCursor),
  { ssr: false }
);

interface SmoothScrollProps {
  children?: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      {children}
    </>
  );
};
