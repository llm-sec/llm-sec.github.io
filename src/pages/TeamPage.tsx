import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Avatar, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Team Lead',
    role: 'Founder & Research Director',
    bio: 'Leading research initiatives on LLM security vulnerabilities and developing defensive techniques.',
    image: 'https://via.placeholder.com/200',
    github: 'https://github.com/llm-sec',
    linkedin: '#',
    email: 'contact@example.com'
  },
  {
    name: 'Security Researcher',
    role: 'Principal Researcher',
    bio: 'Specialized in prompt injection attacks and defense mechanisms for large language models.',
    image: 'https://via.placeholder.com/200',
    github: 'https://github.com/llm-sec',
    linkedin: '#'
  },
  {
    name: 'AI Engineer',
    role: 'Technical Lead',
    bio: 'Developing secure frameworks and best practices for deploying LLMs in production environments.',
    image: 'https://via.placeholder.com/200',
    github: 'https://github.com/llm-sec',
    email: 'contact@example.com'
  },
  {
    name: 'Privacy Expert',
    role: 'Senior Researcher',
    bio: 'Focused on data privacy and information extraction issues in large language models.',
    image: 'https://via.placeholder.com/200',
    linkedin: '#',
    email: 'contact@example.com'
  },
  {
    name: 'Open Source Contributor',
    role: 'Research Engineer',
    bio: 'Contributing to open-source tools for detecting and mitigating security vulnerabilities in LLMs.',
    image: 'https://via.placeholder.com/200',
    github: 'https://github.com/llm-sec'
  },
  {
    name: 'Academic Collaborator',
    role: 'Research Advisor',
    bio: 'Bringing academic insights and novel research approaches to the organization\'s projects.',
    image: 'https://via.placeholder.com/200',
    linkedin: '#',
    email: 'contact@example.com'
  }
];

const TeamPage: React.FC = () => {
  const { t } = useTranslation();
  
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
            {t('team.title')}
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            {t('team.subtitle')}
          </Typography>
        </Container>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('team.meetTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('team.meetText')}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 120, height: 120 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom align="center">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    {member.github && (
                      <Link href={member.github} target="_blank" rel="noopener noreferrer" color="inherit">
                        <GitHubIcon />
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" color="inherit">
                        <LinkedInIcon />
                      </Link>
                    )}
                    {member.email && (
                      <Link href={`mailto:${member.email}`} color="inherit">
                        <EmailIcon />
                      </Link>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('team.joinTitle')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('team.joinText')}
        </Typography>
      </Box>
    </Container>
  );
};

export default TeamPage; 