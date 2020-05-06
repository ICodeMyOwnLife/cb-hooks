import { sample } from 'cb-toolset/function';
import createRateLimitHook from '../creators/createRateLimitHook';

const useSample = createRateLimitHook(sample);

export default useSample;
