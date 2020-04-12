declare const useCurrent: <TValue>(initialValue?: TValue | (() => TValue) | undefined) => {
    readonly set: (value: TValue) => void;
    readonly get: () => TValue | (() => TValue) | undefined;
    readonly is: (value: TValue) => boolean;
};
export default useCurrent;
