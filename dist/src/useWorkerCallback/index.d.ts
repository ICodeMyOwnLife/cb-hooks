import { AsyncState } from '../types/common';
declare const useWorkerCallback: <TMessage = unknown, TResult = unknown, TError = unknown>(workerUrl: string, options?: WorkerOptions | undefined, initialState?: import("../types/common").ValueOrFunction<AsyncState<TResult, TError>>) => ({
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
} | ((message: TMessage, opts?: PostMessageOptions | undefined) => void))[];
export default useWorkerCallback;
