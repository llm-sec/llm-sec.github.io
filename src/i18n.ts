import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { InitOptions } from 'i18next';

// Check if we're in a GitHub Pages environment
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/llm-sec.github.io' : '';

// Define our initialization options
const initOptions: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh'],
  debug: process.env.NODE_ENV === 'development',
  
  interpolation: {
    escapeValue: false, // React already safe from XSS
  },
  
  detection: {
    // Order and from where user language should be detected
    order: ['navigator', 'querystring', 'localStorage', 'cookie', 'htmlTag'],
    
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
};

i18n
  // Use backend to load translations from /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init(initOptions);

// Force immediate language detection based on browser settings
const detectAndSetLanguage = () => {
  // Get browser language (like 'zh-CN' or 'en-US')
  const browserLang = navigator.language;
  // Extract the language code (like 'zh' or 'en')
  const langCode = browserLang.split('-')[0];
  
  // Check if it's one of our supported languages
  if (['en', 'zh'].includes(langCode)) {
    i18n.changeLanguage(langCode);
    console.log(`Language set to ${langCode} based on browser settings`);
  }
};

// Run detection immediately and when DOM is fully loaded
detectAndSetLanguage();
window.addEventListener('DOMContentLoaded', detectAndSetLanguage);

export default i18n; 