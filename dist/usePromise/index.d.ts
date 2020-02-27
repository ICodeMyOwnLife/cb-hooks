import { DependencyList } from 'react';
import { AsyncState } from '../types/common';
declare const usePromise: <TResult, TError = unknown>(promiseFactory: () => false | Promise<TResult> | null | undefined, deps?: DependencyList, initialState?: import("../types/common").ValueOrFunction<AsyncState<TResult, TError>>) => AsyncState<TResult, TError>;
export default usePromise;
export declare type PromiseState<TResult = unknown, TError = unknown> = {
    loading: boolean;
    result?: undefined;
    error?: undefined;
} | {
    loading: false;
    result: TResult;
    error?: undefined;
} | {
    loading: false;
    result?: undefined;
    error: TError;
};
