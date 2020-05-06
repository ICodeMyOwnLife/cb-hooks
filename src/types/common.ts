export type AsyncState<TResult = unknown, TError = unknown> =
  | { loading: boolean; result?: undefined; error?: undefined }
  | { loading: false; result: TResult; error?: undefined }
  | { loading: false; result?: undefined; error: TError };
