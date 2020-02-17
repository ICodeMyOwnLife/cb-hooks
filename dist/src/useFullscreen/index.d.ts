import { MutableRefObject } from 'react';
declare const useFullscreen: (elementRef: MutableRefObject<Element>) => readonly [boolean, (show?: boolean | undefined, options?: FullscreenOptions | undefined) => void];
export default useFullscreen;
