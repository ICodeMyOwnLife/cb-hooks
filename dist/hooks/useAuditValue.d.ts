declare const useAuditValue: <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: unknown) => TReturn | undefined;
export default useAuditValue;
