/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useWindowScroll.ts
 */

import { useState } from 'react';
import useEvent from './useEvent';
import { getWindowScrollOffset } from '../utils/common';

const useWindowScrollOffset = () => {
  const [scrollOffset, setScrollOffset] = useState(getWindowScrollOffset);
  useEvent(window, 'scroll', () => setScrollOffset(getWindowScrollOffset()), {
    capture: false,
    passive: true,
    usingAnimationFrame: true,
  });
  return scrollOffset;
};

export default useWindowScrollOffset;
