import createRateLimitHook from '../creators/createRateLimitHook';
import debounce from '../utils/rateLimit/debounce';

const useDebounce = createRateLimitHook(debounce);

export default useDebounce;
