import { DependencyList, useEffect } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useAnimationFrame = (
  callback: FrameRequestCallback,
  deps: DependencyList = [],
) => {
  const callbackRef = useUpdatedRef(callback);

  useEffect(() => {
    const handle = requestAnimationFrame(time => callbackRef.current?.(time));

    return () => cancelAnimationFrame(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useAnimationFrame;
