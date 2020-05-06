/**
 * References:
 * https://github.com/mauricedb/use-abortable-fetch
 * https://medium.com/better-programming/learn-to-create-your-own-usefetch-react-hook-9cc31b038e53
 * https://github.com/ilyalesik/react-fetch-hook
 * https://github.com/raghav-grover/use-fetcher
 * https://github.com/alex-cory/use-http/blob/1d42e236846f7dc2ae13f6ad2861bb986252563a/src/useFetch.ts
 * https://github.com/franlol/useFetch
 */

import { useRef, DependencyList } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { OmitFrom } from 'cb-toolset/object';
import usePromise from '../hooks/usePromise';
import FetchError from '../utils/FetchError';
import { AsyncState } from '../types/common';

const createFetchHook = <TResult>(
  fetchFn: (input: RequestInfo, init?: RequestInit) => Promise<Response>,
  getResult: (res: Response) => Promise<TResult>,
) => <TAsyncResult extends TResult = TResult>(
  input: RequestInfo,
  init?: OmitFrom<RequestInit, 'signal'>,
  deps?: DependencyList,
  initialState?: ValueFactory<AsyncState<TAsyncResult, FetchError>>,
) => {
  const abortControllerRef = useRef<AbortController>();

  return usePromise<TAsyncResult, FetchError>(
    async () => {
      const abortController = new AbortController();
      abortControllerRef.current = abortController;
      const res = await fetchFn(input, {
        ...init,
        signal: abortController.signal,
      });
      if (res.ok) {
        const result = (await getResult(res)) as TAsyncResult;
        return result;
      }
      throw new FetchError(res.statusText, res.status);
    },
    deps,
    initialState,
    () => abortControllerRef.current?.abort(),
  );
};

export default createFetchHook;
