declare const useCurryFunction: UseCurryFunction;
export default useCurryFunction;
interface UseCurryFunction {
    <TFirstArg, TRestArgs extends any[], TReturn>(func: (firstArg: TFirstArg, ...restArgs: TRestArgs) => TReturn, thisArg: any, firstArg: TFirstArg): (...args: TRestArgs) => TReturn;
    <TFirstArg, TSecondArg, TRestArgs extends any[], TReturn>(func: (firstArg: TFirstArg, secondArg: TSecondArg, ...restArgs: TRestArgs) => TReturn, thisArg: any, firstArg: TFirstArg, secondArg: TSecondArg): (...args: TRestArgs) => TReturn;
    <TFirstArg, TSecondArg, TThirdArg, TRestArgs extends any[], TReturn>(func: (firstArg: TFirstArg, secondArg: TSecondArg, thirdArg: TThirdArg, ...restArgs: TRestArgs) => TReturn, thisArg: any, firstArg: TFirstArg, secondArg: TSecondArg, thirdArg: TThirdArg): (...args: TRestArgs) => TReturn;
    <TFirstArg, TSecondArg, TThirdArg, TForthArg, TRestArgs extends any[], TReturn>(func: (firstArg: TFirstArg, secondArg: TSecondArg, thirdArg: TThirdArg, forthArg: TForthArg, ...restArgs: TRestArgs) => TReturn, thisArg: any, firstArg: TFirstArg, secondArg: TSecondArg, thirdArg: TThirdArg, forthArg: TForthArg): (...args: TRestArgs) => TReturn;
}
