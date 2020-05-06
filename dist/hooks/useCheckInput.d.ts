/// <reference types="react" />
import { ValueFactory } from 'cb-toolset/function';
declare const useCheckInput: (initialValue?: ValueFactory<boolean>) => readonly [boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>, ({ target: { checked } }: import("cb-toolset/dom").CheckedTargetEvent) => void];
export default useCheckInput;
