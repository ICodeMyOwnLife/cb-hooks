declare const useThrottleValue: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: import("../utils/rateLimit/throttle").ThrottleOptions | undefined) => TReturn | undefined;
export default useThrottleValue;
