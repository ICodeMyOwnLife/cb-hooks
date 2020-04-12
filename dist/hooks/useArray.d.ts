declare const useArray: <TValue>(initialValue?: readonly TValue[]) => readonly [readonly TValue[], (item: TValue) => void, (item: TValue) => void, (predicate: (value: TValue, index: number) => boolean) => void];
export default useArray;
