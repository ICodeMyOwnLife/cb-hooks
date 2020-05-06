import { RefObject } from 'react';
import { UseIntersectionObserverEffectOptions } from './useIntersectionObserverEffect';
declare const useIntersectionObserver: (elementRef: RefObject<Element>, callback: IntersectionObserverCallback, options?: UseIntersectionObserverEffectOptions | undefined) => void;
export default useIntersectionObserver;
