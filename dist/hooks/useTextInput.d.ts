/// <reference types="react" />
import { ValueFactory } from 'cb-toolset/function';
declare const useTextInput: (initialValue?: ValueFactory<string>) => readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>, ({ target: { value } }: import("cb-toolset/dom").ValueTargetEvent<string>) => void];
export default useTextInput;
