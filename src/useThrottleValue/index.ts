import createRateLimitValueHook from '../creators/createRateLimitValueHook';
import throttle from '../utils/rateLimit/throttle';

const useThrottleValue = createRateLimitValueHook(throttle);

export default useThrottleValue;
