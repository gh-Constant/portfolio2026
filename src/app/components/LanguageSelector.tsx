'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n, LANGUAGES, Language } from '../contexts/I18nContext';
import { MdLanguage, MdExpandMore } from 'react-icons/md';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const currentLanguage = LANGUAGES[language];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-foreground/20 bg-background hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40"
        aria-label={t('language.select', 'Select Language')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <MdLanguage className="w-4 h-4 text-foreground/70" />
        <span className="text-sm font-medium text-foreground/90">
          {currentLanguage.flag}
        </span>
        <span className="text-sm text-foreground/70 hidden sm:inline">
          {currentLanguage.name}
        </span>
        <MdExpandMore 
          className={`w-4 h-4 text-foreground/70 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-foreground/20 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="py-1" role="listbox" aria-label={t('language.select', 'Select Language')}>
            {Object.entries(LANGUAGES).map(([code, lang]) => {
              const isSelected = code === language;
              return (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code as Language)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-foreground/5 transition-colors duration-150 focus:outline-none focus:bg-foreground/5 ${
                    isSelected ? 'bg-foreground/10' : ''
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                      {lang.name}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {code.toUpperCase()}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-2 h-2 bg-foreground rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;