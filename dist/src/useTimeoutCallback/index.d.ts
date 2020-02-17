declare const useTimeoutCallback: (callback: VoidFunction, ms: number) => () => Promise<void>;
export default useTimeoutCallback;
