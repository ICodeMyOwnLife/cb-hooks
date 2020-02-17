/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useWindowSize.ts
 * https://github.com/imbhargav5/rooks/blob/dev/packages/window-size/src/useWindowSize.ts
 * https://github.com/contiamo/operational-ui/blob/master/src/useWindowSize/index.ts
 */

import { useState } from 'react';
import useEvent from '../useEvent';
import { getWindowSize } from '../utils/common';

const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize);
  useEvent(window, 'resize', () => setSize(getWindowSize()));
  return size;
};

export default useWindowSize;
