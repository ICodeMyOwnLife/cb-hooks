declare const useDebounce: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: DebounceOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default useDebounce;
export interface DebounceOptions {
    leading?: boolean;
    trailing?: boolean;
}
