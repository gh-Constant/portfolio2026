'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';

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
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            >
              <div className="p-2 bg-foreground text-background rounded-lg group-hover:scale-105 transition-transform">
                <HiCode size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">Constant Suchet</span>
                <span className="text-xs text-foreground/60 font-medium">Full Stack Developer</span>
              </div>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full"></span>
            </button>
            
            {/* Theme Toggle */}
            <div className="ml-4 pl-4 border-l border-foreground/20">
              <button
                onClick={toggleTheme}
                className="text-foreground/70 hover:text-foreground transition-all p-2.5 border border-foreground/20 hover:border-foreground/40 rounded-lg hover:bg-foreground/5 group"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? 
                  <MdDarkMode size={18} className="group-hover:rotate-12 transition-transform" /> : 
                  <MdLightMode size={18} className="group-hover:rotate-12 transition-transform" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-foreground/70 hover:text-foreground transition-colors p-2 border border-foreground/20 hover:border-foreground/40 rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MdDarkMode size={18} /> : <MdLightMode size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;