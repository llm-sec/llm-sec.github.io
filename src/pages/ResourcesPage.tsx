import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation } from 'react-i18next';

interface Resource {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  category: 'tool' | 'paper' | 'guide';
}

const ResourcesPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Define resources with translations
  const resources: Resource[] = [
    {
      title: "transformer-hacker",
      description: t('resources.tools.transformerHacker'),
      link: "https://github.com/llm-sec/transformer-hacker",
      icon: <CodeIcon />,
      category: 'tool'
    },
    {
      title: "prompt-leaking-attack",
      description: t('resources.tools.promptLeaking'),
      link: "https://github.com/llm-sec/prompt-leaking-attack",
      icon: <SecurityIcon />,
      category: 'tool'
    },
    {
      title: t('resources.guides.securityBestPractices.title'),
      description: t('resources.guides.securityBestPractices.description'),
      link: "#",
      icon: <MenuBookIcon />,
      category: 'guide'
    },
    {
      title: t('resources.guides.promptEngineering.title'),
      description: t('resources.guides.promptEngineering.description'),
      link: "#",
      icon: <DescriptionIcon />,
      category: 'guide'
    },
    {
      title: t('resources.papers.promptInjection.title'),
      description: t('resources.papers.promptInjection.description'),
      link: "#",
      icon: <ArticleIcon />,
      category: 'paper'
    },
    {
      title: t('resources.guides.redTeam.title'),
      description: t('resources.guides.redTeam.description'),
      link: "#",
      icon: <SchoolIcon />,
      category: 'guide'
    }
  ];

  // Filter resources by category
  const tools = resources.filter(resource => resource.category === 'tool');
  const guides = resources.filter(resource => resource.category === 'guide');
  const papers = resources.filter(resource => resource.category === 'paper');

  return (
    <Container maxWidth="lg">
      <Paper
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
            {t('resources.title')}
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {t('resources.subtitle')}
          </Typography>
        </Container>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('resources.toolsTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('resources.toolsText')}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {tools.map((tool, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>{tool.icon}</Box>
                    <Typography variant="h5" component="h3">
                      {tool.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                  >
                    {t('common.viewOn')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('resources.guidesTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('resources.guidesText')}
        </Typography>

        <List>
          {guides.map((guide, index) => (
            <ListItem key={index} component={Card} sx={{ mb: 2, display: 'block' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {guide.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant="h6">{guide.title}</Typography>} 
                    secondary={guide.description} 
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" href={guide.link} color="primary">
                  {t('resources.readGuide')}
                </Button>
              </CardActions>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('resources.papersTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('resources.papersText')}
        </Typography>

        <List>
          {papers.map((paper, index) => (
            <ListItem key={index} component={Card} sx={{ mb: 2, display: 'block' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {paper.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant="h6">{paper.title}</Typography>} 
                    secondary={paper.description} 
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" href={paper.link} color="primary">
                  {t('resources.readPaper')}
                </Button>
              </CardActions>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          {t('resources.moreResourcesTitle')}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {t('resources.moreResourcesText')}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="https://github.com/llm-sec" 
          target="_blank" 
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          size="large"
        >
          {t('resources.visitGitHub')}
        </Button>
      </Box>
    </Container>
  );
};

export default ResourcesPage; 