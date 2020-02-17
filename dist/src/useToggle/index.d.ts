declare const useToggle: (initialValue?: import("../types/common").ValueOrFunction<boolean>) => readonly [boolean, (nextValue?: boolean | undefined) => void, () => void, () => void];
export default useToggle;
