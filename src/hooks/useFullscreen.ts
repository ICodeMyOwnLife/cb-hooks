import { useState, RefObject } from 'react';
import useToggleFullscreen from './useToggleFullscreen';
import useCurryFunction from './useCurryFunction';

const useFullscreen = (elementRef: RefObject<Element>) => {
  const [fullscreen, setFullscreen] = useState(false);
  const isFullscreen = () =>
    !!document.fullscreenElement &&
    document.fullscreenElement === elementRef.current;
  const handleChange = () => setFullscreen(isFullscreen());
  const toggleFullscreen = useToggleFullscreen(elementRef, handleChange);
  const enterFullscreen = useCurryFunction(toggleFullscreen, null, true);
  const exitFullscreen = useCurryFunction(toggleFullscreen, null, false);
  return [
    fullscreen,
    toggleFullscreen,
    enterFullscreen,
    exitFullscreen,
  ] as const;
};

export default useFullscreen;
