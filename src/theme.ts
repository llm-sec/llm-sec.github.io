import { createTheme, alpha } from '@mui/material/styles';

// 现代化AI风格的主题
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3742fa', // 明亮的蓝色
      light: '#5352ed',
      dark: '#1e3799',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00cec9', // 青绿色
      light: '#55efc4',
      dark: '#00b894',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0984e3',
      light: '#74b9ff',
      dark: '#0652DD',
    },
    success: {
      main: '#00b894',
      light: '#55efc4',
      dark: '#009688',
    },
    warning: {
      main: '#fdcb6e',
      light: '#ffeaa7',
      dark: '#f39c12',
    },
    error: {
      main: '#d63031',
      light: '#ff7675',
      dark: '#c0392b',
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.00938em',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '0.01071em',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.02857em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 6px rgba(0, 0, 0, 0.06)',
    '0px 5px 15px rgba(0, 0, 0, 0.07)',
    '0px 6px 15px rgba(0, 0, 0, 0.08)',
    '0px 8px 15px rgba(0, 0, 0, 0.08)',
    '0px 8px 20px rgba(0, 0, 0, 0.09)',
    '0px 9px 22px rgba(0, 0, 0, 0.09)',
    '0px 10px 25px rgba(0, 0, 0, 0.1)',
    '0px 12px 28px rgba(0, 0, 0, 0.11)',
    '0px 14px 30px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.12)',
    '0px 18px 34px rgba(0, 0, 0, 0.13)',
    '0px 20px 36px rgba(0, 0, 0, 0.14)',
    '0px 22px 38px rgba(0, 0, 0, 0.14)',
    '0px 24px 40px rgba(0, 0, 0, 0.15)',
    '0px 26px 42px rgba(0, 0, 0, 0.16)',
    '0px 28px 44px rgba(0, 0, 0, 0.16)',
    '0px 30px 46px rgba(0, 0, 0, 0.17)',
    '0px 32px 48px rgba(0, 0, 0, 0.18)',
    '0px 34px 50px rgba(0, 0, 0, 0.18)',
    '0px 36px 52px rgba(0, 0, 0, 0.19)',
    '0px 38px 54px rgba(0, 0, 0, 0.2)',
    '0px 40px 56px rgba(0, 0, 0, 0.21)',
    '0px 42px 58px rgba(0, 0, 0, 0.22)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a8a8a8',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
          padding: '8px 20px',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-1px)',
            transition: 'all 0.2s ease-in-out',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(135deg, #3742fa 0%, #5352ed 100%)',
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(135deg, #00cec9 0%, #55efc4 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.07)',
          borderRadius: 16,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.07)',
        },
        elevation4: {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #3742fa 0%, #4e69fd 100%)',
          boxShadow: '0 4px 12px rgba(55, 66, 250, 0.15)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          '&.MuiChip-colorPrimary': {
            backgroundColor: alpha('#3742fa', 0.1),
            color: '#3742fa',
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: alpha('#00cec9', 0.1),
            color: '#00cec9',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          transition: 'color 0.2s',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
});

export default theme; 