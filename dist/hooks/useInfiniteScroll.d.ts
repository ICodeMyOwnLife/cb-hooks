import { RefObject } from 'react';
import { UseIntersectionObserverEffectOptions } from './useIntersectionObserverEffect';
declare const useInfiniteScroll: UseInfiniteScroll;
export default useInfiniteScroll;
export interface UseInfiniteScroll {
    (elementRef: RefObject<Element>, loadMore: () => Promise<unknown>, options?: UseIntersectionObserverEffectOptions): void;
    (elementRef: RefObject<Element>, loadMore: VoidFunction, loading: boolean, options?: UseIntersectionObserverEffectOptions): void;
}
