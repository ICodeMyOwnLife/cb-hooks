import { RateLimitFunctionWithOptions } from '../types/common';
declare const createRateLimitValueHook: <TOptions>(rateLimit: RateLimitFunctionWithOptions<TOptions>) => <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, args: TArgs, wait: number, options?: TOptions | undefined) => TReturn | undefined;
export default createRateLimitValueHook;
