import { useState, MutableRefObject } from 'react';
import useToggleFullscreen from '../useToggleFullscreen';

const useFullscreen = (elementRef: MutableRefObject<Element>) => {
  const [fullscreen, setFullscreen] = useState(false);
  const isFullscreen = () =>
    !!document.fullscreenElement &&
    document.fullscreenElement === elementRef.current;
  const handleChange = () => setFullscreen(isFullscreen());
  const toggleFullscreen = useToggleFullscreen(elementRef, handleChange);
  return [fullscreen, toggleFullscreen] as const;
};

export default useFullscreen;
