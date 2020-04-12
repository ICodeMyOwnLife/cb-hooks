import createRateLimitValueHook from '../creators/createRateLimitValueHook';
import debounce from '../utils/rateLimit/debounce';

const useDebounceValue = createRateLimitValueHook(debounce);

export default useDebounceValue;
