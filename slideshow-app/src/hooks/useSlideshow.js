import { useState, useEffect, useCallback } from 'react';

export function useSlideshow(totalSlides) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    }
  }, [current, totalSlides]);

  const next = useCallback(() => {
    if (current < totalSlides - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    }
  }, [current, totalSlides]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    }
  }, [current]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, totalSlides]);

  return { current, direction, next, prev, goTo, totalSlides };
}
