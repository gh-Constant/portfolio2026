'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? `bg-background/95 backdrop-blur-md border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} shadow-sm` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200 group cursor-pointer">
              <div className="p-2.5 bg-foreground text-background rounded-lg group-hover:scale-105 transition-transform duration-200">
                <HiCode size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  Constant Suchet
                </span>
                <span className="text-sm text-foreground/60 font-medium">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            {/* Theme Toggle */}
            <div className="ml-6 pl-6 border-l border-foreground/20">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-white/20 hover:border-white/40 hover:bg-white/10 text-white/70 hover:text-white' 
                    : 'border-black/20 hover:border-black/40 hover:bg-black/10 text-black/70 hover:text-black'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? 
                  <MdDarkMode size={18} className="transition-transform duration-200 hover:rotate-12" /> : 
                  <MdLightMode size={18} className="transition-transform duration-200 hover:rotate-12" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg border transition-all duration-200 ${
                theme === 'dark' 
                  ? 'border-white/20 hover:border-white/40 hover:bg-white/10 text-white/70 hover:text-white' 
                  : 'border-black/20 hover:border-black/40 hover:bg-black/10 text-black/70 hover:text-black'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <MdDarkMode size={18} className="transition-transform duration-200 hover:rotate-12" /> : 
                <MdLightMode size={18} className="transition-transform duration-200 hover:rotate-12" />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;