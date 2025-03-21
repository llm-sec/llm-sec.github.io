import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// 确定当前环境的基础路径
const getBasePath = () => {
  // 是否在GitHub Pages环境
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // GitHub Pages使用仓库名作为基础路径
    return '';
  }
  
  // 本地开发环境
  return '';
};

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
      // Path to load translations from
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    react: {
      useSuspense: true,
    },
  });

export default i18n; 