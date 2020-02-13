import { useCallback } from 'react';

const useCurryFunction: UseCurryFunction = (
  fn: (...args: any[]) => any,
  thisArg: any = null,
  ...args: any[]
) =>
  useCallback(
    (...restArgs: any[]) => fn?.apply(thisArg, [...args, ...restArgs]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn, ...args],
  );

export default useCurryFunction;

interface UseCurryFunction {
  <TFirstArg, TRestArgs extends any[], TReturn>(
    func: (firstArg: TFirstArg, ...restArgs: TRestArgs) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
  ): (...args: TRestArgs) => TReturn;
  <TFirstArg, TSecondArg, TRestArgs extends any[], TReturn>(
    func: (
      firstArg: TFirstArg,
      secondArg: TSecondArg,
      ...restArgs: TRestArgs
    ) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
    secondArg: TSecondArg,
  ): (...args: TRestArgs) => TReturn;
  <TFirstArg, TSecondArg, TThirdArg, TRestArgs extends any[], TReturn>(
    func: (
      firstArg: TFirstArg,
      secondArg: TSecondArg,
      thirdArg: TThirdArg,
      ...restArgs: TRestArgs
    ) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
    secondArg: TSecondArg,
    thirdArg: TThirdArg,
  ): (...args: TRestArgs) => TReturn;
  <
    TFirstArg,
    TSecondArg,
    TThirdArg,
    TForthArg,
    TRestArgs extends any[],
    TReturn
  >(
    func: (
      firstArg: TFirstArg,
      secondArg: TSecondArg,
      thirdArg: TThirdArg,
      forthArg: TForthArg,
      ...restArgs: TRestArgs
    ) => TReturn,
    thisArg: any,
    firstArg: TFirstArg,
    secondArg: TSecondArg,
    thirdArg: TThirdArg,
    forthArg: TForthArg,
  ): (...args: TRestArgs) => TReturn;
}
