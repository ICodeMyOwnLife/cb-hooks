declare const useThrottle: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: import("cb-toolset/function").ThrottleOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default useThrottle;
