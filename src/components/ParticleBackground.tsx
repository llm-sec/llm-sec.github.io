import React, { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface ParticleBackgroundProps {
  id?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ id = 'particle-background' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // 设置粒子属性
    const particleCount = 120; // 适当减少粒子数量，提高清晰度
    const particleMinAlpha = 0.5; // 增加透明度下限提高可见性
    const particleMaxAlpha = 0.8; // 增加上限使粒子更明显
    const particleMinRadius = 2; // 增加粒子最小半径
    const particleMaxRadius = 5; // 增加粒子最大半径
    const particleFlickerSpeed = 0.02;
    const particleSpeedFactor = 0.2;
    
    // 连接线属性
    const connectionDistance = 120; // 适当减少连接线距离
    const connectionOpacity = 0.4; // 增加线条透明度
    const lineWidth = 1.5; // 增加线宽
    
    // 鼠标交互属性
    const mouseConnectionDistance = 160; 
    const mouseConnectionOpacity = 0.5;
    const mouseLineWidth = 1.5;
    
    // 背景透明度
    const backgroundOpacity = 0.5; // 减少背景透明度，增加内容可见性
    
    // 粒子对象
    class Particle {
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      speed: {
        x: number;
        y: number;
      };
      color: string;
      alpha: number;
      alphaDirection: number = 1;
      flickerSpeed: number;
      
      constructor() {
        // 确保在使用canvas前已经检查了它不是null
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.radius = Math.random() * (particleMaxRadius - particleMinRadius) + particleMinRadius;
        this.baseRadius = this.radius;
        this.speed = {
          x: (Math.random() - 0.5) * particleSpeedFactor,
          y: (Math.random() - 0.5) * particleSpeedFactor
        };
        this.color = getRandomColor();
        this.alpha = Math.random() * (particleMaxAlpha - particleMinAlpha) + particleMinAlpha;
        this.flickerSpeed = Math.random() * particleFlickerSpeed;
      }
      
      // 更新粒子位置
      update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
        
        // 边界检查，确保canvas不为null
        const width = canvas?.width || window.innerWidth;
        const height = canvas?.height || window.innerHeight;
        
        if (this.x < 0 || this.x > width) this.speed.x *= -1;
        if (this.y < 0 || this.y > height) this.speed.y *= -1;
        
        // 闪烁效果
        this.alpha += this.flickerSpeed * this.alphaDirection;
        if (this.alpha > particleMaxAlpha || this.alpha < particleMinAlpha) {
          this.alphaDirection *= -1;
        }
      }
      
      // 绘制粒子
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    // 初始化粒子
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // 随机生成符合新配色方案的颜色
    function getRandomColor() {
      const colors = [
        '#F5C6AA', // 主要杏色
        '#FFDBCC', // 浅杏色
        '#E6A989', // 深杏色
        '#A9CCBF', // 淡青绿色
        '#C4DDD6', // 浅青绿色
        '#8EBAA8', // 深青绿色
        '#B8D0E6', // 淡蓝色
        '#FFE0B2', // 淡橙色
        '#C4D7B2', // 淡绿色
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // 处理窗口大小变化
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // 在两个粒子之间绘制线条
    const drawConnection = (p1: Particle, p2: Particle, opacity: number, width: number = lineWidth) => {
      if (!ctx) return;
      const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      const opacityFactor = 1 - distance / connectionDistance;
      
      if (opacityFactor > 0) {
        ctx.globalAlpha = opacityFactor * opacity;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = theme.palette.primary.main;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };
    
    // 鼠标位置
    let mouse = {
      x: null as number | null,
      y: null as number | null
    };
    
    // 监听鼠标移动
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    // 首次加载时的大小设置和监听
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // 初始化粒子
    initParticles();
    
    // 动画主循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制半透明背景
      ctx.fillStyle = `rgba(255, 255, 255, ${backgroundOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 更新粒子并绘制
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // 绘制粒子之间的连接线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particles[i].x, 2) + 
            Math.pow(particles[j].y - particles[i].y, 2)
          );
          
          if (distance < connectionDistance) {
            drawConnection(particles[i], particles[j], connectionOpacity);
          }
        }
      }
      
      // 绘制鼠标与粒子之间的连接线
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach(particle => {
          const distance = Math.sqrt(
            Math.pow(mouse.x! - particle.x, 2) + 
            Math.pow(mouse.y! - particle.y, 2)
          );
          
          if (distance < mouseConnectionDistance) {
            const opacityFactor = 1 - distance / mouseConnectionDistance;
            ctx.globalAlpha = opacityFactor * mouseConnectionOpacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x!, mouse.y!);
            ctx.strokeStyle = theme.palette.secondary.main;
            ctx.lineWidth = mouseLineWidth;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // 启动动画
    animate();
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <Box 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.8
      }}
    >
      <canvas ref={canvasRef} id={id} style={{ display: 'block' }} />
    </Box>
  );
};

export default ParticleBackground; 