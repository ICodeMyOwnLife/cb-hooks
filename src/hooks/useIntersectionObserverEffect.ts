import { DependencyList, useLayoutEffect } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useIntersectionObserverEffect = (
  getTargets: () => Element[] | undefined | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  deps: DependencyList = [],
) => {
  const callbackRef = useUpdatedRef(callback);

  useLayoutEffect(() => {
    const targets = getTargets();

    if (!targets || !targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries, currentObserver) =>
        callbackRef.current?.(entries, currentObserver),
      options,
    );
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useIntersectionObserverEffect;
