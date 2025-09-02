'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/I18nContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import LanguageSelector from './LanguageSelector';
import HamburgerIcon from './HamburgerIcon';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
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
    setIsMenuOpen(false);
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
                  {t('home.title', 'Constant Suchet')}
                </span>
                <span className="hidden sm:block text-sm text-foreground/60 font-medium">
                  {t('home.subtitle', 'Full Stack Developer')}
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
              {t('nav.projects', 'Projects')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
            >
              {t('home.skillsTitle', 'Skills')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative px-3 py-2 text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium group"
            >
              {t('nav.contact', 'Contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            {/* Language Selector & Theme Toggle */}
            <div className="ml-6 pl-6 border-l border-foreground/20 flex items-center space-x-3">
              <LanguageSelector />
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'border-white/20 hover:border-white/40 hover:bg-white/10 text-white/70 hover:text-white' 
                    : 'border-black/20 hover:border-black/40 hover:bg-black/10 text-black/70 hover:text-black'
                }`}
                aria-label={t('theme.toggle', 'Toggle theme')}
              >
                {theme === 'light' ? 
                  <MdDarkMode size={18} className="transition-transform duration-200 hover:rotate-12" /> : 
                  <MdLightMode size={18} className="transition-transform duration-200 hover:rotate-12" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <HamburgerIcon 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="z-50"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.projects', 'Projects')}
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('home.skillsTitle', 'Skills')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.contact', 'Contact')}
          </button>
          <div className="pt-8 mt-8 border-t border-foreground/20 flex items-center space-x-6">
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                theme === 'dark' 
                  ? 'border-white/20 hover:border-white/40 hover:bg-white/10 text-white/70 hover:text-white' 
                  : 'border-black/20 hover:border-black/40 hover:bg-black/10 text-black/70 hover:text-black'
              }`}
              aria-label={t('theme.toggle', 'Toggle theme')}
            >
              {theme === 'light' ? 
                <MdDarkMode size={20} /> : 
                <MdLightMode size={20} />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;