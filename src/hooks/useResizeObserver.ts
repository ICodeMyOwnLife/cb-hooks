import { RefObject, useLayoutEffect } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useResizeObserver = (
  elementRef: RefObject<Element>,
  callback: ResizeObserverCallback,
) => {
  const callbackRef = useUpdatedRef(callback);

  useLayoutEffect(() => {
    if (!elementRef.current) return undefined;

    const observer = new ResizeObserver(entries =>
      callbackRef.current?.(entries),
    );
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [callbackRef, elementRef]);
};

export default useResizeObserver;
