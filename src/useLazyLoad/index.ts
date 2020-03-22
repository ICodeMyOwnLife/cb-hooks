/* eslint-disable no-param-reassign */
import { useRef, useCallback } from 'react';
import useIntersectionObserverEffect from '../useIntersectionObserverEffect';

const defaultGetSrc = (image: HTMLImageElement) => image.dataset.src;

const useLazyLoad = ({
  getSrc = defaultGetSrc,
  ...options
}: UseLazyLoadOptions = {}) => {
  const imageMapRef = useRef(new Map<HTMLImageElement, string>());

  const register = useCallback(
    (arg: string | HTMLImageElement) => {
      if (typeof arg === 'string') {
        const src = arg;

        return (image: HTMLImageElement) => {
          imageMapRef.current.set(image, src);
        };
      }

      if (arg instanceof HTMLImageElement) {
        const image = arg;
        const src = getSrc(image);

        if (src) {
          imageMapRef.current.set(image, src);
        }
      }

      return undefined;
    },
    [getSrc],
  ) as UseLazyLoadRegister;

  useIntersectionObserverEffect(
    () => Array.from(imageMapRef.current.keys()),
    (entries, currentObserver) =>
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting || !(target instanceof HTMLImageElement)) return;

        const src = imageMapRef.current.get(target) || getSrc(target);

        if (src) {
          target.src = src;
        }

        currentObserver.unobserve(target);
      }),
    options,
  );

  return register;
};

export default useLazyLoad;

export interface UseLazyLoadOptions extends IntersectionObserverInit {
  getSrc?: (image: HTMLImageElement) => string | null | undefined;
}

export interface UseLazyLoadRegister {
  (image: HTMLImageElement): void;
  (src: string): (image: HTMLImageElement) => void;
}
