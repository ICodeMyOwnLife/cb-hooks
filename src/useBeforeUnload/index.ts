/**
 * References
 * https://github.com/streamich/react-use/blob/c0574064ca/src/useBeforeUnload.ts
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
 */

import useEvent from '../useEvent';

const useBeforeUnload = (
  enabled: boolean | (() => boolean) = true,
  message = '',
) =>
  useEvent(window, 'beforeunload', e => {
    const isEnabled = typeof enabled === 'function' ? enabled() : enabled;
    if (isEnabled) {
      e.preventDefault();
      e.returnValue = message;
      return message;
    }
    return undefined;
  });

export default useBeforeUnload;
