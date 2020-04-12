declare const useDebounce: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: import("../utils/rateLimit/debounce").DebounceOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default useDebounce;
