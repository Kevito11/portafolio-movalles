import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('portfolio_lang') : null;
    return saved === 'es' || saved === 'en' ? saved : 'en';
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', language);
      document.documentElement.lang = language;
      document.title = language === 'en'
        ? 'Michael Ovalles | Manual QA Tester'
        : 'Michael Ovalles | QA Tester Manual';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] || translations.en }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
