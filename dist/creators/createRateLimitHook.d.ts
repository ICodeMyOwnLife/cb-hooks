import { RateLimitFunctionWithOptions } from 'cb-toolset/function';
declare const createRateLimitHook: <TOptions>(rateLimit: RateLimitFunctionWithOptions<TOptions>) => <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn, wait: number, options?: TOptions | undefined) => (...args: TArgs) => TReturn | undefined;
export default createRateLimitHook;
