/**
 * References:
 * https://github.com/dispix/react-pirate/blob/master/src/useTimeout.js
 * https://github.com/imbhargav5/rooks/blob/master/packages/timeout/src/useTimeout.ts
 */

import { DependencyList, useEffect } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useTimeout = (
  callback: VoidFunction,
  ms: number,
  deps: DependencyList = [ms],
) => {
  const callbackRef = useUpdatedRef(callback);

  useEffect(() => {
    const handle = setTimeout(() => callbackRef.current?.(), ms);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useTimeout;
