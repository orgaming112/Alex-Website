import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import heTranslations from '../locales/he/translation.json';
import ruTranslations from '../locales/ru/translation.json';

const LanguageContext = createContext(null);

const LOCALES = {
  he: heTranslations,
  ru: ruTranslations,
};

const getBrowserPreference = () => {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const language = navigator.language || navigator.userLanguage || '';
  if (language.toLowerCase().startsWith('ru')) {
    return 'ru';
  }

  return null;
};

export const LanguageProvider = ({ children }) => {
  const browserPref = useMemo(getBrowserPreference, []);
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language');
    return stored === 'ru' ? 'ru' : 'he';
  });

  const [showBrowserSuggestion, setShowBrowserSuggestion] = useState(() => {
    return !localStorage.getItem('language') && browserPref === 'ru';
  });

  const translations = LOCALES[language] || LOCALES.he;
  const direction = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language === 'he' ? 'he' : 'ru';
    localStorage.setItem('language', language);
  }, [direction, language]);

  const switchLanguage = (lang) => {
    if (lang !== 'he' && lang !== 'ru') {
      return;
    }
    setLanguage(lang);
    setShowBrowserSuggestion(false);
  };

  const t = (path, fallback = '') => {
    const value = path.split('.').reduce((obj, segment) => {
      return obj && obj[segment] ? obj[segment] : null;
    }, translations);
    return value || fallback || path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        switchLanguage,
        t,
        direction,
        browserPref,
        showBrowserSuggestion,
        setShowBrowserSuggestion,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
