/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useAsyncFn.ts
 * https://github.com/adambrgmn/hooks/blob/master/src/use-promise/index.ts
 */

import { DependencyList, useState, useCallback } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useIsMounted from './useIsMounted';
import useCurrent from './useCurrent';
import { PENDING_STATE, LOADING_STATE } from '../constants/common';
import { AsyncState } from '../types/common';

const usePromiseCallback = <TArgs extends any[], TResult, TError = unknown>(
  promiseFactory: (
    ...args: TArgs
  ) => Promise<TResult> | false | undefined | null,
  deps: DependencyList = [],
  initialState: ValueFactory<AsyncState<TResult, TError>> = PENDING_STATE,
) => {
  const isMounted = useIsMounted();
  const [state, setState] = useState(initialState);
  const currentPromise = useCurrent<
    Promise<TResult> | false | undefined | null
  >();

  const callback = useCallback(
    (...args: TArgs) => {
      const promise = promiseFactory(...args);
      currentPromise.set(promise);

      if (!promise) {
        setState(PENDING_STATE);
        return;
      }

      setState(LOADING_STATE);

      promise
        .then(result => {
          if (currentPromise.is(promise) && isMounted()) {
            setState({ loading: false, result });
          }
        })
        .catch(error => {
          if (currentPromise.is(promise) && isMounted()) {
            setState({ loading: false, error });
          }
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );

  return [state, callback] as const;
};

export default usePromiseCallback;
