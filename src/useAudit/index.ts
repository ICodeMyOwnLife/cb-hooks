import createRateLimitHook from '../creators/createRateLimitHook';
import audit from '../utils/rateLimit/audit';

const useAudit = createRateLimitHook(audit);

export default useAudit;
