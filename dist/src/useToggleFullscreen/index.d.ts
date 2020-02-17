import { RefObject } from 'react';
declare const useToggleFullscreen: (elementRef: RefObject<Element>, onChange?: EventListener | null, onError?: EventListener | null) => (show?: boolean | undefined, options?: FullscreenOptions | undefined) => void;
export default useToggleFullscreen;
