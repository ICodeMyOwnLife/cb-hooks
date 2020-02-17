declare const useAudit: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: unknown) => (...args: TArgs) => TReturn | undefined;
export default useAudit;
