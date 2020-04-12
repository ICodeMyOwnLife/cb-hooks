/**
 * References:
 * https://github.com/dispix/react-pirate/blob/master/src/useInterval.js
 * https://github.com/donavon/use-interval
 */

import { DependencyList, useEffect } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useInterval = (
  callback: VoidFunction | undefined | null,
  {
    period,
    leading,
    running,
    deps = [period, leading, running],
  }: UseIntervalSettings,
) => {
  const callbackRef = useUpdatedRef(callback);

  useEffect(() => {
    let handle: NodeJS.Timeout;

    if (running) {
      // eslint-disable-next-line no-unused-expressions
      if (leading) callbackRef.current?.();
      handle = setInterval(() => callbackRef.current?.(), period);
    }

    return () => {
      if (handle) clearInterval(handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useInterval;

export interface UseIntervalSettings {
  deps?: DependencyList;
  leading?: boolean;
  period: number;
  running?: boolean;
}
