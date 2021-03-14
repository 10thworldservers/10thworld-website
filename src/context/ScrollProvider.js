import React, { createContext, useContext, useMemo } from 'react';
import { useScroll } from '../hooks/use-scroll';

const TIME_OUT = 150;

export const SCROLL_DIRECTION = {
  Down: 'down',
  None: 'none',
  Up: 'up'
};

export const ScrollContext = createContext({
  scrollTop: 0,
  previousScrollTop: 0,
  time: TIME_OUT,
  amountScrolled: 0,
  direction: SCROLL_DIRECTION.None,
  velocity: 0,
});

export const ScrollProvider = ({ children }) => {
  const { scrollTop, previousScrollTop, time } = useScroll(TIME_OUT);
  const amountScrolled = useMemo(() => (
    scrollTop - previousScrollTop
  ), [scrollTop, previousScrollTop]);

  const direction = useMemo(() => {
    if (amountScrolled < 0) {
      return SCROLL_DIRECTION.Up
    } else if (amountScrolled > 0) {
      return SCROLL_DIRECTION.Down
    }
    return SCROLL_DIRECTION.None
  }, [amountScrolled]);

  const velocity = useMemo(() => (
    Math.abs(amountScrolled/time)
  ), [amountScrolled, time])

  const value = useMemo(() => ({
    scrollTop,
    previousScrollTop,
    time,
    amountScrolled,
    direction,
    velocity,
  }), [
    scrollTop,
    previousScrollTop,
    time,
    amountScrolled,
    direction,
    velocity
  ]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  )
};

export const useScrollContext = () => useContext(ScrollContext);