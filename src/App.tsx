import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import ResourcesPage from './pages/ResourcesPage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import theme from './theme';
import './App.css';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh', 
          position: 'relative',
          background: theme.palette.background.default,
          overflow: 'hidden'
        }}>
          <ParticleBackground />
          
          <div className="ai-decoration ai-decoration-1"></div>
          <div className="ai-decoration ai-decoration-2"></div>
          
          <div className="tech-lines"></div>
          <div className="scan-line"></div>
          
          <div className="data-stream data-stream-1"></div>
          <div className="data-stream data-stream-2"></div>
          <div className="data-stream data-stream-3"></div>
          <div className="data-stream data-stream-4"></div>
          
          <Container maxWidth="lg" sx={{ 
            position: 'relative', 
            zIndex: 1,
            py: 4
          }}>
            <Router basename={process.env.PUBLIC_URL}>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
              </Routes>
            </Router>
          </Container>
        </Box>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
