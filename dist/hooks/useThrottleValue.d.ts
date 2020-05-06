declare const useThrottleValue: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: import("cb-toolset/function").ThrottleOptions | undefined) => TReturn | undefined;
export default useThrottleValue;
