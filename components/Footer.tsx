
import { PERSONAL_INFO } from '@/data/portfolio';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-primary">LinkedIn</a>
          <a href="#" className="hover:text-primary">GitHub</a>
          <a href="#" className="hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
