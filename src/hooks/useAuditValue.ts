import createRateLimitValueHook from '../creators/createRateLimitValueHook';
import audit from '../utils/rateLimit/audit';

const useAuditValue = createRateLimitValueHook(audit);

export default useAuditValue;
