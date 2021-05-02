import { useEffect, useMemo, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

const getScrollPosition = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};

export const useScroll = (timeout = 250) => {
  const defaultScrollTop = useMemo(() => getScrollPosition(), []);
  const previousScrollTop = useRef(defaultScrollTop);
  const [currentScrollTop, setCurrentScrollTop] = useState(defaultScrollTop);

  useEffect(() => {
    const handleDocumentScroll = () => {
      const scrollTop = getScrollPosition();
      setCurrentScrollTop(scrollTop);
      previousScrollTop.current = scrollTop;
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, timeout)
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () => {
      window.removeEventListener('scroll', handleDocumentScrollThrottled)
    }
  }, [timeout]);
  
  return {
    scrollTop: currentScrollTop,
    previousScrollTop: previousScrollTop.current,
    time: timeout,
  }
}