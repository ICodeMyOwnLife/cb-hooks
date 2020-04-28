/// <reference types="react" />
declare const useToggle: (initialValue?: import("../types/common").ValueFactory<boolean>) => readonly [boolean, () => void, () => void, () => void, import("react").Dispatch<import("react").SetStateAction<boolean>>];
export default useToggle;
