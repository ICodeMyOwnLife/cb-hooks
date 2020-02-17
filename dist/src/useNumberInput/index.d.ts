/// <reference types="react" />
declare const useNumberInput: (initialValue?: import("../types/common").ValueOrFunction<number>) => readonly [number, import("react").Dispatch<import("react").SetStateAction<number>>, ({ target: { value } }: import("../types/common").ValueTargetEvent<string>) => void];
export default useNumberInput;
