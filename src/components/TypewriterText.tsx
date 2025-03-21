import React, { useState, useEffect } from 'react';
import { Typography, Box, TypographyProps } from '@mui/material';

interface TypewriterTextProps extends Omit<TypographyProps, 'children'> {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterType?: number;
  cursorBlinkSpeed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayAfterType = 1500,
  cursorBlinkSpeed = 500,
  ...props
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // 打字机效果
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < texts[currentIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(texts[currentIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterType);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setCurrentIndex((currentIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayAfterType]);
  
  // 光标闪烁效果
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(cursorTimer);
  }, [cursorBlinkSpeed]);
  
  return (
    <Box display="inline-block" position="relative">
      <Typography {...props}>
        {displayText}
        <Box
          component="span"
          sx={{
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.2s',
            ml: 0.5,
            borderRight: '3px solid',
            animation: 'blink-caret 0.75s step-end infinite',
            '@keyframes blink-caret': {
              'from, to': { borderColor: 'transparent' },
              '50%': { borderColor: 'inherit' }
            }
          }}
        >&nbsp;</Box>
      </Typography>
    </Box>
  );
};

export default TypewriterText; 