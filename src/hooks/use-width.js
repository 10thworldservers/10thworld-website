import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const { outerWidth } = window;
  const [windowWidth, setWindowWidth] = useState(0);

  const trackWindowWidth = () => {
    setWindowWidth(outerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', trackWindowWidth)
    return () => {
      window.removeEventListener('resize', trackWindowWidth);
    }
  });

  return windowWidth;
}