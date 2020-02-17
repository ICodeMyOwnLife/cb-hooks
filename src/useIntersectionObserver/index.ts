/**
 * References:
 * https://github.com/adambrgmn/hooks/blob/master/src/use-in-view/index.ts
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

import { RefObject, useLayoutEffect } from 'react';
import useUpdatedRef from '../useUpdatedRef';

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) => {
  const callbackRef = useUpdatedRef(callback);

  useLayoutEffect(() => {
    if (!elementRef.current) return undefined;

    const observer = new IntersectionObserver(
      (entries, currentObserver) =>
        callbackRef.current?.(entries, currentObserver),
      options,
    );
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [callbackRef, elementRef, options]);
};

export default useIntersectionObserver;
