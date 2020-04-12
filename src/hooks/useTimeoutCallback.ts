import { useRef, useCallback } from 'react';
import useUpdatedRef from './useUpdatedRef';
import useDidMount from './useDidMount';

const useTimeoutCallback = (callback: VoidFunction, ms: number) => {
  const callbackRef = useUpdatedRef(callback);
  const timeoutRef = useRef<TimeoutObject>();

  useDidMount(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current.handle);
      timeoutRef.current.resolve();
    }
  });

  const timeoutCallback = useCallback(
    () =>
      new Promise<void>(resolve => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current.handle);
          timeoutRef.current.resolve();
        }
        const handle = setTimeout(() => {
          // eslint-disable-next-line no-unused-expressions
          callbackRef.current?.();
          resolve();
        }, ms);
        timeoutRef.current = { handle, resolve };
      }),
    [callbackRef, ms],
  );

  return timeoutCallback;
};

export default useTimeoutCallback;

interface TimeoutObject {
  handle: NodeJS.Timeout;
  resolve: VoidFunction;
}
