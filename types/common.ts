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
