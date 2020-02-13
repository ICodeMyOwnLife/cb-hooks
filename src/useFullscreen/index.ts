import { useRef, useState } from 'react';
import useToggleFullscreen from '../useToggleFullscreen';

const useFullscreen = <TElement extends Element>() => {
  const [fullscreen, setFullscreen] = useState(false);
  const elementRef = useRef<TElement>(null);
  const isFullscreen = () =>
    !!document.fullscreenElement &&
    document.fullscreenElement === elementRef.current;
  const handleChange = () => setFullscreen(isFullscreen());
  const toggleFullscreen = useToggleFullscreen(elementRef, handleChange);
  return [elementRef, fullscreen, toggleFullscreen] as const;
};

export default useFullscreen;
