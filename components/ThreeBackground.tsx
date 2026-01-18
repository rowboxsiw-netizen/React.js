
"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const points = new Float32Array(2500 * 3);
    for (let i = 0; i < 2500; i++) {
      // Create a more galaxy-like distribution
      const radius = 5 + Math.random() * 5;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius * (Math.random() - 0.5) * 4;
      const y = Math.sin(angle) * radius * (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 20;
      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Parallax movement based on mouse
    const mouseX = state.mouse.x * 0.1;
    const mouseY = state.mouse.y * 0.1;
    
    ref.current.rotation.x += delta * 0.05 + mouseY * 0.01;
    ref.current.rotation.y += delta * 0.03 + mouseX * 0.01;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#C5A028"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};
