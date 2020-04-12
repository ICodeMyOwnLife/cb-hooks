/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useUnmount.ts
 * https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useWillUnmount.js
 * https://github.com/imbhargav5/rooks/blob/dev/packages/will-unmount/src/useWillUnmount.ts
 */

import useEffectOnce from './useEffectOnce';

const useWillUnmount = (callback: VoidFunction) =>
  useEffectOnce(() => callback);

export default useWillUnmount;
