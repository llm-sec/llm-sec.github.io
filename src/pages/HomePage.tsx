import React, { useEffect, useRef } from 'react';
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
  useTheme,
  alpha,
  useMediaQuery
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@mui/system';
import TypewriterText from '../components/TypewriterText';
import Card3D from '../components/Card3D';

// 定义动画
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -80vw 0; }
  100% { background-position: 80vw 0; }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(245, 198, 170, 0.5), 0 0 10px rgba(245, 198, 170, 0.3); }
  50% { box-shadow: 0 0 20px rgba(245, 198, 170, 0.8), 0 0 30px rgba(245, 198, 170, 0.5); }
  100% { box-shadow: 0 0 5px rgba(245, 198, 170, 0.5), 0 0 10px rgba(245, 198, 170, 0.3); }
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, linkText, delay = 0 }) => {
  const theme = useTheme();
  
  return (
    <Card3D 
      maxTilt={15}
      glareEffect={true}
      scale={1.02}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: theme.shadows[10],
          '& .card-gradient': {
            opacity: 0.7,
          },
        }
      }}
    >
      <Box 
        className="card-gradient"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #F5C6AA, #A9CCBF)',
          opacity: 0.5,
          transition: 'opacity 0.3s ease',
        }}
      />
      <CardContent sx={{ flexGrow: 1, pt: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 2,
          animation: `${pulseAnimation} 3s ease-in-out infinite`,
          animationDelay: `${delay * 0.5}s`,
        }}>
          {React.cloneElement(icon as React.ReactElement, { 
            sx: { fontSize: 70, color: theme.palette.primary.main }
          })}
        </Box>
        <Typography gutterBottom variant="h5" component="h2" align="center" fontWeight="bold">
          {title}
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, textAlign: 'center', mb: 2 }}>
        <Button
          component={RouterLink}
          to={link}
          variant="outlined"
          color="primary"
          size="medium"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: '50px',
            px: 3,
            transition: 'all 0.2s ease',
            '&:hover': {
              px: 3.5,
              animation: `${glowAnimation} 2s infinite`
            }
          }}
        >
          {linkText}
        </Button>
      </Box>
    </Card3D>
  );
};

const ResearchCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}> = ({ title, description, imageUrl, delay = 0 }) => {
  const theme = useTheme();
  
  return (
    <Card3D 
      maxTilt={10}
      glareEffect={true}
      scale={1.03}
      sx={{
        height: '100%',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: theme.shadows[8],
          '& .card-image': {
            transform: 'scale(1.05)',
          },
        }
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          className="card-image"
          component="img"
          height="180"
          image={imageUrl}
          alt="Research topic"
          sx={{ 
            transition: 'transform 0.6s ease-in-out',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
      </Box>
      <CardContent sx={{ position: 'relative', pb: 3 }}>
        <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card3D>
  );
};

// 装饰形状组件
const DecorativeShape: React.FC<{
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  size?: number;
  color?: string;
  opacity?: number;
  delay?: number;
  type?: 'circle' | 'square' | 'triangle';
}> = ({ top, left, right, bottom, size = 40, color = '#3742fa', opacity = 0.1, delay = 0, type = 'circle' }) => {
  
  let shape;
  
  if (type === 'circle') {
    shape = <Box sx={{ 
      width: size, 
      height: size, 
      borderRadius: '50%', 
      background: color,
      opacity,
      animation: `${floatAnimation} 8s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}/>;
  } else if (type === 'square') {
    shape = <Box sx={{ 
      width: size, 
      height: size, 
      background: color,
      opacity,
      transform: 'rotate(45deg)',
      animation: `${floatAnimation} 10s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}/>;
  } else if (type === 'triangle') {
    shape = <Box 
      sx={{ 
        width: 0,
        height: 0,
        borderLeft: `${size/2}px solid transparent`,
        borderRight: `${size/2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
        opacity,
        animation: `${floatAnimation} 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />;
  }
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        zIndex: 0,
      }}
    >
      {shape}
    </Box>
  );
};

// 数字指示器组件
const DigitalCounter: React.FC<{ value: number, label: string, delay?: number }> = ({ value, label, delay = 0 }) => {
  const theme = useTheme();
  const countRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!countRef.current) return;
    
    const target = value;
    let count = 0;
    const duration = 2000; // 总持续时间（毫秒）
    const frameDuration = 1000 / 60; // 每帧持续时间（假设60FPS）
    const totalFrames = Math.round(duration / frameDuration);
    const increment = target / totalFrames;
    
    let timer: NodeJS.Timeout;
    
    const startCounting = () => {
      timer = setTimeout(() => {
        const updateCount = () => {
          if (count < target) {
            count += increment;
            if (countRef.current) {
              countRef.current.textContent = Math.ceil(count).toString();
            }
            requestAnimationFrame(updateCount);
          } else {
            if (countRef.current) {
              countRef.current.textContent = target.toString();
            }
          }
        };
        
        requestAnimationFrame(updateCount);
      }, delay * 1000);
    };
    
    // 开始计数动画
    startCounting();
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography 
        ref={countRef} 
        variant="h3" 
        component="div" 
        sx={{ 
          fontWeight: 700, 
          color: theme.palette.primary.main,
          mb: 1
        }}
      >
        0
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 滚动动画初始化
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // 应用到所有需要动画效果的元素
    document.querySelectorAll('.fade-in-up, .staggered-fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Paper
        className="hero-section"
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #F5C6AA 0%, #FFDBCC 100%)',
          color: '#5A4F48',
          mb: 6,
          py: 10,
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        {/* 装饰背景元素 */}
        <DecorativeShape top="10%" left="5%" size={60} color="#5A4F48" opacity={0.07} />
        <DecorativeShape top="20%" right="10%" size={120} color="#5A4F48" opacity={0.05} delay={2} />
        <DecorativeShape bottom="15%" left="15%" size={80} color="#5A4F48" opacity={0.06} delay={1} type="square" />
        <DecorativeShape bottom="10%" right="5%" size={50} color="#5A4F48" opacity={0.08} delay={3} type="triangle" />
        
        {/* 闪光效果 */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
            backgroundSize: '200vw 100%',
            animation: `${shimmerAnimation} 8s infinite linear`,
            pointerEvents: 'none',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="inherit"
            gutterBottom
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              mb: 2,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <TypewriterText 
              texts={["LLM-SEC", "大语言模型安全研究组织", "Language Model Security"]} 
              variant="h3"
              typingSpeed={100}
              sx={{ 
                fontWeight: 'bold',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            />
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="inherit" 
            paragraph
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              opacity: 0.9,
              mb: 4,
            }}
          >
            {t('home.heroSubtitle')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
              mt: 5,
            }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/research"
              color="secondary"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '50px',
                backgroundColor: '#F5C6AA',
                boxShadow: '0 4px 15px rgba(245, 198, 170, 0.5)',
                '&:hover': {
                  backgroundColor: '#F0B599',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 20px rgba(245, 198, 170, 0.6)',
                  animation: `${glowAnimation} 2s infinite`
                },
                transition: 'all 0.2s ease',
              }}
            >
              {t('home.researchButton')}
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="https://github.com/llm-sec"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ 
                color: '#5A4F48', 
                borderColor: 'rgba(90, 79, 72, 0.6)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '50px',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#5A4F48',
                  background: 'rgba(245, 198, 170, 0.1)',
                  transform: 'translateY(-3px)',
                  animation: `${glowAnimation} 2s infinite`
                },
                transition: 'all 0.2s ease',
              }}
              size="large"
            >
              GitHub
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* 数字统计指标 */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <DigitalCounter value={10} label="安全研究项目（目标）" delay={0.2} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DigitalCounter value={50} label="GitHub 星标（目标）" delay={0.4} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DigitalCounter value={5} label="社区贡献者（目标）" delay={0.6} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="section" sx={{ position: 'relative', mb: 10 }}>
        <DecorativeShape top="-5%" left="0%" size={100} color={theme.palette.primary.main} opacity={0.03} type="circle" />
        <DecorativeShape bottom="10%" right="2%" size={70} color={theme.palette.secondary.main} opacity={0.05} type="square" />
        
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1, mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            {t('home.missionTitle')}
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            align="center" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mb: 2,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            {t('home.missionText')}
          </Typography>
        </Box>
        
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<VerifiedUserIcon />}
              title={t('home.featuresSection.securityResearch.title')}
              description={t('home.featuresSection.securityResearch.description')}
              link="/research"
              linkText={t('common.learnMore')}
              delay={0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<GroupIcon />}
              title={t('home.featuresSection.collaboration.title')}
              description={t('home.featuresSection.collaboration.description')}
              link="/team"
              linkText={t('common.learnMore')}
              delay={0.3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={<SchoolIcon />}
              title={t('home.featuresSection.resources.title')}
              description={t('home.featuresSection.resources.description')}
              link="/resources"
              linkText={t('common.learnMore')}
              delay={0.6}
            />
          </Grid>
        </Grid>
      </Container>

      <Paper
        sx={{
          background: alpha(theme.palette.primary.main, 0.03),
          py: 8,
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <DecorativeShape top="10%" left="5%" size={60} color={theme.palette.primary.main} opacity={0.05} />
        <DecorativeShape bottom="15%" right="10%" size={120} color={theme.palette.secondary.main} opacity={0.04} delay={1} />
        
        <Container maxWidth="lg" className="section">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                fontWeight: 700, 
                mb: 4,
              }}
            >
              {t('home.recentResearchTitle')}
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ResearchCard
                title={t('home.researchTopics.promptInjection.title')}
                description={t('home.researchTopics.promptInjection.description')}
                imageUrl="https://images.unsplash.com/photo-1634224143538-ce0221abf732?w=800&auto=format&fit=crop&q=80"
                delay={0}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ResearchCard
                title={t('home.researchTopics.dataPrivacy.title')}
                description={t('home.researchTopics.dataPrivacy.description')}
                imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
                delay={0.2}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ResearchCard
                title={t('home.researchTopics.secureDeployment.title')}
                description={t('home.researchTopics.secureDeployment.description')}
                imageUrl="https://images.unsplash.com/photo-1595617795501-9661aafda72a?w=800&auto=format&fit=crop&q=80"
                delay={0.4}
              />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              component={RouterLink}
              to="/research"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                px: 4, 
                py: 1.2,
                borderRadius: '50px',
                fontWeight: 500,
                background: `linear-gradient(90deg, #F5C6AA, #F0B599)`,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 15px rgba(245, 198, 170, 0.3)`,
                  animation: `${glowAnimation} 2s infinite`
                },
              }}
            >
              {t('home.viewAllResearch')}
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" className="section" sx={{ mb: 10, position: 'relative' }}>
        <DecorativeShape top="10%" left="5%" size={80} color={theme.palette.primary.main} opacity={0.02} type="triangle" />
        <DecorativeShape bottom="20%" right="5%" size={60} color={theme.palette.secondary.main} opacity={0.03} type="square" delay={1} />
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              {t('home.getInvolvedSection.title')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
              {t('home.getInvolvedSection.text1')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
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
              startIcon={<GitHubIcon />}
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: '50px',
                background: `linear-gradient(90deg, #F5C6AA, #F0B599)`,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 15px rgba(245, 198, 170, 0.3)`,
                  animation: `${glowAnimation} 2s infinite`
                },
              }}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card3D 
              maxTilt={10}
              glareEffect={true}
              scale={1.02}
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: theme.shadows[5],
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0, 133, 179, 0.1) 0%, rgba(198, 0, 119, 0.1) 100%)',
                  zIndex: 1,
                },
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" 
                alt="Team collaboration"
                style={{ width: '100%', display: 'block' }}
              />
            </Card3D>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage; 