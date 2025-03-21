import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, Card, CardContent, Divider } from '@mui/material';

const PublicationsPage: React.FC = () => {
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
            Publications
          </Typography>
          <Typography variant="h5" align="center" color="inherit" paragraph>
            Our research contributions to LLM security
          </Typography>
        </Container>
      </Paper>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Research Papers
        </Typography>
        <Typography variant="body1" paragraph>
          Below is a collection of our published research papers focused on large language model security.
        </Typography>

        <List sx={{ mt: 3 }}>
          <ListItem disableGutters sx={{ display: 'block', mb: 3 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3">
                  Quantifying and Mitigating Privacy Risks in Language Models
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Proceedings of Security & Privacy Conference 2024
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  This paper introduces new metrics for measuring privacy leakage in large language models and proposes a novel approach to reducing the risk of sensitive information exposure without compromising model performance.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Authors:</strong> Jane Smith, John Doe, Michael Johnson
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem disableGutters sx={{ display: 'block', mb: 3 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3">
                  Robust Defenses Against Adversarial Prompt Attacks
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  International Conference on Machine Learning 2023
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  This research presents a comprehensive analysis of different adversarial prompt attack vectors and introduces a novel defense framework that significantly reduces the success rate of such attacks while preserving the utility of LLMs.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Authors:</strong> Robert Chen, Lisa Wong, David Miller
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem disableGutters sx={{ display: 'block', mb: 3 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3">
                  Secure Deployment Practices for Large Language Models
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Journal of AI Security 2023
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  This paper outlines a comprehensive framework for securely deploying large language models in production environments, addressing challenges related to prompt injection, data extraction, and unauthorized access.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Authors:</strong> Sarah Johnson, Alex Rodriguez, Emily Taylor
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technical Reports
        </Typography>
        <Typography variant="body1" paragraph>
          Our technical reports provide in-depth analysis and practical guidance on LLM security topics.
        </Typography>

        <List sx={{ mt: 3 }}>
          <ListItem disableGutters sx={{ display: 'block', mb: 3 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3">
                  Survey of Jailbreaking Techniques for Commercial LLMs
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Technical Report 2023-01
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  A comprehensive survey of known jailbreaking techniques for commercial large language models, including effectiveness evaluations and recommended mitigation strategies.
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem disableGutters sx={{ display: 'block', mb: 3 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h3">
                  Best Practices for Red-Team Testing of LLM Systems
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Technical Report 2023-02
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  Guidelines and methodologies for effective red-team testing of large language model systems to identify vulnerabilities before deployment.
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default PublicationsPage; 