import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CircularProgress, Box } from '@mui/material';

// Import i18n instance
import './i18n';

// Set initial HTML lang attribute based on browser or localStorage
const getBrowserLanguage = () => {
  // First check localStorage (for returning users)
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && ['en', 'zh'].includes(savedLang)) {
    return savedLang;
  }
  
  // Then try browser language (for new users)
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'zh'].includes(browserLang)) {
    return browserLang;
  }
  
  // Default fallback
  return 'en';
};

// Set the lang attribute on the HTML tag
document.documentElement.lang = getBrowserLanguage();

// Loading component for suspense fallback
const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <CircularProgress />
  </Box>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
