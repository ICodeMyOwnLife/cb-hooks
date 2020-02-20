import { RefObject } from 'react';
declare const useFullscreen: (elementRef: RefObject<Element>) => readonly [boolean, (show?: boolean | undefined) => void, () => void, () => void];
export default useFullscreen;
