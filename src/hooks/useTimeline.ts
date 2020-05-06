/**
 * References:
 * https://github.com/kripod/react-hooks/blob/master/packages/state-hooks/src/useTimeline.ts
 */

import { useRef, useEffect } from 'react';

const defaultPredicate = () => true;

const useTimeline = <TValue>(
  value: TValue,
  revert = true,
  predicate: (value: TValue) => boolean = defaultPredicate,
) => {
  const accumulateRef = useRef<TValue[]>([]);

  useEffect(() => {
    if (predicate(value)) {
      accumulateRef.current = revert
        ? [value, ...accumulateRef.current]
        : [...accumulateRef.current, value];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return accumulateRef.current;
};

export default useTimeline;
