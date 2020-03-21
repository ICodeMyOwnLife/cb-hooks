/* eslint-disable no-param-reassign */
import { useRef, useCallback, useEffect } from 'react';

const useLazyLoad = () => {
  const imageMapRef = useRef(new Map<HTMLImageElement, string>());

  const register = useCallback((arg: string | HTMLImageElement) => {
    if (typeof arg === 'string') {
      const src = arg;

      return (image: HTMLImageElement) => {
        imageMapRef.current.set(image, src);
      };
    }

    if (arg instanceof HTMLImageElement) {
      const image = arg;
      const { src } = image.dataset;

      if (src) {
        imageMapRef.current.set(image, src);
      }
    }

    return undefined;
  }, []) as LazyLoadRegister;

  useEffect(() => {
    const observer = new IntersectionObserver((entries, currentObserver) =>
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting || !(target instanceof HTMLImageElement)) return;

        const src = imageMapRef.current.get(target) || target.dataset.src;

        if (src) {
          target.src = src;
        }

        currentObserver.unobserve(target);
      }),
    );

    imageMapRef.current.forEach((_, image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return register;
};

export default useLazyLoad;

export interface LazyLoadRegister {
  (image: HTMLImageElement): void;
  (src: string): (image: HTMLImageElement) => void;
}
