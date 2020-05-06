import { throttle } from 'cb-toolset/function';
import createRateLimitValueHook from '../creators/createRateLimitValueHook';

const useThrottleValue = createRateLimitValueHook(throttle);

export default useThrottleValue;
