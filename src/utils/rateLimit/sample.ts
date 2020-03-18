import {
  RateLimitFunction,
  CancellableRateLimitedFunction,
} from '../../types/common';

const sample: RateLimitFunction = <TArgs extends any[], TReturn>(
  func: (...args: TArgs) => TReturn,
  wait: number,
) => {
  let lastArgs: TArgs | null = null;
  let result: TReturn | undefined;

  const intervalId = setInterval(() => {
    if (lastArgs) {
      result = func(...lastArgs);
      lastArgs = null;
    }
  }, wait);

  const ratedFunction: CancellableRateLimitedFunction<TArgs, TReturn> = (
    ...args
  ) => {
    lastArgs = args;
    return result;
  };

  ratedFunction.cancel = () => {
    clearInterval(intervalId);
    lastArgs = null;
  };

  return ratedFunction;
};

export default sample;
