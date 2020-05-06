/// <reference types="react" />
import { ValueFactory } from 'cb-toolset/function';
declare const useNumberInput: (initialValue?: ValueFactory<number>) => readonly [number, import("react").Dispatch<import("react").SetStateAction<number>>, ({ target: { value } }: import("cb-toolset/dom").ValueTargetEvent<string>) => void];
export default useNumberInput;
