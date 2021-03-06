import { RefObject, useRef } from 'react';
import useIntersectionObserverEffect, {
  UseIntersectionObserverEffectOptions,
} from './useIntersectionObserverEffect';

const isOptionsObject = (
  o: unknown,
): o is UseIntersectionObserverEffectOptions => o instanceof Object;

const useInfiniteScroll: UseInfiniteScroll = (
  elementRef: RefObject<Element>,
  loadMore: () => void | Promise<unknown>,
  ...args: any[]
) => {
  const loadingRef = useRef<boolean>(false);
  const loading: boolean | undefined =
    typeof args[0] === 'boolean' ? args[0] : undefined;
  const options:
    | UseIntersectionObserverEffectOptions
    | undefined = isOptionsObject(args[0])
    ? args[0]
    : isOptionsObject(args[1])
    ? args[1]
    : undefined;

  useIntersectionObserverEffect(
    () => elementRef.current && [elementRef.current],
    async entries => {
      if (
        loading ||
        loadingRef.current ||
        entries.every(({ isIntersecting }) => !isIntersecting)
      ) {
        return;
      }

      loadingRef.current = true;

      try {
        await Promise.resolve(loadMore());
      } catch {
        // Do nothing
      }

      loadingRef.current = false;
    },
    options,
  );
};

export default useInfiniteScroll;

export interface UseInfiniteScroll {
  (
    elementRef: RefObject<Element>,
    loadMore: () => Promise<unknown>,
    options?: UseIntersectionObserverEffectOptions,
  ): void;
  (
    elementRef: RefObject<Element>,
    loadMore: VoidFunction,
    loading: boolean,
    options?: UseIntersectionObserverEffectOptions,
  ): void;
}
