import { audit } from 'cb-toolset/function';
import createRateLimitHook from '../creators/createRateLimitHook';

const useAudit = createRateLimitHook(audit);

export default useAudit;
