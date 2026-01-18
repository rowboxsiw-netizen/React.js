
import React from 'react';
import { Code2, Palette, Globe, Smartphone, Server, Cpu } from 'lucide-react';
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Bharat Singh",
  role: "Senior Fullstack Engineer & UI Architect",
  email: "noreply@authorize.qzz.io",
  whatsapp: "https://wa.me/9779826048177?text=Hello%20Bharat%20Singh",
  whatsappIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png",
  gmailIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png",
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  // Fixed: Added missing icon property to each skill object
  { name: 'React / Next.js', level: 98, category: 'frontend', icon: Code2 },
  { name: 'TypeScript', level: 95, category: 'frontend', icon: Code2 },
  { name: 'Node.js', level: 92, category: 'backend', icon: Server },
  { name: 'Three.js / WebGL', level: 85, category: 'frontend', icon: Cpu },
  { name: 'UI/UX Design', level: 90, category: 'design', icon: Palette },
  { name: 'PostgreSQL', level: 88, category: 'backend', icon: Globe },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aurora AI Nexus',
    description: 'A revolutionary AI orchestration platform for decentralized computing nodes.',
    tags: ['Next.js', 'PyTorch', 'Web3'],
    image: 'https://picsum.photos/seed/aurora/800/600',
    link: '#',
  },
  {
    id: '2',
    title: 'Vortex Engine',
    description: 'A real-time physical simulation engine built for the browser using WebGPU.',
    tags: ['WebGPU', 'Rust', 'TypeScript'],
    image: 'https://picsum.photos/seed/vortex/800/600',
    link: '#',
  },
  {
    id: '3',
    title: 'Nova Dashboard',
    description: 'High-performance analytics dashboard for global logistics monitoring.',
    tags: ['D3.js', 'React', 'Tailwind'],
    image: 'https://picsum.photos/seed/nova/800/600',
    link: '#',
  },
];