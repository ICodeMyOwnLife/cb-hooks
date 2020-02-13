/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useUpdateEffect.ts
 * https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useDidUpdate.js
 */

import { EffectCallback, DependencyList, useRef, useEffect } from 'react';

const useDidUpdate = (callback: EffectCallback, deps?: DependencyList) => {
  const didMountRef = useRef(false);

  useEffect(
    didMountRef.current
      ? callback
      : () => {
          didMountRef.current = true;
        },
    deps,
  );
};

export default useDidUpdate;
