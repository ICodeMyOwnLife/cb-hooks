import { History } from 'history';
declare const createHistoryBlockHook: (history: History<History.PoorMansUnknown>) => (handler: History.TransitionPromptHook<unknown>) => void;
export default createHistoryBlockHook;
