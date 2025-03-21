import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import ResourcesPage from './pages/ResourcesPage';
import theme from './theme';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          position: 'relative',
          overflowX: 'hidden',
          bgcolor: 'background.default'
        }}>
          {/* 装饰性背景元素 */}
          <div className="ai-decoration ai-decoration-1"></div>
          <div className="ai-decoration ai-decoration-2"></div>
          
          <Header />
          <Container component="main" sx={{ 
            flexGrow: 1, 
            py: { xs: 3, md: 5 }, 
            px: { xs: 2, md: 3 },
            position: 'relative',
            zIndex: 1
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
