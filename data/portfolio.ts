
import { Github, Linkedin, Twitter, Code2, Database, Layout, Smartphone } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Bharat Singh",
  role: "Principal Frontend Engineer",
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

export const SKILLS = [
  { name: 'React 19', level: 98, icon: Code2 },
  { name: 'Next.js App Router', level: 96, icon: Layout },
  { name: 'TypeScript', level: 95, icon: Code2 },
  { name: 'Tailwind CSS', level: 99, icon: Layout },
  { name: 'Framer Motion', level: 92, icon: Smartphone },
  { name: 'Node.js', level: 88, icon: Database },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Aurora Design System',
    description: 'A comprehensive, accessible enterprise design system used by 50+ internal apps.',
    tags: ['React', 'Storybook', 'A11y'],
    image: 'https://picsum.photos/seed/aurora/800/600',
    link: '#',
  },
  {
    id: '2',
    title: 'Neo-Finance Dashboard',
    description: 'Real-time financial analytics dashboard handling 10k+ transactions per second via WebSockets.',
    tags: ['Next.js', 'D3.js', 'WebSockets'],
    image: 'https://picsum.photos/seed/finance/800/600',
    link: '#',
  },
  {
    id: '3',
    title: 'Hyperion 3D',
    description: 'WebGL-powered product configurator for automotive retail with 60FPS performance.',
    tags: ['Three.js', 'R3F', 'WebGL'],
    image: 'https://picsum.photos/seed/hyperion/800/600',
    link: '#',
  },
];
