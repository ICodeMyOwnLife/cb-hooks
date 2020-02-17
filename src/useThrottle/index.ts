import createRateLimitHook from '../creators/createRateLimitHook';
import {
  RateLimitFunctionWithOptions,
  CancellableRateLimitedFunction,
} from '../types/common';

const throttle: RateLimitFunctionWithOptions<ThrottleOptions> = <
  TArgs extends any[],
  TReturn
>(
  func: (...args: TArgs) => TReturn,
  wait: number,
  { leading, trailing }: ThrottleOptions = { leading: true, trailing: true },
) => {
  let lastArgs: TArgs | null = null;
  let timeoutId: NodeJS.Timeout | null = null;
  let result: TReturn | undefined;

  const ratedFunction: CancellableRateLimitedFunction<TArgs, TReturn> = (
    ...args
  ) => {
    lastArgs = args;

    if (timeoutId === null) {
      if (leading) {
        result = func(...lastArgs);
        lastArgs = null;
      }

      timeoutId = setTimeout(() => {
        if (trailing && lastArgs !== null) {
          result = func(...lastArgs);
          lastArgs = null;
        }
        timeoutId = null;
      }, wait);
    }

    return result;
  };

  ratedFunction.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    lastArgs = null;
    timeoutId = null;
  };

  return ratedFunction;
};

const useThrottle = createRateLimitHook(throttle);

export default useThrottle;

export interface ThrottleOptions {
  leading?: boolean;
  trailing?: boolean;
}
