declare const useDebounceValue: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: import("cb-toolset/function").DebounceOptions | undefined) => TReturn | undefined;
export default useDebounceValue;
