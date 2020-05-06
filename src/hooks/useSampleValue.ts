import { sample } from 'cb-toolset/function';
import createRateLimitValueHook from '../creators/createRateLimitValueHook';

const useSampleValue = createRateLimitValueHook(sample);

export default useSampleValue;
