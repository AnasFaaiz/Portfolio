'use client';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/Homepage/Hero';
import Skills from '../components/features/Homepage/Skills';
import Projects from '../components/features/Homepage/Projects';
import Experience from '../components/features/Homepage/Experience';
import Certifications from '../components/features/Homepage/Certifications';
import ContactPage from '../Contact/page';


export default function Homepage() {
  return (
    <div id="top" className="relative min-h-screen bg-void text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />      {/* #work        */}
        <Skills />        {/* #stack       */}
        <Experience />    {/* #path        */}
        <Certifications />{/* #credentials */}
        <ContactPage />   {/* #contact     */}
      </main>
    </div>
  );
}
