import { DependencyList } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { AsyncState } from '../types/common';
declare const usePromise: <TResult, TError = unknown>(promiseFactory: () => false | Promise<TResult> | null | undefined, deps?: DependencyList, initialState?: ValueFactory<AsyncState<TResult, TError>>, cleanup?: VoidFunction | undefined) => AsyncState<TResult, TError>;
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
