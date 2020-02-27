import { DependencyList } from 'react';
import { AsyncState } from '../types/common';
declare const usePromiseCallback: <TArgs extends any[], TResult, TError = unknown>(promiseFactory: (...args: TArgs) => false | Promise<TResult> | null | undefined, deps?: DependencyList, initialState?: import("../types/common").ValueOrFunction<AsyncState<TResult, TError>>) => readonly [AsyncState<TResult, TError>, (...args: TArgs) => void];
export default usePromiseCallback;
