declare const useDebounce: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: import("cb-toolset/function").DebounceOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default useDebounce;
