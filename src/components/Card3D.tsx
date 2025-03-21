import React, { useState, useRef, ReactNode } from 'react';
import { Card, CardProps, styled } from '@mui/material';

interface Card3DProps extends CardProps {
  tiltEffect?: boolean;
  glareEffect?: boolean;
  maxTilt?: number;
  scale?: number;
  transitionSpeed?: number;
  glareColor?: string;
  children: ReactNode;
}

// 样式化Card组件，添加3D效果
const StyledCard = styled(Card, {
  shouldForwardProp: (prop) =>
    prop !== 'tiltEffect' &&
    prop !== 'glareEffect' &&
    prop !== 'maxTilt' &&
    prop !== 'scale' &&
    prop !== 'transitionSpeed' &&
    prop !== 'glareColor'
})<Card3DProps>(({ theme, tiltEffect, glareEffect, scale, transitionSpeed }) => ({
  position: 'relative',
  transformStyle: 'preserve-3d',
  transform: tiltEffect ? 'perspective(1000px)' : 'none',
  transition: `transform ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
  '&:hover': {
    transform: tiltEffect 
      ? `perspective(1000px) scale(${scale})` 
      : `scale(${scale})`,
    zIndex: 10
  },
  '&::before': glareEffect ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    background: 'linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)',
    transform: 'translateZ(1px) rotate(0deg)',
    mixBlendMode: 'soft-light',
    opacity: 0,
    transition: `opacity ${transitionSpeed}ms ease-out`
  } : {},
  '&:hover::before': glareEffect ? {
    opacity: 0.8
  } : {}
}));

const Card3D: React.FC<Card3DProps> = ({
  children,
  tiltEffect = true,
  glareEffect = true,
  maxTilt = 10,
  scale = 1.02,
  transitionSpeed = 400,
  glareColor = 'rgba(255, 255, 255, 0.5)',
  ...props
}) => {
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // 处理鼠标移动，计算倾斜角度
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltEffect) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // 计算鼠标相对于卡片中心的位置 (-1到1范围)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // 计算倾斜角度
    const tiltX = -y * maxTilt;
    const tiltY = x * maxTilt;
    
    // 设置卡片倾斜
    setTiltPosition({ x: tiltX, y: tiltY });
    
    // 计算光晕位置
    if (glareEffect) {
      const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2));
      const percent = (angle / Math.PI) * 100 + 100;
      setGlarePosition({ x: percent, y: 50 });
    }
  };

  // 重置卡片位置
  const handleMouseLeave = () => {
    setTiltPosition({ x: 0, y: 0 });
    setGlarePosition({ x: 0, y: 0 });
  };

  return (
    <StyledCard
      ref={cardRef}
      tiltEffect={tiltEffect}
      glareEffect={glareEffect}
      scale={scale}
      transitionSpeed={transitionSpeed}
      glareColor={glareColor}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltPosition.x}deg) rotateY(${tiltPosition.y}deg) scale(${tiltPosition.x !== 0 || tiltPosition.y !== 0 ? scale : 1})`,
      }}
      {...props}
    >
      {children}
      {glareEffect && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `linear-gradient(${glarePosition.x}deg, rgba(255,255,255,0) 0%, ${glareColor} 100%)`,
            opacity: tiltPosition.x !== 0 || tiltPosition.y !== 0 ? 0.2 : 0,
            transition: `opacity ${transitionSpeed}ms ease-out`,
            zIndex: 2,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </StyledCard>
  );
};

export default Card3D; 