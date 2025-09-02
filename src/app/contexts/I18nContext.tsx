'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Supported languages
export type Language = 'en' | 'fr';

// Language configuration
export const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr' as const
  },
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr' as const
  }
} as const;

// RTL languages list (for future expansion)
export const RTL_LANGUAGES: Language[] = [];

// Check if language is RTL
export const isRTL = (lang: Language): boolean => {
  return RTL_LANGUAGES.includes(lang);
};

// Translation type structure
export interface Translations {
  [key: string]: string | Translations;
}

// Project translation structure
interface ProjectTranslation {
  title: string;
  description: string;
  skills: string[];
  overview?: string;
  sections?: {
    [key: string]: {
      title: string;
      content: {
        [key: string]: string;
      };
    };
  };
}

// Context interface
interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  dir: 'ltr' | 'rtl';
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translation storage
const translationsCache: Record<Language, Translations> = {
  en: {},
  fr: {}
};

// Load translations dynamically from new folder structure
const loadTranslations = async (lang: Language): Promise<Translations> => {
  if (Object.keys(translationsCache[lang]).length > 0) {
    return translationsCache[lang];
  }

  try {
    // Load common translations
    const commonTranslations = await import(`../locales/languages/${lang}/common.json`);
    
    // Load project translations
    const projectFiles = ['chronosync', 'pauvocoder', 'puissancex'];
    const projectTranslations: { [key: string]: ProjectTranslation } = {};
    
    for (const project of projectFiles) {
      try {
        const projectData = await import(`../locales/languages/${lang}/projects/${project}.json`);
        projectTranslations[project] = projectData.default;
      } catch (error) {
        console.warn(`Failed to load ${project} translations for ${lang}:`, error);
        projectTranslations[project] = {};
      }
    }
    
    // Merge common and project translations
    const mergedTranslations = {
      ...commonTranslations.default,
      projects: projectTranslations
    };
    
    translationsCache[lang] = mergedTranslations;
    return mergedTranslations;
  } catch (error) {
    console.warn(`Failed to load translations for ${lang}:`, error);
    return {};
  }
};

// Translation function with fallback mechanism
const getTranslation = (translations: Translations, key: string, fallback?: string): string => {
  const keys = key.split('.');
  let current: string | Translations = translations;
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback mechanism: try English translations if current language fails
      if (Object.keys(translationsCache.en).length > 0) {
        const englishTranslation = getTranslationFromCache(translationsCache.en, key);
        if (englishTranslation !== key) {
          console.warn(`Translation missing for key '${key}', using English fallback`);
          return englishTranslation;
        }
      }
      return fallback || key;
    }
  }
  
  return typeof current === 'string' ? current : fallback || key;
};

// Helper function to get translation from specific cache
const getTranslationFromCache = (translations: Translations, key: string): string => {
  const keys = key.split('.');
  let current: string | Translations = translations;
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return key;
    }
  }
  
  return typeof current === 'string' ? current : key;
};

// Provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const initializeLanguage = async () => {
      let initialLang: Language = 'en';
      
      // Try to get from localStorage
      const savedLang = localStorage.getItem('portfolio-language') as Language;
      if (savedLang && savedLang in LANGUAGES) {
        initialLang = savedLang;
      } else {
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0] as Language;
        if (browserLang in LANGUAGES) {
          initialLang = browserLang;
        }
      }
      
      setLanguageState(initialLang);
      const loadedTranslations = await loadTranslations(initialLang);
      setTranslations(loadedTranslations);
      setIsLoading(false);
      setMounted(true);
    };

    initializeLanguage();
  }, []);

  // Update translations when language changes
  useEffect(() => {
    if (!mounted) return;
    
    const updateTranslations = async () => {
      setIsLoading(true);
      const loadedTranslations = await loadTranslations(language);
      setTranslations(loadedTranslations);
      localStorage.setItem('portfolio-language', language);
      
      // Update document language and direction
      document.documentElement.lang = language;
      document.documentElement.dir = LANGUAGES[language].dir;
      
      setIsLoading(false);
    };

    updateTranslations();
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    if (lang in LANGUAGES) {
      setLanguageState(lang);
    }
  };

  const t = (key: string, fallback?: string): string => {
    return getTranslation(translations, key, fallback);
  };

  const contextValue: I18nContextType = {
    language,
    setLanguage,
    t,
    dir: LANGUAGES[language].dir,
    isLoading
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use i18n context
export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Utility hook for translations only
export function useTranslation() {
  const { t } = useI18n();
  return { t };
}