/**
 * References:
 * https://github.com/ReactTraining/history/blob/master/docs/GettingStarted.md
 */

import { useEffect } from 'react';
import { History, LocationListener } from 'history';
import useUpdatedRef from '../hooks/useUpdatedRef';

const createHistoryListenHook = (history: History) => (
  listener: LocationListener<unknown>,
) => {
  const listenerRef = useUpdatedRef(listener);

  useEffect(() => {
    const unlisten = history.listen((location, action) =>
      listenerRef.current?.(location, action),
    );
    return () => unlisten();
  }, [listenerRef]);
};

export default createHistoryListenHook;
