// src/hooks/useTypingEffect.ts - Typing Effect Hook

import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], speed: number = 2000): string => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const text = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), speed);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(text.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts, speed]);

  return currentText;
};