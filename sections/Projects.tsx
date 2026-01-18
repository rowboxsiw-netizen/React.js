
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { Project } from '@/types';
import Image from 'next/image';

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as any}
      className="group relative spotlight-card p-px rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="relative bg-background/90 backdrop-blur-md rounded-[2.4rem] p-6 h-full transition-all duration-500 group-hover:bg-transparent">
        <div className="aspect-[16/10] rounded-[1.8rem] overflow-hidden mb-8 relative shadow-xl">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 right-4">
             <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all border-white/20">
                <ArrowUpRight className="text-primary" size={20} />
             </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-display font-bold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter italic">
              Digital Artifacts
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              A gallery of high-performance digital systems and architectures.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
