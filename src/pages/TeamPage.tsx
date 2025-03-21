import React from 'react';
import { Box, Container, Typography, Paper, Grid, Card, Avatar, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

// 定义团队成员类型
interface TeamMember {
  name: string;
  image: string;  // GitHub头像URL
  github?: string;
}

// 团队成员数据
const teamMembers: TeamMember[] = [
  {
    name: 'CC11001100',
    image: 'https://avatars.githubusercontent.com/u/12819457?v=4',
    github: 'https://github.com/CC11001100'
  }
];

const TeamPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'primary.main',
          color: '#5A4F48',
          mb: 4,
          py: 6,
          borderRadius: '0 0 24px 24px',
          backgroundImage: 'linear-gradient(135deg, #F5C6AA 0%, #FFDBCC 100%)',
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
            {t('team.title')}
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {t('team.subtitle')}
          </Typography>
        </Container>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            textAlign: 'center',
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              backgroundColor: 'primary.main',
              margin: '16px auto',
              borderRadius: '2px'
            }
          }}
        >
          {t('team.meetTitle')}
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
          {t('team.meetText')}
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 12px 24px rgba(245, 198, 170, 0.1)',
                  transition: 'all 0.3s ease',
                  py: 4,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(245, 198, 170, 0.15)',
                  }
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2,
                    border: '4px solid white',
                    boxShadow: '0 8px 16px rgba(245, 198, 170, 0.15)'
                  }}
                />
                <Typography gutterBottom variant="h5" component="h3" align="center" fontWeight="bold">
                  {member.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                  {member.github && (
                    <Link 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      color="primary"
                      sx={{ 
                        transition: 'all 0.2s ease',
                        '&:hover': { transform: 'scale(1.2)' }
                      }}
                    >
                      <GitHubIcon fontSize="large" />
                    </Link>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box 
        sx={{ 
          my: 6, 
          py: 5, 
          px: 4, 
          backgroundColor: 'rgba(245, 198, 170, 0.03)', 
          borderRadius: 4,
          border: '1px solid rgba(245, 198, 170, 0.1)',
          boxShadow: 'inset 0 2px 4px rgba(245, 198, 170, 0.05)'
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ color: 'primary.main' }}
        >
          {t('team.joinTitle')}
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
          {t('team.joinText')}
        </Typography>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link 
            href="https://github.com/llm-sec" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              display: 'inline-block',
              py: 1.5,
              px: 4,
              backgroundColor: '#F5C6AA',
              color: '#5A4F48',
              borderRadius: 2,
              fontWeight: 'bold',
              boxShadow: '0 4px 14px rgba(245, 198, 170, 0.25)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#FFDBCC',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(245, 198, 170, 0.35)',
              }
            }}
          >
            <GitHubIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}>Join us on GitHub</span>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default TeamPage; 