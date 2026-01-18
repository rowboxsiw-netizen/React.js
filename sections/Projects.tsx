
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-gray-500 max-w-lg">A selection of high-impact digital products and experiments.</p>
          </div>
          <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2">
            View all projects <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform"><ExternalLink size={20} /></button>
                  <button className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform"><Github size={20} /></button>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gray-200 dark:border-gray-800 rounded-full text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
