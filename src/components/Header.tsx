import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SecurityIcon from '@mui/icons-material/Security';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { alpha } from '@mui/material/styles';

interface NavItem {
  label: string;
  translationKey: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', translationKey: 'nav.home', path: '/' },
  { label: 'Research', translationKey: 'nav.research', path: '/research' },
  { label: 'Team', translationKey: 'nav.team', path: '/team' },
  { label: 'Resources', translationKey: 'nav.resources', path: '/resources' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.palette.text.primary }}>
        <SecurityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
        LLM-SEC
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.translationKey} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={t(item.translationKey)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <LanguageSwitcher />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.primary,
                textDecoration: 'none',
                flexGrow: isMobile ? 0 : 1,
              }}
            >
              <SecurityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              LLM-SEC
            </Typography>

            {isMobile ? (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <LanguageSwitcher />
                <IconButton
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.text.primary }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex' }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.translationKey}
                      component={RouterLink}
                      to={item.path}
                      sx={{ 
                        color: theme.palette.text.primary, 
                        mx: 1,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        }
                      }}
                    >
                      {t(item.translationKey)}
                    </Button>
                  ))}
                </Box>
                <LanguageSwitcher />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header; 