import { throttle } from 'cb-toolset/function';
import createRateLimitHook from '../creators/createRateLimitHook';

const useThrottle = createRateLimitHook(throttle);

export default useThrottle;
