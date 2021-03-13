import React, {createContext, useMemo, useContext, useEffect} from 'react';

import { SCROLL_DIRECTION, useScrollContext } from './ScrollProvider';
import { useVisibility } from '../hooks/use-visibility';

const TOP_START = 100;

export const HeaderContext = createContext({
  isVisible: true,
});

export const HeaderProvider = ({ children }) => {
  const { isVisible, show, hide } = useVisibility(true);
  const { scrollTop, direction } = useScrollContext();

  useEffect(() => {
    const shouldShow = scrollTop <= TOP_START || direction !== SCROLL_DIRECTION.Down;
    const shouldHide = (
      scrollTop > TOP_START &&
      direction === SCROLL_DIRECTION.Down
    )
    if (shouldShow) {
      show()
    } else if (shouldHide) {
      hide()
    }

  }, [scrollTop, direction, hide, show]);

  const value = useMemo(() => ({
    isVisible,
  }), [
    isVisible
  ]);
  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  )
};

export const useHeaderContext = () => useContext(HeaderContext);