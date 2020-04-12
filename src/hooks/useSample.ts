import createRateLimitHook from '../creators/createRateLimitHook';
import sample from '../utils/rateLimit/sample';

const useSample = createRateLimitHook(sample);

export default useSample;
