'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm border-b border-foreground/20' : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-foreground/80 transition-colors"
            >
              CS
            </button>
          </div>
          
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="text-foreground/80 hover:text-foreground transition-colors p-2 border border-foreground/20 hover:border-foreground/40"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;