/**
 * References:
 * https://github.com/jacob-ebey/react-hook-utils/blob/master/src/usePromise.js
 * https://github.com/aiven715/promise-hook/blob/master/src/index.js
 * https://github.com/streamich/react-use/blob/master/src/useAsyncFn.ts
 * https://github.com/adambrgmn/hooks/blob/master/src/use-promise/index.ts
 */

import { DependencyList, useState, useEffect } from 'react';
import { PENDING_STATE, LOADING_STATE } from '../constants/common';
import { InitialState, AsyncState } from '../types/common';

const usePromise = <TResult, TError = unknown>(
  promiseFactory: () => Promise<TResult> | false | undefined | null,
  deps: DependencyList = [],
  initialState: InitialState<AsyncState<TResult, TError>> = PENDING_STATE,
) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let isCancelled = false;
    const promise = promiseFactory();

    if (!promise) {
      setState(PENDING_STATE);
      return undefined;
    }

    setState(LOADING_STATE);

    promise
      .then(result => {
        if (!isCancelled) setState({ loading: false, result });
      })
      .catch(error => {
        if (!isCancelled) setState({ loading: false, error });
      });

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};

export default usePromise;

export type PromiseState<TResult = unknown, TError = unknown> =
  | {
      loading: boolean;
      result?: undefined;
      error?: undefined;
    }
  | {
      loading: false;
      result: TResult;
      error?: undefined;
    }
  | {
      loading: false;
      result?: undefined;
      error: TError;
    };
