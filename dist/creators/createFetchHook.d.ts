import { DependencyList } from 'react';
import FetchError from '../utils/FetchError';
import { AsyncState } from '../types/common';
declare const createFetchHook: <TResult>(fetchFn: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>, getResult: (res: Response) => Promise<TResult>) => <TAsyncResult extends TResult = TResult>(input: RequestInfo, init?: Pick<RequestInit, "body" | "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "method" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "window"> | undefined, deps?: DependencyList | undefined, initialState?: {
    loading: boolean;
    result?: undefined;
    error?: undefined;
} | {
    loading: false;
    result: TAsyncResult;
    error?: undefined;
} | {
    loading: false;
    result?: undefined;
    error: FetchError;
} | (() => AsyncState<TAsyncResult, FetchError>) | undefined) => AsyncState<TAsyncResult, FetchError>;
export default createFetchHook;
