/**
 * References:
 * https://github.com/ReactTraining/history/blob/master/docs/Blocking.md
 */
import { useEffect } from 'react';
import { History, TransitionPromptHook } from 'history';
import useUpdatedRef from '../hooks/useUpdatedRef';

const createHistoryBlockHook = (history: History) => (
  handler: TransitionPromptHook<unknown>,
) => {
  const handlerRef = useUpdatedRef(handler);

  useEffect(() => {
    const unblock = history.block((location, action) =>
      handlerRef.current?.(location, action),
    );
    return () => unblock();
  }, [handlerRef]);
};

export default createHistoryBlockHook;
