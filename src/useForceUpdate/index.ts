/**
 * References:
 * https://github.com/CharlesStover/use-force-update
 * https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
 */

import useTriggerUpdate from '../useTriggerUpdate';

const useForceUpdate = () => useTriggerUpdate()[1];

export default useForceUpdate;
