import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              LLM-SEC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('footer.description')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.quickLinks')}
            </Typography>
            <Typography variant="body2" component="div">
              <Link component={RouterLink} to="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                {t('nav.home')}
              </Link>
              <Link component={RouterLink} to="/research" color="inherit" sx={{ display: 'block', mb: 1 }}>
                {t('nav.research')}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer.connect')}
            </Typography>
            <Link
              href="https://github.com/llm-sec"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ mr: 1 }} /> GitHub
            </Link>
            <Link
              href="mailto:contact@example.com"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <EmailIcon sx={{ mr: 1 }} /> Email
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 