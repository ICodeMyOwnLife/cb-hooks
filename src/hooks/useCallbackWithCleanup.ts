import { DependencyList, useRef, useCallback } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useCallbackWithCleanup = <TArgs extends any[]>(
  callback: (...args: TArgs) => void | VoidFunction,
  deps: DependencyList = [],
) => {
  const callbackRef = useUpdatedRef(callback);
  const cleanupRef = useRef<void | VoidFunction>();

  return useCallback((...args: TArgs) => {
    if (cleanupRef.current) cleanupRef.current();
    cleanupRef.current = callbackRef.current?.(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useCallbackWithCleanup;
