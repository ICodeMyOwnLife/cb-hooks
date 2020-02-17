declare const useCurrent: <TValue>(initialValue?: TValue | (() => TValue) | undefined) => {
    set: (value: TValue) => void;
    get: () => TValue | (() => TValue) | undefined;
    is: (value: TValue) => boolean;
};
export default useCurrent;
