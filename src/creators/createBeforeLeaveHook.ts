import { History } from 'history';
import useWindowBeforeUnload from '../hooks/useWindowBeforeUnload';
import createHistoryBlockHook from './createHistoryBlockHook';

const createBeforeLeaveHook = (history: History) => (
  enabled = true,
  message?: string,
) => {
  const useHistoryBlock = createHistoryBlockHook(history);
  useHistoryBlock(() => (enabled ? message || false : undefined));
  useWindowBeforeUnload(message, enabled);
};

export default createBeforeLeaveHook;
