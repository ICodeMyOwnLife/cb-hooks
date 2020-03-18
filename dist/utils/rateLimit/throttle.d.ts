import { RateLimitFunctionWithOptions } from '../../types/common';
declare const throttle: RateLimitFunctionWithOptions<ThrottleOptions>;
export default throttle;
export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}
