export interface ValueTargetEvent<TValue = any> {
  target: { value: TValue };
}

export interface CheckedTargetEvent {
  target: { checked: boolean };
}

export interface FilesTargetEvent {
  target: { files: FileList | null };
}

export interface EventTarget<TValue = string> {
  value: TValue;
  checked: boolean;
}

export interface TargetEvent<TTarget> {
  target: TTarget;
}

export type ParameterType<
  TFunction extends (...args: any[]) => any
> = TFunction extends (...args: infer TParams) => any ? TParams : never;

export type ReturnTypeOfReturnType<
  TFunction extends (...args: any[]) => (...args: any[]) => any
> = TFunction extends (...args: any[]) => (...args: any) => infer TReturn
  ? TReturn
  : never;

export type ValueOrFunction<TValue> = TValue | (() => TValue);

export type InitialState<TValue> = ValueOrFunction<TValue>;

export type AsyncState<TResult = unknown, TError = unknown> =
  | { loading: boolean; result?: undefined; error?: undefined }
  | { loading: false; result: TResult; error?: undefined }
  | { loading: false; result?: undefined; error: TError };

export interface Cancellable {
  cancel: VoidFunction;
}

export interface CancellableRateLimitedFunction<TArgs extends any[], TReturn>
  extends Cancellable {
  (...args: TArgs): TReturn | undefined;
}

export interface RateLimitFunction {
  <TArgs extends any[], TReturn>(
    func: (...args: TArgs) => TReturn,
    wait: number,
  ): CancellableRateLimitedFunction<TArgs, TReturn>;
}

export interface RateLimitFunctionWithOptions<TOptions> {
  <TArgs extends any[], TReturn>(
    func: (...args: TArgs) => TReturn,
    wait: number,
    options?: TOptions,
  ): CancellableRateLimitedFunction<TArgs, TReturn>;
}

export type OmitFrom<TObject, TKeys extends keyof TObject> = Omit<
  TObject,
  TKeys
>;

export type PickFrom<TObject, TKeys extends keyof TObject> = Pick<
  TObject,
  TKeys
>;
