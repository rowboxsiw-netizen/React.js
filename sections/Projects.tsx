
"use client";

// Added React import for standard component and MouseEvent types
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { Project } from '@/types';

// Used React.FC to properly handle implicit key and children props in JSX lists
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as any}
      className="group relative spotlight-card p-1 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="relative bg-background rounded-[2.4rem] p-6 h-full transition-colors group-hover:bg-transparent">
        <div className="aspect-[16/10] rounded-[1.8rem] overflow-hidden mb-8 relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
             <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight className="text-primary" size={20} />
             </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-display font-bold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 italic">
              SELECTED<br />
              <span className="text-primary not-italic font-sans tracking-tight">EXPERIENCES</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A curated collection of digital artifacts focusing on interaction design and performance architecture.
            </p>
          </div>
          <div className="pb-4">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground border-b border-border pb-2">
              <span>Case Studies</span>
              <span className="text-primary">03</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <button className="group inline-flex items-center gap-4 text-lg font-bold hover:text-primary transition-colors">
            <span className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:rotate-90 transition-transform">
              <Plus />
            </span>
            View Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
};
