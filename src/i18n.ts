import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { InitOptions } from 'i18next';
// 引入翻译资源，从src目录内导入
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

// 检查是否在GitHub Pages环境下
const isGitHubPages = window.location.hostname.includes('github.io');

// 定义基础路径 - 关键修复点
const basePath = isGitHubPages ? '' : '';

// 定义我们的初始化选项
const initOptions: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh'],
  debug: process.env.NODE_ENV === 'development',
  
  // 直接使用导入的资源，而不是通过HTTP加载
  resources: {
    en: {
      translation: enTranslation
    },
    zh: {
      translation: zhTranslation
    }
  },
  
  interpolation: {
    escapeValue: false, // React 已经对 XSS 安全
  },
  
  detection: {
    // 按顺序从哪里检测用户语言
    order: ['navigator', 'querystring', 'localStorage', 'cookie', 'htmlTag'],
    
    // 在检测源中查找的键或参数
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    
    // 缓存用户语言的位置
    caches: ['localStorage', 'cookie'],
  },
  
  react: {
    useSuspense: false, // 禁用Suspense，避免加载问题
  },
};

i18n
  // 使用我们预加载的翻译资源
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  .init(initOptions);

// 基于浏览器设置强制立即检测语言
const detectAndSetLanguage = () => {
  // 获取浏览器语言（如 'zh-CN' 或 'en-US'）
  const browserLang = navigator.language;
  // 提取语言代码（如 'zh' 或 'en'）
  const langCode = browserLang.split('-')[0];
  
  // 检查是否是我们支持的语言之一
  if (['en', 'zh'].includes(langCode)) {
    i18n.changeLanguage(langCode);
    console.log(`Language set to ${langCode} based on browser settings`);
  }
};

// 立即运行检测并在DOM完全加载时运行
detectAndSetLanguage();
window.addEventListener('DOMContentLoaded', detectAndSetLanguage);

export default i18n; 