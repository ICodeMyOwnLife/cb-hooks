declare const useCurrent: <TValue>(initialValue?: TValue | import("cb-toolset/function").FunctionReturns<TValue> | undefined) => {
    readonly set: (value: TValue) => void;
    readonly get: () => TValue | import("cb-toolset/function").FunctionReturns<TValue> | undefined;
    readonly is: (value: TValue) => boolean;
};
export default useCurrent;
