
import { Suspense } from "react";
import { Hero } from "@/sections/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

/**
 * Server Components can use dynamic imports for code splitting, 
 * but { ssr: false } is forbidden at this level.
 * We rely on the components themselves to handle client-side logic.
 */
const About = dynamic(() => import("@/sections/About").then(m => m.About));
const Skills = dynamic(() => import("@/sections/Skills").then(m => m.Skills));
const Projects = dynamic(() => import("@/sections/Projects").then(m => m.Projects));
const Contact = dynamic(() => import("@/sections/Contact").then(m => m.Contact));

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      
      {/* Above the fold: Hero handles its own internal client visuals */}
      <Hero />
      
      {/* Below the fold: Streamed sections */}
      <Suspense fallback={<SectionPlaceholder />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionPlaceholder />}>
        <Contact />
      </Suspense>
      
      <Footer />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[1]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      </div>
    </main>
  );
}

function SectionPlaceholder() {
  return <div className="h-[60vh] w-full animate-pulse bg-white/5 rounded-3xl my-8 mx-auto max-w-7xl" />;
}
