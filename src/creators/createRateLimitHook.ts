/**
 * References:
 * https://github.com/imbhargav5/rooks/blob/dev/packages/debounce/src/useDebounce.ts
 */

import { useRef, useEffect, useCallback } from 'react';
import { RateLimitFunctionWithOptions } from '../types/common';
import useUpdatedRef from '../useUpdatedRef';
import { persistEvent } from '../utils/common';

const createRateLimitHook = <TOptions>(
  rateLimit: RateLimitFunctionWithOptions<TOptions>,
) => <TArgs extends any[], TReturn>(
  func: (...args: TArgs) => TReturn,
  wait: number,
  options?: TOptions,
) => {
  const funcRef = useUpdatedRef(func);
  const rateLimitedFuncRef = useRef(rateLimit(func, wait, options));

  useEffect(() => {
    rateLimitedFuncRef.current = rateLimit(
      (...args) => funcRef.current(...args),
      wait,
      options,
    );

    return () => rateLimitedFuncRef.current?.cancel();
  }, [funcRef, options, wait]);

  return useCallback<(...args: TArgs) => TReturn | undefined>((...args) => {
    args.forEach(persistEvent);
    return rateLimitedFuncRef.current(...args);
  }, []);
};

export default createRateLimitHook;
