/// <reference types="react" />
declare const useTextInput: (initialValue?: import("../types/common").ValueFactory<string>) => readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>, ({ target: { value } }: import("../types/common").ValueTargetEvent<string>) => void];
export default useTextInput;
