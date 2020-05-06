import { debounce } from 'cb-toolset/function';
import createRateLimitHook from '../creators/createRateLimitHook';

const useDebounce = createRateLimitHook(debounce);

export default useDebounce;
