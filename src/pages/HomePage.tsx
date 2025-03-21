import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Link,
  Paper,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, linkText }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        {icon}
      </Box>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        {title}
      </Typography>
      <Typography align="center" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
      <Button
        component={RouterLink}
        to={link}
        variant="outlined"
        color="primary"
        size="small"
      >
        {linkText}
      </Button>
    </Box>
  </Card>
);

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Paper
        className="hero-section"
        sx={{
          position: 'relative',
          backgroundColor: 'primary.dark',
          color: 'white',
          mb: 4,
          py: 6,
          borderRadius: 0,
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
            {t('home.heroTitle')}
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {t('home.heroSubtitle')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/research"
              color="secondary"
              size="large"
            >
              {t('home.researchButton')}
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="https://github.com/llm-sec"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white', borderColor: 'white' }}
              size="large"
            >
              GitHub
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" className="section">
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          {t('home.missionTitle')}
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          {t('home.missionText')}
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<SecurityIcon color="primary" sx={{ fontSize: 60 }} />}
              title={t('home.featuresSection.securityResearch.title')}
              description={t('home.featuresSection.securityResearch.description')}
              link="/research"
              linkText={t('common.learnMore')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<GroupIcon color="primary" sx={{ fontSize: 60 }} />}
              title={t('home.featuresSection.collaboration.title')}
              description={t('home.featuresSection.collaboration.description')}
              link="/team"
              linkText={t('common.learnMore')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<SchoolIcon color="primary" sx={{ fontSize: 60 }} />}
              title={t('home.featuresSection.resources.title')}
              description={t('home.featuresSection.resources.description')}
              link="/resources"
              linkText={t('common.learnMore')}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="section">
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          {t('home.recentResearchTitle')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Research+Image"
                alt="Research topic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {t('home.researchTopics.promptInjection.title')}
                </Typography>
                <Typography color="text.secondary">
                  {t('home.researchTopics.promptInjection.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Research+Image"
                alt="Research topic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {t('home.researchTopics.dataPrivacy.title')}
                </Typography>
                <Typography color="text.secondary">
                  {t('home.researchTopics.dataPrivacy.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/800x400?text=Research+Image"
                alt="Research topic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {t('home.researchTopics.secureDeployment.title')}
                </Typography>
                <Typography color="text.secondary">
                  {t('home.researchTopics.secureDeployment.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/research"
            variant="contained"
            color="primary"
            size="large"
          >
            {t('home.viewAllResearch')}
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" className="section">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              {t('home.getInvolvedSection.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.getInvolvedSection.text1')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.getInvolvedSection.text2')}
            </Typography>
            <Button
              component="a"
              href="https://github.com/llm-sec"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              startIcon={<GitHubIcon />}
            >
              {t('home.stayUpdatedSection.gitHubButton')}
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'grey.100',
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                {t('home.stayUpdatedSection.title')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('home.stayUpdatedSection.text')}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/llm-sec"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('home.stayUpdatedSection.gitHubButton')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage; 