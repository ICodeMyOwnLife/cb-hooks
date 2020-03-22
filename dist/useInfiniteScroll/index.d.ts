import { RefObject } from 'react';
declare const useInfiniteScroll: UseInfiniteScroll;
export default useInfiniteScroll;
export interface UseInfiniteScroll {
    (elementRef: RefObject<Element>, loadMore: () => Promise<unknown>, options?: IntersectionObserverInit): void;
    (elementRef: RefObject<Element>, loadMore: VoidFunction, loading: boolean, options?: IntersectionObserverInit): void;
}
