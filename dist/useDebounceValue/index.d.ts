declare const useDebounceValue: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: import("../utils/rateLimit/debounce").DebounceOptions | undefined) => TReturn | undefined;
export default useDebounceValue;
