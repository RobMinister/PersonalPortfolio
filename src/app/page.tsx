"use client";

import About from './components/About'; // Changed from Home to About
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';

export default function Page() {
  return (
    <>
      <Header />
      <About />  {/* Use About instead of Home */}
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
