import { History } from 'history';
declare const createBeforeLeaveHook: (history: History<History.PoorMansUnknown>) => (enabled?: boolean, message?: string | undefined) => void;
export default createBeforeLeaveHook;
