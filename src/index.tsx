import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CircularProgress, Box } from '@mui/material';

// 首先导入i18n实例
import './i18n';

// 根据浏览器或localStorage设置初始HTML lang属性
const getBrowserLanguage = () => {
  // 首先检查localStorage（对于回访用户）
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && ['en', 'zh'].includes(savedLang)) {
    return savedLang;
  }
  
  // 然后尝试浏览器语言（对于新用户）
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'zh'].includes(browserLang)) {
    return browserLang;
  }
  
  // 默认回退
  return 'en';
};

// 在HTML标签上设置lang属性
document.documentElement.lang = getBrowserLanguage();

// 用于suspense fallback的加载组件
const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <CircularProgress />
  </Box>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 不使用Suspense，因为我们在i18n.ts中已禁用了它
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
