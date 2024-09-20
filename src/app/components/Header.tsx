'use client';

import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 p-5 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#home">Robin Sharma</a>
        </h1>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#experience" className="hover:text-gray-600">Experience</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-5 flex flex-col items-center md:hidden">
            <a href="#home" className="py-2">Home</a>
            <a href="#experience" className="py-2">Experience</a>
            <a href="#skills" className="py-2">Skills</a>
            <a href="#projects" className="py-2">Projects</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
