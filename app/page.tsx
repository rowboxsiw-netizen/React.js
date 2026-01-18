
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
      </div>
    </main>
  );
}
