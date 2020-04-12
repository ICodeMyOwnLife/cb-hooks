import { History } from 'history';
declare const createHistoryListenHook: (history: History<History.PoorMansUnknown>) => (listener: History.LocationListener<unknown>) => void;
export default createHistoryListenHook;
