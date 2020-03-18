import createRateLimitValueHook from '../creators/createRateLimitValueHook';
import sample from '../utils/rateLimit/sample';

const useSampleValue = createRateLimitValueHook(sample);

export default useSampleValue;
