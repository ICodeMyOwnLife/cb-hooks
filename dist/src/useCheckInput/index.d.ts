/// <reference types="react" />
declare const useCheckInput: (initialValue?: import("../types/common").ValueOrFunction<boolean>) => readonly [boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>, ({ target: { checked } }: import("../types/common").CheckedTargetEvent) => void];
export default useCheckInput;
