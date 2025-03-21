import React from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ResearchPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #F5C6AA 0%, #FFDBCC 100%)',
          color: '#5A4F48',
          mb: 4,
          py: 6,
          borderRadius: 0,
          boxShadow: '0 8px 32px rgba(245, 198, 170, 0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {t('research.title')}
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {t('research.subtitle')}
          </Typography>
        </Container>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('research.areasTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('research.areasText')}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Prompt+Injection"
                alt="Prompt Injection"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {t('research.areas.promptInjection.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('research.areas.promptInjection.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Data+Privacy"
                alt="Data Privacy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {t('research.areas.dataPrivacy.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('research.areas.dataPrivacy.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Secure+Deployment"
                alt="Secure Deployment"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {t('research.areas.secureDeployment.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('research.areas.secureDeployment.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('research.projectsTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('research.projectsText')}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Card sx={{ display: { md: 'flex' }, mb: 3 }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h3" variant="h5">
                  {t('research.projects.adversarialPrompting.title')}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {t('research.projects.adversarialPrompting.status')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                  {t('research.projects.adversarialPrompting.description')}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: { md: 250 }, height: { xs: 200, md: 'auto' } }}
                image="https://via.placeholder.com/800x400?text=LLM+Research"
                alt="Research Project"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ display: { md: 'flex' }, mb: 3 }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h3" variant="h5">
                  {t('research.projects.privacyPreserving.title')}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {t('research.projects.privacyPreserving.status')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                  {t('research.projects.privacyPreserving.description')}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: { md: 250 }, height: { xs: 200, md: 'auto' } }}
                image="https://via.placeholder.com/800x400?text=Privacy+Research"
                alt="Research Project"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResearchPage; 