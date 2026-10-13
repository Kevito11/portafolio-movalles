import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#0d1310] min-h-screen text-[#e2e8f0] selection:bg-[#d8c58f] selection:text-[#0d1310]">
        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
