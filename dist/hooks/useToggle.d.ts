/// <reference types="react" />
import { ValueFactory } from 'cb-toolset/function';
declare const useToggle: (initialValue?: ValueFactory<boolean>) => readonly [boolean, () => void, () => void, () => void, import("react").Dispatch<import("react").SetStateAction<boolean>>];
export default useToggle;
