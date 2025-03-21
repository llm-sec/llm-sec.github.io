import { createTheme, alpha } from '@mui/material/styles';

// 浅色系配色方案，使用柔和清新的色彩
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F5C6AA', // 柔和的杏色
      light: '#FFDBCC',
      dark: '#E6A989',
      contrastText: '#5A4F48',
    },
    secondary: {
      main: '#A9CCBF', // 淡青绿色
      light: '#C4DDD6',
      dark: '#8EBAA8',
      contrastText: '#4A5D57',
    },
    info: {
      main: '#B8D0E6', // 淡蓝色
      light: '#D6E4F0',
      dark: '#96B5D8',
    },
    success: {
      main: '#C4D7B2', // 淡绿色
      light: '#DCE8CF',
      dark: '#A4BF8F',
    },
    warning: {
      main: '#FFE0B2', // 淡橙色
      light: '#FFEFD1',
      dark: '#FFCD8C',
    },
    error: {
      main: '#F5C4C4', // 淡粉红色
      light: '#FAE0E0',
      dark: '#E9A3A3',
    },
    background: {
      default: '#FFFFFF', // 纯白背景
      paper: '#FAFAFA',   // 极浅的灰色纸张背景
    },
    text: {
      primary: '#5A4F48', // 暖棕色文本
      secondary: '#7D736C', // 浅暖棕色次要文本
    },
    grey: {
      50: '#F8F8F8',
      100: '#F0F0F0',
      200: '#E6E6E6',
      300: '#D6D6D6',
      400: '#C2C2C2',
      500: '#A3A3A3',
      600: '#858585',
      700: '#686868',
      800: '#4A4A4A',
      900: '#333333',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
      color: '#5A4F48', 
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      color: '#5A4F48',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      letterSpacing: '-0.005em',
      lineHeight: 1.3,
      color: '#5A4F48',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: 0,
      lineHeight: 1.4,
      color: '#5A4F48',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      letterSpacing: 0,
      lineHeight: 1.4,
      color: '#5A4F48',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      letterSpacing: 0,
      lineHeight: 1.4,
      color: '#5A4F48',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1.6,
      color: '#7D736C',
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1.6,
      color: '#7D736C',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: 0,
      color: '#7D736C',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 0,
      color: '#7D736C',
    },
  },
  shape: {
    borderRadius: 12, // 圆角
  },
  shadows: [
    'none',
    '0px 2px 6px rgba(0, 0, 0, 0.02)',
    '0px 4px 8px rgba(0, 0, 0, 0.03)',
    '0px 5px 15px rgba(0, 0, 0, 0.04)',
    '0px 6px 15px rgba(0, 0, 0, 0.05)',
    '0px 8px 15px rgba(0, 0, 0, 0.06)',
    '0px 8px 20px rgba(0, 0, 0, 0.07)',
    '0px 9px 22px rgba(0, 0, 0, 0.08)',
    '0px 10px 25px rgba(0, 0, 0, 0.09)',
    '0px 12px 28px rgba(0, 0, 0, 0.1)',
    '0px 14px 30px rgba(0, 0, 0, 0.11)',
    '0px 16px 32px rgba(0, 0, 0, 0.12)',
    '0px 18px 34px rgba(0, 0, 0, 0.13)',
    '0px 20px 36px rgba(0, 0, 0, 0.14)',
    '0px 22px 38px rgba(0, 0, 0, 0.15)',
    '0px 24px 40px rgba(0, 0, 0, 0.16)',
    '0px 26px 42px rgba(0, 0, 0, 0.17)',
    '0px 28px 44px rgba(0, 0, 0, 0.18)',
    '0px 30px 46px rgba(0, 0, 0, 0.19)',
    '0px 32px 48px rgba(0, 0, 0, 0.2)',
    '0px 34px 50px rgba(0, 0, 0, 0.21)',
    '0px 36px 52px rgba(0, 0, 0, 0.22)',
    '0px 38px 54px rgba(0, 0, 0, 0.23)',
    '0px 40px 56px rgba(0, 0, 0, 0.24)',
    '0px 42px 58px rgba(0, 0, 0, 0.25)',
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
            background: '#F0F0F0',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#D6D6D6',
            borderRadius: '12px',
            opacity: 0.7,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#C2C2C2',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          transition: 'all 0.25s ease',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(245, 198, 170, 0.12)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(245, 198, 170, 0.2)',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(135deg, #F5C6AA, #FFDBCC)',
            border: '1px solid rgba(245, 198, 170, 0.1)',
            color: '#5A4F48',
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(135deg, #A9CCBF, #C4DDD6)',
            border: '1px solid rgba(169, 204, 191, 0.1)',
            color: '#4A5D57',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
          '&.MuiButton-outlinedPrimary': {
            borderColor: '#F5C6AA',
            color: '#5A4F48',
            '&:hover': {
              backgroundColor: 'rgba(245, 198, 170, 0.04)',
            },
          },
          '&.MuiButton-outlinedSecondary': {
            borderColor: '#A9CCBF',
            color: '#4A5D57',
            '&:hover': {
              backgroundColor: 'rgba(169, 204, 191, 0.04)',
            },
          },
        },
        text: {
          '&.MuiButton-textPrimary': {
            color: '#F5C6AA',
            '&:hover': {
              backgroundColor: 'rgba(245, 198, 170, 0.04)',
            },
          },
          '&.MuiButton-textSecondary': {
            color: '#A9CCBF',
            '&:hover': {
              backgroundColor: 'rgba(169, 204, 191, 0.04)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)',
          borderRadius: '16px',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
        },
        elevation3: {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
        },
        elevation4: {
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(90, 79, 72, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(245, 198, 170, 0.5)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F5C6AA',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
          backgroundImage: 'none',
          backgroundColor: '#FFF6F2',
          color: '#5A4F48',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#F5C6AA',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#E6A989',
            textDecoration: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
        },
        filled: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: 'rgba(245, 198, 170, 0.1)',
            color: '#5A4F48',
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: 'rgba(169, 204, 191, 0.1)',
            color: '#4A5D57',
          },
        },
        outlined: {
          '&.MuiChip-colorPrimary': {
            borderColor: 'rgba(245, 198, 170, 0.5)',
            color: '#5A4F48',
          },
          '&.MuiChip-colorSecondary': {
            borderColor: 'rgba(169, 204, 191, 0.5)',
            color: '#4A5D57',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(to right, rgba(245, 198, 170, 0.05), rgba(245, 198, 170, 0.1))',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#5A4F48',
          fontWeight: 600,
          padding: '16px',
          borderBottom: '2px solid rgba(245, 198, 170, 0.1)',
        },
        body: {
          padding: '16px',
          borderBottom: '1px solid rgba(245, 198, 170, 0.05)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(90, 79, 72, 0.9)',
          color: '#ffffff',
          borderRadius: '6px',
          padding: '8px 12px',
          fontWeight: 500,
          fontSize: '0.75rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
        arrow: {
          color: 'rgba(90, 79, 72, 0.9)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&.Mui-selected': {
            backgroundColor: 'rgba(245, 198, 170, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(245, 198, 170, 0.15)',
            },
          },
        },
      },
    },
  },
});

export default theme; 