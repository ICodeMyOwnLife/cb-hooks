import { useRef, useState, useCallback } from 'react';
import useWillUnmount from '../useWillUnmount';
import { PENDING_STATE, LOADING_STATE } from '../constants/common';
import { InitialState, AsyncState } from '../types/common';

const useWorkerCallback = <
  TMessage = unknown,
  TResult = unknown,
  TError = unknown
>(
  workerUrl: string,
  options?: WorkerOptions,
  initialState: InitialState<AsyncState<TResult, TError>> = PENDING_STATE,
) => {
  const [state, setState] = useState(initialState);
  const workerRef = useRef<Worker>();

  const callback = useCallback(
    (message: TMessage, opts?: PostMessageOptions) => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }

      const worker = new Worker(workerUrl, options);
      worker.addEventListener('message', e =>
        setState({ loading: false, result: e.data }),
      );
      worker.addEventListener('error', e =>
        setState({ loading: false, error: e.error }),
      );
      worker.postMessage(message, opts);
      setState(LOADING_STATE);
      workerRef.current = worker;
    },
    [options, workerUrl],
  );

  useWillUnmount(() => {
    if (workerRef.current) workerRef.current.terminate();
  });

  return [state, callback];
};

export default useWorkerCallback;
