/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useBeforeUnload.ts
 */

import useEvent from '../useEvent';

const useWindowBeforeUnload = (message?: string, enabled = true) =>
  useEvent(
    window,
    'beforeunload',
    e => {
      e.preventDefault();
      if (message) e.returnValue = message;
      return message;
    },
    { enabled },
  );

export default useWindowBeforeUnload;
