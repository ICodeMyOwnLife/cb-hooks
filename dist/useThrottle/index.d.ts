declare const useThrottle: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: ThrottleOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default useThrottle;
export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}
