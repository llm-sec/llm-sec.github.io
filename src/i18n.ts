import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Check if we're in a GitHub Pages environment
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/llm-sec.github.io' : '';

i18n
  // Use backend to load translations from /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
    
    detection: {
      // Order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      
      // Keys or params to look for in the detection sources
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      
      // Cache user language on
      caches: ['localStorage', 'cookie'],
    },

    backend: {
      // Path to load translations from, adjusted for GitHub Pages
      loadPath: `${basePath}/locales/{{lng}}/translation.json`,
    },
    
    react: {
      useSuspense: true,
    },
  });

export default i18n; 