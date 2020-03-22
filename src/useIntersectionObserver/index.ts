/**
 * References:
 * https://github.com/adambrgmn/hooks/blob/master/src/use-in-view/index.ts
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

import { RefObject } from 'react';
import useIntersectionObserverEffect from '../useIntersectionObserverEffect';

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) =>
  useIntersectionObserverEffect(
    () => elementRef.current && [elementRef.current],
    callback,
    options,
    [options],
  );

export default useIntersectionObserver;
