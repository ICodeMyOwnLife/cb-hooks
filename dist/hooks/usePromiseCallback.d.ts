import { DependencyList } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { AsyncState } from '../types/common';
declare const usePromiseCallback: <TArgs extends any[], TResult, TError = unknown>(promiseFactory: (...args: TArgs) => false | Promise<TResult> | null | undefined, deps?: DependencyList, initialState?: ValueFactory<AsyncState<TResult, TError>>) => readonly [AsyncState<TResult, TError>, (...args: TArgs) => void];
export default usePromiseCallback;
