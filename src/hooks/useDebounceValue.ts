import { debounce } from 'cb-toolset/function';
import createRateLimitValueHook from '../creators/createRateLimitValueHook';

const useDebounceValue = createRateLimitValueHook(debounce);

export default useDebounceValue;
