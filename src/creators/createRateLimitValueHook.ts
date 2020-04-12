import { useState, useRef, useEffect } from 'react';
import useUpdatedRef from '../hooks/useUpdatedRef';
import { RateLimitFunctionWithOptions } from '../types/common';

const createRateLimitValueHook = <TOptions>(
  rateLimit: RateLimitFunctionWithOptions<TOptions>,
) => <TArgs extends any[], TReturn>(
  func: (...args: TArgs) => TReturn,
  args: TArgs,
  wait: number,
  options?: TOptions,
) => {
  const [value, setValue] = useState<TReturn>();
  const funcRef = useUpdatedRef(func);
  const rateLimitedFuncRef = useRef(rateLimit(func, wait, options));

  useEffect(() => {
    rateLimitedFuncRef.current = rateLimit(
      (...currentArgs) => {
        const result = funcRef.current(...currentArgs);
        setValue(result);
        return result;
      },
      wait,
      options,
    );

    return () => rateLimitedFuncRef.current?.cancel();
  }, [funcRef, options, wait]);

  useEffect(() => {
    rateLimitedFuncRef.current(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args);

  return value;
};

export default createRateLimitValueHook;
