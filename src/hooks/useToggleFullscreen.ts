/**
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide
 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
 */

import { RefObject, useCallback } from 'react';
import useEvent from './useEvent';

const useToggleFullscreen = (
  elementRef: RefObject<Element>,
  onChange: EventListener | null = null,
  onError: EventListener | null = null,
) => {
  const toggleFullscreen = useCallback(
    (show?: boolean) => {
      if (
        document.fullscreenElement &&
        (show === false || show === undefined)
      ) {
        document.exitFullscreen();
      }

      if (
        !document.fullscreenElement &&
        (show === true || show === undefined)
      ) {
        // eslint-disable-next-line no-unused-expressions
        elementRef.current?.requestFullscreen?.();
      }
    },
    [elementRef],
  );

  useEvent(document, 'fullscreenchange', onChange);
  useEvent(document, 'fullscreenerror', onError);

  return toggleFullscreen;
};

export default useToggleFullscreen;
