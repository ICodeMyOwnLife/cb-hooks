import { AsyncState } from '../types/common';
declare const useWorkerCallback: <TMessage = unknown, TResult = unknown, TError = unknown>(workerUrl: string, options?: WorkerOptions | undefined, initialState?: import("../types/common").ValueOrFunction<AsyncState<TResult, TError>>) => readonly [AsyncState<TResult, TError>, (message: TMessage, opts?: PostMessageOptions | undefined) => void];
export default useWorkerCallback;
