import React, { useEffect } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * A component that allows users to switch between available languages.
 */
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  // Set up language at first render
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && ['en', 'zh'].includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    } else {
      // If no saved language, try to detect from browser
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'zh'].includes(browserLang)) {
        i18n.changeLanguage(browserLang);
      }
    }
  }, [i18n]);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
  };
  
  return (
    <Box sx={{ mx: 1 }}>
      <ButtonGroup size="small" variant="text" aria-label="language switcher">
        <Button 
          onClick={() => changeLanguage('en')}
          sx={{ 
            color: 'inherit',
            fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
            textDecoration: i18n.language === 'en' ? 'underline' : 'none'
          }}
        >
          EN
        </Button>
        <Button 
          onClick={() => changeLanguage('zh')}
          sx={{ 
            color: 'inherit',
            fontWeight: i18n.language === 'zh' ? 'bold' : 'normal',
            textDecoration: i18n.language === 'zh' ? 'underline' : 'none'
          }}
        >
          中文
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher; 