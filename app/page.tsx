
import { Suspense, lazy } from "react";
import { Hero } from "@/sections/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamic Imports for Client-Heavy Components (SSR disabled for WebGL/Animations)
const CustomCursor = dynamic(() => import("@/components/CustomCursor").then(m => m.CustomCursor), { ssr: false });
const About = dynamic(() => import("@/sections/About").then(m => m.About), { ssr: true });
const Skills = dynamic(() => import("@/sections/Skills").then(m => m.Skills), { ssr: true });
const Projects = dynamic(() => import("@/sections/Projects").then(m => m.Projects), { ssr: true });
const Contact = dynamic(() => import("@/sections/Contact").then(m => m.Contact), { ssr: true });

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <CustomCursor />
      <Navbar />
      
      {/* Above the fold: Rendered immediately */}
      <Hero />
      
      {/* Below the fold: Streamed with Suspense boundaries for 100/100 Lighthouse performance */}
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
      
      {/* Texture Overlay - Low priority */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[1]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      </div>
    </main>
  );
}

function SectionPlaceholder() {
  return <div className="h-96 w-full animate-pulse bg-white/5" />;
}
