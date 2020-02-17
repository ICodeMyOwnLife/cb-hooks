import createRateLimitHook from '../creators/createRateLimitHook';
import {
  RateLimitFunction,
  CancellableRateLimitedFunction,
} from '../types/common';

const audit: RateLimitFunction = <TArgs extends any[], TReturn>(
  func: (...args: TArgs) => TReturn,
  wait: number,
) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastArgs: TArgs | null = null;
  let result: TReturn | undefined;

  const ratedFunction: CancellableRateLimitedFunction<TArgs, TReturn> = (
    ...args
  ) => {
    lastArgs = args;
    if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        if (lastArgs !== null) {
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
    timeoutId = null;
    lastArgs = null;
  };

  return ratedFunction;
};

const useAudit = createRateLimitHook(audit);

export default useAudit;
