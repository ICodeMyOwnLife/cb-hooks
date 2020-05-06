import { DependencyList, useLayoutEffect } from 'react';
import { OmitFrom } from 'cb-toolset/object';
import { ValueFactory, getValueFromFactory } from 'cb-toolset/function';
import useUpdatedRef from './useUpdatedRef';

const useIntersectionObserverEffect = (
  getTargets: () => Element[] | undefined | null,
  callback: IntersectionObserverCallback,
  options?: UseIntersectionObserverEffectOptions,
  deps: DependencyList = [],
) => {
  const callbackRef = useUpdatedRef(callback);

  useLayoutEffect(() => {
    const targets = getTargets();

    if (!targets || !targets.length) return undefined;

    const opts: IntersectionObserverInit | undefined = options && {
      ...options,
      root: getValueFromFactory(options.root),
    };

    const observer = new IntersectionObserver(
      (entries, currentObserver) =>
        callbackRef.current?.(entries, currentObserver),
      opts,
    );
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useIntersectionObserverEffect;

export interface UseIntersectionObserverEffectOptions
  extends OmitFrom<IntersectionObserverInit, 'root'> {
  root?: ValueFactory<Element | undefined | null>;
}
