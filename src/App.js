import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityButton, { AccessibilityProvider } from './components/AccessibilityButton';
import HomePage from './pages/HomePage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Color Palette
const colors = {
  navy: '#0a1628',
  copper: '#c47a3a',
  copperLight: '#e09a5a',
  cream: '#f5f0e8',
  slate: '#2a3a52',
  pipeGray: '#8a9bb0',
  white: '#ffffff',
  deepNavy: '#060e1a',
};

const themeBase = {
  palette: {
    primary: {
      main: colors.navy,
    },
    secondary: {
      main: colors.copper,
    },
    background: {
      default: colors.navy,
      paper: colors.cream,
    },
    text: {
      primary: colors.white,
      secondary: colors.pipeGray,
    },
    divider: colors.copper,
  },
  typography: {
    fontFamily: '"Heebo", "Rubik", sans-serif',
    h1: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '3rem',
      fontWeight: 900,
      marginBottom: '1.5rem',
      color: colors.white,
      textAlign: 'center',
    },
    h2: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '1.5rem',
      color: colors.white,
      textAlign: 'center',
    },
    h3: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: colors.copper,
      textAlign: 'center',
    },
    body1: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      color: colors.pipeGray,
    },
    body2: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: '0.95rem',
      fontWeight: 400,
      color: colors.pipeGray,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          overflow: 'auto',
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100%',
        },
        body: {
          backgroundColor: colors.navy,
          color: colors.white,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(196, 122, 58, 0.03) 0px, rgba(196, 122, 58, 0.03) 1px, transparent 1px, transparent 50px)',
          overflow: 'auto',
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          padding: 0,
        },
        '@import': [
          'url("https://fonts.googleapis.com/css2?family=Rubik:wght@700;800;900&family=Heebo:wght@400;500;700&display=swap")',
        ],
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Rubik", sans-serif',
          fontWeight: 700,
          transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
          borderRadius: '6px',
          minHeight: '44px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          backgroundColor: colors.copper,
          color: colors.white,
          boxShadow: `0 6px 16px rgba(196, 122, 58, 0.35)`,
          '&:hover': {
            backgroundColor: colors.copperLight,
            boxShadow: `0 12px 24px rgba(196, 122, 58, 0.4)`,
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: `0 4px 12px rgba(196, 122, 58, 0.3)`,
          },
          '&:disabled': {
            backgroundColor: colors.pipeGray,
            color: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: colors.copper,
          color: colors.copper,
          border: '2px solid',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: `rgba(196, 122, 58, 0.08)`,
            borderColor: colors.copperLight,
            color: colors.copperLight,
            transform: 'translateY(-2px)',
            boxShadow: `0 6px 16px rgba(196, 122, 58, 0.15)`,
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&:disabled': {
            borderColor: colors.pipeGray,
            color: colors.pipeGray,
          },
        },
        text: {
          color: colors.copper,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: `rgba(196, 122, 58, 0.1)`,
            color: colors.copperLight,
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&:disabled': {
            color: colors.pipeGray,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.slate,
          borderRadius: '8px',
          boxShadow: `0 4px 12px ${colors.navy}40`,
          border: `1px solid ${colors.slate}`,
        },
      },
    },
  },
};

function AppContent() {
  const { language } = useLanguage();
  const location = useLocation();

  const theme = useMemo(
    () =>
      createTheme({
        ...themeBase,
        direction: language === 'he' ? 'rtl' : 'ltr',
      }),
    [language]
  );

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: colors.navy,
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden',
          direction: language === 'he' ? 'rtl' : 'ltr',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            pt: 10,
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
      </Box>
      <WhatsAppButton />
      <AccessibilityButton />
    </ThemeProvider>
  );
}

function App() {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </AccessibilityProvider>
  );
}

export default App;
export { colors };
