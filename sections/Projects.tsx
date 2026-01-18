
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { Project } from '@/types';

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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as any}
      className="group relative spotlight-card p-px rounded-[3rem] bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/5 overflow-hidden"
    >
      <div className="relative bg-background/80 dark:bg-black/40 backdrop-blur-md rounded-[2.9rem] p-8 h-full transition-all duration-500 group-hover:bg-transparent">
        <div className="aspect-[16/11] rounded-[2.2rem] overflow-hidden mb-10 relative shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-6 right-6">
             <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 border-white/20">
                <ArrowUpRight className="text-primary" size={24} />
             </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-4xl font-display font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[12px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block"
            >
              Curated Selection
            </motion.span>
            <h2 className="text-7xl md:text-[9rem] font-display font-bold tracking-tighter mb-10 leading-[0.85] italic">
              Digital<br />
              <span className="text-primary not-italic font-sans tracking-tight">Artifacts</span>
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed tracking-tight">
              A gallery of high-performance digital systems, focusing on deep interaction and resilient architecture.
            </p>
          </div>
          <div className="hidden lg:block pb-10">
            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground border-b border-white/10 pb-4">
              <span>Latest Works</span>
              <span className="text-primary">2024—2026</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center"
        >
          <button className="group relative inline-flex items-center gap-6 text-xl font-bold hover:text-primary transition-colors py-4 px-8 rounded-full glass-panel">
            <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
              <Plus size={24} />
            </span>
            Explore Full Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
};
