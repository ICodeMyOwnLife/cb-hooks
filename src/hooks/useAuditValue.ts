import { audit } from 'cb-toolset/function';
import createRateLimitValueHook from '../creators/createRateLimitValueHook';

const useAuditValue = createRateLimitValueHook(audit);

export default useAuditValue;
