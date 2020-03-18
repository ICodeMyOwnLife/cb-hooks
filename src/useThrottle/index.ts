import createRateLimitHook from '../creators/createRateLimitHook';
import throttle from '../utils/rateLimit/throttle';

const useThrottle = createRateLimitHook(throttle);

export default useThrottle;
